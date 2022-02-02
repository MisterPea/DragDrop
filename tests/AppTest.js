import * as React from 'react';

export default function AppTest() {
  return (
    <div className="div-one">
      <header>My Header</header>
      <ul>
        <li data-testId="first" data-foo="listOne" data-bar="listItemOne" id="listItemOne" className="drop-list-item first one ">List Item One</li>
        <li data-testId="first" data-foo="listAnother" data-bar="listItemTwo" id="listItemTwo" className="drop-list-item first another">List Item Two</li>
        <li data-testId="first" data-foo="listAnother" data-bar="listItemThree" id="listItemThree" className="drop-list-item first another">List Item Three</li>
        <li data-foo="listWhich" data-bar="listItemFour" id="listItemFour" className="drop-list-item second which">List Item Four</li>
        <li data-foo="listWhich" data-bar="listItemFive" id="listItemFive" className="drop-list-item second which">List Item Five</li>
        <li data-foo="listWhich" data-bar="listItemSix" id="listItemSix" className="drop-list-item which">List Item Six</li>
        <li data-foo="listWhich" data-bar="listItemSeven" id="listItemSeven" className="drop-list-item which">List Item Seven</li>
        <li data-foo="listWhich" data-bar="listItemEight" id="listItemEight" className="drop-list-item which">List Item Eight</li>
        <li data-testId="first" data-foo="listOne" data-bar="listItemNine" id="listItemNine" className="drop-list-item first one">List Item Nine</li>
        <li data-foo="listOne" data-bar="listItemTen" id="listItemTen" className="drop-list-item second one">List Item Ten</li>
      </ul>
    </div>
  );
}
