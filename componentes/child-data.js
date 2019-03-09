/*
Componentes declarativos 
Como acceder a un dato desde el padre q se encuentra en un hijo
*/

Vue.component('child-data',{
    data(){
        //Siempre devuelve un objeto
        return {
          mensaje2: "Accediendo al dato del child"
        }
    },
    template:`
       <div>
          <h4> Ejemplo de como acceder a la data de un componentes desde el padre</h4>
          
       </div>
    
    `

})