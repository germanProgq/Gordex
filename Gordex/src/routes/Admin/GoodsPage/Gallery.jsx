import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';

const Gallery = forwardRef(({onImgUploaded}, ref) => {
  const [items, setItems] = useState([]);
  const fileInputRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);


  useImperativeHandle(ref, () => ({
    getItems: () => items,
  }));

  // Handle file upload
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);

    setItems(prevItems => [...prevItems, ...files]);

    if (onImgUploaded) {
      onImgUploaded()
    }

  };

  const handleDelete = (index) => {
    setItems(prevItems => {
      const newItems = prevItems.filter((_, i) => i !== index);
      return newItems;
    });
    setIsVisible(false)
  };
  
  const handleFileChoice = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  if (!isVisible) {
    return null
  }

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} accept="image/*" id='fileInput' style={{display:'none'}} ref={fileInputRef}/>
      
      <div className="goods__panel-gallery-items">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="goods__panel-gallery-item">
              <div className="goods__panel-gallery-img">
                <img 
                  src={URL.createObjectURL(item)} 
                  alt="" 
                  className="goods__panel-gallery-icon" 
                />
              </div>
              <div className="goods__panel-gallery-action">
                <button className="goods__panel-gallery-btn" onClick={() => handleDelete(index)}>
                  <img src="/images/admin/gallery-delete.svg" alt="Delete"/>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="goods__panel-gallery-item">
            <div className="goods__panel-gallery-img">
              <img src="/images/admin/gallery-add.svg" alt="" className="goods__panel-gallery-icon" onClick={handleFileChoice} />
            </div>
            <div className="goods__panel-gallery-action">
              <button className="goods__panel-gallery-btn" onClick={handleFileChoice}>
                <img src="/images/admin/gallery-plus.svg" alt="Add" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default Gallery;