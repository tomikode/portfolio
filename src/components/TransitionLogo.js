import React, { useEffect } from 'react'

const TransitionLogo = ({ location }) => {


    useEffect(() => {
        const transferScreen = document.getElementById('transferScreen')
        const transferLogo = document.getElementById('transferLogo')
        transferScreen.classList.add('showScreen')
        transferLogo.classList.add('showLogo')
        setTimeout(() => {
            transferScreen.classList.add('hideScreen')
            transferLogo.classList.add('hideLogo')
        }, 1300)
        setTimeout(() => {
            transferScreen.classList = 'transferLogoScreen'
            transferLogo.classList = 'transferLogo'
        }, 1800)
    }, [location.pathname])


  return (
    <div id='transferScreen' className='transferLogoScreen'>
        <img id='transferLogo' className='transferLogo' src='tplogo.png' />
    </div>
  )
}

export default TransitionLogo