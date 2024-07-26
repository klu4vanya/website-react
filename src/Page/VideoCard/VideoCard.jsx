import React from 'react'
import './VideoCard.css'
export default function ({ name, age, video }) {
    return (
        <div className="review-card" style={{ margin: '0 4%', top: 0 }}>
            <video className='video' controls={true} loop>
                <source src={video} />
            </video>
            <div className='vcard-info-wrapper'>
                <h6>{name}</h6>{'\u00A0'}
                <h6>{age} лет</h6>
            </div>
        </div>
    )
}
