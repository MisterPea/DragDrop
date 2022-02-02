import * as React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, fireEvent, createEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import DragDrop from '../src/DragDrop/DragDrop';
import AppTest from './AppTest';

// ***************************** Smoke ***************************** //
describe('File Drag and Drop Component.', () => {
  it('Renders without crashing.', () => {
    const div = document.createElement('DIV');
    ReactDOM.render(<DragDrop />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

// ***************** Drag File Over & Custom Class ***************** //
describe('Drag File Over', () => {
  const testCases = [
    {
      description: 'Should append "drag-active" on dragOver.',
      options: {
        watchDrag: '*',
      },
      expect: 'drag-active',
    },
    {
      description: 'Should append "drag-active" on dragOver.',
      options: {},
      expect: 'drag-active',
    },
    {
      description: 'Should append "drag-active" on dragOver.',
      options: {
        watchDrag: ['drop-list-item'],
      },
      expect: 'drag-active',
    },
    {
      description: 'Should append "custom-class" on dragOver.',
      options: {
        customClass: 'custom-class',
      },
      expect: 'custom-class',
    },
  ];
  testCases.forEach((test) => {
    it(test.description, () => {
      render(
        <DragDrop options={test.options}>
          <AppTest />
        </DragDrop>,
      );
      const listElement = screen.getByText(/List Item Three/i);
      fireEvent.dragOver(listElement);
      expect(listElement).toHaveClass(test.expect);
    });
  });

  it("Should append all elements with same class with 'drag-active.'", () => {
    render(
      <DragDrop options={{ watchDrag: ['first'] }}>
        <AppTest />
      </DragDrop>,
    );
    const elementDraggedOver = screen.getByText(/List Item Three/i);
    fireEvent.dragOver(elementDraggedOver);
    const listElements = screen.getAllByTestId('first');
    listElements.forEach((element) => {
      expect(element).toHaveClass('drag-active');
    });
  });

  it('Should not append anything on dragOver.', () => {
    render(
      <DragDrop options={{ watchDrag: 'none' }}>
        <AppTest />
      </DragDrop>,
    );
    const listElement = screen.getByText(/List Item Three/i);
    fireEvent.dragOver(listElement);
    expect(listElement).not.toHaveClass('drag-active');
  });
});

// ************************ Drag File Leave ************************ //
describe('Drag File Leave', () => {
  const testCases = [
    {
      description: 'Should remove class "drag-active" on dragLeave.',
      options: {
        watchDrag: '*',
      },
      expect: 'drag-active',
    },
    {
      description: 'Should remove class "drag-active" on dragLeave.',
      options: {},
      expect: 'drag-active',
    },
    {
      description: 'Should remove class "drag-active" on dragLeave.',
      options: {
        watchDrag: ['drop-list-item'],
      },
      expect: 'drag-active',
    },
    {
      description: 'Should remove class "custom-class" on dragLeave.',
      options: {
        customClass: 'custom-class',
      },
      expect: 'custom-class',
    },
  ];
  testCases.forEach((test) => {
    it(test.description, () => {
      render(
        <DragDrop options={test.options}>
          <AppTest />
        </DragDrop>,
      );
      const listElement = screen.getByText(/List Item Four/i);
      fireEvent.dragOver(listElement);
      fireEvent.dragLeave(listElement);
      expect(listElement).not.toHaveClass('drag-active');
    });
  });

  it("Should remove 'drag-active' from all elements with same class", () => {
    render(
      <DragDrop options={{ watchDrag: ['first'] }}>
        <AppTest />
      </DragDrop>,
    );
    const elementDraggedOver = screen.getByText(/List Item Three/i);
    fireEvent.dragOver(elementDraggedOver);
    fireEvent.dragLeave(elementDraggedOver);
    const listElements = screen.getAllByTestId('first');
    listElements.forEach((element) => {
      expect(element).not.toHaveClass('drag-active');
    });
  });
});
