var firstImage = document.getElementById('firstImage');
var secondImage = document.getElementById('secondImage');
var thirdImage = document.getElementById('thirdImage');

firstImage.addEventListener('click', handleClickOnFirst);
secondImage.addEventListener('click', handleClickOnSecond);
thirdImage.addEventListener('click', handleClickOnThird);

var firstClicks = 0;
var secondClicks = 0;
var thirdClicks = 0;
// adding way to indicate which # was chose aka picture.
var pictureNumberPicked = [];


function handleClickOnFirst(){
  firstClicks += 1;
console.log("first image was clicked " + firstClicks + " times.");
//trying to add event listener on click to change all pictures
if (console.log){

  console.log(i);
  pictureNumberPicked.push(i);
  console.log(pictureNumberPicked);
  generateSecondPictureSlot();
  generateThirdPictureSlot();
}

};

function handleClickOnSecond(){
  secondClicks +=1;
  console.log("second image was clicked " + secondClicks + " times.");
  if (console.log){
    console.log(i);
    pictureNumberPicked.push(i);
    console.log(pictureNumberPicked);
    generateFirstPictureSlot();
    generateThirdPictureSlot();
  }
};

function handleClickOnThird(){
  thirdClicks +=1;
  console.log("third image was clicked " + thirdClicks + " times.");
  if (console.log){
    console.log(i);
    pictureNumberPicked.push(i);
    console.log(pictureNumberPicked);
    generateFirstPictureSlot();
    generateSecondPictureSlot();
  }
}

//end of random generator.
function generateFirstPictureSlot(){
i=Math.floor(Math.random()*(14));
console.log(i);
document.getElementById('firstImage').src = Converter[i];

};
function generateSecondPictureSlot(){
i=Math.floor(Math.random()*(14));
console.log(i);
document.getElementById('secondImage').src = Converter[i];

};
function generateThirdPictureSlot(){
i=Math.floor(Math.random()*(14));
console.log(i);
document.getElementById('thirdImage').src = Converter[i];
};


// function changeImage() {
//   if (document.getElementById('firstImage').src = "https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/chair.jpg?raw=true")
//   {
//     document.getElementById('secondImage').src = "https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/cthulhu.jpg?raw=true";
//     }
//     else
//     {
//       document.getElementById('thirdImage').src = "https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/dragon.jpg?raw=true";
//     }
// };
//here up changes 1 image to the next once



var pictureArray = ['bag',
'banana',
'boots',
'chair',
'cthulhu',
'dragon',
'pen',
'scissors',
'shark',
'sweep',
'unicorn',
'usb',
'water-can',
'wine-glass']

var Converter = ["https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/bag.jpg?raw=true",
"https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/banana.jpg?raw=true",
"https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/boots.jpg?raw=true",
"https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/chair.jpg?raw=true",
"https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/cthulhu.jpg?raw=true",
"https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/dragon.jpg?raw=true",
"https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/pen.jpg?raw=true",
"https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/scissors.jpg?raw=true",
"https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/shark.jpg?raw=true",
"https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/sweep.png?raw=true",
"https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/unicorn.jpg?raw=true",
"https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/usb.gif?raw=true",
"https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/water-can.jpg?raw=true",
"https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/wine-glass.jpg?raw=true"]
pictureArray[0]=Converter[0];
pictureArray[1]=Converter[1];
pictureArray[2]=Converter[2];
pictureArray[3]=Converter[3];
pictureArray[4]=Converter[4];
pictureArray[5]=Converter[5];
pictureArray[6]=Converter[6];
pictureArray[7]=Converter[7];
pictureArray[8]=Converter[8];
pictureArray[9]=Converter[9];
pictureArray[10]=Converter[10];
pictureArray[11]=Converter[11];
pictureArray[12]=Converter[12];
pictureArray[13]=Converter[13];
