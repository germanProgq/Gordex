import Gallery from "../GoodsPage/Gallery"
import "./styles/style.css"
import { useRef, useState } from "react";

function EditorPage() {
  const galleryRefLogoCurrentNumOne = useRef();
  const galleryRefLogoCurrentNumTwo = useRef();
  const [firstLogo, setFirstLogo] = useState('')
  const [secondLogo, setSecondLogo] = useState('')
  const [siteName, setSiteName] = useState('')
  const [changedWord, setChangedWord] = useState('')
  const [wordToChange, setWordToChange] = useState('')


  const getGalleryItems = () => {
    if (galleryRefLogoCurrentNumOne.current) {
      const firstLogo = galleryRefLogoCurrentNumOne.current.getItems();
      setFirstLogo(firstLogo)
    }
    if (galleryRefLogoCurrentNumTwo.current) {
      const secondLogo = galleryRefLogoCurrentNumTwo.current.getItems();
      setSecondLogo(secondLogo)
    }
  }
    return (
        <section className="editor">
            <div className="container editor__container">
              <div className="editor__logos">
                <div className="editor__logos-first">
                  <h2 className="editor__logos-title">Сменить логотип №1</h2>
                  <div className="editor__logos-items">
                    <Gallery ref={galleryRefLogoCurrentNumOne}/>
                  </div>
                </div>
                <div className="editor__logos-second">
                  <h2 className="editor__logos-title">Сменить логотип №2</h2>
                  <div className="editor__logos-items">
                    <Gallery ref={galleryRefLogoCurrentNumTwo}/>
                  </div>
                </div>
              </div>
              <div className="editor__texts">
                <div className="editor__texts-box">
                  <h2 className="editor__texts-title">Сменить название</h2>
                  <form className="editor__texts-form">
                    <input placeholder="GORDEX" type="text" className="editor__texts-input" onChange={(e) => setSiteName(e.target.value)} />
                    <button className="editor__texts-btn">Выбранный</button>
                  </form>
                  {/* <form className="editor__texts-form">
                    <input type="text" className="editor__texts-input" />
                    <button className="editor__texts-btn">Выбрать</button>
                  </form> */}
                </div>
                <div className="editor__texts-box">
                  <h2 className="editor__texts-title">Сменить слово</h2>
                  <form className="editor__texts-form">
                    <input placeholder="Введите слово" type="text" className="editor__texts-input" onChange={(e) => setWordToChange(e.target.value)} />
                    <button className="editor__texts-btn">Выбранный</button>
                  </form>
                  <form className="editor__texts-form">
                    <input type="text" className="editor__texts-input" onChange={(e) => setChangedWord(e.target.value)}/>
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