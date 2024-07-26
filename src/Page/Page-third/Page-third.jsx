import React, { Component } from 'react'
import './Page-third.css';
export default class PageThird extends Component {
    render() {
        return (
            <div id='page-third-container' className='page-third-container'>
                <div className='title-wrapper'>
                    <span id='one'>01</span>
                    <span id='title'>Процесс обучения</span>
                </div>
                <div className='programm-wrapper'>
                    <span id='title-01'>Программа </span><br /><br />
                    <span id='subtitle-01'>Я нахожу индивидуальный подход к каждому ученику и<br /> выстраиваю программу сообразно его интересам и желаниям. Моя главная цель— заинтересовать в языке, показать увлекательность этого процесса, сделать атмосферу на уроке максимально комфортной и дружелюбной.</span>
                </div>
                <div className='number-3-wrapper'>
                    <span id='two'>02</span></div>
                <div className='desc-02-wrapper'>
                    <span id='three'>03</span>
                    <div className='description-02'>
                        <span id='title-02'>Чтение</span><br /><br />
                        <span id='subtitle-02'>Чтение адаптированной литературы (выбирается четко по уровню обучающегося) часто включено в мою программу помимо классического прохождения лексико-грамматического курса. Я дополняю занятия увлекательными мультфильмами и кино, интерактивными заданиями и играми. </span>
                    </div>
                </div>
                <div>
                    <div className='description-03'>
                        <span id='title-03'>Учебники</span><br /><br />
                        <span id='subtitle-03'>Я занимаюсь по учебникам исключительно зарубежного образца (Cambridge & Oxford University Press) и предоставляю ученикам доступ ко всем как электронным материалам, так и печатным книгам. </span>
                    </div>
                    <div id='four'>04</div>
                </div>
                <div className='description-04'>
                    <span id='title-04'>Беседа</span><br /><br />
                    <span id='subtitle-04'>Я позиционирую себя как носитель языка (мой уровень языка C1+), поэтому, постепенно улучшая разговорные навыки обучающихся, я перехожу с ним на английский. Любые возникающие в процессе трудности моментально устраняются переводом, так что не стоит переживать насчет непонимания каких-либо обсуждаемых вопросов. </span>
                </div>
            </div>
        )
    }
}
