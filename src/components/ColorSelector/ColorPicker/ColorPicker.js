import React, { useState } from 'react';
import { HexColorPicker } from "react-colorful";
import './ColorPicker.scss';

export default function ColorPicker(props) {
    const [ showPicker, setShowPicker ] = useState(false);

    let style;
    if (!showPicker) {
        style = {display: "none"};
    } else {
        style = {display: "block"};
    }

    const togglePicker = () => {
        setShowPicker(!showPicker);
    };

    const debounce = (fn, delay) => {
        let timer = null;
        return function (...args) {
            const context = this;
            timer && clearTimeout(timer);
            timer = setTimeout(() => {
                fn.apply(context, args);
            }, delay);
        };
    };

    const changeColor = debounce((color) => props.setColor(color), 300);

    return (
        <>
            <button className='ionButton' onClick={togglePicker}><ion-icon name="color-palette-outline" /></button>
            <div className="picker-container" style={style}>
                <HexColorPicker className="picker" color={props.color ? props.color : "#EC7E87"} onChange={changeColor} />
            </div>
        </>
    );
}