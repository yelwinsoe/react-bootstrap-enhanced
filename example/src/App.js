import React, { useState, useEffect } from 'react'
import { Nav, Button } from 'react-bootstrap'
import { PaginationPlus, Sidebar } from 'react-bootstrap-extended'
import 'react-bootstrap-extended/dist/index.css'
import logo from './img/react-bootstrap.svg'

const App = () => {
  const test = Array.from(Array(1000), (e, i) => {
    return i
  })
  const [pageSize, setPageSize] = useState(5)
  const [records, setRecords] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const [showSidebar, setShowSidebar] = useState(true)

  const handleOnChange = (page) => {
    setCurrentPage(page)
    setRecords(test.splice(pageSize * (page - 1), pageSize))
  }

  const handleOnSidebarChange = (show) => {
    console.log(show)
    setShowSidebar(show)
  }

  useEffect(() => {
    handleOnChange(currentPage)
    // eslint-disable-next-line
  }, [pageSize])

  return (
    <>
      <Sidebar
        width='250px'
        backgroundColor='#000000'
        show
        onChange={handleOnSidebarChange}
      >
        <Sidebar.Brand style={{ color: 'white' }}>
          <br />
          <div style={{ textAlign: 'center' }}>
            <img src={logo} width={50} /> <br />
            <h4>React Bootstrap</h4>
          </div>
          <br />
        </Sidebar.Brand>
        <Nav defaultActiveKey='/home' className='flex-column'>
          <Nav.Link href='/home'>Active</Nav.Link>
          <Nav.Link eventKey='link-1'>Link</Nav.Link>
          <Nav.Link eventKey='link-2'>Link</Nav.Link>
          <Nav.Link eventKey='disabled' disabled>
              Disabled
          </Nav.Link>
        </Nav>
      </Sidebar>
      <div style={{ paddingLeft: showSidebar ? '265px' : '15px' }}>
        <Button onClick={() => { setShowSidebar(!showSidebar) }}>
          {showSidebar ? 'Hide Sidebar' : 'Show Sidebar'}
        </Button>
        {/* <p onClick={() => {
          setPageSize(30)
          handleOnChange(1)
        }}
        >Test
        </p> */}
        {records.map((t) => {
          return <div key={t}>{'Create React Library Example [' + t + '] 😄'}</div>
        })}
        <PaginationPlus
          total={test.length}
          pageSize={pageSize}
          // allPageSize={[2, 5, 7, 300]}
          // currentPage={currentPage}
          onChange={handleOnChange}
          onPageSizeChange={(val) => {
            setPageSize(val)
          }}
          style={{ float: 'right' }}
          // size='sm'
        />
      </div>
    </>
  )
}

export default App
