//DEFINICION DE CALLBACK:

//una llamda en espera
//una funcion secundaria
//una funcion que es argumento de otra

//PARA QUE SIRVE

//para llamar una funcion SI Y SOLO SI una funcion previa se ha ejecutado

function principal(callback){

    setTimeout(function(){
        console.log("soy la funcion principal")
        callback()
    },2000)
}

/*principal(function(){
    console.log("soy el callback")
})

principal(secundaria)

function secundaria(){
    console.log("soy el callback")*/
    principal(function(){
        console.log("soy el callback")
    })

