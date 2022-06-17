function calculadora() {
    function suma  (){
        let suma = [];
        console.log("digite el numero");
        process.stdin.on("data", (data) => {
          suma.push(parseInt(data));
          if (suma.length > 1) {
            console.log(suma[0] + suma[1]);
            process.exit();
          }
        });
    };
    function resta  (){
        let resta = [];
        console.log("digite el primer numero luego el segundo");
        process.stdin.on("data", (data) => {
          resta.push(parseInt(data));
          if (resta.length > 1) {
            console.log(resta[0] - resta[1]);
            process.exit();
          }
        });
    };
    function multi  (){
        let multi = [];
        console.log("digite el primer numero luego el segundo");
        process.stdin.on("data", (data) => {
          multi.push(parseInt(data));
          if (multi.length > 1) {
            console.log(multi[0] * multi[1]);
            process.exit();
          }
        });
    };
    function dividir  (){
        let dividir = [];
        console.log("digite el primer numero luego el segundo");
        process.stdin.on("data", (data) => {
          dividir.push(parseInt(data));
          if (dividir.length > 1) {
            console.log(dividir[0] / dividir[1]);
            process.exit();
          }
        });
    };
    console.log('Digite 1.suma, 2.resta, 3.multiplica, 4.divide')
    process.stdin.on('data',(data)=>{
        let opc = []
        opc.push(parseInt(data))
        switch (opc[0]) {
            case 1:
                suma()
                break;
            case 2:
                resta()
                break;
            case 3:
                multi()
                break;
            case 4:
                dividir()
                break;
        }
    })

}
//calculadora();

function numerosPrimos (){
    let numerosTotales = [];
    for (let i = 0; i < 100; i++){
        if(i % 2 === 1){
            numerosTotales.push(i)
        }       
    }        
    console.log(numerosTotales)
}

//numerosPrimos()

function palindrome (palabra){
   let text = palabra.split("").reverse().join("");

    if(text === palabra ){
        console.log('es palindroma')
    }else{
        console.log('no es palindroma')
    }
}
// palindrome('123')