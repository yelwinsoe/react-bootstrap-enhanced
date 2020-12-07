import React, { useState } from 'react'

const Layout = (props) => {
  console.log(props.show)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992)
  const [showSidebar, setShowSideBar] = useState(typeof props.show !== 'undefined' ? props.show : true)

  const handleClickOutside = () => {
    if (isMobile && showSidebar) {
      setShowSideBar(false)
    }
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 992)
    })
    window.addEventListener('mousedown', handleClickOutside)
  }

  return (
    <div>
      <div
        style={{
          width: props.width,
          backgroundColor: props.backgroundColor,
          position: 'fixed',
          height: '100%',
          zIndex: '99'
        }}
        hidden={!showSidebar}
      >
        {props.sidebar}
      </div>
      <div style={{ paddingLeft: (!isMobile && showSidebar) ? props.width : '0px' }}>
        <div>{props.topbar}</div>
        <div style={{ padding: '15px' }}>{props.content}</div>
      </div>
    </div>
  )
}

export default Layout
