const fetch = function(params, callback){
    
    return new Promise(function(resolve, reject){
        //
        // 비동기 코드: 파일 시스템 접근, 네트워크, SQL to DB, setTimeout
        //    
        setTimeout(function(){
            if(params === 'param-data'){
                resolve('ok');
            } else {
                reject(new Error('fail'), null);
            }
        }, 2000);
    });
}

if(require.main === module){
// test01: success
fetch("param-data").then(function(result){
    console.log(result);
});

// test02: fail
fetch("param-error").catch(function(error){
    console.log(error);
});

// 일반적으로..
// fetch("param....")
//     .then(function(result){
//     })
//     .catch(function (error) {    
//     })
} else {
    module.exports = fetch;
}
console.log("wait.....");