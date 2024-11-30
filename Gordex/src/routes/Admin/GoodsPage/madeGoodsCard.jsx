import React from 'react';
import Base64Image from '../../../base64ImgReturn';

const GoodsCard = ({ item }) => {
  return (
    <div className="goods__card">
      <div className="goods__card-main">
        <div className="goods__card-img">
          <Base64Image base64String={item.image}/>
        </div>
        <div className="goods__card-info">
          <h4 className="goods__card-title">{item.title}</h4>
        </div>
      </div>
      <div className="goods__card-cell">{item.brand}</div>
      <div className="goods__card-cell">{item.category}</div>
      <div className="goods__card-cell">{item.usd}</div>
      <div className="goods__card-discount">
          <div  className="goods__card-discount-item">
            <img src="/images/admin/tag.svg" alt="" className="goods__card-discount-icon" />
            {item.discount}%
          </div>
      </div>
      <div className="goods__card-action">
        <button className="goods__card-btn">
          <img src="/images/admin/brush.svg" alt="" className="goods__card-discount-icon" />
        </button>
        <button className="goods__card-btn">
          <img src="/images/admin/trash.svg" alt="" className="goods__card-discount-icon" />
        </button>
      </div>
    </div>
  );
};

export default GoodsCard;