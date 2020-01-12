import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Pagination } from './Pagination';
import './table.scss';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
  },
}))(TableRow);


export const CustomizedTables = (props) => {
  const { data, columns } = props;

  return (
    <div className='table-wrapper'>
      <TableContainer className='table-container' component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              {columns.map( item => (
                <StyledTableCell key={item.id} 
                  align={item.align}
                  className='table-header text-bold'> 
                    {item.name} 
                  </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left" component="th" scope="row">
                  <div className='name text-bold'> {row.name} </div>
                  <div className='level'> {row.level} </div>
                </StyledTableCell>
                <StyledTableCell align="center">{row.quantity}</StyledTableCell>
                <StyledTableCell align="center">{row.dateOrder}</StyledTableCell>
                <StyledTableCell align="center">{row.orderId}</StyledTableCell>
                <StyledTableCell align="center" className='text-bold' >{row.total}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>        
        </Table>
        <div className='pagination-table'>
            <Pagination countOrder={1200} />
        </div>
      </TableContainer> 
    </div>
  );
}