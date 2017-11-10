import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Element extends Component{
  constructor(props){
    super()
  }

  render(){
    return(
      <TableRow>
        <TableRowColumn>{this.props.casoId}</TableRowColumn>
        <TableRowColumn>{this.props.casoNombre}</TableRowColumn>
        <TableRowColumn>{this.props.casoProfesion}</TableRowColumn>
      </TableRow>
    );
  }
}
/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
class TableExampleSimple extends Component {
  constructor(props){
    super()
  }
  render(){
      return(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Nombre</TableHeaderColumn>
            <TableHeaderColumn>Profesion</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
        {this.props.datos.map((it)=>{
          return(<Element casoId={it.casoId} casoNombre={it.casoNombre} casoProfesion={it.casoProfesion}/>)
        })}
        </TableBody>
      </Table>

    );
  }
}
export default TableExampleSimple;
