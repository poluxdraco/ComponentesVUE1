/*
Componentes declarativos 04

Los eventos SIEMPRE se emiten del componente hijo al padre

*/

Vue.component('eventos',{
    data(){
        //Siempre devuelve un objeto
        return {
          mensaje: "Hola mundo emitido con evento"
        }
    },
    template:`
       <div>
          <h4> Ejemplo de emisión de evento </h4>
          <p><button @click="$emit('mi-evento',mensaje)">Pulsar</button></p>
       </div>
    
    `

})