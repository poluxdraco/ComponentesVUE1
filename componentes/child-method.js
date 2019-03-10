/*
Componentes declarativos 
Como acceder a un metodo desde el padre q se encuentra en un hijo
*/

Vue.component('child-method',{
    data(){
        //Siempre devuelve un objeto
        return {
          mensaje2: "Accediendo al metodo del child"
        }
    },
    methods: {
        showMethodChild(){
            console.log("Accediendo al metodo desde el padre--> " + this.mensaje2)
        }
    },
    template:`
       <div>
          <h4> Ejemplo de como acceder al metodo de un componentes desde el padre</h4>
          <p>Revisar en la consola</p>
       </div>
    
    `

})