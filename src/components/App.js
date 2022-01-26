import React from 'react';
import DragDrop from '../DragDrop/DragDrop';

export default function App() {
  const testArray = [];
  const randomId = () => Math.random().toString(36).slice(5);

  for (let i = 0; i < 10; i += 1) {
    testArray.push(randomId());
  }

  const config = {
    watchDrag: ['one', 'another', 'which'],
  };
  return (
    <div>
      <DragDrop
        options={config}
      >
        <div className="div-one">
          <header>My Header</header>
          <ul>
            <li data-yabba="hello" data-dabba="bch72o5k" id="bch72o5k" className="drop-list-item one">bch72o5k</li>
            <li data-yabba="hello" data-dabba="5z8tq0o6" id="5z8tq0o6" className="drop-list-item another">5z8tq0o6</li>
            <li data-yabba="hello" data-dabba="97jjqx14" id="97jjqx14" className="drop-list-item another">97jjqx14</li>
            <li data-yabba="hello" data-dabba="rkxmjy7f" id="rkxmjy7f" className="drop-list-item which">rkxmjy7f</li>
            <li data-yabba="hello" data-dabba="t1sjwcis" id="t1sjwcis" className="drop-list-item which">t1sjwcis</li>
            <li data-yabba="hello" data-dabba="b7xkisid" id="b7xkisid" className="drop-list-item which">b7xkisid</li>
            <li data-yabba="hello" data-dabba="8symhrkt" id="8symhrkt" className="drop-list-item which">8symhrkt</li>
            <li data-yabba="hello" data-dabba="2wl1ypd" id="2wl1ypd" className="drop-list-item which">2wl1ypd</li>
            <li data-yabba="hello" data-dabba="mep6fac2" id="mep6fac2" className="drop-list-item one">mep6fac2</li>
            <li data-yabba="hello" data-dabba="oiviw8jp" id="oiviw8jp" className="drop-list-item one">oiviw8jp</li>
          </ul>
        </div>
      </DragDrop>
    </div>

  );
}
