//QUE ES UNA PROMESA
//algo que si o si debe cumplir
//algo que se espera
//un callback disfrazado
//funcion que se ejecuta despues de otra

//COMO SE IMPLEMENTA
//Debemos utilizar una clase de JS(Promise())

function principal(){

    let Promesa=new Promise(function(resolve,reject){

        setTimeout(function(){
            console.log("soy la funcion principal")
            resolve("soy el callback")
            
        },2000)

    })
    return Promesa
}

principal()
.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(respuesta){
    console.log(respuesta)
})
