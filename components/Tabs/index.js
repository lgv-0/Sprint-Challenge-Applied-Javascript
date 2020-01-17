// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

var s_LastFilterUsed = "";
function FilterCallback(eventSender)
{
    let s_FilterFor = eventSender.target.innerText.toLowerCase();
    if (s_FilterFor.indexOf("node") != -1)
        s_FilterFor = "node";
    let Cards = document.querySelectorAll(".card");

    if (s_LastFilterUsed == s_FilterFor)
    {
        for (let i = 0; i < Cards.length; i++)
            Object.assign(Cards[i].style, {"display":"block"});
        s_LastFilterUsed = "";
        return;
    }

    s_LastFilterUsed = s_FilterFor;

    for (let i = 0; i < Cards.length; i++)
        Object.assign(Cards[i].style, {"display":(Cards[i].filter.toLowerCase() != s_FilterFor) ? "none" : "block"});
}

axios.get("https://lambda-times-backend.herokuapp.com/topics").then((response)=>
    {
        let tabs = document.querySelector(".topics");
        for (let i = 0; i < response.data.topics.length; i++)
        {
            let temp = Object.assign(document.createElement("div"), {"innerText":response.data.topics[i]});
            temp.setAttribute("class", "tab");
            temp.addEventListener("click", (eventSender)=>{FilterCallback(eventSender)});
            tabs.appendChild(temp);
        }
    }).catch(error => {console.log(error.response)});