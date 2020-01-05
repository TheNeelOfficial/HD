// 百度地图API功能
	var map = new window.BMap.Map("map");
	map.centerAndZoom(new window.BMap.Point(117.269945,31.86713), 6);
	map.enableScrollWheelZoom(true);
	var index = 0;
	var myGeo = new window.BMap.Geocoder();
	var adds = [
		"成都市金牛区迎宾大道8号4栋604",
	];
	function bdGEO(){
		var add = adds[index];
		geocodeSearch(add);
		index++;
	}
	function geocodeSearch(add){
		if(index < adds.length){
			setTimeout(window.bdGEO,400);
		}
		myGeo.getPoint(add, function(point){
			if (point) {
				var address = new window.BMap.Point(point.lng, point.lat);
				addMarker(address,new window.BMap.Label(index+":"+add,{offset:new window.BMap.Size(20,-10)}));
			}
		}, "全国");
	}
	// 编写自定义函数,创建标注
	function addMarker(point,label){
		var marker = new window.BMap.Marker(point);
		map.addOverlay(marker);
	}


	//
	// //material contact form animation
	// $(".contact-form")
	//     .find(".form-control")
	//     .each(function () {
	//         var targetItem = $(this).parent();
	//         if ($(this).val()) {
	//             $(targetItem)
	//                 .find("label")
	//                 .css({
	//                     top: "-6px"
	//                     , fontSize: "16px"
	//                     , color: "#ff512f"
	//                 });
	//         }
	//     });
	// $(".contact-form")
	//     .find(".form-control")
	//     .focus(function () {
	//         $(this)
	//             .parent(".input-block")
	//             .addClass("focus");
	//         $(this)
	//             .parent()
	//             .find("label")
	//             .animate({
	//                     top: "-6px"
	//                     , fontSize: "16px"
	//                     , color: "#ff512f"
	//                 }
	//                 , 300
	//             );
	//     });
	// $(".contact-form")
	//     .find(".form-control")
	//     .blur(function () {
	//         if ($(this).val().length == 0) {
	//             $(this)
	//                 .parent(".input-block")
	//                 .removeClass("focus");
	//             $(this)
	//                 .parent()
	//                 .find("label")
	//                 .animate({
	//                         top: "20px"
	//                         , fontSize: "18px"
	//                     }
	//                     , 300
	//                 );
	//         }
	//     });
