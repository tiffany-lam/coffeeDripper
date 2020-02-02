$(document).ready(function(){
    $("submitName").click(function(){
        var hours = $("#hoursAwake").val();
        function coffeeCalc(hour){
            coffeeMg = (hour / 5) * 50
            cups = coffeeMg / 95
            console.log(cups)    
        }
        coffeeCalc(hours)
    })
})
