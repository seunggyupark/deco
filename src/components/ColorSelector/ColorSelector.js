import React, { useState, useEffect } from 'react';
import './ColorSelector.scss';
import validator from 'validator';
import axios from 'axios';

import initialColorObject from '../../shared/initialColorObject';

import ColorPicker from './ColorPicker/ColorPicker';
import ColorRandomizer from './ColorRandomizer/ColorRandomizer';
import ColorCard from './ColorCard/ColorCard';

export default function ColorSelector(props) {
    const [ color, setColor ] = useState('');
    //Set an initial color object here
    const [ colorObj, setColorObj ] = useState(initialColorObject);
    var cards = [colorObj.seed.hex.value, colorObj.colors[0].hex.value, colorObj.colors[1].hex.value, colorObj.colors[2].hex.value];

    //UseEffect based on color that triggers and fetches the color object
    useEffect(() => {
        console.log('Running')
        let call = "";
        let input = color;
        input = input.replaceAll(' ', '');
        if (validator.isHexColor(input)) {
            input = input.replace('#', '');
            call = `https://www.thecolorapi.com/scheme?hex=${input}&mode=analogic-complement&count=3`;
        } else if (validator.isRgbColor(input, false)) {
            call = `https://www.thecolorapi.com/scheme?rgb=${input}&mode=analogic-complement&count=3`;
        }
        if (call) {
            axios.get(call)
            .then(response => {
            setColorObj(response.data)
            })
        }
    }, [color])

    return (
        <>
        <div className='colorSelector-gridContainer'>
            <div className='colorSelector-container'>
                <ColorPicker color={color} setColor={setColor} />
                <ColorRandomizer setColor={setColor} pickedColorHandler={props.pickedColorHandler}/>
                {cards.map((element, index) => <ColorCard key={index} hex={element} pickedColorHandler={props.pickedColorHandler} selected={element === props.pickedColor}/>)}
            </div>
        </div>
        </>
    );
}