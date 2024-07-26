import React, { Component } from 'react'

import './CardPayment.css'
export default function CardPayment({title, subtitle, amount, more}) {
        return (
            <div className='card-wrapper'>
                <div className='card-data'>
                    <div className='title-payment'>{title}</div>
                    <div className='amount'>{amount}₽</div>
                    <div className='subtitle-payment'>{subtitle}</div>
                </div>
                <div className='more'>
                    {more.split('\n').map((line, i) =>(
                        <p key={i} style={{marginBottom: '5%'}}>
                            {line}
                            <br/>
                        </p>
                    ))}
                </div>
            </div>
        )
    }
