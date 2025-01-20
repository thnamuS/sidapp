"use client";

import { useState, ChangeEvent, FormEvent } from "react";

export default function AppointmentPage() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const allowedVideoExtensions = [".mp4", ".mkv", ".mov", ".avi"];

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const fileExtension = selectedFile.name.split(".").pop()?.toLowerCase();
      if (
        fileExtension &&
        allowedVideoExtensions.includes(`.${fileExtension}`)
      ) {
        setFile(selectedFile);
        setError(null);
      } else {
        setError("Only video files (.mp4, .mkv, .mov, .avi) are allowed.");
        setFile(null);
      }
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a video file to upload.");
      return;
    }

    setIsUploading(true);
    setError(null);
    setSuccessMessage("");

    try {
      // Mock file upload function (replace with actual upload logic)
      await mockFileUpload(file);

      setSuccessMessage("Video file uploaded successfully!");
      setFile(null); // Clear the file input after submission
    } catch (uploadError) {
      setError("Failed to upload the video file. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveFile = () => {
    setFile(null); // Clear the selected file
    setError(null);
    setSuccessMessage(""); // Clear success message if needed
  };

  // Mock file upload function (replace with actual upload logic)
  const mockFileUpload = (file: File) => {
    console.log("Uploading file:", file.name);
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000); // Simulate a 2-second upload time
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">
            Upload Video for Appointment
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="file"
              accept=".mp4, .mkv, .mov, .avi" // Restrict to video extensions
              onChange={handleFileChange}
              className="file-input file-input-bordered w-full"
              disabled={isUploading}
            />

            {/* Display the selected file name and the remove button if a file is selected */}
            {file && (
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm">{file.name}</span>
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="btn btn-outline btn-error btn-xs ml-2"
                  disabled={isUploading}
                >
                  Remove
                </button>
              </div>
            )}

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {successMessage && (
              <p className="text-green-500 text-sm">{successMessage}</p>
            )}

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={isUploading}
            >
              {isUploading ? "Uploading..." : "Submit Video"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
