let arsen = {
userAge:17,
userName:"Arsen",
};

console.log("Идет загрузка")
let romis = new Promise(function(resolve){
    
    setTimeout(() => {
        console.log("Идет обработка данных")
    }, 1000 );

let jsonData = JSON.stringify(arsen);
resolve(jsonData)
}).then(function(data){

    
    setTimeout(() => {
        let djf = JSON.parse(data)
        console.log(djf)
}, 2000);

})