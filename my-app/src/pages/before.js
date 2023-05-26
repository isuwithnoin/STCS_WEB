// before.js
import React from 'react';
import './main.css'

function Before() {

    const frameSrc = 'http://172.25.244.37:6081'; 

    return (
        <div>
            <div className="frame-container">
                <iframe title="main-frame" src={frameSrc}></iframe>
            </div>
        </div>
    );
}
export default Before;
