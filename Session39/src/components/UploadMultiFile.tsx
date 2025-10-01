import axios from "axios";
import React, { useState } from "react";

const CLOUD_NAME = import.meta.env.VITE_CLOUND_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET;

export default function UploadMultiFile() {
  const [files, setFiles] = useState<File[]>([]);
  const [imgURLs, setImgURLs] = useState<string[]>([]);
  const [uploading, setUploading] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      setFiles(Array.from(selectedFiles));
    }
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      alert("Vui lòng chọn ít nhất một file để upload");
      return;
    }

    setUploading(true);
    try {
      const uploadPromises = files.map(async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET);

        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          formData
        );

        return response.data.secure_url;
      });

      const uploadedURLs = await Promise.all(uploadPromises);
      setImgURLs(uploadedURLs);
      console.log("Uploaded URLs:", uploadedURLs);
      alert("Upload thành công!");
    } finally {
      setUploading(false);
    }
  };

  const handleReset = () => {
    setFiles([]);
    setImgURLs([]);
  };

  return (
    <div>
      <h2>Upload Multiple Images</h2>
      
      <div>
        <input 
          type="file" 
          accept="image/*"
          multiple
          onChange={handleChange}
        />
        <div>
          <button 
            onClick={handleUpload}
            disabled={files.length === 0 || uploading}
          >
            {uploading ? "Đang upload..." : "Upload"}
          </button>
          <button 
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>

      {imgURLs.length > 0 && (
        <div>
          <h3>Uploaded Images:</h3>
          {imgURLs.map((url, index) => (
            <img 
              key={index}
              src={url} 
              alt={`uploaded-${index}`} 
              style={{ maxWidth: '300px', marginTop: '10px', display: 'block' }}
            />
          ))}
        </div>
      )}
    </div>
  );
}