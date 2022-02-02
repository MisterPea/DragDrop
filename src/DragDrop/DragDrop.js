/* eslint-disable react/prop-types */
import * as React from 'react';
import { useRef, useEffect } from 'react';

export default function DragDrop({ children, options = {} }) {
  const activeClassDrag = useRef(undefined);
  const activeIdDragElement = useRef(undefined);
  const matchHash = {};
  const fileCallback = options.fileCallback ? options.fileCallback : null;
  const dragActive = options.customClass !== undefined ? options.customClass : 'drag-active';
  const watchDrag = options.watchDrag || '*';

  useEffect(() => {
    if (watchDrag instanceof Array) {
      for (let i = 0; i < watchDrag.length; i += 1) {
        matchHash[watchDrag[i]] = watchDrag[i];
      }
    }
  }, []);

  /**
   * Method to determine what classes are appended.
   * This is based what is passed into `watchDrag`. If an asterisk is passed in, then
   * each element class is appended independently. If an array of classnames is passed in, then
   * matches for those values are searched for and all elements with the same class name will
   * have their class appended
   * @param {Object} e DOM event object
   */
  function handleOnDragOver(e) {
    if (watchDrag !== 'none') {
      e.preventDefault();
      // watchDrag passed into options is an Array of class names
      if (watchDrag !== '*') {
        for (let i = 0; i < e.target.classList.length; i += 1) {
          if (typeof matchHash[e.target.classList[i]] !== 'undefined') {
            if (!activeClassDrag.current) {
              activeClassDrag.current = document.querySelectorAll(`.${e.target.classList[i]}`);
              for (let j = 0; j < activeClassDrag.current.length; j += 1) {
                activeClassDrag.current[j].classList.add(dragActive);
              }
            }
          }
        }
      }
      // id is passed into options as true
      if (watchDrag === '*' && e.target.id) {
        const dragIdElement = document.getElementById(e.target.id);
        if (activeIdDragElement.current !== dragIdElement) {
          dragIdElement.classList.add(dragActive);
        }
        activeIdDragElement.current = dragIdElement;
      }
    }
  }

  /**
   * If we're appending to file callback, we look at what has been requested and
   * add them to the tempPayload Object, which is then added to the callbackPayload Object.
   * @param {Node} e Node element
   * @returns payload Object.
   */
  function handleAppendCallbackPayload(e) {
    const tempPayload = {};
    const toAppend = options.appendToFileCallback;
    if (toAppend.includes('id')) {
      tempPayload.id = e.target.id;
    }
    if (toAppend.includes('className')) {
      tempPayload.className = e.target.className.replace(dragActive, '').split(' ').filter(Boolean);
    }
    if (toAppend.includes('data')) {
      tempPayload.data = { ...e.target.dataset };
    }
    return tempPayload;
  }

  /**
   * Drop Event Handler
   */
  function handleDropEvent(e) {
    e.stopPropagation();
    e.preventDefault();
    let callbackPayload;
    if (options.appendToFileCallback) {
      callbackPayload = handleAppendCallbackPayload(e);
    }

    callbackPayload.files = e.dataTransfer.files;
    if (fileCallback) { fileCallback(callbackPayload); }
    handleDragLeave();
  }

  /**
   * Method that removes the class name appended on drag over.
   */
  function handleDragLeave() {
    if (watchDrag !== 'none') {
      if (activeClassDrag.current) {
        for (let i = 0; i < activeClassDrag.current.length; i += 1) {
          activeClassDrag.current[i].classList.remove(dragActive);
        }
        activeClassDrag.current = undefined;
      }
      if (activeIdDragElement.current) {
        activeIdDragElement.current.classList.remove(dragActive);
        activeIdDragElement.current = undefined;
      }
    }
  }

  return (
    <div
      className="drag-element"
      onDragOver={(e) => { handleOnDragOver(e); }}
      onDrop={(e) => handleDropEvent(e)}
      onDragLeave={handleDragLeave}
    >
      {children}
    </div>
  );
}
