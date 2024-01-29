"use client";

import { cn } from "@/lib/utils";
import { CheckIcon, DownloadCloudIcon } from "lucide-react";
import { useDropzone } from "react-dropzone";

export default function DropzoneComponent({
  className,
  files,
  setFiles,
}: {
  className?: string;
  files: File[];
  setFiles: (files: File[]) => void;
}) {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept: { "application/vnd.ms-excel": [".xls", ".xlsx"] },
      maxFiles: 1,
      onDrop(acceptedFiles) {
        setFiles(acceptedFiles);
      },
    });

  return (
    <form className={` ${files.length !== 0 && "hidden"}`}>
      <div
        {...getRootProps({
          className: cn(
            className,
            `${isDragActive ? "bg-neutral-200" : "bg-white"}`
          ),
        })}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <div className="flex flex-col justify-center items-center gap-y-4">
            <CheckIcon className="w-12 h-12 text-primary" />
            <p>Drop the file here to upload ...</p>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-y-4">
            <DownloadCloudIcon className="w-12 h-12 text-primary" />
            <p>Drag and drop some files here ...</p>
          </div>
        )}
      </div>
    </form>
  );
}
