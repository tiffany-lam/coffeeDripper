$(document).ready(function math(){
    var hours = document.getElementById("numberField").value;
    console.log("hours", hours);
    function coffeeCalc(hours){
        var coffeeMg = hours / 5;
        var cups = coffeeMg / 95;
        console.log("cups:", cups)    
    }
    coffeeCalc(hours)

})
