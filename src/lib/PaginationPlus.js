import React, { useState, useEffect } from 'react'
import { Pagination, Form, Button, Row, Col, Dropdown } from 'react-bootstrap'

const PaginationPlus = (props) => {
  if (typeof props.total === 'undefined' || typeof props.pageSize === 'undefined') {
    return <p>Props total and pageSize can't be empty.</p>
  }
  const [currentPage, setCurrentPage] = useState(props.currentPage ? props.currentPage - 1 : 0)
  const [pageSize, setPageSize] = useState(props.pageSize)
  const [pagiItems, setPagiItems] = useState([])
  const [goToPage, setGoToPage] = useState(null)
  const allPageSize = props.allPageSize ? props.allPageSize : [10, 20, 40, 80, 160]
  let numOfPage = Math.ceil(props.total / props.pageSize)

  const handleChange = (e) => {
    if (typeof e.target.text !== 'undefined' && parseInt(e.target.text) - 1 !== currentPage) {
      setCurrentPage(parseInt(e.target.text) - 1)
      if (typeof props.onChange !== 'undefined') {
        props.onChange(parseInt(e.target.text))
      }
    }
  }

  const handleGoTo = (e) => {
    if (goToPage < numOfPage && goToPage >= 0) {
      setCurrentPage(goToPage)
      if (typeof props.onChange !== 'undefined') {
        props.onChange(goToPage + 1)
      }
    }
    e.preventDefault()
    e.stopPropagation()
  }

  const handleCustomPerPage = (val) => {
    setCurrentPage(0)
    setPageSize(val)
    numOfPage = Math.ceil(props.total / val)
    populatePageItems()
    if (typeof props.onPageSizeChange !== 'undefined') {
      props.onPageSizeChange(val)
    }
  }

  const updateCurrentPage = (page) => {
    setCurrentPage(page)
    if (typeof props.onChange !== 'undefined') {
      props.onChange(page + 1)
    }
  }

  const populatePageItems = () => {
    if (numOfPage < 6) {
      setPagiItems(Array.from(Array(numOfPage), (e, i) => { return i }))
    } else {
      if (currentPage < 3) {
        const tempPagiItems = Array.from(Array(6), (e, i) => { return i })
        tempPagiItems.push('dotted')
        tempPagiItems.push(numOfPage - 1)
        setPagiItems(tempPagiItems)
      } else {
        const tempPagiItems = []
        if (currentPage - 2 > 0) {
          if (currentPage - 2 !== 0) {
            tempPagiItems.push(0)
            if (currentPage - 3 !== 0) {
              tempPagiItems.push('dotted')
            }
          }
          tempPagiItems.push(currentPage - 2)
        }
        if (currentPage - 1 > 1) {
          tempPagiItems.push(currentPage - 1)
        }
        tempPagiItems.push(currentPage)
        if (currentPage + 1 < numOfPage) {
          tempPagiItems.push(currentPage + 1)
        }
        if (currentPage + 2 < numOfPage) {
          tempPagiItems.push(currentPage + 2)
          if (currentPage + 2 !== numOfPage - 1) {
            if (currentPage + 3 < numOfPage - 1) {
              tempPagiItems.push('dotted')
            }
            tempPagiItems.push(numOfPage - 1)
          }
        }
        setPagiItems(tempPagiItems)
      }
    }
  }

  useEffect(() => {
    populatePageItems()
  }, [numOfPage, currentPage])

  return (
    <Row>
      <Col xs={12} md={typeof props.onPageSizeChange !== 'undefined' ? 9 : 10}>
        <Pagination style={props.style} size={props.size}>
          <Pagination.First onClick={() => {
            updateCurrentPage(0)
          }}
          />
          <Pagination.Prev onClick={() => {
            if (currentPage > 0) {
              updateCurrentPage(currentPage - 1)
            }
          }}
          />
          {pagiItems.map((i) => {
            if (i === 'dotted') {
              return <Pagination.Item key={Math.random()} disabled>...</Pagination.Item>
            } else {
              return <Pagination.Item key={i} active={i === currentPage} onClick={handleChange}>{i + 1}</Pagination.Item>
            }
          })}
          <Pagination.Next onClick={() => {
            if (currentPage < numOfPage - 1) {
              updateCurrentPage(currentPage + 1)
            }
          }}
          />
          <Pagination.Last onClick={() => {
            updateCurrentPage(numOfPage - 1)
          }}
          />
        </Pagination>
      </Col>
      {typeof props.onPageSizeChange !== 'undefined' &&
        <Col md={1}>
          <Dropdown style={{ width: '100%' }}>
            <Dropdown.Toggle id='dropdown-basic' size={props.size}>
              {pageSize} / Page
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {allPageSize.map((ps) => {
                return <Dropdown.Item key={ps} eventKey={ps} onClick={(e) => { handleCustomPerPage(parseInt(e.target.text)) }}>{ps} / Page </Dropdown.Item>
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Col>}
      <Col md={2}>
        <Form
          inline
          onSubmit={handleGoTo}
          style={{ width: '100%' }}
        >
          {/* <Form.Label htmlFor='inlineFormInputName2'>
            Go to
          </Form.Label> */}
          <Form.Control
            type='number'
            className='mb-1 mr-sm-1'
            id='inlineFormInputName2'
            placeholder={currentPage + 1}
            min={0}
            max={numOfPage}
            style={{ width: '40%', marginLeft: '20px' }}
            size={props.size}
            onChange={(e) => {
              console.log(e.target.value)
              setGoToPage(parseInt(e.target.value) - 1)
            }}
          />
          <Button type='submit' size={props.size} style={{ marginTop: '-5px' }}>Go</Button>
        </Form>
      </Col>
    </Row>
  )
}

export default PaginationPlus
