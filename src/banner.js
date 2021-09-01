import React from 'react';
import "./banner.css";


function banner() {
    return (
        <div className='font'>
            Hello World
            I love my country
            {/* <br>I love my country</br> */}
            {/* {`Hello World \n I love my country`} */}
            {'Line one\nLine two'}
        </div>
    )
}

export default banner
