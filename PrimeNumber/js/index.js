
//script starts from here

  function printPrime() {
     var i = 0;
     var j = 0;
     limit = document.getElementById('limit').value;
     for (i = 1; i <= limit; i++) {
     c = 0; 
     for (j = 1; j <= i; j++) {
    if (i % j == 0) {                     
     c++;
       }
         }
    if (c == 2) {
    document.getElementById("result").insertAdjacentHTML('beforeend', i + '<br>');
         }
            }
       }

  //to test prime number
   function isPrime(num) {
    var prime = num != 1;
    for(var i=2; i<num; i++) {
        if(num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

function init() {
    var input = document.getElementById("input_num");
    var resultprime = document.getElementById("resultprime");
    input.onkeyup = function(e) {
        var val = this.value;
        if(val == "") {
            result.className = "";
            result.innerHTML = "";
            return;
        }
        if(/\D/.test(val)) {
            result.className = "nan";
            result.innerHTML = "only numbers are allowed";
        } else {
            result.innerHTML = isPrime(val) ? "The entered number is Prime!" : "Entered number is not Prime!";
            result.className = isPrime(val) ? "Yes" : "No";
        }
    };
}
window.onload = init;

//script ends here