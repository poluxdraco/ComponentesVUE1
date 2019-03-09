/*
Componentes declarativos 02

*/

Vue.component('computed-properties',{
    data(){
        //Siempre devuelve un objeto
        return {
          nombre: "Frank",
          apellido : "Martinez"
        }
    },
    computed: {
        fullName(){
            return `${this.nombre}  ${this.apellido}`
        }
    },
    template:`
    <div>
       <h4> Ejemplo de computed properties </h4>
       Mi nombre completo es: {{ fullName }}
    </div>
    
    `

})
