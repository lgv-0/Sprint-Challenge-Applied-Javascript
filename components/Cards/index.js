// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(o_Data)
{
    let Div = document.createElement("div");
    Div.setAttribute("class", "card");

    Div.appendChild(Object.assign(document.createElement("div"), {"innerText":o_Data["headline"]}));
    Div.setLastAttr("class", "headline");

    //////////////////////////////////////////
    let AuthorDiv = document.createElement("div");
    AuthorDiv.setAttribute("class", "author");

    AuthorDiv.appendChild(document.createElement("div"));
    AuthorDiv.setLastAttr("class", "img-container");
    
    AuthorDiv.children[AuthorDiv.children.length - 1].appendChild(document.createElement("img"));
    AuthorDiv.children[AuthorDiv.children.length - 1].setLastAttr("src", o_Data["authorPhoto"]);

    AuthorDiv.appendChild(Object.assign(document.createElement("span"), {"innerText":`By ${o_Data["authorName"]}`}));

    Div.appendChild(AuthorDiv);
    //////////////////////////////////////////

    return Div;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles").then((response)=>
    {
        let CardContainer = document.querySelector(".cards-container");
        let a_S1 = Object.keys(response.data.articles);
        for (let i = 0; i < a_S1.length; i++)
            for (let z = 0; z < response.data.articles[a_S1[i]].length; z++)
                CardContainer.appendChild(createCard(response.data.articles[a_S1[i]][z]));
    }).catch(error => {console.log(error.response)});