//script starts from here

function myFunction() {
    //get the value from textbox
    var str = document.getElementById('txtbox').value;
    //call checkPalindrome() and pass string
    var result = checkPalindrome(str);
    alert('The Entered String "' + str + '" is "' + result + '"');
}
function checkPalindrome(str) {
    var orignalStr;
    //lowercase the string 
    str = str.toLowerCase();
    //store the str in orignalStr for future use
    orignalStr = str;
    //reverse the entered string
    str = str.split(''); //split the entered string 
    str = str.reverse(); //reverse the order 
    str = str.join(''); //then join the reverse order array values			
    var reverseStr = str;
    if (orignalStr == reverseStr) {
        return 'Palindrome'; // return "Palindrome" if true
    } else {
        return 'Not Palindrome';
    }
}

//script ends here