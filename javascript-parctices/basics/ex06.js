/* 
    객체 자바스크립트 객체  I: objectType
    1. 자바스크립트 객체는 object타입과 function타입이 있다
    2. 보통, function 타입의 객체는 '함수'라 부른다
    3. 따라서 자바스크립트에서 우리가 흔히 객체라 부르는 것은 object 타입의 객체라고 할 수 있다.

    // 생성 방법1
    // 생성자 함수를 사용하는 방법
    // Object, Number, String, RegExp, Array - 내장객체 (내장 생성자 함수)
*/
var o1 = new Object();
o1.name = '둘리';
o1.age = 10;
o1.another = new Object();
o1.another.name = '마이콜';
o1.another.age = 30;
console.log(o1);
// 사용자 생성자 함수
var MyObject = function(name) {
    this.name = name;
}

var o2=new MyObject('u-unow');
console.log(o2);


// 생성방법2
// {} 리터럴을 사용하는 방법
var o3 = {};
o3.name='둘리';
o3.age = 10;
o3.another = new Object();
o3.another.name = '마이콜';
o3.another.age =  30;
console.log(o3);

// 생성방법3
// {} 리터럴을 사용하는 방법
// (J)ava(S)cript(O)bject(N)otation
var o4 = {
    name: '둘리',
    age: 10,
    another: {
        name:'마이콜',
         age:30
    }
};
console.log(o4);
// XmlHttpRequest 호스트(브라우저) 객체를 사용해서
// 통신(AJAX)에서 데이터, 교환의 포멧으로 JSON을 사용한다.
var response = "{name: '둘리', email:'llyn99@naver.com'}";
var userVo = eval("(" + response + ")");
console.log(userVo.name, userVo.email);
