import axios from "axios";
import React, { useState } from "react";

const CLOUD_NAME = import.meta.env.VITE_CLOUND_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET;

export default function UploadSingleFile() {
  const [file, setFile] = useState<File | null>(null);
  const [imgURL, setImgURL] = useState<string>("");
  const [uploading, setUploading] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Vui lòng chọn một file để upload");
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", UPLOAD_PRESET);

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formData
      );

      const uploadedURL = response.data.secure_url;
      setImgURL(uploadedURL);
      console.log("Uploaded URL:", uploadedURL);
      alert("Upload thành công!");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload thất bại. Vui lòng thử lại!");
    } finally {
      setUploading(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setImgURL("");
  };

  return (
    <div>
      <h2>Upload Single Image</h2>
      
      <div>
        <input 
          type="file" 
          accept="image/*"
          onChange={handleChange}
          className="mb-2"
        />
        <div>
          <button 
            onClick={handleUpload}
            disabled={!file || uploading}
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


      {imgURL && (
        <div>
          <h3>Uploaded Image:</h3>
          <img 
            src={imgURL} 
            alt="uploaded" 
            style={{ maxWidth: '300px', marginTop: '10px' }}
          />
        </div>
      )}
    </div>
  );
}