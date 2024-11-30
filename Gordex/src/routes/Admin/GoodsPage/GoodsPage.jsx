import { useEffect, useRef, useState } from "react";
import "./styles/style.css"
import React from "react";
import JSONFileUpload from "./articulFileUpload";
import { CreateNewProduct, GetProductList } from "../../../token/api";
import Gallery from "./Gallery";
import GoodsCard from "./madeGoodsCard";

function GoodsPage() {
  const galleryRefs = useRef([]);
  const navItems = ['Electronics', 'Clothing', 'Shoes', 'Bags', 'Accessories'];

  const [itemType, setItemType] = useState('')
  const [itemTitle, setItemTitle] = useState('')
  const [itemPriceBtc, setItemPriceBtc] = useState(0)
  const [itemPriceEth, setItemPriceEth] = useState(0)
  const [itemPriceOldEth, setItemPriceOldEth] = useState(0)
  const [itemPriceUsd, setItemPriceUsd] = useState(0)
  const [itemPriceUsdt, setItemPriceUsdt] = useState(0)
  const [itemPriceEuro, setItemPriceEuro] = useState(0)
  const [itemLocation, setItemLocation] = useState('')
  const [itemDiscount, setItemDiscount] = useState(0)
  const [itemCatalog, setItemCatalog] = useState('')
  const [itemCategory, setItemCategory] = useState('')
  const [expressDelivery, setExpressDelivery] = useState(false)
  const [itemBrand, setItemBrand] = useState('')
  const [itemPriceOldEuro, setItemPriceOldEuro] = useState(0)
  const [itemBrandImg, setItemBrandImg] = useState('')
  const [itemColors, setItemColors] = useState(Array(6).fill('')) // Change for more colors
  const [itemConfig, setItemConfig] = useState("")
  const [itemPriceDoge, setItemPriceDoge] = useState(0)
  const [itemPriceOldDoge, setItemPriceOldDoge] = useState(0)
  const [itemPriceXmr, setItemPriceXmr] = useState(0)
  const [itemPriceOldXmr, setItemPriceOldXmr] = useState(0)
  const [itemPriceLtc, setItemPriceLtc] = useState(0)
  const [itemPriceOldLtc, setItemPriceOldLtc] = useState(0)
  const [itemDeliveryPrice, setDeliveryPrice] = useState(0)
  const [internationalDelivery, setInternationalDelivery] = useState(false)
  const [itemPriceOldUsd, setItemPriceOldUsd] = useState(0)

  const [combinedGalleryItems, setCombinedGalleryItems] = useState([])
  const [fetchedItems, setFetchedItems] = useState([])
  const [galleryCount, setGalleryCount] = useState(1)

  const addGalleryRef = () => {
    setGalleryCount(galleryCount + 1)
  }

  const handleFileRead = (jsonData) => {
    if (jsonData) {
      setItemType(jsonData.type || itemType);
      setItemTitle(jsonData.title || itemTitle);
      setItemPriceBtc(jsonData.btc || itemPriceBtc);
      setItemPriceEth(jsonData.eth || itemPriceEth);
      setItemPriceOldEth(jsonData.oldEth || itemPriceOldEth);
      setItemPriceUsd(jsonData.usd || itemPriceUsd);
      setItemPriceUsdt(jsonData.usdt || itemPriceUsdt);
      setItemPriceEuro(jsonData.euro || itemPriceEuro);
      setItemLocation(jsonData.location || itemLocation);
      setItemDiscount(jsonData.discount || itemDiscount);
      setItemCatalog(jsonData.catalog || itemCatalog);
      setItemCategory(jsonData.category || itemCategory);
      setExpressDelivery(jsonData.expressDelivery || expressDelivery);
      setItemBrand(jsonData.brand || itemBrand);
      setItemPriceOldEuro(jsonData.oldEuro || itemPriceOldEuro);
      setItemBrandImg(jsonData.brandImg || itemBrandImg);
      setItemConfig(jsonData.config || itemConfig);
      setItemPriceDoge(jsonData.doge || itemPriceDoge);
      setItemPriceOldDoge(jsonData.oldDoge || itemPriceOldDoge);
      setItemPriceXmr(jsonData.xmr || itemPriceXmr);
      setItemPriceOldXmr(jsonData.oldXmr || itemPriceOldXmr);
      setItemPriceLtc(jsonData.ltc || itemPriceLtc);
      setItemPriceOldLtc(jsonData.oldLtc || itemPriceOldLtc);
      setDeliveryPrice(jsonData.deliveryPrice || itemDeliveryPrice);
      setInternationalDelivery(jsonData.internationalDelivery || internationalDelivery);
      setItemPriceOldUsd(jsonData.oldUsd || itemPriceOldUsd);

      setItemColors(Array.isArray(jsonData.colors) ? jsonData.colors : itemColors);
    }
};

useEffect(() => {
  getAllItems()
}, [])

const getAllItems = async() => {
  const items = await GetProductList();

  // Map over items and add image source to each item while deleting the original files property
  const itemsWithImages = items.map(({ files, ...item }) => {
    const itemD = JSON.parse(files);
    return {
      ...item, // Spread the original item properties
      image: itemD[0].image // Add the image property
    };
  });

  // Set the modified items with images as fetched items
  setFetchedItems(itemsWithImages);
};
  const handlePriceChange = (setter) => (e) => {
    setter(parseFloat(e.target.value) || 0);
  };

  const getGalleryItems = () => {
    const items = [];

    galleryRefs.current.forEach((galleryRef) => {
      if (galleryRef.current) {
        const itemImgFull = galleryRef.current.getItems();
        const itemImgs = itemImgFull?.map((item) => item)
        items.push(...itemImgs);
    }
    })
    setCombinedGalleryItems(items);
  }

  const handleCatalogClick = (item) => {
    setItemCatalog(item)
  }

  const handleColorsChange = (index, event) => {
    const newColors = [...itemColors]; // Create a copy of the colors array
    newColors[index] = event.target.value; // Update the specific index with the new value
    setItemColors(newColors); // Set the updated colors array to state
  };

  const SubmitAddItemForm = async () => {
    getGalleryItems()

    const item_type_int = parseInt(itemType)

    const item = {
      usd: parseFloat(itemPriceUsd),
      usdt: parseFloat(itemPriceUsdt),
      btc: parseFloat(itemPriceBtc),
      euro: parseFloat(itemPriceEuro),
      title: itemTitle.toString(),
      location: itemLocation.toString(),
      type: item_type_int,
      discount: parseFloat(itemDiscount),
      catalog: itemCatalog.toString(),
      category: itemCategory.toString(),
      brand: itemBrand.toString(),
      brandImg: itemBrandImg.toString(),
      colors: itemColors,
      config: itemConfig.toString(),
      doge: parseFloat(itemPriceDoge),
      oldDoge: parseFloat(itemPriceOldDoge),
      xmr: parseFloat(itemPriceXmr),
      oldXmr: parseFloat(itemPriceOldXmr),
      ltc: parseFloat(itemPriceLtc),
      oldLtc: parseFloat(itemPriceOldLtc),
      eth: parseFloat(itemPriceEth),
      oldEth: parseFloat(itemPriceOldEth),
      oldUsd: parseFloat(itemPriceOldUsd),
      oldEuro: parseFloat(itemPriceOldEuro),
      deliveryPrice: parseFloat(itemDeliveryPrice),
      internationalDelivery: internationalDelivery,
      expressDelivery: expressDelivery,
      img: combinedGalleryItems,
    }

    const createReqStatus = await CreateNewProduct
    (
      item
    );    
    if (createReqStatus == 200) {
      console.warn(`Product ${itemTitle} has been created successfully`);
    }
  }

  

  

  const items = Array.from({ length: 12 });

    return (
        <section className="goods">
            <div className="container goods__container">
              {/* <form className="goods__search">
                <input placeholder="Поиск товаров" type="text" className="goods__search-input" />
                <button className="goods__search-submit" type="submit"></button>
              </form> */}
              <div className="goods__nav">
                <ul className="goods__nav-list">
                  {navItems.map((item) => (
                    <li className="goods__nav-item" key={item}>
                      <span
                        className={`goods__nav-link ${itemCatalog === item ? 'goods__nav-link--active' : ''}`}
                        onClick={() => handleCatalogClick(item)}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="goods__add">
                <h2 className="goods__add-title">Добавить товар</h2>
                <div className="goods__add-action">
                  <div className="goods__panel-article">
                      <label htmlFor="article-upload" className="goods__panel-article-btn">
                        <span className="goods__panel-article-icon"><img src="/images/admin/direct-inbox.svg" alt="" /></span>
                      </label>
                      <JSONFileUpload onFileRead={handleFileRead}/>
                  </div>
                  <button className="goods__add-btn">Экспортировать</button>
                </div>
              </div>
              <button 
                className="goods__panel-submit"
                onClick={SubmitAddItemForm}>
                Отправить
              </button>
              <div className="goods__panel">
                <div className="goods__panel-params">
                  <div className="goods__panel-info">
                    <div className="goods__panel-main">
                      <h3 className="goods__panel-title">Основное</h3>
                      <input 
                        placeholder="Название товара / заголовок" 
                        type="text" 
                        className="goods__panel-name" 
                        value={itemTitle}
                        onChange={(e) => setItemTitle(e.target.value)}
                      />
                      <input 
                        placeholder="Тип товара" 
                        type="numeric" 
                        className="goods__panel-name" 
                        value={itemType}
                        onChange={(e) => setItemType(e.target.value)}
                      />
                        <input 
                        placeholder="Категория товара" 
                        type="text" 
                        className="goods__panel-name" 
                        value={itemCategory}
                        onChange={(e) => setItemCategory(e.target.value)}
                      />
                      <div className="goods__panel-select">
                        <input 
                          placeholder="Изготовитель товара" 
                          type="text" 
                          className="goods__panel-name" 
                          value={itemBrand}
                          onChange={(e) => setItemBrand(e.target.value)}
                        />
                          <input 
                          placeholder="Изготовитель товара (ссылка)" 
                          type="text" 
                          className="goods__panel-name" 
                          value={itemBrandImg}
                          onChange={(e) => setItemBrandImg(e.target.value)}
                        />
                      </div>
                      <div className="goods__panel-select"></div>
                    </div>
                    <div className="goods__panel-config">
                      <h3 className="goods__panel-title">Конфигурация</h3>
                      <div className="goods__panel-config-items">
                        {Array.from({ length: 1 }, (_, index) => (
                          <input
                            key={index + 1}
                            placeholder={`#${index + 1}`}
                            type="text"
                            className="goods__panel-config-item"
                            value={itemConfig}
                            onChange={(e) => setItemConfig(e.target.value)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="goods__panel-discount">
                    <h3 className="goods__panel-title">Скидка</h3>
                    <input
                      placeholder="%"
                      className="goods__panel-price-input"
                      type="numeric"
                      value={itemDiscount}
                      onChange={(e) => setItemDiscount(parseFloat(e.target.value))}
                    />
                  </div>

                  <div className="goods__panel-location">
                    <h3 className="goods__panel-title">Локация</h3>
                    <div className="goods__panel-location-selects">
                      <div className="goods__panel-location-select">
                        <input 
                          placeholder="Страна" 
                          id="item_country" 
                          value={itemLocation}
                          onChange={(e) => setItemLocation(e.target.value)}
                        />
                      </div>
                      <div className="goods__panel-location-select"></div>
                      <div className="goods__panel-location-select"></div>
                    </div>
                  </div>
                  <div className="goods__panel-color">
                    <h3 className="goods__panel-title">Другие цвета</h3>
                    <div className="goods__panel-color-items">
                      {itemColors.map((color, index) => (
                        <input
                          key={index}
                          placeholder={`#${index + 1} (артикул)`}
                          type="text"
                          className="goods__panel-color-item"
                          value={color}
                          onChange={(event) => handleColorsChange(index, event)}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="goods__panel-summary">
                    <div className="goods__panel-price">
                      <h3 className="goods__panel-title">Цена</h3>
                      <label className="goods__panel-price-label">Фиат</label>
                      <input type="text" className="goods__panel-price-input" />
                      <div className="goods__panel-price-box">
                        <div className="goods__panel-price-fiat">
                          <label className="goods__panel-price-label">Фиат</label>
                          <input placeholder="%" type="text" className="goods__panel-price-input" />
                        </div>
                        <div className="goods__panel-price-crypto">
                          <label className="goods__panel-price-label">Крипта</label>
                          <input placeholder="%" type="text" className="goods__panel-price-input" />
                        </div>
                      </div>
                    </div>
                    <div className="goods__panel-delivery">
                      <h3 className="goods__panel-title">Доставка</h3>
                      <input 
                        placeholder="Цена" 
                        type="numeric" 
                        className="goods__panel-price-input"
                        value={itemDeliveryPrice}
                        onChange={(e) => setDeliveryPrice(parseFloat(e.target.value))}
                       />
                      <div className="goods__panel-delivery-items">
                      <label className="goods__panel-delivery-item">
                        No Express
                          <input
                            type="radio"
                            name="radio"
                            checked={!expressDelivery}
                            onChange={() => setExpressDelivery(false)}
                          />
                          <span className="goods__panel-delivery-checkmark"></span>
                        </label>
                        <label className="goods__panel-delivery-item">
                          Express
                          <input
                            type="radio"
                            name="radio"
                            checked={expressDelivery}
                            onChange={() => setExpressDelivery(true)}
                          />
                          <span className="goods__panel-delivery-checkmark"></span>
                        </label>
                      </div>
                      <div className="goods__panel-delivery-items">
                      <label className="goods__panel-delivery-item">
                        No international delivery
                          <input
                            type="radio"
                            name="radio-inter-deli"
                            checked={!internationalDelivery}
                            onChange={() => setInternationalDelivery(false)}
                          />
                          <span className="goods__panel-delivery-checkmark"></span>
                        </label>
                        <label className="goods__panel-delivery-item">
                          International delivery
                          <input
                            type="radio"
                            name="radio-inter-deli"
                            checked={internationalDelivery}
                            onChange={() => setInternationalDelivery(true)}
                          />
                          <span className="goods__panel-delivery-checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <div className="goods__panel-total">
                      <div className="goods__panel-total-box">
                        <div>
                          <label className="goods__panel-price-label">Doge Цена</label>
                          <input
                            placeholder="#"
                            type="text"
                            className="goods__panel-price-input"
                            value={itemPriceDoge}
                            onChange={handlePriceChange(setItemPriceDoge)}
                          />
                        </div>
                        <div>
                          <label className="goods__panel-price-label">BTC Цена</label>
                          <input
                            placeholder="#"
                            type="text"
                            className="goods__panel-price-input"
                            value={itemPriceBtc}
                            onChange={handlePriceChange(setItemPriceBtc)}
                          />
                        </div>
                        <div>
                          <label className="goods__panel-price-label">OldDoge Цена</label>
                          <input
                            placeholder="#"
                            type="text"
                            className="goods__panel-price-input"
                            value={itemPriceOldDoge}
                            onChange={handlePriceChange(setItemPriceOldDoge)}
                          />
                        </div>
                        <div>
                          <label className="goods__panel-price-label">OldEuro Цена</label>
                          <input
                            placeholder="#"
                            type="text"
                            className="goods__panel-price-input"
                            value={itemPriceOldEuro}
                            onChange={handlePriceChange(setItemPriceOldEuro)}
                          />
                        </div>
                        <div>                        
                          <label className="goods__panel-price-label">Xmr Цена</label>
                          <input
                            placeholder="#"
                            type="text"
                            className="goods__panel-price-input"
                            value={itemPriceXmr}
                            onChange={handlePriceChange(setItemPriceXmr)}
                          />
                        </div>
                        <div>
                          <label className="goods__panel-price-label">OldXmr Цена</label>
                          <input
                            placeholder="#"
                            type="text"
                            className="goods__panel-price-input"
                            value={itemPriceOldXmr}
                            onChange={handlePriceChange(setItemPriceOldXmr)}
                          />
                        </div>
                        <div>
                          <label className="goods__panel-price-label">Ltc Цена</label>
                          <input
                            placeholder="#"
                            type="text"
                            className="goods__panel-price-input"
                            value={itemPriceLtc}                            
                            onChange={handlePriceChange(setItemPriceLtc)}
                          />
                        </div>
                        <div>
                          <label className="goods__panel-price-label">OldLtc Цена</label>
                          <input
                            placeholder="#"
                            type="text"
                            className="goods__panel-price-input"
                            value={itemPriceOldLtc}
                            onChange={handlePriceChange(setItemPriceOldLtc)}
                          />
                        </div>
                        <div>
                          <label className="goods__panel-price-label">Eth Цена</label>
                          <input
                            placeholder="#"
                            type="text"
                            className="goods__panel-price-input"
                            value={itemPriceEth}
                            onChange={handlePriceChange(setItemPriceEth)}
                          />
                        </div>
                        <div>
                          <label className="goods__panel-price-label">OldEth Цена</label>
                          <input
                            placeholder="#"
                            type="text"
                            className="goods__panel-price-input"
                            value={itemPriceOldEth}
                            onChange={handlePriceChange(setItemPriceOldEth)}
                          />
                        </div>
                        <div>
                        <label className="goods__panel-price-label">USD Цена</label>
                          <input
                            placeholder="#"
                            type="text"
                            className="goods__panel-price-input"
                            value={itemPriceUsd}
                            onChange={handlePriceChange(setItemPriceUsd)}
                          />   
                        </div> 
                        <div>
                          <label className="goods__panel-price-label">OldUSD Цена</label>
                          <input
                            placeholder="#"
                            type="text"
                            className="goods__panel-price-input"
                            value={itemPriceOldUsd}
                            onChange={handlePriceChange(setItemPriceOldUsd)}
                          />  
                        </div> 
                        <div>                  
                          <label className="goods__panel-price-label">USDT Цена</label>
                          <input
                            placeholder="#"
                            type="text"
                            className="goods__panel-price-input"
                            value={itemPriceUsdt}
                            onChange={handlePriceChange(setItemPriceUsdt)}
                          />
                        </div>
                        <div>                        
                          <label className="goods__panel-price-label">Euro Цена</label>
                          <input
                            placeholder="#"
                            type="text"
                            className="goods__panel-price-input"
                            value={itemPriceEuro}
                            onChange={handlePriceChange(setItemPriceEuro)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="goods__panel-gallery">
                  <h3 className="goods__panel-title">Фотографии</h3>
                  {Array.from({ length: galleryCount }).map((_, index) => {
                    const ref = React.createRef();
                    galleryRefs.current[index] = ref;
                    return <Gallery onImgUploaded={addGalleryRef} key={index} ref={ref}/>;
                  })}
                </div>
              </div>
            </div>
            <div className="goods__cards">
                {fetchedItems.map((item, index) => (
                    <GoodsCard key={index} item={item} />
                ))}
            </div>            
        </section>
    )
  };
export default GoodsPage