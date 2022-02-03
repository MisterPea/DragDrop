import * as React from 'react';

export function AppTest() {
  return (
    <div className="div-one">
      <header>My Header</header>
      <ul>
        <li data-testid="first" data-foo="listOne" data-bar="listItemOne" id="listItemOne" className="drop-list-item first one">List Item One</li>
        <li data-testid="first" data-foo="listAnother" data-bar="listItemTwo" id="listItemTwo" className="drop-list-item first another">List Item Two</li>
        <li data-testid="first" data-foo="listAnother" data-bar="listItemThree" id="listItemThree" className="drop-list-item first another">List Item Three</li>
        <li data-foo="listWhich" data-bar="listItemFour" id="listItemFour" className="drop-list-item second which">List Item Four</li>
        <li data-foo="listWhich" data-bar="listItemFive" id="listItemFive" className="drop-list-item second which">List Item Five</li>
        <li data-foo="listWhich" data-bar="listItemSix" id="listItemSix" className="drop-list-item which">List Item Six</li>
        <li data-foo="listWhich" data-bar="listItemSeven" id="listItemSeven" className="drop-list-item which">List Item Seven</li>
        <li data-foo="listWhich" data-bar="listItemEight" id="listItemEight" className="drop-list-item which">List Item Eight</li>
        <li data-testid="first" data-foo="listOne" data-bar="listItemNine" id="listItemNine" className="drop-list-item first one">List Item Nine</li>
        <li data-foo="listOne" data-bar="listItemTen" id="listItemTen" className="drop-list-item second one">List Item Ten</li>
      </ul>
    </div>
  );
}

export function AppTestNoId() {
  return (
    <div className="div-one">
      <header>My Header</header>
      <ul>
        <li data-testid="first" data-foo="listOne" data-bar="listItemOne" className="drop-list-item first one">List Item One</li>
        <li data-testid="first" data-foo="listAnother" data-bar="listItemTwo" className="drop-list-item first another">List Item Two</li>
        <li data-testid="first" data-foo="listAnother" data-bar="listItemThree" className="drop-list-item first another">List Item Three</li>
        <li data-foo="listWhich" data-bar="listItemFour" className="drop-list-item second which">List Item Four</li>
        <li data-foo="listWhich" data-bar="listItemFive" className="drop-list-item second which">List Item Five</li>
        <li data-foo="listWhich" data-bar="listItemSix" className="drop-list-item which">List Item Six</li>
        <li data-foo="listWhich" data-bar="listItemSeven" className="drop-list-item which">List Item Seven</li>
        <li data-foo="listWhich" data-bar="listItemEight" className="drop-list-item which">List Item Eight</li>
        <li data-testid="first" data-foo="listOne" data-bar="listItemNine" className="drop-list-item first one">List Item Nine</li>
        <li data-foo="listOne" data-bar="listItemTen" className="drop-list-item second one">List Item Ten</li>
      </ul>
    </div>
  );
}

export function AppTestNoClass() {
  return (
    <div className="div-one">
      <header>My Header</header>
      <ul>
        <li data-testid="first" data-foo="listOne" data-bar="listItemOne" id="listItemOne">List Item One</li>
        <li data-testid="first" data-foo="listAnother" data-bar="listItemTwo" id="listItemTwo">List Item Two</li>
        <li data-testid="first" data-foo="listAnother" data-bar="listItemThree" id="listItemThree">List Item Three</li>
        <li data-foo="listWhich" data-bar="listItemFour" id="listItemFour">List Item Four</li>
        <li data-foo="listWhich" data-bar="listItemFive" id="listItemFive">List Item Five</li>
        <li data-foo="listWhich" data-bar="listItemSix" id="listItemSix">List Item Six</li>
        <li data-foo="listWhich" data-bar="listItemSeven" id="listItemSeven">List Item Seven</li>
        <li data-foo="listWhich" data-bar="listItemEight" id="listItemEight">List Item Eight</li>
        <li data-testid="first" data-foo="listOne" data-bar="listItemNine" id="listItemNine">List Item Nine</li>
        <li data-foo="listOne" data-bar="listItemTen" id="listItemTen"> List Item Ten</li >
      </ul>
    </div>
  );
}

export function AppTestNoData() {
  return (
    <div className="div-one">
      <header>My Header</header>
      <ul>
        <li id="listItemOne" className="drop-list-item first one">List Item One</li>
        <li id="listItemTwo" className="drop-list-item first another">List Item Two</li>
        <li id="listItemThree" className="drop-list-item first another">List Item Three</li>
        <li id="listItemFour" className="drop-list-item second which">List Item Four</li>
        <li id="listItemFive" className="drop-list-item second which">List Item Five</li>
        <li id="listItemSix" className="drop-list-item which">List Item Six</li>
        <li id="listItemSeven" className="drop-list-item which">List Item Seven</li>
        <li id="listItemEight" className="drop-list-item which">List Item Eight</li>
        <li id="listItemNine" className="drop-list-item first one">List Item Nine</li>
        <li id="listItemTen" className="drop-list-item second one">List Item Ten</li>
      </ul>
    </div>
  );
}