import React from 'react';
import './ColorCard.scss';

export default function ColorCard(props) {
    const classes = ['card'];
    if (props.selected) classes.push('selected');

    return (
        <div style={{backgroundColor: props.hex}} className={classes.join(' ')} onClick={() => props.pickedColorHandler(props.hex)}/>
    );
}