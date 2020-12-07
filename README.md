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
/>
```
#### Params
| Name | Default | Required | Description |
| ---- | ------- | ---------- | -------- |
| total | NA | Yes | Total number of record |
| pageSize | 10 | Yes | Number of record per page |
| currentPage | 1 | No | Current selected page |
| style | NA | No | Optional Bootstrap pagination style |
| size | NA | No | Optional size 'sm/md/lg' |
| onChange | NA | No | On page changes, new page number as param |
| onPageSizeChange | NA | No | New page size as a param, this is needed for page size selection |

## License

[MIT](https://github.com/yelwinsoe/react-bootstrap-enhanced/blob/master/LICENSE) © [yelwinsoe](https://github.com/yelwinsoe)
