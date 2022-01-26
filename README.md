# React Drag and Drop file uploader

### A minimal React Component wrapper to simplify the drag and drop of file(s) onto DOM elements.

---
## Features
* When file(s) is dragged over element, the class is append with 'drag-active' (you can customize the appended class name to suit your needs)
* DragDrop gives you access to _FILE_TYPE_ or you may pass in an upload method which accepts _FILE_TYPE_.

---
## Quick Start
Include your configuration info:
```
const config = {
    watchDrag: '*',
  };
```
Wrap your tags or component with the DragDrop component
```
<DragDrop
  options={config}
>
  <div className="div-one">
    <header>My Header</header>
    <ul>
      {myArray.map(({item}) => (
        <li
          data-item={item.name}
          id={item.id}
          className="drop-list-item"
          key={item.id}
        >
          {item.info}
        </li>
      ))}
    </ul>
  </div>
</DragDrop>
```
---
## Configuration Guide
Within the `options` prop, you can add some customizations.

| Key   | Values | Description |
|:-------:|:---------------:|:-------- |
|`watchDrag` (required)| `*` or [class name(s)] | `*` denotes that on drag over, only individual elements will be have `drag-active` (or custom class name) appended. You may also have an array of class names that indicates which groups of classes should be appended. So, if you drag over an element with class name `foo` and want all other elements with class name `foo` to be appended with `drag-active`, then include `foo` in your `watchDrag` array.
|`customClass`|class name as string| Instead of using the default `drag-active` on drag over events, you can specify a custom class name.
