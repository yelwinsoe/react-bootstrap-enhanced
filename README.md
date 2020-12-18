# react-bootstrap-enhanced

> An enhanced version of react-bootstrap for common UI.

[![NPM](https://img.shields.io/npm/v/react-bootstrap-enhanced.svg)](https://www.npmjs.com/package/react-bootstrap-enhanced) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-bootstrap-enhanced react-bootstrap bootstrap
```

## Usage
### PaginationPlus
```jsx
import { PaginationPlus } from 'react-bootstrap-enhanced'

<PaginationPlus 
  total={100} // Mandatory - total number of record
  pageSize={10} // Mandatory - number of record per page
/>
```
#### Params
| Name | Default | Required | Description |
| ---- | ------- | ---------- | -------- |
| total | NA | Yes | Total number of record |
| pageSize | 10 | Yes | Number of record per page |
| allPageSize | [10, 20, 40, 80, 160] | No | List of pageSize to change pageSize |
| currentPage | 1 | No | Current selected page |
| style | NA | No | Optional Bootstrap pagination style |
| size | NA | No | Optional size 'sm/md/lg' |
| onChange | NA | No | On page changes, new page number as a param |
| onPageSizeChange | NA | No | New page size as a param, this is needed for page size selection |

### Layout
```jsx
import { Layout } from 'react-bootstrap-enhanced'

<Layout
  sidebarWidth='250px'
  sidebarBackgroundColor='#000'
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
      </Nav>
    </div>
  }
  topbar={
    <div>
      <Nav defaultActiveKey='/home'>
        <Nav.Link onClick={handleShowSidebar}>Sidebar</Nav.Link>
        <Nav.Link href='/home'>Active</Nav.Link>
      </Nav>
    </div>
  }
  content={
    <div>
      <h1>Hello World!</h1>
    </div>
  }
```
#### Params
| Name | Default | Required | Description |
| ---- | ------- | ---------- | -------- |
| sidebarWidth | 250px | No | Width of sidebar |
| sidebarBackgroundColor | black | No | Set sidebar background color |
| showSidebar | true | No | Whether to show sidebar or not on page load |
| onSidebarChange | NA | Yes | On sidebar visibility change |
| sidebar | NA | No | Content of the sidebar |
| topbar | NA | No | Content of the topbar |
| content | NA | No | Content of the page |
| contentStyle | NA | No | To style 'div' wrapper of content |


## Contribution
This package is in development actively, feel free to do a pull request if you are interested in it. Thanks.
Refer to this [create-react-library](https://github.com/transitive-bullshit/create-react-library) for development guideline.
## License

[MIT](https://github.com/yelwinsoe/react-bootstrap-enhanced/blob/master/LICENSE) © [yelwinsoe](https://github.com/yelwinsoe)
