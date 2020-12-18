import React, { useState, useEffect } from 'react'
import { Nav } from 'react-bootstrap'
import { PaginationPlus, Layout } from 'react-bootstrap-extended'
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

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  useEffect(() => {
    handleOnChange(currentPage)
    // eslint-disable-next-line
  }, [pageSize])

  return (
    <>
      <Layout
        sidebarWidth='300px'
        // sidebarBackgroundColor='#ccc'
        showSidebar={showSidebar}
        onSidebarChange={(status) => {
          setShowSidebar(status)
        }}
        sidebar={
          <div>
            <div style={{ textAlign: 'center', color: 'white' }}>
              <br />
              <img src={logo} alt='test' width={50} />
              <h5>React Bootstrap</h5>
              <br />
            </div>
            <Nav defaultActiveKey='/home' className='flex-column'>
              <Nav.Link href='/home'>Active</Nav.Link>
              <Nav.Link eventKey='link-1'>Link</Nav.Link>
              {/* <Nav.Link eventKey='link-2'>Link</Nav.Link>
              <Nav.Link eventKey='disabled' disabled>
                Disabled
              </Nav.Link> */}
            </Nav>
          </div>
        }
        topbar={
          <div>
            <Nav defaultActiveKey='/home'>
              <Nav.Link onClick={handleShowSidebar}>Sidebar</Nav.Link>
              <Nav.Link href='/home'>Active</Nav.Link>
              {/* <Nav.Link eventKey='link-1'>Link</Nav.Link>
              <Nav.Link eventKey='link-2'>Link</Nav.Link>
              <Nav.Link eventKey='disabled' disabled>
                Disabled
              </Nav.Link> */}
            </Nav>
          </div>
        }
        content={
          <div>
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
              size='md'
            />
          </div>
        }
        contentStyle={{ marginLeft: '15px' }}
      />
    </>
  )
}

export default App
