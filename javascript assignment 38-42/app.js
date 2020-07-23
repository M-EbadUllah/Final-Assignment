var a = Math.pow(4,4);
document.write(a);

document.write("<br>");
document.write("<br>");
document.write("<br>");

var side1 = prompt('Enter side1: ');
var side2 = prompt('Enter side2: '); 
var side3 = prompt('Enter side3: '); 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
document.write(area);

document.write("<br>");
document.write("<br>");
document.write("<br>");

var students = [['Aslam', 80], ['Fakhar', 77], ['Mobin', 88]];
var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

alert("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          alert("Grade : F");      
          } 
        else if (avg < 70) {
                alert("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                alert("Grade : C"); 
        } else if (avg < 90) {
                alert("Grade : B"); 
        } else if (avg < 100) {
                alert("Grade : A"); 
}

document.write("<br>");
document.write("<br>");
document.write("<br>");

var sampleStr = "Hi, Mark!";
var n = sampleStr.indexOf("Hi", 0);
document.write(n);

document.write("<br>");
document.write("<br>");
document.write("<br>");

var string = "heelloo world";
var vowel = ["a", "e", "i", "o", "u"];

String.prototype.character = function name() {
    var i;
    for ( i = 0; i < vowel.length; i++) {
        var secondLoop = string.length;
        for ( j = 0; j < secondLoop; j++) {
            if (vowel[i] == string.charAt(j)) {
                string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
            }

        }
    }
}

string.character();
document.write(string);
//hello world