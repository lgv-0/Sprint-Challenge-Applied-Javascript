// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header()
{
    let Div = document.createElement("div");
    Div.setAttribute("class", "header");

    Div.appendChild(Object.assign(document.createElement("span"), {"innerText":"SMARCH 28, 2019"}));
    Div.setLastAttr("class", "date");

    Div.appendChild(Object.assign(document.createElement("h1"), {"innerText":"Lambda Times"}));

    Div.appendChild(Object.assign(document.createElement("span"), {"innerText":"98°"}));
    Div.setLastAttr("class", "temp");

    return Div;
}

document.querySelector(".header-container").appendChild(Header());