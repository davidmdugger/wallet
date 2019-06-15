import React from 'react'
import BackgroundImage from 'gatsby-background-image';

import './BackgroundSection.scss';

export default function BackgroundSection({ img, styleClass, children, title }) {
  return (
    <BackgroundImage
      className={styleClass}
      fluid={img}
    >
      <h1>{title}</h1>
      {children && children}
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background"
}