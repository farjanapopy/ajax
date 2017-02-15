$(document).ready(function(){


	$("#btn").click(function(){
		var city_name=$("#Cityname").val();
		getvalue(city_name);

	});

	function getvalue(cityname){
		// alert(city);
		$.ajax({
			url: 'https://api.apixu.com/v1/current.json?key=fd48aae7884d4ddcbf192605171202&q='+cityname,
			dataType: 'json',
			success: function(data){
				// console.log(data);

				$("#city").text(data.location.name);
				$("#country").text(data.location.country);
				$("#temp").text(data.current.temp_c);
			}
		});
	}
});