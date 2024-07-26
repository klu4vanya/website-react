import React, { Component } from 'react'
import './Page-second.css';
export default class PageSecond extends Component {
    render() {
        return (
            <div className='page-wrapper'>
                <div className='pink-background'></div>
                <div className='about-wrapper'>
                    <div className='book-image'>
                        <img src='./assets/book.jpg'></img>
                    </div>
                    <div className='about'>
                        <span id='title'>Обо мне</span>
                        <span id='subtitle'>Я сертифицированный специалист в области изучения английского языка. У меня есть опыт работы с детьми (6-15 лет) и людьми старшего возраста (25-30+).<br/><br/>



                            Каждый год я сама посещаю <span>лингвистические школы/курсы за рубежом</span>, знакомлюсь с современными тенденциями  в английском языке и передаю эти знания ученикам. Поэтому программа постоянно обновляется, и все устаревшее сразу же отсекается.<br/><br/>



                            ОБРАЗОВАНИЕ:
                            Я студентка 3 курса факультета журналистики <span>МГУ им. М.В. Ломоносова</span> (обучение происходит с уклоном в филологию и лингвистику).<br/><br/>



                            Мои навыки преподавания подтверждены международным сертификатом <span>TEFL 2021 года (Teaching English as a Foreign Language).</span></span>
                    </div>
                </div>
            </div>
        )
    }
}
