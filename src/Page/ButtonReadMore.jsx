import React, { Component } from 'react'
// import { Button } from "@material-tailwind/react";
export default class ButtonReadMore extends Component {
    render() {
        return (
            <div>
                <a style={{color: 'black', marginLeft: "40px"}} href='#footer-info' disabled='padding' variant="text" className="flex items-center gap-2">
                   
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                    </svg>
                </a>
            </div>
        )
    }
}
