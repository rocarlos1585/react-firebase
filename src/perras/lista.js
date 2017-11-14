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
        <TableRowColumn>{this.props.id}</TableRowColumn>
        <TableRowColumn>{this.props.nombre}</TableRowColumn>
        <TableRowColumn>{this.props.profesion}</TableRowColumn>
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
          return(<Element id={it.id} nombre={it.nombre} profesion={it.profesion}/>)
        })}
        </TableBody>
      </Table>

    );
  }
}
export default TableExampleSimple;
