/* - Objectives
*done* Make a button appear on the page when it's first loaded. The button cannot already be in your html.
             When the button is clicked, you should display an Alert box with any (nice) message.
*done* Make a button and text box (you can just put them in your HTML). 
             When the button is clicked, display an alert with the message that is typed in the text box.
*done* Create a div in HTML. Without using CSS :hover, make the div change to a different background color when your mouse hovers over it.
             The div should return to its original color when the mouse exits the div.
*done* Put some text in a paragraph. Make it where when you click on the paragraph, the color of the text switches to red.
             Once you get that working, try to rewrite your code to make it switch to a random color each click
               (you don't have to show the code for just red once you get random working).
Add a button and an empty div. When the button is clicked, add a span that contains your name to the empty div.
Create a button and a ul in your HTML. In JavaScript, create an array containing the names of your friends
              (at least 10. If you don't have that many, include your imaginary ones). When the button is clicked, add each friend's name as an li to the ul on the page.
*/
function onPageLoad() {

    let firstDiv = document.createElement("div"); // makes a div for the buttons and input field to occupy
    document.body.appendChild(firstDiv); // appends firstDiv to the body

    let myButton = document.createElement("button"); // creates a button and calls it myButton
    myButton.setAttribute("type", "button"); // sets the button type attibute on myButton
    myButton.innerHTML = ("Page has loaded, so click me!"); // sets the innerHTML of myButton, this is the text that appears on the button
    myButton.setAttribute("onclick", "alert('I told you the page loaded!')"); // looks like putting the alert here is only good for a static alert message
    firstDiv.appendChild(myButton); // append the button as a child element to the body


    /*
    for (let i = 0; i <= 2; i++) { // places 3 breaks for readability
        let spaceBreak = document.createElement("br");
        document.body.appendChild(spaceBreak);
    }

    */

    let myInputBox = document.createElement("input"); // creates an input field, 
    firstDiv.appendChild(myInputBox); // which is then appended to the body of the document





    let myInputButton = document.createElement("button"); // creatse a button and calls it myInputButton
    myInputButton.setAttribute("type", "button"); // sets the type to button
    myInputButton.innerHTML = ("Alert your Input?"); // sets the button text

    myInputButton.addEventListener("click", function () { // attaches an event listener to myInputButton
        alert(myInputBox.value); // alerts the value of myInputButton
    });
    firstDiv.appendChild(myInputButton); // appends myInputButton to the body of the document


    /*
    for (let i = 0; i <= 2; i++) { // places 3 breaks for readability
        let spaceBreak = document.createElement("br");
        document.body.appendChild(spaceBreak);
    }

    */

    let secondDiv = document.createElement("div"); // creates a div and calls it secondDiv
    secondDiv.addEventListener("mouseover", onFunc); // adds an event listener for when the mouse enters the element
    secondDiv.addEventListener("mouseout", offFunc); // adds an event listener for when the mouse leaves the element
    secondDiv.style.backgroundColor = "AliceBlue";
    secondDiv.style.margin = "50px";

    document.body.appendChild(secondDiv); // appends SecondDiv to the body

    let divPara = document.createElement("p"); // creates a paragraph and calls it divPara


    divPara.addEventListener("click", randomColor); // I originally had the function below with the event listener...
    //because randomColor was set to return a value, instead of just changing the color directly
/*
    function noLongerNeeded () {
        divPara.style.color = randomColor();
    }
    */

    divPara.textContent = "My background will change when you hover over my div element";
    divPara.title = "And if you click me, my text will change to a random color!";

    secondDiv.appendChild(divPara);

    function onFunc() {
        this.style.backgroundColor = "LightGray";
        divPara.textContent = "Look it changed!";
    }

    function offFunc() {
        this.style.backgroundColor = "AliceBlue";
        divPara.textContent = "My background will change when you hover over my div element";
    }

    function randomColor() { //this function will change the text color of divPara to a random rgb
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        divPara.style.color = `rgb(${r}, ${g}, ${b})`;
    }




















};