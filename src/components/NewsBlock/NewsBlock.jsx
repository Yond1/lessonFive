import React from 'react'

export const NewsBlock = () => {
    return (
        <div className="news-wrapper">
            <div className="news-menu">
                <span>Сейчас в СМИ</span>
                <span>В Германии</span>
                <span>Рекомендуем</span>
            </div>
            <div className="news-items">
                <a href="#">netology</a>
                <a href="#">netology</a>
                <a href="#">netology</a>
                <a href="#">netology</a>
                <a href="#">netology</a>
            </div>
            <div className="news-course">
                <span>EUR</span>
                <span>USD</span>
                <span>RUB</span>
            </div>
        </div>
    )
}
