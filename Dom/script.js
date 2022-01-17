/* - Objectives
*done* Make a button appear on the page when it's first loaded. The button cannot already be in your html.
             When the button is clicked, you should display an Alert box with any (nice) message.
Make a button and text box (you can just put them in your HTML). 
             When the button is clicked, display an alert with the message that is typed in the text box.
Create a div in HTML. Without using CSS :hover, make the div change to a different background color when your mouse hovers over it.
             The div should return to its original color when the mouse exits the div.
Put some text in a paragraph. Make it where when you click on the paragraph, the color of the text switches to red.
             Once you get that working, try to rewrite your code to make it switch to a random color each click
               (you don't have to show the code for just red once you get random working).
Add a button and an empty div. When the button is clicked, add a span that contains your name to the empty div.
Create a button and a ul in your HTML. In JavaScript, create an array containing the names of your friends
              (at least 10. If you don't have that many, include your imaginary ones). When the button is clicked, add each friend's name as an li to the ul on the page.
*/
function onPageLoad() {

    let myButton = document.createElement("button"); // creates a button and calls it myButton
    myButton.setAttribute("type", "button"); // sets the button type attibute on myButton
    myButton.innerHTML = ("Page has loaded, so click me!"); // sets the innerHTML of myButton, this is the text that appears on the button
    myButton.setAttribute("onclick", "alert('I told you the page loaded!')"); // looks like putting the alert here is only good for a static alert message
    document.body.appendChild(myButton); // append the button as a child element to the body

    for(let i = 0; i<=2;i++) { // places 3 breaks for readability
        let spaceBreak = document.createElement("br");
        document.body.appendChild(spaceBreak);
    }

    let myTextButton = document.createElement("button");
    myTextButton.setAttribute("type", "button");
    myTextButton.innerHTML = ("This button will alert the text box content later");

    let n = 3; // dummy variable for now
    myTextButton.addEventListener("click", function() {
        alert(n);
      });
    document.body.appendChild(myTextButton);














};