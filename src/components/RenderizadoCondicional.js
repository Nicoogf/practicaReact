import React, {Component} from "react" ;

function Loguin(){
    return(
        <div>
            <h3>Loguin</h3>
        </div>
    )
}

function Logout(){
    return(
        <div>
            <h3>Logout</h3>
        </div>
    )
}


export default class RenderizadoCondicional extends Component{
    constructor(props){
        super(props)
        this.state={
            session: false
        }
    }
    render(){
        return(
            <div>
                <h2>Renderizado Condicional</h2>
                {this.state.session ?  <Loguin /> : <Logout />}
               
            </div>
        )
    }
}