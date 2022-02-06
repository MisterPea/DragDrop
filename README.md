# React Drag and Drop file uploader • [![CircleCi Status](https://circleci.com/gh/MisterPea/DragDrop.svg?style=svg)](https://circleci.com/gh/MisterPea/DragDrop)

### A minimal React Component wrapper to simplify the drag and drop of file(s) onto DOM elements.

---
## Features
* When file(s) is dragged over element, the class is append with `'drag-active'` (you can customize the appended class name to suit your needs)
* DragDrop can return a `FileList`, which is part of the `DataTransfer.files` object. Additionally, you can append the `FileList` with the `id`,`classList`, or `data-` attributes from the drop area.

---
## Quick Start
Include your configuration info:
```
const config = {
    watchDrag: '*',
    fileCallback: myUploadMethod,
    appendToFileCallback: ['id'],
  };
```
Wrap your tags or component with the DragDrop component
```
<DragDrop options={config}>
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
|`watchDrag`| `*`, Array of class name(s) or `'none'`. (Defaults to `*`) | `*` denotes that on drag over, only individual elements will be have `drag-active` (or custom class name) appended. You may also have an array of class names that indicates which groups of classes should be appended. So, if you drag over an element with class name `foo` and want all other elements with class name `foo` to be appended with `drag-active`, then include `foo` in your `watchDrag` array. If you pass `'none'` into `watchDrag`, then no classes will be appended.
|`customClass`|class name as string| Instead of using the default `drag-active` on drag over events, you can specify a custom class name.
|`fileCallback`|function|A function which the file(s) are passed to upon drop. The information is a `DataTransfer.files` object. |
|`appendToFileCallback`|Array with at least one of the following keywords: _'className'_, _'id'_, _'data'_.|To locate where the file(s) have been dropped, you can include the `appendToFileCallback` key with appropriate flags. On file(s) drop, this will append the `fileCallback` with said flags corresponding to drop target. The shape of responses is as follows: `id: String`,`className: [String]`,`data: Object`, and `files: FileList`.

---
## Notes:
* Elements whose class you want appended (upon drag over) must already have a class name tied to them. This component will not add non-existent class fields.

* If you specified `className`, `id`, or `data-` attribute(s) for `appendToFileCallback` and that attribute doesn't exist within the DOM, the callback will return `null` instead.