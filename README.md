# bs5-toast

Bootstrap 5 toasts generator

[https://bs5-toast.vercel.app](https://bs5-toast.vercel.app)


## Features

- Customizable content
- Smooth animation
- Typed safe
## Installation

Install bs5-toast with npm

```bash
npm install bs5-toast
```

Install from cdn

```html
<script src="https://unpkg.com/bs5-toast/dist/bs5-toast.js"></script>
```
## Usage/Examples

```javascript
import bs5 from 'bs5-toast'

new bs5.Toast({
    body: 'Hello world',
}).show()
```

or use directly in `script` tag
```html
<script src="https://unpkg.com/bs5-toast/dist/bs5-toast.js"></script>
<script>
    new bs5.Toast({
        body: 'Hello world',
    }).show()
</script>
```
## Options

|Name|Type|Default|Description|
|-|-|-|-|
|`body`|string|''|Body content. Can also be filled with html tags. example: `Hello <b>World</b>`|
|`header`|string|''|Header content. Can also be filled with html tags. example: `<h6 class="mb-0">Success</h6>`|
|`animation`|boolean|`true`|Apply transition to the toast|
|`autohide`|boolean|`true`|Auto hide the toast|
|`btnClose`|boolean|`true`|Show close button|
|`btnCloseWhite`|boolean|`false`|Set close button as white variant|
|`className`|string|''|Class attribute to be added in class '.toast'|
|`delay`|number|5000|Delay hiding the toast (ms)|
|`gap`|number|16|Gap between toasts (px)|
|`margin`|string|`1rem`|Margin of corner. Can also be filled with a css variable. example: `var(--toast-margin)`|
|`placement`|string|`top-right`|Corner position of toast. Available values: `top-right, top-left, bottom-right, bottom-left`|

## Methods

### show
Reveals an element’s toast.
```javascript
const toast = new bs5.Toast({
    body: 'Hello world',
})
toast.show()
```

### hide
Hides an element’s toast.
```javascript
toast.hide()
```

### element
Get the toast element.
```javascript
toast.element.addEventListener('shown.bs.toast', function () {
  console.log('toast shown!')
})
toast.show()
```
