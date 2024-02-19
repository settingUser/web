function getUrlObj(url) {
	var urlObj = {};
	if (url == '' || url == undefined || url == null) {
		url = window.location.href;
	}
	if (url != '' && url != undefined && url != null) {
		if (url.indexOf('?') >= 0) {
			if (url.indexOf('&') >= 0) {
				var ObjArry = url.split('?')[1].split('&');
				for (val of ObjArry) {
					var key = val.split('=')[0];
					var vals = val.split('=')[1];
					urlObj[key] = vals;
				}
			} else {
				var key = url.split('?')[1].split('=')[0];
				var vals = url.split('?')[1].split('=')[1];
				urlObj[key] = vals;
			}
		}
	}
	return urlObj;
}
$(function () {
	$('#fangan1').html(fangan1)
	var url = window.location.href;
	var obj = getUrlObj(url);
	if (url.indexOf('open_id') >= 0) {
		if (obj.flag == 2) {
			$('.fangan2').show()
			$('.fangan1').hide()
		}
	} else {
		$('.fangan1').show()
		$('.fangan2').hide()
	};
})