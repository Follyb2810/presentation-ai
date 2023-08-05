// FileUpload.js
import React, { useState } from 'react';
import pptxgen from 'pptxgenjs';

const FileUpload = ({ onFileUpload }) => {
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const pptx = new pptxgen();
      await pptx.load(file);
      const slideContent = pptx.getSlides().map((slide) => slide.getNotes() || '');
      onFileUpload(slideContent);
    }
  };

  return (
    <div>
      <input type="file" accept=".pptx" onChange={handleFileChange} />
    </div>
  );
};

export default FileUpload;
