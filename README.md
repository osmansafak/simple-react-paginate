# simple-react-paginate

Simple pagination component for ReactJS

## Installation

Install `simple-react-paginate` with [npm](https://www.npmjs.com/):

```
$ npm install simple-react-paginate --save
```

For [CommonJS](http://wiki.commonjs.org/wiki/CommonJS) users:

```javascript
import SimpleReactPaginate from "simple-react-paginate";
```

## Props

| Name                | Type      | Description                                           | Default value          |
| ------------------- | --------- | ----------------------------------------------------- | ---------------------- |
| `current`           | `Number`  | The initial page selected                             | 1                      |
| `total`             | `Number`  | The total number of pages.                            | 1                      |
| `pageRange`         | `Number`  | The range of pages displayed.                         | 5                      |
| `marginRange`       | `Number`  | The number of pages to display for margins.           | 1                      |
| `hidePreviousNext`  | `Boolean` | Hide the previous and next button.                    | false                  |
| `previousLabel`     | `Node`    | Label for the previous button.                        | previous               |
| `nextLabel`         | `Node`    | Label for the next button.                            | next                   |
| `breakLabel`        | `Node`    | Label for the ellipsis.                               | ...                    |
| `containerClass`    | `String`  | The classname of the pagination container.            | paginate-container     |
| `pageClass`         | `String`  | The classname on tag li of each page element.         | paginate-page          |
| `linkClass`         | `String`  | The classname on tag a of each page element.          | paginate--link         |
| `activeClass`       | `String`  | The classname for the active page.                    | paginate-active        |
| `activeLinkClass`   | `String`  | The classname on the active tag a.                    | paginate-active-link   |
| `previousClass`     | `String`  | The classname on tag li of the previous button.       | paginate-previous      |
| `previousLinkClass` | `String`  | The classname on tag a of the previous button.        | paginate-previous-link |
| `nextClass`         | `String`  | The classname on tag li of the next button.           | paginate-next          |
| `nextLinkClass`     | `String`  | The classname on tag a of the next button.            | paginate-next-link     |
| `disabledClass`     | `String`  | The classname for disabled previous and next buttons. | paginate-disabled      |

## Callback

| Callback   | Type       | Description                                                                                |
| ---------- | ---------- | ------------------------------------------------------------------------------------------ |
| `onChange` | `Function` | The method to call when a page is clicked. Exposes the current page object as an argument. |
