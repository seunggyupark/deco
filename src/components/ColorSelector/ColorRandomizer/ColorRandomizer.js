import React from 'react';
import './ColorRandomizer.scss';

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default function ColorRandomizer(props) {
    const colorRandomizerHandler = () => {
        const getRandomInt = max => {
            return Math.floor(Math.random() * Math.floor(max));
        }
        const randomHex = rgbToHex(getRandomInt(256), getRandomInt(256), getRandomInt(256));
        props.setColor(randomHex);
        props.pickedColorHandler('');
    }

    return (
        <button className='ionButton' onClick={colorRandomizerHandler}><ion-icon name="dice-outline" /></button>
    );
}