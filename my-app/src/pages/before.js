// before.js
import React from 'react';
import './main.css'

function Before() {

    const frameSrc = 'https://www.daum.net'; 

    return (
        <div>
            <div className="frame-container">
                <iframe title="main-frame" src={frameSrc}></iframe>
            </div>
        </div>
    );
}
export default Before;
