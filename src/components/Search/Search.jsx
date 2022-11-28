import React from 'react'

export const Search = () => {
  return (
    <div className="search-wrapper">
      <div className="search-menu">
        <a href="">Видео</a>
        <a href="">Картинки</a>
        <a href="">Новости</a>
        <a href="">Карты</a>
        <a href="">Маркет</a>
        <a href="">Переводчик</a>
        <a href="">Эфир</a>
        <a href="">Еще</a>
      </div>
      <div className="search-input">
        <span className="logo">Netology</span>
        <div>
          <input type="text" placeholder='search...' />
          <button>Найти</button>
        </div>
      </div>
      <div className="search-example">
        Найдется все. Например, <span>фаза луны сегодня</span>
      </div>
    </div>
  )
}
