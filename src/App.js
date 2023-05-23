import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';

function App() {
  return (
    <div className="App">

       
         <header className="App-header">
         <section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
                 
        </section>

        <section>
        <Componente msg="Hola soy un componente funcional expresado desde una pro"/>
        <hr/>


        <Propiedades cadena="Esto es una cadena de texto"
                     numero= {19}
                     booleano={false}
                     arreglo={ [1,2,3] }
                     objeto={{ nombre:"John" , apellido :"Mircha" , correo:"Johnmircha@gmail.com" }}
                     funcion = { (num) => num * num }
                     elementoReact= { <i> Esto es un Elemento React</i>}
                     componenteReact ={<Componente msg="Soy un componente pasado como Prop"/>}
        /> 



        <br /> 
        <br />   
        <br />   
        <br />   
        <br />   
        <br />
        <br />   
        <br />   
        <br />   
        </section>

        </header>

     

  


   

 

    </div>
  );
}

export default App;
