import React, { Component } from 'react'
import './Reviews.css'
import VideoCard from '../VideoCard/VideoCard';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
const reviewData = [{
    name: "Демид,",
    age: 30,
    video: "./assets/demid.mp4  "
},
{
    name: "Даня,",
    age: 9,
    video: "./assets/danya.mp4"
},
{
    name: "Мухаммед,",
    age: 12,
    video: "./assets/muhammed.mp4"
}];

export default class Reviews extends Component {
    render() {
        return (
            <div className='container'>
                <div className='title-button-wrapper'>
                    <div id='title-review' className='title-review'>Отзывы учеников</div>
                </div>
                <div className="review-card-wrapper" >
                    <VideoCard {...reviewData[0]} />
                    <VideoCard {...reviewData[1]} />
                    <VideoCard {...reviewData[2]} />
                </div>
                <div >
                    <Carousel style={{width: "80%", margin: "0 auto", backgroundColor: "white"}} indicators={false}>
                        <Carousel.Item interval={5000}>
                            <VideoCard {...reviewData[0]} />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <VideoCard {...reviewData[1]} />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <VideoCard {...reviewData[2]} />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }
}
