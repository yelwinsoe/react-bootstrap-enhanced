import React, { useRef, useState } from 'react'

const Sidebar = (props) => {
  const [show, setShow] = useState(props.show || true)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992)

  const sidebarRef = useRef(null)
  const handleClickOutside = (e) => {
    if (sidebarRef && !sidebarRef.current.contains(e.target)) {
      // if (typeof props.onChange !== 'undefined') {
      //   props.onChange(isMobile ? false : !show)
      // }
      // if (show) { setShow(false) }
    }
  }

  if (typeof window !== 'undefined') {
    // console.log(window.innerWidth < 992)
    // props.onChange(window.innerWidth < 992 ? false : !show)
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 992)
    })
    window.addEventListener('mousedown', handleClickOutside)
  }

  return (
    <div
      style={{
        width: props.width || '200px',
        backgroundColor: props.backgroundColor || 'whitesmoke',
        position: 'fixed',
        minHeight: '100%',
        zIndex: '99'
      }}
      hidden={!show}
      ref={sidebarRef}
    >
      {props.children}
    </div>
  )
}

Sidebar.Brand = (props) => {
  return (
    <div style={props.style}>
      {props.children}
    </div>
  )
}

export default Sidebar
