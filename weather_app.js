$(document).ready(function() {
    $('form').submit(function() {
        // your code here (build up your url)
        var city = $("#city").val();
        var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+",us&&appid=42ae61d34ae81739bc76650c289cf017";
        function fahr(k){
           var realtemp = Math.floor(((k-273.15)*1.8)+32);
            return realtemp;
        } 
        $.get(url, function(res) {
            // your code here
           console.log(res);
           $("#result").html("<h1>"+res.name+"</h1><h2>Temperature: "+fahr(res.main.temp)+"</h2>");
        }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});