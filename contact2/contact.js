// 百度地图API功能
	var map = new BMap.Map("map");
	map.centerAndZoom(new BMap.Point(117.269945,31.86713), 5);
	map.enableScrollWheelZoom(true);
	var index = 0;
	var myGeo = new BMap.Geocoder();
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
				var address = new BMap.Point(point.lng, point.lat);
				addMarker(address,new BMap.Label(index+":"+add,{offset:new BMap.Size(20,-10)}));
			}
		}, "全国");
	}
	// 编写自定义函数,创建标注
	function addMarker(point,label){
		var marker = new BMap.Marker(point);
		map.addOverlay(marker);
	}
