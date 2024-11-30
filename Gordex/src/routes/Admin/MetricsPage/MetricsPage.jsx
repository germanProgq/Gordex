import "./styles/style.css"

function MetricsPage() {
    return (
        <section className="metrics">
            <div className="container metrics__container">
                <div className="metrics__general">
                    <h2 className="metrics__title">Посещения сайта</h2>
                    <div className="metrics__items">
                        <div className="metrics__item">
                            <p className="metrics__item-value">10230</p>
                            <p className="metrics__item-time">Месяц</p>
                        </div>
                        <div className="metrics__item">
                            <p className="metrics__item-value">3950</p>
                            <p className="metrics__item-time">Неделя</p>
                        </div>
                        <div className="metrics__item">
                            <p className="metrics__item-value">600</p>
                            <p className="metrics__item-time">7 августа</p>
                        </div>
                        <div className="metrics__item">
                            <p className="metrics__item-value">184</p>
                            <p className="metrics__item-time">8 августа</p>
                        </div>
                        <div className="metrics__item">
                            <p className="metrics__item-value">160</p>
                            <p className="metrics__item-time">9 августа</p>
                        </div>
                        <div className="metrics__item">
                            <p className="metrics__item-value">248</p>
                            <p className="metrics__item-time">10 августа</p>
                        </div>
                    </div>
                </div>
                <div className="metrics__current">
                    <h2 className="metrics__title">Посещения сайта</h2>
                    <p className="metrics__current-value">38</p>
                </div>
            </div>
        </section>
    )
}

export default MetricsPage