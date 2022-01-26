import * as React from 'react';
import ReactDOM from 'react-dom';
import DragDrop from '../src/DragDrop/DragDrop';

describe('File Drag and Drop Component', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('DIV');
    ReactDOM.render(<DragDrop />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
