/*export const fetchDatos = (API, options, exito, fallo) => 
    fetch(API, options).then(response =>{
    
        if(response.status.toString().startsWith("20")){ 
            console.log("Holaaa")
            console.log(response)
            return response.json().then(exito)
        }else{
            return response.json().then(fallo)
        }
    }).catch(fallo)*/