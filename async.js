//ASYNC / AWAIT

//QUE ES
//Funciones asincronicas que disfrazan una promesa

function principal(){

    let Promesa=new Promise(function(resolve,reject){

        setTimeout(function(){
            console.log("soy la funcion principal")
            resolve("termine")
            
        },2000)

    })
    return Promesa
}

async function callback(){
    try{
        await principal()
        console.log("soy el callback")

    }catch(error){
        console.log("upss...."+ error)
    }
}

callback()