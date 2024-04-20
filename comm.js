(()=>{
const arg = getURLParameters();
 fetch(`https://www.jfchat.cn/api/api/gano/common-url/get-weix-url?code=${arg.arg}`,{
    method: 'GET',
 }).then(response=>{
if(response.ok){
response.json().then(data=>{
    console.log(data)
    if(data.success){
        window.location.href = data.data.url_link;
    }
})
}


 })

})()
function getURLParameters() {
    const url = window.location.href;
    var urlParams = {};
    var e,
        a = /\+/g,  // 用于替换URL中的加号
        r = /([^&=]+)=?([^&]*)/g, // 用于匹配URL中的参数
        d = function (s) { return decodeURIComponent(s.replace(a, " ")); }, // 用于解码URL中的参数值
        q = url.split("?");
    // 如果URL中有"?"，则处理其后面的参数部分
    if (q.length > 1) {
        e = q[1];
        var u = e.split("&");
        for (var i = 0; i < u.length; ++i) {
            var j = u[i].split("=");
            urlParams[d(j[0])] = d(j[1] || "");
        }
    }
    return urlParams;
}