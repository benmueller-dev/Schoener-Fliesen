"use client";

import { useState, useCallback, useRef } from "react";
import { Upload, X, Image as ImageIcon, FileText, CheckCircle } from "lucide-react";

interface UploadedFile {
  name: string;
  url: string;
  size: number;
  type: string;
}

interface FileUploadProps {
  onFilesChange: (fileUrls: UploadedFile[]) => void;
  maxFiles?: number;
  maxSizeMB?: number;
}

export function FileUpload({ onFilesChange, maxFiles = 5, maxSizeMB = 10 }: FileUploadProps) {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const uploadToUploadcare = async (file: File): Promise<string> => {
    const publicKey = process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY;

    console.log('🔑 Uploadcare Public Key:', publicKey ? publicKey.substring(0, 10) + '...' : 'NICHT GESETZT!');

    if (!publicKey) {
      throw new Error('NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY ist nicht gesetzt! Bitte in .env.local eintragen.');
    }

    const formData = new FormData();
    formData.append('UPLOADCARE_PUB_KEY', publicKey);
    formData.append('UPLOADCARE_STORE', '1');
    formData.append('file', file);

    console.log('📤 Uploading file to Uploadcare:', file.name, file.size, 'bytes');

    // Use multipart upload endpoint which returns more info
    const response = await fetch('https://upload.uploadcare.com/base/', {
      method: 'POST',
      body: formData,
    });

    console.log('📥 Uploadcare response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Uploadcare error:', errorText);
      throw new Error(`Upload fehlgeschlagen: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('✅ Upload response:', JSON.stringify(data, null, 2));

    if (!data.file) {
      throw new Error('Keine File-ID von Uploadcare erhalten!');
    }

    // Use account-specific CDN base URL or fallback to generic
    const cdnBase = process.env.NEXT_PUBLIC_UPLOADCARE_CDN_BASE || 'https://ucarecdn.com';

    // Remove spaces from filename
    const cleanFilename = file.name.replace(/\s+/g, '');

    // Construct proper CDN URL with account-specific domain
    const fileUrl = `${cdnBase}/${data.file}/${cleanFilename}`;

    console.log('🔗 CDN Base:', cdnBase);
    console.log('✅ File URL:', fileUrl);

    return fileUrl;
  };

  const handleFiles = useCallback(async (newFiles: FileList | null) => {
    if (!newFiles) return;

    setError("");
    setUploading(true);

    const fileArray = Array.from(newFiles);
    const validFiles: File[] = [];

    // Validate files
    for (const file of fileArray) {
      if (files.length + validFiles.length >= maxFiles) {
        setError(`Maximale Anzahl von ${maxFiles} Dateien erreicht`);
        break;
      }

      // Check file size
      if (file.size > maxSizeMB * 1024 * 1024) {
        setError(`${file.name} ist zu groß. Maximale Größe: ${maxSizeMB}MB`);
        continue;
      }

      // Check file type (images and PDFs)
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/heic', 'application/pdf'];
      if (!validTypes.includes(file.type)) {
        setError(`${file.name} hat ein ungültiges Format. Erlaubt: Bilder (JPG, PNG, WebP, HEIC) und PDF`);
        continue;
      }

      validFiles.push(file);
    }

    // Upload files
    const uploadedFiles: UploadedFile[] = [];
    for (const file of validFiles) {
      try {
        const url = await uploadToUploadcare(file);
        uploadedFiles.push({
          name: file.name,
          url,
          size: file.size,
          type: file.type,
        });
      } catch (err) {
        setError(`Fehler beim Hochladen von ${file.name}`);
        console.error('Upload error:', err);
      }
    }

    const updatedFiles = [...files, ...uploadedFiles];
    setFiles(updatedFiles);
    onFilesChange(updatedFiles);
    setUploading(false);
  }, [files, maxFiles, maxSizeMB, onFilesChange]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  }, [handleFiles]);

  const removeFile = useCallback((index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onFilesChange(updatedFiles);
    setError("");
  }, [files, onFilesChange]);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="space-y-4">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !uploading && fileInputRef.current?.click()}
        className={`
          relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer
          transition-all duration-300
          ${uploading ? 'opacity-60 cursor-wait' : ''}
          ${isDragging
            ? 'border-[var(--gold)] bg-[var(--gold)]/5'
            : 'border-white/20 bg-white/5 hover:border-white/30 hover:bg-white/10'
          }
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,.pdf"
          onChange={handleFileInput}
          className="hidden"
          disabled={uploading}
        />

        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center">
            {uploading ? (
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--gold)]"></div>
            ) : (
              <Upload className="w-8 h-8 text-[var(--gold)]" />
            )}
          </div>

          <div>
            <p className="text-white font-medium mb-2">
              {uploading ? 'Dateien werden hochgeladen...' : 'Fotos hochladen'}
            </p>
            <p className="text-sm text-zinc-400 mb-1">
              Laden Sie hier Fotos von Ihrem aktuellen Badezimmer oder Inspirationsbilder hoch
            </p>
            <p className="text-xs text-zinc-500">
              Klicken oder ziehen Sie Dateien hierher (max. {maxFiles} Dateien, je {maxSizeMB}MB)
            </p>
          </div>
        </div>
      </div>

      {error && (
        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      {files.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm text-zinc-400">{files.length} Datei(en) hochgeladen:</p>
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg group hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center shrink-0">
                {file.type.startsWith('image/') ? (
                  <ImageIcon className="w-5 h-5 text-[var(--gold)]" />
                ) : (
                  <FileText className="w-5 h-5 text-[var(--gold)]" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-white text-sm truncate">{file.name}</p>
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                </div>
                <p className="text-xs text-zinc-500">{formatFileSize(file.size)}</p>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(index);
                }}
                className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 transition-colors"
              >
                <X className="w-4 h-4 text-red-400" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

