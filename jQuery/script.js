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
*done* Add a button and an empty div. When the button is clicked, add a span that contains your name to the empty div.
** Create a button and a ul in your HTML. In JavaScript, create an array containing the names of your friends
              (at least 10. If you don't have that many, include your imaginary ones). When the button is clicked, add each friend's name as an li to the ul on the page.
*/

$(document).ready(function () {
  //alert("the document has loaded, and the script is properly linked to the page!")

  let $firstDiv = $("<div id=div1>"); //.text("This is the first Div!"); // creates the divs within which the other elements will reside
  let $secondDiv = $("<div id=div2>"); //.text("This is the second Div!"); // I can set their ids in a few ways
  /**
   *todo - is there any real difference in how I set the ids for theese divs?
   */
  let $thirdDiv = $("<div>").attr("id", "div3"); //.text("This is the third Div!");
  let $fourthDiv = $("<div>").attr("id", "div4"); //.text("This is the fourth Div!");

  $("body").append($firstDiv, $secondDiv, $thirdDiv, $fourthDiv);

  let $pageLoadButton = $("<button id=btn1>")
    .text("Page has loaded, so click me!")
    .click(function () {
      // makes a button, sets the id, gives it text, defines the function that fires when it is clicked
      alert("I told you the page loaded!");
    });

  $($firstDiv).append($pageLoadButton);
  /**
   * looks like i dont need quotes around $firstDiv, but i do need them when referencing the body
   * i think this is because "body" selects the first body element, but there is only one
   * $firstDiv is a variable, and not an element, so i reference it with its name
   */

  function enableBtn() {
    //  This function will remove the 'disabled' attribute from the button, thus enabling the button
    $("#btn2").prop("disabled", false);
  }

  let $inputField = $("<input id=inputbox>").on("keypress", enableBtn); // makes an input field, and executes the enableBtn function a character-key is pressed
  $($firstDiv).append($inputField);

  let $alertValueButton = $("<button id=btn2>")
    .prop("disabled", true)
    .text("Alert your Input?")
    .click(function () {
      // makes a button, sets the id, gives it the disabled property, gives it text, and alerts the value from the input field
      let inputValue = $("#inputbox").val();
      alert(`Submitted! You entered: ${inputValue}`);
      //console.log(inputValue);
    });

  $($firstDiv).append($alertValueButton);

  let $secondDivPara = $("<p id=para1>")
    .text("My background will change when you hover over my div element")
    .css({ backgroundColor: "AliceBlue" });

  $secondDivPara.mouseover(function () {
    // sets an event listener for when the mouse enters the element to change the background color and the text
    //console.log("The mouse has entered!");
    $secondDivPara.css({ backgroundColor: "LightGray" });
    $secondDivPara.text(
      "Look it changed!  Oh and don't forget, if you click me, my text color will change as well!"
    );
  });

  /**
   * todo -  Why does .on("mouseover", someFunction) not work but .on("keypress", otherFunction) work?
   */

  $secondDivPara.mouseout(function () {
    // sets an event listener for when the mouse leaves the element to change the background color and the text
    //console.log("The mouse has left!");
    $secondDivPara.css({ backgroundColor: "AliceBlue" });
    $secondDivPara.text("Pretty cool stuff right?");
  });

  $secondDivPara.click(function () {
    // defines what happens when $secondDivPara is clicked
    //console.log("Click is working!");
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    $secondDivPara.css({ color: `rgb(${r}, ${g}, ${b})` }); // changes the background color to a random color
  });

  $($secondDiv).append($secondDivPara);

  let $myNameButton = $("<button id=btn3>") // makes a button
    .text("My name is...") // with certain text and function:
    .click(function () {
      let $thirdDivSpan = $("<span id=span1>").text("Eric Moran"); // that creates a span with certain text
      $($thirdDiv).append($thirdDivSpan); // and appends it to $thirdDiv
      $myNameButton.unbind(); // finally removing the event from the button so it will not fire more than once :)
    });

  $($thirdDiv).append($myNameButton);
});
