"use strict"
var firstImage = document.getElementById('firstImage');
var secondImage = document.getElementById('secondImage');
var thirdImage = document.getElementById('thirdImage');
var button = document.getElementById('button');
firstImage.addEventListener('click', handleClickOnFirst);
secondImage.addEventListener('click', handleClickOnSecond);
thirdImage.addEventListener('click', handleClickOnThird);
var buttonId = document.getElementById("button");
buttonId.addEventListener('click', buttonClick);
var TOTALCLICKS=0;

var picturesClickedChart = [];

var objectArray = [];
// constructor
function ObjectsNameAndLink(name, webAddress, clicks, timesDisplayed){
  this.name = name;
  this.webAddress = webAddress;
  this.clicks = 0;
  this.timesDisplayed = 0;
  this.percentClick = 0;
  objectArray.push(this);
// this.pictureDisplayed = pictureDisplayed;
};

var bag = new ObjectsNameAndLink('bag', "https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/bag.jpg?raw=true", 0, 0);
var banana = new ObjectsNameAndLink('banana', "https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/banana.jpg?raw=true", 0, 0);
var boots = new ObjectsNameAndLink('boots', "https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/boots.jpg?raw=true", 0, 0);

var chair = new ObjectsNameAndLink('chair', "https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/chair.jpg?raw=true", 0, 0);
var cthulu = new ObjectsNameAndLink('cthulhu', "https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/cthulhu.jpg?raw=true", 0, 0);
var dragon = new ObjectsNameAndLink('dragon', "https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/dragon.jpg?raw=true", 0, 0);

var pen = new ObjectsNameAndLink('pen', "https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/pen.jpg?raw=true", 0, 0);
var scissors = new ObjectsNameAndLink('scissors', "https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/scissors.jpg?raw=true", 0, 0);
var shark = new ObjectsNameAndLink('shark', "https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/shark.jpg?raw=true", 0, 0);

var sweep = new ObjectsNameAndLink('sweep', "https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/sweep.png?raw=true", 0, 0);
var unicorn = new ObjectsNameAndLink('unicorn', "https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/unicorn.jpg?raw=true", 0, 0);
var usb = new ObjectsNameAndLink('usb', "https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/usb.gif?raw=true", 0, 0);

var waterCan = new ObjectsNameAndLink('water-can', "https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/water-can.jpg?raw=true", 0, 0);
var wineGlass = new ObjectsNameAndLink('wine-glass', "https://github.com/codefellows/sea-201d5/blob/master/week-3/assets/wine-glass.jpg?raw=true", 0, 0);

var itemArray = [bag, banana, boots, chair, cthulu, dragon, pen, scissors, shark, sweep, unicorn, usb, waterCan, wineGlass];

var arr = [];0
function generate() {
  arr = [];
while(arr.length < 3){
  var randomnumber=Math.round(Math.random()*13)
  var found=false;
  for(var i=0;i<arr.length;i++){
	if(arr[i]==randomnumber){found=true;break}
  }
  if(!found)arr[arr.length]=randomnumber;
}
};
generate();
console.log(arr)
var x=arr[0];
var y=arr[1];
var z=arr[2];
function display() {
  document.getElementById('firstImage').src = itemArray[arr[0]].webAddress; itemArray[arr[0]].timesDisplayed +=1;
  document.getElementById('secondImage').src = itemArray[arr[1]].webAddress; itemArray[arr[1]].timesDisplayed +=1;
  document.getElementById('thirdImage').src = itemArray[arr[2]].webAddress; itemArray[arr[2]].timesDisplayed +=1;
};
display();

function handleClickOnFirst(){
TOTALCLICKS +=1;
itemArray[arr[0]].clicks +=1;
console.log(itemArray[arr[0]]);
itemArray[arr[0]].timesDisplayed +=1;
itemArray[arr[0]].percentClick = (itemArray[arr[0]].clicks/itemArray[arr[0]].timesDisplayed)*100;
generate();
display();
if(TOTALCLICKS === 5){
buttonId.removeAttribute("hidden");
}
};
function handleClickOnSecond(){
  TOTALCLICKS +=1;
itemArray[arr[1]].clicks +=1;
console.log(itemArray[arr[1]]);
itemArray[arr[1]].timesDisplayed +=1;
itemArray[arr[1]].percentClick = (itemArray[arr[1]].clicks/itemArray[arr[1]].timesDisplayed)*100;
generate();
display();
if(TOTALCLICKS === 5){
buttonId.removeAttribute("hidden");
}
};
function handleClickOnThird(){
  TOTALCLICKS +=1;
itemArray[arr[2]].clicks +=1;
console.log(itemArray[arr[2]]);
itemArray[arr[2]].timesDisplayed +=1;
itemArray[arr[2]].percentClick = (itemArray[arr[2]].clicks/itemArray[arr[2]].timesDisplayed)*100;
generate();
display();
if(TOTALCLICKS === 5){
buttonId.removeAttribute("hidden");
}
};

var ctx = document.getElementById("myChart").getContext("2d");
var data = {
    labels: [],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: []
        }
    ]
};
var myBarChart = new Chart(ctx).Bar(data);

function buttonClick(){
  console.log("testing result button");
for(var i =0; i < objectArray.length;i++){
  data.labels[i] = objectArray[i].name;
  data.datasets[0].data[i] = objectArray[i].clicks;
 }
 var myBarChart = new Chart(ctx).Bar(data);
};

var chartData = localStorage.getItem('persistentchart');
if(chartData) {
  helloKyle = JSON.parse(chartData);
  } else {
    console.log('LOCAL STORAGE IS EMPTY...Initializing');
    localStorage.setItem('persistentchart', JSON.stringify(helloKyle));
};
