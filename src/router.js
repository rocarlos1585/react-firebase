import React ,{Component} from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {ref} from './firebase.js'



import TableExampleSimple from './perras/lista.js'



class PerrasRoute extends Component{

    constructor(){
    super();
    this.state={
      datos:[
{id: "43", nombre: "ad", profesion: "asdasd"}]
    }
  }

  componentWillMount(){
    var self=this;
    var referencia=ref.child('trabajadores/');
    var buffer=[];
    var promise = new Promise(
      function(resolve, reject){
        referencia.on('value',snapshot=>{
          snapshot.forEach(snapChild=>{
            resolve (buffer=buffer.concat([{id:snapChild.val().id, nombre:snapChild.val().nombre, profesion:snapChild.val().profesion}]));
          })
        })
      }
    )

    promise.then(
      function(){
        self.setState({
          datos:buffer
        })
      }
    )
}


take = ()=>{
  this.setState({
    datos: this.state.datos.concat({casoId:this.state.casoId, casoNombre:this.state.casoNombre, casoProfesion:this.state.casoProfesion})
  })
  var referencia=ref.child('trabajadores');
  var referenciaPush = referencia.push();

  referenciaPush.set({
    id:this.state.casoId,
    nombre:this.state.casoNombre,
    profesion:this.state.casoProfesion
    })
    alert('agregado');
}


takeId = (event) =>{
  this.setState({
    casoId:event.target.value
  });
}

takeNombre = (event) =>{
  this.setState({
    casoNombre:event.target.value
  });
}

takeProfesion = (event) =>{
  this.setState({
    casoProfesion:event.target.value
  });
}





    render(){
      return(
      <MuiThemeProvider>
        <Router>
          <div>
            <form>
              <input placeholder="Nombre" id='id' onChange={this.takeId}/><br/>
              <input placeholder="Correo" name='nombre' onChange={this.takeNombre}/><br/>
              <input placeholder="Password" name='profesion' onChange={this.takeProfesion}/><br/>
            </form>
            <RaisedButton label="submit" onClick={this.take} secondary={true}/>

            <TableExampleSimple datos={this.state.datos}/>

            <form>
              <input placeholder="user"/><br/>
              <input placeholder="password"/><br/>
            </form>

            <RaisedButton label="login"/>


          </div>
        </Router>
      </MuiThemeProvider>
      );
    }
  }

export default PerrasRoute;
