import React, { Component } from 'react';
import { Table, Tag, Space, Button, Tooltip } from 'antd';
import {
  RestOutlined,
  EditOutlined
} from '@ant-design/icons';
import {Line as LineChart} from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
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
        date: '20-01-2021',
        mountSale: 20,
        inventory: 80,
        totalMoney: 40000000,
        profit: 20000000,
      },
      {
        key: '2',
        date: '20-02-2021',
        mountSale: 10,
        inventory: 140,
        totalMoney: 25000000,
        profit: 10000000,
      },
      {
        key: '2',
        date: '20-03-2021',
        mountSale: 100,
        inventory: 400,
        totalMoney: 300000000,
        profit: 150000000,
      },
      {
        key: '4',
        date: '20-04-2021',
        mountSale: 20,
        inventory: 80,
        totalMoney: 40000000,
        profit: 20000000,
      },
      {
        key: '5',
        date: '20-05-2021',
        mountSale: 10,
        inventory: 140,
        totalMoney: 25000000,
        profit: 10000000,
      },
      {
        key: '6',
        date: '20-06-2021',
        mountSale: 100,
        inventory: 400,
        totalMoney: 300000000,
        profit: 150000000,
      },
    ];

    const dataChart = {
      labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
      datasets: [
        {
          type: 'line',
          label: 'Số lượng sản phẩm đã bán',
          data: [12*10000000, 50*10000000, 30*10000000, 50*10000000, 70*10000000, 35*10000000],
          fill: false,
          backgroundColor: 'green',
          borderColor: 'green',
        },
        {
          type: 'bar',
          label: 'Doanh thu',
          data: [120000000, 400000000, 250000000, 210000000, 650000000, 540000000],
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
        },
      ],
    };

    return (
      <div className="wrap-manage-lesson">         
        <Table columns={columns} dataSource={data} />
        <div className="wrap-chart">
          <Bar
              data={dataChart}
              title={"Biểu đồ số lượng sản phẩm bán/tháng"}
          />
        </div>
      </div>
    );
  }
}
