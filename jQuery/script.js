/* - Objectives
*done* Make a button appear on the page when it's first loaded. The button cannot already be in your html.
             When the button is clicked, you should display an Alert box with any (nice) message.
** Make a button and text box (you can just put them in your HTML). 
             When the button is clicked, display an alert with the message that is typed in the text box.
** Create a div in HTML. Without using CSS :hover, make the div change to a different background color when your mouse hovers over it.
             The div should return to its original color when the mouse exits the div.
** Put some text in a paragraph. Make it where when you click on the paragraph, the color of the text switches to red.
             Once you get that working, try to rewrite your code to make it switch to a random color each click
               (you don't have to show the code for just red once you get random working).
** Add a button and an empty div. When the button is clicked, add a span that contains your name to the empty div.
** Create a button and a ul in your HTML. In JavaScript, create an array containing the names of your friends
              (at least 10. If you don't have that many, include your imaginary ones). When the button is clicked, add each friend's name as an li to the ul on the page.
*/



$(document).ready(function () {

//alert("the document has loaded, and the script is properly linked to the page!")

var $firstDiv = $("<div></div>")//.text("This is the first Div!"); // creates the divs within which the other elements will reside
var $secondDiv = $("<div></div>")//.text("This is the second Div!");
var $thirdDiv = $("<div></div>")//.text("This is the third Div!");
var $fourthDiv = $("<div></div>")//.text("This is the fourth Div!");

$("body").append($firstDiv, $secondDiv, $thirdDiv, $fourthDiv);

var $pageLoadButton = $("<button>").text("Page has loaded, so click me!").click(function(){
    alert("I told you the page loaded!");
  });
$($firstDiv).append($pageLoadButton); // looks like i dont need quotes around $firstDiv, but i do need them when referencing the body

var $inputField = $("<input>");
$($firstDiv).append($inputField);

var $alertValueButton = $("<button>").text("Alert your Input?").click(function(){
    alert("$alertValueButton text here");
  });
$($firstDiv).append($alertValueButton);






















});