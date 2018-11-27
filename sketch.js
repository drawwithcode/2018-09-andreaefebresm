var myMap;
var canvas;
var myLoc;
// Venezuela
var brqslat = 	10.074333;
var brqslng = -69.329224;


// Gabriela
var dclat = 38.5342;
var dclng = -77.0210;


// mom
var mlnlat = 45.4642700;
var mlnlng = 9.1895100;

var mappa = new Mappa('MapboxGL', 'pk.eyJ1IjoiYW5kcmVhZWZlYnJlc20iLCJhIjoiY2pvenRvdzFzMnhuOTNrbW82c3Z0Z3NweSJ9.5uBmPwi0rfbiDmavokRgUQ');
// Lets put all our map options in a single object
var options = {
  lat: 0,
  lng: 0,
  zoom: 2,
  style: 'mapbox://styles/andreaefebresm/cjozu42dc6p9e2rplf1s00dls',
  pitch: 0
}



function preload() {
  // put preload code here
  myLoc = getCurrentPosition();
  // cities = loadJSON('./assets/generated.json');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);


  // for (var i = 0; i < citta.length; i++) {
  //   var stud = citta.cities[i];
  //
  //
  //   // variabili per citta
  //   var x = citta.cities.position.latitude;
  //   var y =  citta.cities.position.longitude;
  //   var d = 50;
  //
  //   var newCity = new City(x, y, d);
  //   citta.push(newCity);
  //   console.log(citta);
  //
  // }

  options.lat = myLoc.latitude;
  options.lng = myLoc.longitude;

  // Create a tile map with the options declared
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

  // myMap.onChange(City);
}

function draw() {
  clear();
  angleMode(DEGREES);
  var point = myMap.latLngToPixel(myLoc.latitude, myLoc.longitude);
  fill(random(0, 150));
  noStroke();
  ellipse(point.x, point.y, 20);
  textSize(40);
  textFont('Crete Round');
  fill('#FEC601')
  textAlign(point.x);
  text('YOU ARE HERE', point.x - 100, point.y)


  textSize(30);
  var brqspoint = myMap.latLngToPixel(brqslat, brqslng);
  fill('white')
  text('DAD', brqspoint.x - 50, brqspoint.y - 20 );
  ellipse(brqspoint.x, brqspoint.y, 20);

  var dcpoint = myMap.latLngToPixel(dclat, dclng);
  fill('white')
  text('SISTER', dcpoint.x - 50, dcpoint.y - 20 );
  ellipse(dcpoint.x, dcpoint.y, 20);

  var mlnpoint = myMap.latLngToPixel(mlnlat, mlnlng);
  fill('white')
  text('MUM', mlnpoint.x - 50, mlnpoint.y - 20 );
  ellipse(mlnpoint.x, mlnpoint.y, 20);

  fill('#32021F');
  rect(width/2-200, height/3-25, 295, 30)
  fill('white');
  text('Welcome to my family', width/2-200, height/3)

  fill('#32021F');
  rect(width/2-200, height/3 + 15, 295, 30)
  fill('white');
  textSize(20);
  text('deal with distance', width/2-130, height/3 + 40);


}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
}
