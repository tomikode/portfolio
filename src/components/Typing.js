import React, { useEffect, useRef, useState } from 'react'

const Typing = () => {

    const toType = ["tomi piisila", "a web developer", "a uni student"]
    const typedPos = useRef(0)
    const phrasePos = useRef(0)

    const [typed, setTyped] = useState("")

    useEffect(() => {
        typeCycle()
    }, [])

    const typeCycle = () => {
        if (typedPos.current < toType[phrasePos.current].length) {
            typedPos.current++
            setTyped(toType[phrasePos.current].slice(0, typedPos.current))
            setTimeout(() => {
                typeCycle()
            }, 200)
        }
        else {
            const cursor = document.getElementById("cursor")
            cursor.classList.add("breathing")
            setTimeout(() => {
                cursor.classList.remove("breathing")
                backspaceCycle()
            }, 3000)
        }
    }

    const backspaceCycle = () => {
        if (typedPos.current > 0) {
            typedPos.current--
            setTyped(toType[phrasePos.current].slice(0, typedPos.current))
            setTimeout(() => {
                backspaceCycle()
            }, 100)
        } else {
            if (phrasePos.current === 2){
                phrasePos.current = 0
            } else {
                phrasePos.current++
            }
            const cursor = document.getElementById("cursor")
            cursor.classList.add("breathing")
            setTimeout(() => {
                cursor.classList.remove("breathing")
                typeCycle()
            }, 3000)
        }
    }

  return (
    <div className='centreContainer typedContainer'>
        <div className="centre name">
            <p>i am</p>
            <div className='typingLetters'>
            {typed}
            <div id="cursor" className='cursor' />
            </div>
        </div>
    </div>
  )
}

export default Typing