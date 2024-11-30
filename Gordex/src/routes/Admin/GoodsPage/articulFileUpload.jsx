import React, { useState } from 'react';

const JSONFileUpload = ({ onFileRead }) => {
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          onFileRead(jsonData);
          setError(null);
        } catch (err) {
          setError('Error parsing JSON: ' + err.message);
        }
      };

      reader.onerror = () => {
        setError('Error reading file');
      };

      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        id="article-upload"
        accept=".json"
        onChange={handleFileChange}
        className="goods__panel-article-file"
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default JSONFileUpload;