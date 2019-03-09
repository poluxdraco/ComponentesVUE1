/*
Componentes declarativos 

Como acceder a la data del componente padre o Parent

Estructura : Padre (dato) -> child -> child2
$parent.parent.dato

*/

Vue.component('parent-name',{
    template:`
       <div>
          <h4> Ejemplo de componente que accede a la data del componente padre </h4>
          <p> {{ $parent.appName}}</p>
       </div>
    
    `

})