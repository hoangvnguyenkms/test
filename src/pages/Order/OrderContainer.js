import React from 'react';
import { CustomizedTables } from '../../commons/components/Table/Table';
import './order.scss';
import { DEFAULT_ORDER } from '../../commons/constants/Order';
import { createData } from '../../commons/helpers/OrderHelpers';

export const OrderContainer = () => {  
  const rows = [
    createData('Nguyễn Thị Thanh Thúy', 'Lv1', 124, '18.05.2019', '158680083786', '35.000.000'),
    createData('Nguyễn Minh Tường', 'Lv2', 124, '18.05.2019', '158680083786', '90.000.000'),
    createData('Lê Nguyễn Minh Khánh', 'Lv1', 124, '18.05.2019', '158680083786', '35.000.000'),
    createData('Nguyễn Thị Thanh Thúy', 'Lv1', 124, '18.05.2019', '158680083786', '35.000.000'),
    createData('Nguyễn Thị Thanh Thúy', 'Lv2', 124, '18.05.2019', '158680083786', '35.000.000'),
    createData('Nguyễn Thị Thanh Thúy', 'Lv2', 124, '18.05.2019', '158680083786', '35.000.000'),
    createData('Nguyễn Thị Thanh Thúy', 'Lv2', 124, '18.05.2019', '158680083786', '35.000.000'),
    createData('Nguyễn Thị Thanh Thúy', 'Lv1', 124, '18.05.2019', '158680083786', '35.000.000'),
    createData('Nguyễn Thị Thanh Thúy', 'Lv2', 124, '18.05.2019', '158680083786', '35.000.000'),
    createData('Nguyễn Thị Thanh Thúy', 'Lv2', 124, '18.05.2019', '158680083786', '35.000.000'),
  ];
  
  const columns = [
    {
      id: 1,
      align: 'left',
      name: 'Name'
    },
    {
      id: 2,
      align: 'center',
      name: 'Quantity'
    },
    {
      id: 3,
      align: 'center',
      name: 'Date order'
    },
    {
      id: 4,
      align: 'center',
      name: 'Order ID'
    },
    {
      id: 5,
      align: 'center',
      name: 'Total'
    }
  ]
  return (    
      <div>
          <div className='message-order'>
            You have <span className='text-green'> {DEFAULT_ORDER} </span> orders, waiting for your confirm
          </div>
          <CustomizedTables 
            columns={columns}
            data={rows}
          />
      </div>
  );
}

export default OrderContainer;