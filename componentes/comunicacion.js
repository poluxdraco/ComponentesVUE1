/*
Comunicacion entre diversos componnetes


*/
const eventBus = new Vue()

Vue.component('comp1',{
    data(){
        //Siempre devuelve un objeto
        return {
          mensaje: "Saludo desde el componente 1"
        }
    },
    methods: {
      click(){
        eventBus.$emit('saludo',this.mensaje)
      }
    },
    template:`
       <div>
          <h4> Ejemplo de comunicacion entre componentes con eventBus componnete 1 </h4>
          <button @click="click"> Boton Comp1 </button>
       </div>
    
    `
  
  })


  Vue.component('comp2',{
    data(){
        //Siempre devuelve un objeto
        return {
          saludo: ""
        }
    },
    mounted() {
        eventBus.$on('saludo',(mensaje)=>{
          this.saludo=mensaje
        })
    },
    template:`
       <div>
          <h4> Ejemplo de comunicacion entre componentes con eventBus Componente 2 </h4>
          <p> {{ saludo }}</p>
       </div>
    
    `
  
  })