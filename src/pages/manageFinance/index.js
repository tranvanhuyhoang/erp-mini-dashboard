import React, { Component } from 'react';
import { Table, Tag, Space, Button, Tooltip } from 'antd';
import {
  RestOutlined,
  EditOutlined
} from '@ant-design/icons';
import './style.scss';

export default class ManageFinance extends Component {

  constructor(props){
    super(props);
    this.state={
    }
  }


  displayActionTable = () => {
    return(
      <span>

        <Tooltip title="Xóa">
          <RestOutlined className="icon-custom" />
        </Tooltip>

        <Tooltip title="Sửa">
          <EditOutlined className="icon-custom" />
        </Tooltip>
         
      </span>
    )
  }

  render() {
    const columns = [
      {
        title: 'Ngày',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: 'Số Lượng Bán',
        dataIndex: 'mountSale',
        key: 'mountSale',
      },
      {
        title: 'Tồn kho',
        key: 'inventory',
        dataIndex: 'inventory',
      },
      {
        title: 'Tổng tiền',
        key: 'totalMoney',
        dataIndex: 'totalMoney',
      },
      {
        title: 'Lợi nhuận',
        key: 'profit',
        dataIndex: 'profit',
      },
    ];

    const data = [
      {
        key: '1',
        date: '20-01-1998',
        mountSale: 20,
        inventory: 10,
        totalMoney: 200,
        profit: 100,
      },
      {
        key: '2',
        date: '20-01-1998',
        mountSale: 20,
        inventory: 10,
        totalMoney: 200,
        profit: 100,
      },
      {
        key: '3',
        date: '20-01-1998',
        mountSale: 20,
        inventory: 10,
        totalMoney: 200,
        profit: 100,
      },

    ];

    return (
      <div className="wrap-manage-lesson">         
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
