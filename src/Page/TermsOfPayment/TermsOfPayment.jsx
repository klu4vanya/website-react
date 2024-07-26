import React, { Component } from 'react'
import './TermsOfPayment.css'
import CardPayment from './CardPayment/CardPayment'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
const paymentData = [
  {
    title: 'Полный курс онлайн',
    amount: 1500,
    subtitle: 'Подходит для всех уровней',
    more: 'Бесплатная отмена/перенос занятия за сутки \n Предоплата за месяц \n Связь с преподавателем 24/7'
  },
  {
    title: 'Полный курс оффлайн',
    amount: 1750,
    subtitle: 'Подходит для всех уровней',
    more: 'Бесплатная отмена/перенос занятия за сутки\n Предоплата за месяц\n Выезд к ученику обговаривается персонально'
  },
  {
    title: 'Подготовка к ОГЭ/ЕГЭ по английскому',
    amount: 3000,
    subtitle: 'Подходит для учеников средней и старшей школы',
    more: 'Работа по стандартам ФИПИ\nПредоплата за месяц\nЕженедельный контроль прогресса\nКонсультация с экспертом\nПробники каждые 30 дней'
  }
]

export default class TermsOfPayment extends Component {
  render() {
    return (
      <div id='container-pay' className='container-pay'>
        <div className='title'>Условия оплаты</div>
        <div className='subtitle'>Выберите подходящую услугу</div>
        <div className='card-container'>
          <CardPayment {...paymentData[0]} />
          <CardPayment {...paymentData[1]} />
          <CardPayment {...paymentData[2]} />
        </div>
        <Carousel style={{ width: "80%", margin: "0 auto" }} indicators={false} >
          <Carousel.Item interval={5000}>
          <CardPayment {...paymentData[0]} />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
          <CardPayment {...paymentData[1]} />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
          <CardPayment {...paymentData[2]} />
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
