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
let imgArray = [];
// let img1 = document.getElementById(`img1`);
// let img2 = document.getElementById(`img2`);
// let img3 = document.getElementById(`img3`);
// imgArray.push(`img1`);
// imgArray.push(`img2`);
// imgArray.push(`img3`);

let imgDiv= document.getElementById(`imgCollection`);

//creation of titles/text elements
let state = `intro`
let introText = document.getElementById(`titleText`);


function stateChange(){
state= `intro`;

if (state === `intro`){

    // only title appearing, and disappears after 3 seconds
        imgDiv.style.visibility = "hidden"; 

        setTimeout(function () {
            displayTitle;
          }, 2000);
          displayLookbook();
}

if (state=== `lookbook`){
    setTimeout(displayLookbook(),2500);

}

if (state=== `onTimer`){
    setTimeout(window.close(),70000);
}
setTimeout(function({
    state= `endTitle`;
}),65000);
}
}

function displayTile(){
    introText.style.visibility = "visible"
}

function displayLookbook(){
    for (let i=0; i< imgArray.length; i++){
        imgDiv.style.visibility = "visible"; 
        imgArray[i].style.opacity="100%";
//Q: how to make sure they appear one after the other?
if (imgArray[i].style.opacity="100%"){
state = `onTimer` }
}
}

function endTitle(){
    endTitle.style.visibility="visible"
}


} //end onLoad