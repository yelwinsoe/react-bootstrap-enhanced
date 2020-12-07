# react-bootstrap-enhanced

> An enhanced version of react-bootstrap for common UI.

[![NPM](https://img.shields.io/npm/v/react-bootstrap-enhanced.svg)](https://www.npmjs.com/package/react-bootstrap-enhanced) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-bootstrap-enhanced
```

## Usage
### PaginationPlus
```jsx
import { PaginationPlus } from 'react-bootstrap-enhanced'

<PaginationPlus 
  total={100} // Mandatory - total number of record
  pageSize={10} // Mandatory - number of record per page
  allPageSize={[10, 20, 40, 80, 160]} // Optional - For page size option Dropdown
  currentPage={1} // Optional - default to 1
  style={{ float: 'right' }} // Optional style
  size='sm' // Optional size
  onChange={handleOnChange} // New page number as a param
  onPageSizeChange={handlePageSizeChange} // New page size as a param, this is need for page size Dropdown
/>
```

## License

[MIT](https://github.com/yelwinsoe/react-bootstrap-enhanced/blob/master/LICENSE) © [yelwinsoe](https://github.com/yelwinsoe)
