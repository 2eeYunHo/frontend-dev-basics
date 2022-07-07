// URL 다루기

var url1 = "http://www.mysite.com/user?name=둘리&no=10";

// 1. escape
var url2 = escape(url1);
console.log(url2);

// 2. encodeURI
var url3 = encodeURI(url1);
console.log(url3);

// 3. encodeURIComponent: 값만 encoding해야 하는 경우, 사용(O)
// 잘못된 사용의 경우
var url4 = encodeURIComponent(url1);
console.log(url4);

// 4. 만들어야한 URL
// http//wwww.mysite.com/user?no=10&name=둘리&email=llyn99@naver.com
var url = "http//wwww.mysite.com/user";
var params = {
    name: "둘리",
    no: 10,
    email: "llyn99@naver.com"
};
encodeURI(url + "?name=" +params.name+"&no="+params.no);

var toQueryString = function(o) {
    var qs = [];
    for(prop in o) {
        qs.push(prop + "=" + o[prop]);
    }
    return qs.join('&');
}
var url5 = url + "?" + toQueryString(params)
console.log(url5);

f= function() {
    console.log("!!!");
}
/*
varjQuery = function() {....}
var $ = jQuery

$.ajax({
    url: "",
    type: "post", toQueryString(params)
    data: toQueryString
});
*/
toQueryString(params);