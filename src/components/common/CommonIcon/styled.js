import styled, { css } from "styled-components"

export const IconWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
${props => props.isInline && "display: inline-flex;"}
width: ${props => (props.ratio ? props.ratio : 1)}em;
`

export const Svg = styled.svg`
  ${props =>
    props.isInline === false &&
    css`
      display: block;
      width: 100%;
      height: 1em;
      stroke-width: 0;
      stroke: currentColor;
      fill: currentColor;
    `}
`
