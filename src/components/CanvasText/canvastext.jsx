import React from 'react'

export default function CanvasText() {
    
    const app = new PIXI.Application({
        width: appWidth,
        height: appHeight,
        antialias: true,
        transparent: false,
        resolution: 1,
        backgroundColor: 0xeeeeee
    });
    document.getElementById("screen").appendChild(app.view);
  return (
    <div id="screen"></div>
  )
}
