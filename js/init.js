jQuery(document).ready(function($) {
  var API_KEY = "947275bedd639909";
  var URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  var ctx = $("#NYCWeatherChart").get(0).getContext("2d");

 document.getElementById('chartArea').innerHTML = makeAjaxRequest(URL, function(json) {
    var data = generateDataSet(getHours(json), getFahrenheits(json));
    var tempChart = new Chart(ctx, { type: 'line', data: data, options: { bezierCurve: true }});
  });

// document.getElementById('chartArea').innerHTML = makeAjaxRequest(URL, function(json) {
//     var data = generateDataSet(getHours(json), getFahrenheits(json));
//     var tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
//   });


 //  var result = $.ajax({
	// 	  url: "http://api.wunderground.com/api/947275bedd639909/hourly/q/NY/New_York.json",
	// 	  type: 'GET',
	// 	  success: function(data){
	// 	  	console.log(data)
	// 	  }
	// })
});