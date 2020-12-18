import React, { Fragment, useState, useRef } from 'react'

const Layout = (props) => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 992 : false)
  const showSidebar = typeof props.showSidebar !== 'undefined' ? props.showSidebar : true

  const sidebarRef = useRef(null)
  const topbarRef = useRef(null)
  const handleClickOutside = (e) => {
    if (window.innerWidth < 992 && showSidebar && typeof props.onSidebarChange !== 'undefined' && !sidebarRef.current.contains(e.target) && !topbarRef.current.contains(e.target)) {
      props.onSidebarChange(false)
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 992)
      if (typeof props.onSidebarChange !== 'undefined') {
        props.onSidebarChange(window.innerWidth > 992)
      }
    })
    window.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('load', () => {
      if (window.innerWidth < 992) {
        if (typeof props.onSidebarChange !== 'undefined') {
          props.onSidebarChange(false)
        }
      }
    })
  }

  const contentStyle = props.contentStyle || {}
  contentStyle.paddingLeft = (!isMobile && showSidebar) ? props.sidebarWidth || '250px' : '0px'

  return (
    <>
      <div
        style={{
          width: props.sidebarWidth || '250px',
          backgroundColor: props.sidebarBackgroundColor || 'black',
          position: 'fixed',
          height: '100%',
          zIndex: '99'
        }}
        hidden={!showSidebar}
        ref={sidebarRef}
      >
        {props.sidebar}
      </div>
      <div style={{ paddingLeft: (!isMobile && showSidebar) ? props.sidebarWidth || '250px' : '0px' }} ref={topbarRef}>{props.topbar}</div>
      <div style={contentStyle}>{props.content}</div>
    </>
  )
}

export default Layout
