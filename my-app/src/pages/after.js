// after.js
import React from 'react';
import './main.css'

function After() {

    const frameSrc = 'http://172.25.244.37:6080'; 

    return (
        <div>
            <div className="frame-container">
                <iframe title="main-frame" src={frameSrc}></iframe>
            </div>
        </div>
    );
}

export default After;
