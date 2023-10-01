$(document).ready(function(){
	
	var total = 0;
	$("#button").click(function(){
		var data = parseInt($(".score").find("td:eq(1) input[type='number']").val());
        var puttsdata = parseInt($(".putts").find("td:eq(1) input[type='number]").val());

		var data2 = parseInt($(".score").find("td:eq(2) input[type='number']").val());
        var puttsdata2 = parseInt($(".putts").find("td:eq(2) input[type='number]").val());

		var data3 = parseInt($(".score").find("td:eq(3) input[type='number']").val());
        var puttsdata3 = parseInt($(".putts").find("td:eq(3) input[type='number]").val());

		var data4 = parseInt($(".score").find("td:eq(4) input[type='number']").val());
        var puttsdata4 = parseInt($(".putts").find("td:eq(4) input[type='number]").val());

		var data5 = parseInt($(".score").find("td:eq(5) input[type='number']").val());
        var puttsdata5 = parseInt($(".putts").find("td:eq(5) input[type='number]").val());

		var data6 = parseInt($(".score").find("td:eq(6) input[type='number']").val());
        var puttsdata6 = parseInt($(".putts").find("td:eq(6) input[type='number]").val());

		var data7 = parseInt($(".score").find("td:eq(7) input[type='number']").val());
        var puttsdata7 = parseInt($(".putts").find("td:eq(7) input[type='number]").val());

		var data8 = parseInt($(".score").find("td:eq(8) input[type='number']").val());
        var puttsdata8 = parseInt($(".putts").find("td:eq(8) input[type='number]").val());

		var data9 = parseInt($(".score").find("td:eq(9) input[type='number']").val());
        var puttsdata9 = parseInt($(".putts").find("td:eq(9) input[type='number]").val());

		
		total = data + data2 + data3 + data4 + data5 + data6 + data7 + data8 + data9;
        puttsTotal = puttsdata + puttsdata2 + puttsdata3 + puttsdata4 + puttsdata5 + puttsdata6 + puttsdata7 + puttsdata8 + puttsdata9
		total.toString();
        puttsTotal.toString();
		$(".score").find("td:eq(10)").html(total);
        $(".putts").find("td:eq(10)").html(puttsTotal);

		//alert(total);
	});
	
	$("#button1").click(function(){
		var data11 = parseInt($(".score").find("td:eq(11) input[type='number']").val());
        var puttsdata11 = parseInt($(".putts").find("td:eq(11) input[type='number]").val());

		var data12 = parseInt($(".score").find("td:eq(12) input[type='number']").val());
        var puttsdata12 = parseInt($(".putts").find("td:eq(12) input[type='number]").val());

		var data13 = parseInt($(".score").find("td:eq(13) input[type='number']").val());
        var puttsdata13 = parseInt($(".putts").find("td:eq(13) input[type='number]").val());

		var data14 = parseInt($(".score").find("td:eq(14) input[type='number']").val());
        var puttsdata14 = parseInt($(".putts").find("td:eq(14) input[type='number]").val());

		var data15 = parseInt($(".score").find("td:eq(15) input[type='number']").val());
        var puttsdata15 = parseInt($(".putts").find("td:eq(15) input[type='number]").val());

		var data16 = parseInt($(".score").find("td:eq(16) input[type='number']").val());
        var puttsdata16 = parseInt($(".putts").find("td:eq(16) input[type='number]").val());

		var data17 = parseInt($(".score").find("td:eq(17) input[type='number']").val());
        var puttsdata17 = parseInt($(".putts").find("td:eq(17) input[type='number]").val());

		var data18 = parseInt($(".score").find("td:eq(18) input[type='number']").val());
        var puttsdata18 = parseInt($(".putts").find("td:eq(18) input[type='number]").val());

		var data19 = parseInt($(".score").find("td:eq(19) input[type='number']").val());
        var puttsdata19 = parseInt($(".putts").find("td:eq(19) input[type='number]").val());


		total = data11 + data12 + data13 + data14 + data15 + data16 + data17 + data18 +data19;
        puttsTotal = puttsdata11 + puttsdata12 + puttsdata13 + puttsdata14 + puttsdata15 + puttsdata16 + puttsdata17 + puttsdata18 + puttsdata19
		
        total.toString();
        puttsTotal.toString();

		$(".score").find("td:eq(20)").html(total);
        $(".putts").find("td:eq(20)").html(puttsTotal);

	
	});
	
	
	
	$("#button2").click(function(){
		var Front = parseInt($(".score").find("td:eq(10)").text());
        var puttsFront = parseInt($(".putts").find("td:eq(110)").text());

		var Back = parseInt($(".score").find("td:eq(20)").text());
        var puttsBack = parseInt($(".putts").find("td:eq(120)").text());

		 total = Front + Back;
         puttsTotal = puttsFront + puttsBack;

		 $(".score").find("td:eq(21)").html(total);
         $(".putts").find("td:eq(121)").html(puttsTotal);

	});
	
});

