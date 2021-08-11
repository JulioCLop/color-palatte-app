import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palatte.css';


export default class Palatte extends Component {
    render() {

        const colorBoxes = this.props.colors.map(color => (
            <ColorBox background={color.color} name={color.name} />
        ) )
        return (
            <div className="Palette">
                  {/*navbar goes here*/} 
               <div className="Palatte-color">
                  {colorBoxes}
                </div>
                  {/*Footer */}
            </div>
        )
    }
}
