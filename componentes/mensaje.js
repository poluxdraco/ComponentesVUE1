/*
Componentes declarativos 01

*/

Vue.component('mensaje',{
    data(){
        //Siempre devuelve un objeto
        return {
          mensaje: "Hola mundo"
        }
    },
    template:`
       <div>
          <h4> Ejemplo de componente </h4>
          <p> {{ mensaje }}</p>
       </div>
    
    `

})

