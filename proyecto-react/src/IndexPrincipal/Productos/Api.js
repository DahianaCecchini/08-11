export const fetchData = (API, options, onSucess, onFail) => 
    fetch(API, options).then(response =>{
        if(response.status.toString().startsWith("20")){ 
            /* 
                Si la respuesta esta dentro de los parametros de respuesta valida
                ejecutamos la función exitosa
            */
            return response.json().then(onSucess)
        }else{
            /* 
                Si no ejecutar la función de onFail
            */
            return response.json().then(onFail)
        }
    }).catch(onFail)