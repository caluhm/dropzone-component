"use client";

import { Button } from "@/components/ui/button";
import DropzoneComponent from "@/components/ui/dropzone";
import { useState } from "react";

export default function Home() {
  const [files, setFiles] = useState<File[]>([]);

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFiles([]);
  };

  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center">
      <div className="min-w-[600px] flex flex-col justify-center items-center gap-5">
        <h1 className="text-3xl font-semibold">Upload Files</h1>
        <DropzoneComponent
          className="flex justify-center items-center text-center p-16 border-2 border-primary border-dashed rounded-lg w-96 aspect-video cursor-pointer hover:bg-neutral-200 transition-colors ease-in-out duration-150"
          files={files}
          setFiles={setFiles}
        />
        {files.map((file, i) => (
          <div
            key={i}
            className="flex flex-row justify-center items-center gap-3"
          >
            <div className="bg-neutral-200 rounded-md py-2 px-3 text-sm font-medium">
              {file.name} - {(file.size / 1000).toFixed(1)} KB
            </div>
            <Button variant="destructive" size="sm" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        ))}
      </div>
    </main>
  );
}
