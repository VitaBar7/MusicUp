import React, { MouseEvent } from 'react'



const ButtonComponent = ({onMouseMove}) => {

    const handleMouseEvent = (e) => {
        e.preventDefault()
        const stickyButton = document.querySelector("#sticky")
            let x = e.pageX
            let y = e.pageY
            
            stickyButton.style.top = y + "px"
            stickyButton.style.left = x + "px"
    }

    return <button id= "sticky" className="z-999 fixed pointer-events-none whitespace-pre-line bg-orange/80 text-white rounded-full h-28 w-28 p-4 self-end hover:cursor-pointer shadow hover:shadow-lg" onMouseMove={handleMouseEvent}></button>
} 



   /*  document.addEventListener("mousemove", (e:MouseEvent) => {
      let x =  e.pageX
      let y = e.pageY

      stickyButton.style.top = y + "px"
      stickyButton.style.left = y + "px"
    }) */


export default ButtonComponent