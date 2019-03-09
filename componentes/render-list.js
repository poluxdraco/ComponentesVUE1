/*
Componentes declarativos 03

*/

Vue.component('render-list', {
    data() {
        //Siempre devuelve un objeto
        return {
            lista: [
                "Elemento 1", "Elemento 2", "Elemento 3"
            ]
        }
    },
    template: `
       <div>
          <h4> Ejemplo de renderizacion </h4>
          <ul>
            <li v-for="(elem, index) in lista" :key="index"> {{ elem }}</li>
        </ul>
       </div>
    
    `

})
