/* eslint-disable react/prop-types */
import * as React from 'react';
import { useRef, useEffect } from 'react';

export default function DragDrop({ children, options = {} }) {
  const activeClassDrag = useRef(undefined);
  const activeIdDragElement = useRef(undefined);
  const matchHash = {};

  useEffect(() => {
    if (options.watchDrag instanceof Array) {
      for (let i = 0; i < options.watchDrag.length; i += 1) {
        matchHash[options.watchDrag[i]] = options.watchDrag[i];
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
    e.preventDefault();
    // watchDrag passed into options is an Array of class names
    if (options.watchDrag !== '*') {
      for (let i = 0; i < e.target.classList.length; i += 1) {
        if (typeof matchHash[e.target.classList[i]] !== 'undefined') {
          if (!activeClassDrag.current) {
            activeClassDrag.current = document.querySelectorAll(`.${e.target.classList[i]}`);
            for (let j = 0; j < activeClassDrag.current.length; j += 1) {
              activeClassDrag.current[j].classList.add('drag-active');
            }
          }
        }
      }
    }
    // id is passed into options as true
    if (options.watchDrag === '*' && e.target.id) {
      const dragIdElement = document.getElementById(e.target.id);
      if (activeIdDragElement.current !== dragIdElement) {
        dragIdElement.classList.add('drag-active');
      }
      activeIdDragElement.current = dragIdElement;
    }
  }

  function handleDropEvent(e) {
    e.stopPropagation();
    e.preventDefault();
    handleDragLeave();
  }

  /**
   * Method that removes the class name appended on drag over.
   */
  function handleDragLeave() {
    if (activeClassDrag.current) {
      for (let i = 0; i < activeClassDrag.current.length; i += 1) {
        activeClassDrag.current[i].classList.remove('drag-active');
      }
      activeClassDrag.current = undefined;
    }
    if (activeIdDragElement.current) {
      activeIdDragElement.current.classList.remove('drag-active');
      activeIdDragElement.current = undefined;
    }
  }

  return (
    <div
      className="drag-element"
      onDragOver={(e) => handleOnDragOver(e)}
      onDrop={(e) => handleDropEvent(e)}
      onDragLeave={handleDragLeave}
    >
      {children}
    </div>
  );
}
