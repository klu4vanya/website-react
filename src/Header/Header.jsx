import React, { Component } from 'react'
import './Header.css';
export default class Header extends Component {
  render() {
    return (
      <div className='menu-wrapper'>
        <input type="checkbox" id="burger-checkbox" class="burger-checkbox" />
        <label for="burger-checkbox" class="burger"></label>
        <ul class="menu-list">
            <a href='#page-third-container'>Процесс обучения</a>
            <a href='#container-pay'>Условия оплаты</a>
            <a href='#title-review'>Отзывы учеников</a>
        </ul>
      </div>
    )
  }
}
