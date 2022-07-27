/*
const: Block Scope의 변수
*/


//1. block scope 확인
try {
    if(true) {
        const num = 10;
    }

    console.log(num);
} catch(e) {
    console.error("[error]" + e)
}

//2. 대입(Assigment)
try {
    const o = {};
    o.name = '둘리';//에러x

    o = {};         //에러o
} catch(e) {
    console.error("[error]" + e)
}
