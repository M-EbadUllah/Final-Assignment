var FirstName = prompt("Enter Your First Name");
alert(FirstName)
var LastName = prompt("Enter Your Last Name");
alert(LastName)
var FullName = FirstName+LastName;
alert(FullName);
var greetings = "Hello Man";
alert(greetings);



var MyFavoritePhone = prompt("Enter Your Favorite Phone");
alert(MyFavoritePhone);
var n = MyFavoritePhone.length;
alert(n);


var string = "Pakistani";
document.write(string);
document.write("<br>");
var g = string.indexOf("n");
document.write(g);

document.write("<br>");
document.write("<br>");


var string = "Hello World";
document.write(string);
document.write("<br>");
var h = string.lastIndexOf("l");
document.write(h);

document.write("<br>");
document.write("<br>");



var string = "Pakistani";
document.write(string);
document.write("<br>");
var k = string.charAt(3);
document.write(k);

document.write("<br>");
document.write("<br>");

var a = "Hyderabad";
document.write(a);
document.write("<br>");
var newtext = a.replace("Hyder","Islam");
document.write(newtext); 

document.write("<br>");
document.write("<br>");

var message = "Ali and Sami are best friends.They play cricket and football together."
document.write(message);
document.write("<br>");
var res = message.replace ("and","&");
document.write(res);

document.write("<br>");
document.write("<br>");

var z = "peanuts";
document.write(z);
document.write("<br>");
var c = z.toUpperCase();
document.write(c);

document.write("<br>");
document.write("<br>");


document.write("<br>");
document.write("<br>");

var num1 = "Value = 472";
document.write(num1);
document.write("<br>");
var type = "Type = String";
document.write(type);
document.write("<br>");
var num2 = "Value = 472";
document.write(num2);
document.write("<br>");
var type1 = num2.toString();
document.write(type1);

document.write("<br>");
document.write("<br>");

var num3 = 35.36;
document.write(num3);
document.write("<br>");
var num4 = 3536;
var n = num4.toString();
document.write(n);

var userName=prompt("Enter your Input: ");
checkValidName(userName);
function checkValidName(un)
{
    var message;
    var split=[];
    var arr=[];
    for(var i=0;i<un.length;i++)
    {
        split[i]=un.split("&nbsp;");
        arr[i]=un.charCodeAt(i);
        if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
        {
                message="Correct User Name";
        }
        while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
        {
            alert("please enter a valid userName");                                                                                                                   
            userName=prompt("Enter your Input: ");
            split[i]=un.split("&nbsp;");
            arr[i]=un.charCodeAt(i);
            if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
            {
                message="correct in";
                break;
            }
        }

    }
    alert(message);
}



document.write("<br>");
document.write("<br>");

var string = "Pakistan";
document.write(string);
document.write("<br>");
var k = string.charAt(7);
document.write(k);

document.write("<br>");
document.write("<br>");


var a = "the quick brown fox jumps over the lazy dog"
document.write(a);
document.write("<br>");
var d = a.substring-count(the);
document.write(d);

