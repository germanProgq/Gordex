import "./styles/style.css"

function GoodsPage() {

  const items = Array.from({ length: 12 });

    return (
        <section className="goods">
            <div className="container goods__container">
              <form className="goods__search">
                <input placeholder="Поиск товаров" type="text" className="goods__search-input" />
                <button className="goods__search-submit" type="submit"></button>
              </form>
              <div className="goods__nav">
                <ul className="goods__nav-list">
                  <li className="goods__nav-item"><a href="#" className="goods__nav-link goods__nav-link--active">Electronic</a></li>
                  <li className="goods__nav-item"><a href="#" className="goods__nav-link">Clothing</a></li>
                  <li className="goods__nav-item"><a href="#" className="goods__nav-link">Shoes</a></li>
                  <li className="goods__nav-item"><a href="#" className="goods__nav-link">Bags</a></li>
                  <li className="goods__nav-item"><a href="#" className="goods__nav-link">Accessories</a></li>
                </ul>
              </div>
              <div className="goods__add">
                <h2 className="goods__add-title">Добавить товар</h2>
                <div className="goods__add-action">
                  <button className="goods__add-btn goods__add-btn--plus"><img src="/images/admin/plus.svg" alt="" className="goods__add-icon" />Бренд</button>
                  <button className="goods__add-btn goods__add-btn--plus"><img src="/images/admin/plus.svg" alt="" className="goods__add-icon" />Категория</button>
                  <button className="goods__add-btn">Импортировать</button>
                  <button className="goods__add-btn">Экспортировать</button>
                </div>
              </div>
              <div className="goods__panel">
                <div className="goods__panel-params">
                  <div className="goods__panel-info">
                    <div className="goods__panel-main">
                      <h3 className="goods__panel-title">Основное</h3>
                      <input placeholder="Название товара / заголовок" type="text" className="goods__panel-name" />
                      <div className="goods__panel-article">
                        <label htmlFor="article-upload" className="goods__panel-article-btn">
                          <span className="goods__panel-article-span">Артикул</span>
                          <span className="goods__panel-article-icon"><img src="/images/admin/direct-inbox.svg" alt="" /></span>
                        </label>
                        <input type="file" name="article" id="article-upload" className="goods__panel-article-file" />
                      </div>
                      <div className="goods__panel-select"></div>
                      <div className="goods__panel-select"></div>
                    </div>
                    <div className="goods__panel-config">
                      <h3 className="goods__panel-title">Конфигурация</h3>
                      <div className="goods__panel-config-items">
                        <input placeholder="#1" type="text" className="goods__panel-config-item" />
                        <input placeholder="#2" type="text" className="goods__panel-config-item" />
                        <input placeholder="#3" type="text" className="goods__panel-config-item" />
                        <input placeholder="#4" type="text" className="goods__panel-config-item" />
                        <input placeholder="#5" type="text" className="goods__panel-config-item" />
                        <input placeholder="#6" type="text" className="goods__panel-config-item" />
                        <input placeholder="#7" type="text" className="goods__panel-config-item" />
                        <input placeholder="#8" type="text" className="goods__panel-config-item" />
                      </div>
                    </div>
                  </div>
                  <div className="goods__panel-location">
                    <h3 className="goods__panel-title">Локация</h3>
                    <div className="goods__panel-location-selects">
                      <div className="goods__panel-location-select"></div>
                      <div className="goods__panel-location-select"></div>
                      <div className="goods__panel-location-select"></div>
                    </div>
                  </div>
                  <div className="goods__panel-color">
                    <h3 className="goods__panel-title">Другие цвета</h3>
                    <div className="goods__panel-color-items">
                      <input placeholder="#1 (артикул)" type="text" className="goods__panel-color-item" />
                      <input placeholder="#2 (артикул)" type="text" className="goods__panel-color-item" />
                      <input placeholder="#3 (артикул)" type="text" className="goods__panel-color-item" />
                      <input placeholder="#4 (артикул)" type="text" className="goods__panel-color-item" />
                      <input placeholder="#5 (артикул)" type="text" className="goods__panel-color-item" />
                      <input placeholder="#6 (артикул)" type="text" className="goods__panel-color-item" />
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
                      <div className="goods__panel-delivery-items">
                        <label className="goods__panel-delivery-item">No Express 
                          <input type="radio" name="radio" />
                          <span className="goods__panel-delivery-checkmark"></span>
                        </label>
                        <label className="goods__panel-delivery-item">Express
                          <input type="radio" name="radio" />
                          <span className="goods__panel-delivery-checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <div className="goods__panel-total">
                      <div className="goods__panel-total-box">
                        <label className="goods__panel-price-label">Цена</label>
                        <input placeholder="#" type="text" className="goods__panel-price-input" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="goods__panel-gallery">
                  <h3 className="goods__panel-title">Фотографии</h3>
                  <div className="goods__panel-gallery-items">

                    {items.map((item, index) => (
                      <div key={index} className="goods__panel-gallery-item">
                        <div className="goods__panel-gallery-img">
                          <img src="/images/admin/gallery-add.svg" alt="" className="goods__panel-gallery-icon" />
                        </div>
                        <div className="goods__panel-gallery-action">
                          <button className="goods__panel-gallery-btn"><img src="/images/admin/arrow-left.svg" alt="" /></button>
                          <button className="goods__panel-gallery-btn"><img src="/images/admin/gallery-plus.svg" alt="" /></button>
                          <button className="goods__panel-gallery-btn"><img src="/images/admin/gallery-delete.svg" alt="" /></button>
                          <button className="goods__panel-gallery-btn"><img src="/images/admin/arrow-right.svg" alt="" /></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="goods__cards">
                <div className="goods__card">
                  <div className="goods__card-main">
                    <div className="goods__card-img">
                      <img src="/images/admin/product.png" alt="" />
                    </div>
                    <div className="goods__card-info">
                      <h4 className="goods__card-title">Apple iPhone 14 Pro Max Gold</h4>
                      <div className="goods__card-configs">
                        <div className="goods__card-config">128gb</div>
                        <div className="goods__card-config">256gb</div>
                        <div className="goods__card-config">512gb</div>
                        <div className="goods__card-config">1tb</div>
                      </div>
                    </div>
                  </div>
                  <div className="goods__card-cell">
                    Apple
                  </div>
                  <div className="goods__card-cell">
                    ia-2101
                  </div>
                  <div className="goods__card-cell">
                    Phones
                  </div>
                  <div className="goods__card-cell">
                    1386$
                  </div>
                  <div className="goods__card-discount">
                    <div className="goods__card-discount-item">
                      <img src="/images/admin/tag.svg" alt="" className="goods__card-discount-icon" />
                      5%
                    </div>
                    <div className="goods__card-discount-item">
                      <img src="/images/admin/coins.svg" alt="" className="goods__card-discount-icon" />
                      15%
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
              </div>
            </div>
        </section>
    )
}

export default GoodsPage