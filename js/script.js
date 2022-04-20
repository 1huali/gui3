/**
gui3 capsule collection
state intro : demons belong on earth, and so do U
- show all images in a setTimeout(displayImage(),2000);
- space for the lil description
- demons all over city
- close tab

Q: TAKES TIME TO LOAD
Q: want the image to appear with their time : all under the same divs
Q: does this look clean? 
*/

"use strict";

window.onload = function () {


  let j = 0; 

  // we use "i" in the naming :) so is from 1 to 12 because your images are labelled as {1}pm.jpg to {11}pm.jpg
  for( let i = 1; i < 12; i++ ){ 
      addPreloadHandler( i );
  }
  
  function addPreloadHandler(this_i) {
   // console.log(this_i)
   let loaderText = document.getElementById(`loadingText`);
  
    $(document.createElement('img')).addClass("real_img").attr('src', `assets/images/${this_i}pm.jpg`)
    .one("load",
      
        function()
        {
          //console.log(`assets/images/${this_i}pm.jpg is loaded`);
  
          j++;
          //console.log(j)
  
          if(j == 11){
              console.log('fully loaded');
              goRunState();
              $(loaderText).remove();
  
  
          }
      }
        ).prependTo(`#img${this_i}`)
  
  }
  
  
  function goRunState () {
    console.log("in run");
  
  //creation of images
  let imgArray = document.getElementsByClassName(`img`);
  let imgDiv= document.getElementById(`imgCollection`);
  //console.log(imgDiv.getBoundingClientRect().height);
  
  
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
    }, 5000);



//-----------------------------functions

function imgAppear(){

document.getElementsByTagName(`body`)[0].classList.add(`bodyGradient`);

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



// }




} //end onLoad