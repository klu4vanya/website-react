import React, { Component } from 'react'
import ButtonReadMore from '../ButtonReadMore'
import './Page-first.css';
export default class PageFirst
    extends Component {
    render() {
        return (
            <div>
                <div className='green-background'></div>
                <div className='dasha-image'>
                    <img src="./assets/Portrait.jpg" alt='portrait'></img>
                </div>
                <div className='info'>
                    <span id='learn-eanglish'>Learn English <br />with Dasha</span>
                    <div className='button-wraper' style={{marginTop: "5%"}}>
                        <span>Записаться на занятие</span>
                        <ButtonReadMore />
                    </div>
                </div>
            </div>
        )
    }
}
