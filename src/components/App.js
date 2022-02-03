import React from 'react';
import DragDrop from '../DragDrop/DragDrop';
import { AppTest } from '../../tests/AppTest';

export default function App() {
  const testArray = [];
  const randomId = () => Math.random().toString(36).slice(5);

  for (let i = 0; i < 10; i += 1) {
    testArray.push(randomId());
  }

  function myCallback(info) { console.log(info); }

  const config = {
    watchDrag: ['one', 'another', 'which'],
    fileCallback: myCallback,
    appendToFileCallback: ['id', 'data', 'className'],
  };
  return (
    <div>
      <DragDrop
        options={config}
      >
        <AppTest />
      </DragDrop>
    </div>

  );
}
