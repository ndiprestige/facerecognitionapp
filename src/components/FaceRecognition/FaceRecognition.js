import React from 'react';
import './FaceRecognition.css';

const FaceRecognition=({imageUrl,box})=>{
    return (
        <div className='center ma'>
            <div className='absolute mt3'>
                <img id='inputImage' className='imageDetect' src={imageUrl} alt=''/>
                <div className='bounding-box' style={{top:box.topRow,right:box.rightCol,bottom:box.bottomRow,left:box.leftcol}}></div>
            </div>
        </div>
    );
}
export default FaceRecognition;
