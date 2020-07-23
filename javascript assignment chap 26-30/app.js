var b = "3.45214";
document.write(b);
document.write("<br>");
var a  = Math.round(3.45214);
document.write(a);
document.write("<br>");
var c = Math.ceil(3.45214);
document.write(c);
document.write("<br>");
var d = Math.floor(3.45214);
document.write(d);

document.write("<br>");
document.write("<br>");



var e = "-2.673";
document.write(e);
document.write("<br>");
var f  = Math.round(-2.673);
document.write(f);
document.write("<br>");
var g = Math.ceil(-2.673);
document.write(g);
document.write("<br>");
var h = Math.floor(-2.673);
document.write(h);


document.write("<br>");
document.write("<br>");


var k = "absolute value of -4 is :";
document.write(k);
document.write("<br>");
var l = Math.abs(-4);
document.write(l);

document.write("<br>");
document.write("<br>");

var diceRoll = Math.floor( Math.random() * 6 ) +1;
document.write('You rolled a ' + diceRoll);

document.write("<br>");
document.write("<br>");

var coin = Math.floor( Math.random() * 2 ) +1;
document.write('You flip a coin ' + coin);

document.write("<br>");
document.write("<br>");

function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}  
  
document.write("Random Number between 1 and 100: ")   
document.write( randomNumber(1, 100) );


document.write("<br>");
document.write("<br>");





