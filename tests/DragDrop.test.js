import * as React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DragDrop from '../src/DragDrop/DragDrop';
import {
  AppTest,
  AppTestNoId,
  AppTestNoClass,
  AppTestNoData,
} from './AppTest';

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

// *************** Drop File and appendToFileCallback *************** //
describe('Drop File - appendToFileCallback', () => {
  const testList = [
    {
      description: 'Should return file to callback',
      options: {},
      expect: (data) => expect(data).toStrictEqual({
        files: [new File(['ABCDEF'], 'myImageFile.png', { type: 'image/png' })],
      }),
    },
    {
      description: 'Should return file and className to callback',
      options: { appendToFileCallback: ['className'] },
      expect: (data) => expect(data).toStrictEqual({
        className: ['drop-list-item', 'second', 'which'],
        files: [new File(['ABCDEF'], 'myImageFile.png', { type: 'image/png' })],
      }),
    },
    {
      description: 'Should return file and id to callback',
      options: { appendToFileCallback: ['id'] },
      expect: (data) => expect(data).toStrictEqual({
        id: 'listItemFour',
        files: [new File(['ABCDEF'], 'myImageFile.png', { type: 'image/png' })],
      }),
    },
    {
      description: 'Should return file and data to callback',
      options: { appendToFileCallback: ['data'] },
      expect: (data) => expect(data).toStrictEqual({
        data: { foo: 'listWhich', bar: 'listItemFour' },
        files: [new File(['ABCDEF'], 'myImageFile.png', { type: 'image/png' })],
      }),
    },
    {
      description: 'Should return file and id, className and data to callback',
      options: { appendToFileCallback: ['data', 'id', 'className'] },
      expect: (data) => expect(data).toStrictEqual({
        id: 'listItemFour',
        className: ['drop-list-item', 'second', 'which'],
        data: { foo: 'listWhich', bar: 'listItemFour' },
        files: [new File(['ABCDEF'], 'myImageFile.png', { type: 'image/png' })],
      }),
    },
  ];

  testList.forEach((test) => {
    it(test.description, (done) => {
      function callback(data) {
        test.expect(data);
      }
      done();
      render(
        <DragDrop options={{ ...test.options, fileCallback: callback }}>
          <AppTest />
        </DragDrop>,
      );
      const dropArea = screen.getByText(/List Item Four/i);
      fireEvent.drop(dropArea, {
        dataTransfer: {
          files: [new File(['ABCDEF'], 'myImageFile.png', { type: 'image/png' })],
        },
      });
    });
  });

  const testListAppend = [
    {
      description: "Should return null if 'id' is passed to appendToFileCallback, but isn't in DOM on drop",
      options: { appendToFileCallback: ['id'] },
      expect: 'id',
      currentDOM: AppTestNoId,
    },
    {
      description: "Should return null if 'data' is passed to appendToFileCallback, but isn't in DOM on drop",
      options: { appendToFileCallback: ['data'] },
      expect: 'data',
      currentDOM: AppTestNoData,
    },
    {
      description: "Should return null if 'className' is passed to appendToFileCallback, but isn't in DOM on drop",
      options: { appendToFileCallback: ['className'] },
      expect: 'className',
      currentDOM: AppTestNoClass,
    },
  ];

  testListAppend.forEach((test) => {
    it(test.description, (done) => {
      function callback(data) {
        expect(data[test.expect]).toBeNull();
      }
      done();
      render(
        <DragDrop options={{ ...test.options, fileCallback: callback }}>
          <test.currentDOM />
        </DragDrop>,
      );
      const dropArea = screen.getByText(/List Item Four/i);
      fireEvent.drop(dropArea, {
        dataTransfer: {
          files: [new File(['ABCDEF'], 'myImageFile.png', { type: 'image/png' })],
        },
      });
    });
  });
});
