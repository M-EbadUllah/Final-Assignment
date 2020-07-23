var d = new Date();
document.write(d);

document.write("<br>");


var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
var d = new Date();
var n = month[d.getMonth()];
alert(n);

document.write("<br>");
document.write("<br>");

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thurs";
weekday[5] = "Fri";
weekday[6] = "Sat";

var m = weekday[d.getDay()];
document.write(m);

document.write("<br>");
document.write("<br>");

var b = "Its Fun Day";
document.write(b);

document.write("<br>");
document.write("<br>");

var j = new Date();
var millisec = j.getTime();
document.write(millisec);
document.write("<br>");
var elapsedminutes = j.getMinutes();
document.write(elapsedminutes); 

document.write("<br>");
document.write("<br>");

var dt = new Date();
    var h =  dt.getHours(), m = dt.getMinutes();
    var time = (h > 12) ? (h-12 + ':' + m +' PM') : (h + ':' + m +' AM');
document.write(time);

document.write("<br>");
document.write("<br>");


var d = new Date("Dec 15, 2020");
  d.setDate(31);
  document.write(d);

  document.write("<br>");
document.write("<br>");


 var now = new Date();
 var theHr = now.getHours();
 var theMin = now.getMinutes();
 alert("Current time: "+ theHr + ":" + theMin);
 var k = "1 hour ago, it was Sat Jun 19,2020 19:58:01 GMT+0500 (PKT)";
 alert(k);

 document.write("<br>");
document.write("<br>");
 
 var d = new Date();
  d.setFullYear(1920);
  document.write(d);









