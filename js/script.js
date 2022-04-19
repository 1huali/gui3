/**
gui3 capsule collection
state intro : demons belong on earth, and so do U
- show all images in a setTimeout(displayImage(),2000);
- space for the lil description
- demons all over city
- close tab

Q: TAKES TIME TO LOAD
Q: want the image to appear with their time
Q: does this look clean? 
*/

"use strict";

window.onload = function () {



    //creation of images
let imgArray = document.getElementsByClassName(`img`);
let imgDiv= document.getElementById(`imgCollection`);

//creation of titles/text elements
let introText = document.getElementById(`introText`);
let titleText = document.getElementById(`titleText`);
let endText = document.getElementById(`endText`);
let footer = document.getElementById(`footer`);
let daylight = document.getElementById(`underDaylight`);
let darklight = document.getElementById(`underDarklight`);



//title sequence appears and dissapears after 5 seconds
// $(footer).show();

$( introText ).animate({
    opacity: 1
  }, 5000, imgAppear
);
// $( introText ).animate({
//     opacity: 1
//   }, 5000);


setTimeout(function (){
  $( titleText ).animate({
    opacity: 1
  }, 5000);
}, 5000);


  $( footer ).animate({
    opacity: 1
  }, 100);




//-----------------------------functions

function imgAppear(){


//images fade in at 1 img/sec
$(imgDiv).show();

for(let i=0;i< imgArray.length; i++){

    setTimeout(function (){

        $(imgArray[i]).css("opacity","1");
    },1000*i);

}
//intro text fade out
$( introText ).animate({
    opacity: 0
  }, 100, imgAppear
  );



}




} //end onLoad