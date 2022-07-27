const fetch = function(param, callback) {
    /**
     * 비동기 코드: 파일 시스템 접근, 네트워크, SQL to DB, setTimeout
     */
    setTimeout(function() {
        if(param === 'param-data') {
            callback(null, 'ok');
        } else {
            callback(new Error('fail'), null);
        }
    }, 2000);
}

// readFile(options, function(error, data){})

// test01: success
fetch('param-data', function(error, data){
    if(error) {
        console.error(error);
        return;
    }
    
    console.log(data);
    
});

// test02: fail
fetch('param-error', function(error, data){
    if(error) {
        console.error(error);
        return;
    }
    
    console.log(data);
    asymcFuntion("", function(error, data){ 
        setInterval()
    }, 2000)
});

console.log("wait....");