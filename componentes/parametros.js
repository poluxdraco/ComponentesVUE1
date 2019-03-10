/*
Componentes declarativos 
 Paso de parametros a componentes

*/

Vue.component('parametros',{
    props:['name','city'],

    template:`
       <div>
          <h4> Ejemplo de paso de parametros </h4>
          <p> Me llamo {{ name}} y vivo en {{ city }}</p>
       </div>
    
    `
  
  })