import "./styles/style.css"

function EditorPage() {
    return (
        <section className="editor">
            <div className="container editor__container">
              <div className="editor__logos">
                <div className="editor__logos-first">
                  <h2 className="editor__logos-title">Сменить логотип №1</h2>
                  <div className="editor__logos-items">
                    <div className="editor__logos-item">
                      <div className="editor__logos-img"><img src="/images/admin/logo-skeleton.svg" alt="" /></div>
                      <button className="editor__logos-btn">Удалить</button>
                      <button className="editor__logos-btn">Выбранный</button>
                    </div>
                    <div className="editor__logos-item">
                      <div className="editor__logos-img"><img src="/images/admin/logo-skeleton.svg" alt="" /></div>
                      <button className="editor__logos-btn">Удалить</button>
                      <button className="editor__logos-btn">Выбрать</button>
                    </div>
                  </div>
                </div>
                <div className="editor__logos-second">
                  <h2 className="editor__logos-title">Сменить логотип №2</h2>
                  <div className="editor__logos-items">
                    <div className="editor__logos-item">
                      <div className="editor__logos-img"><img src="/images/admin/logo-skeleton-2.svg" alt="" /></div>
                      <button className="editor__logos-btn">Удалить</button>
                      <button className="editor__logos-btn">Выбранный</button>
                    </div>
                    <div className="editor__logos-item">
                      <div className="editor__logos-img"><img src="/images/admin/logo-skeleton-2.svg" alt="" /></div>
                      <button className="editor__logos-btn">Удалить</button>
                      <button className="editor__logos-btn">Выбрать</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="editor__texts">
                <div className="editor__texts-box">
                  <h2 className="editor__texts-title">Сменить название</h2>
                  <form className="editor__texts-form">
                    <input placeholder="GORDEX" type="text" className="editor__texts-input" />
                    <button className="editor__texts-btn">Выбранный</button>
                  </form>
                  <form className="editor__texts-form">
                    <input type="text" className="editor__texts-input" />
                    <button className="editor__texts-btn">Выбрать</button>
                  </form>
                </div>
                <div className="editor__texts-box">
                  <h2 className="editor__texts-title">Сменить слово</h2>
                  <form className="editor__texts-form">
                    <input placeholder="Введите слово" type="text" className="editor__texts-input" />
                    <button className="editor__texts-btn">Выбранный</button>
                  </form>
                  <form className="editor__texts-form">
                    <input type="text" className="editor__texts-input" />
                    <button className="editor__texts-btn">Выбрать</button>
                  </form>
                </div>
              </div>
              <div className="editor__table">
                <div className="editor__table-header">
                  <p className="editor__table-heading">Название страницы</p>
                  <p className="editor__table-heading">Ссылка</p>
                  <p className="editor__table-heading">Смена ссылки</p>
                  <p className="editor__table-heading">Код</p>
                </div>
                <div className="editor__table-item">
                  <p className="editor__table-name">Логин</p>
                  <a href="#" className="editor__table-link">/login</a>
                  <div className="editor__table-code"><a href="#" className="editor__table-code-link"><img src="/images/admin/code.svg" alt="" className="editor__table-icon" /></a></div>
                </div>
                <div className="editor__table-item">
                  <p className="editor__table-name">Регистрация</p>
                  <a href="#" className="editor__table-link">/registration</a>
                  <div className="editor__table-code"><a href="#" className="editor__table-code-link"><img src="/images/admin/code.svg" alt="" className="editor__table-icon" /></a></div>
                </div>
                <div className="editor__table-item">
                  <p className="editor__table-name">Восстановление пароля</p>
                  <a href="#" className="editor__table-link">/resetpass</a>
                  <div className="editor__table-code"><a href="#" className="editor__table-code-link"><img src="/images/admin/code.svg" alt="" className="editor__table-icon" /></a></div>
                </div>
                <div className="editor__table-item">
                  <p className="editor__table-name">Главная</p>
                  <a href="#" className="editor__table-link">/</a>
                  <div className="editor__table-code"><a href="#" className="editor__table-code-link"><img src="/images/admin/code.svg" alt="" className="editor__table-icon" /></a></div>
                </div>
                <div className="editor__table-item">
                  <p className="editor__table-name">Каталог</p>
                  <a href="#" className="editor__table-link">/catalog</a>
                  <div className="editor__table-code"><a href="#" className="editor__table-code-link"><img src="/images/admin/code.svg" alt="" className="editor__table-icon" /></a></div>
                </div>
                <div className="editor__table-item">
                  <p className="editor__table-name">Избранные</p>
                  <a href="#" className="editor__table-link">/resetpass</a>
                  <div className="editor__table-code"><a href="#" className="editor__table-code-link"><img src="/images/admin/code.svg" alt="" className="editor__table-icon" /></a></div>
                </div>
                <div className="editor__table-item">
                  <p className="editor__table-name">Главная</p>
                  <a href="#" className="editor__table-link">/registration</a>
                  <div className="editor__table-code"><a href="#" className="editor__table-code-link"><img src="/images/admin/code.svg" alt="" className="editor__table-icon" /></a></div>
                </div>
                <div className="editor__table-item">
                  <p className="editor__table-name">Главная</p>
                  <a href="#" className="editor__table-link">/resetpass</a>
                  <div className="editor__table-code"><a href="#" className="editor__table-code-link"><img src="/images/admin/code.svg" alt="" className="editor__table-icon" /></a></div>
                </div>
                <div className="editor__table-item">
                  <p className="editor__table-name">Регистрация</p>
                  <a href="#" className="editor__table-link">/login</a>
                  <div className="editor__table-code"><a href="#" className="editor__table-code-link"><img src="/images/admin/code.svg" alt="" className="editor__table-icon" /></a></div>
                </div>
                <div className="editor__table-item">
                  <p className="editor__table-name">Главная</p>
                  <a href="#" className="editor__table-link">/registration </a>
                  <div className="editor__table-code"><a href="#" className="editor__table-code-link"><img src="/images/admin/code.svg" alt="" className="editor__table-icon" /></a></div>
                </div>
                <div className="editor__table-item">
                  <p className="editor__table-name">Главная</p>
                  <a href="#" className="editor__table-link">/resetpass </a>
                  <div className="editor__table-code"><a href="#" className="editor__table-code-link"><img src="/images/admin/code.svg" alt="" className="editor__table-icon" /></a></div>
                </div>
                <div className="editor__table-item">
                  <p className="editor__table-name">Главная</p>
                  <div className="editor__table-code"><a href="#" className="editor__table-code-link"><img src="/images/admin/code.svg" alt="" className="editor__table-icon" /></a></div>
                </div>
                <div className="editor__table-item">
                  <p className="editor__table-name">Главная</p>
                  <div className="editor__table-code"><a href="#" className="editor__table-code-link"><img src="/images/admin/code.svg" alt="" className="editor__table-icon" /></a></div>
                </div>
                <div className="editor__table-item">
                  <p className="editor__table-name">Главная</p>
                  <div className="editor__table-code"><a href="#" className="editor__table-code-link"><img src="/images/admin/code.svg" alt="" className="editor__table-icon" /></a></div>
                </div>
                <div className="editor__table-item">
                  <p className="editor__table-name">Главная</p>
                  <div className="editor__table-code"><a href="#" className="editor__table-code-link"><img src="/images/admin/code.svg" alt="" className="editor__table-icon" /></a></div>
                </div>
                <div className="editor__table-item">
                  <p className="editor__table-name">Главная</p>
                  <div className="editor__table-code"><a href="#" className="editor__table-code-link"><img src="/images/admin/code.svg" alt="" className="editor__table-icon" /></a></div>
                </div>
                <div className="editor__table-item">
                  <p className="editor__table-name">Главная</p>
                  <div className="editor__table-code"><a href="#" className="editor__table-code-link"><img src="/images/admin/code.svg" alt="" className="editor__table-icon" /></a></div>
                </div>
                <div className="editor__table-item">
                  <p className="editor__table-name">Главная</p>
                  <div className="editor__table-code"><a href="#" className="editor__table-code-link"><img src="/images/admin/code.svg" alt="" className="editor__table-icon" /></a></div>
                </div>
                <div className="editor__table-item">
                  <p className="editor__table-name">Главная</p>
                  <div className="editor__table-code"><a href="#" className="editor__table-code-link"><img src="/images/admin/code.svg" alt="" className="editor__table-icon" /></a></div>
                </div>
              </div>
            </div>
        </section>
    )
}

export default EditorPage