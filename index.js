// 3)

const minutos = "0"
 
const segundos = "60"

 const multi = (minutos, segundos) => {
     if(minutos != 0 && segundos != 0){
         return minutos * segundos
     }else{
         return "No se debe ingresar un numero igual a cero"
     }
 }

 console.log(multi(10))
