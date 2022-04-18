/**
gui3 capsule collection
state intro : demons belong on earth, and so do U
- show all images in a setTimeout(displayImage(),2000);
- space for the lil description
- demons all over city
- close tab
*/

"use strict";

window.onload = function () {



    //creation of images
let imgArray = document.getElementsByClassName(`img`);

let imgDiv= document.getElementById(`imgCollection`);

//creation of titles/text elements
let state = `intro`
let titleText = document.getElementById(`introText`);

$( titleText ).animate({
    opacity: 1
  }, 5000, imgAppear
  
  );


function imgAppear(){
$(imgDiv).show();

for(let i=0;i< imgArray.length; i++){
    setTimeout(function (){
            console.log(imgArray[i]);
        // $(imgArray[i]).show();
        $(imgArray[i]).css("opacity","1");
    },1000*i);
}

}


} //end onLoad