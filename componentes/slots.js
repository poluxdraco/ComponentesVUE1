
/*
Componentes declarativos 01
 trabajo con slots
*/

Vue.component('slots',{
    template:`
       <div>
          <h4> Ejemplo de slots </h4>
          <header>   
             <slot name="header">Cabecera por defecto</slot>
          </header>
          <main> 
             Main
             <slot></slot>
          </main>
          <footer> 
             <slot name="footer"></slot>
          </footer>
       </div>
    
    `

})