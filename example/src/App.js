import React, { useState, useEffect } from 'react'

import { PaginationPlus } from 'react-bootstrap-extended'
import 'react-bootstrap-extended/dist/index.css'

const App = () => {
  const test = Array.from(Array(1000), (e, i) => {
    return i
  })
  const [pageSize, setPageSize] = useState(5)
  const [records, setRecords] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const handleOnChange = (page) => {
    setCurrentPage(page)
    setRecords(test.splice(pageSize * (page - 1), pageSize))
  }

  useEffect(() => {
    handleOnChange(currentPage)
    // eslint-disable-next-line
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
        // allPageSize={[2, 5, 7, 300]}
        // currentPage={currentPage}
        onChange={handleOnChange}
        onPageSizeChange={(val) => {
          setPageSize(val)
        }}
        style={{ float: 'right' }}
        // size='sm'
      />
    </>
  )
}

export default App
