$(test2).ready(function(){
    $("submitName").click(function(){
        var hours = $("#numberField").val();
        function coffeeCalc(hour){
            coffeeMg = hour // 5
            cups = coffeeMg // 95
            console.log(cups)    
    }
    coffeeCalc(hours)
    })
})
