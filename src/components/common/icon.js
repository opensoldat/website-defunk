import React from 'react'
import styled from 'styled-components'

const viewBoxes = {
    soldat: [823.411, 180.667],
    steam: [397, 123],
    steam_symbol: [122.044, 123.364],
    thd: [474, 163],
    thd_symbol: [480, 480],
};
const defaultViewBox = [24, 24];

const Icon = (props) => {

    const {name, inline, raw, className, ...other} = props;

    const viewBox = viewBoxes[name.replace('-', '_')] || defaultViewBox;
    const widthRatio = viewBox[0] / viewBox[1];

    let wrapperClass = '';
    let svgClass = '';

    if(raw){
        svgClass = className;
    }else{
        wrapperClass = className;
    }

    const IconWrapper = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      ${inline && 'display: inline-flex;'}
      width: ${widthRatio}em;
      `;

    const Svg = styled.svg`
        ${!raw && `
        display: block;
        width: 100%;
        height: 1em;
        stroke-width: 0;
        stroke: currentColor;
        fill: currentColor;
       `}`;

    const Inner = (
        <Svg viewBox={'0 0 ' + viewBox.join(' ')} xmlns="http://www.w3.org/2000/svg" className={svgClass} {...other}>
            <use xlinkHref={`#icons_${name}`}/>
        </Svg>
    );

    return raw ? [Inner] : (<IconWrapper className={wrapperClass}>{Inner}</IconWrapper>);
};

export default Icon