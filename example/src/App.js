import React, { useState, useEffect } from 'react'

import { PaginationPlus } from 'react-bootstrap-extended'
import 'react-bootstrap-extended/dist/index.css'

const App = () => {
  const test = Array.from(Array(1000), (e, i) => {
    return i
  })
  const [pageSize, setPageSize] = useState(20)
  const [records, setRecords] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const handleOnChange = (page) => {
    setCurrentPage(page)
    setRecords(test.splice(pageSize * (page - 1), pageSize))
  }

  useEffect(() => {
    handleOnChange(currentPage)
  }, [pageSize])

  return (
    <>
      <p onClick={() => {
        setPageSize(30)
        handleOnChange(1)
      }}
      >Test
      </p>
      {records.map((t) => {
        return <div key={t}>{'Create React Library Example [' + t + '] 😄'}</div>
      })}
      <PaginationPlus
        total={test.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onChange={handleOnChange}
        style={{ float: 'right' }}
        size='lg'
      />
    </>
  )
}

export default App
