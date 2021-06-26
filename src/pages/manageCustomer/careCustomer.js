import React, { Component } from 'react';
import { Table, Tag, Space, Button, Tooltip } from 'antd';
import moment from "moment";
import get from 'lodash/get';

export default class careCustomer extends Component {
  render() {
    const {customers} = this.props.data;
    const columns = [
      {
        title: 'Tên KH',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'SĐT',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: 'Ngày Sinh',
        key: 'dayOfBirth',
        dataIndex: 'dayOfBirth',
        // render: tags => (
        //   <>
        //     {tags.map(tag => {
        //       let color = tag.length > 5 ? 'geekblue' : 'green';
        //       if (tag === 'loser') {
        //         color = 'volcano';
        //       }
        //       return (
        //         <Tag color={color} key={tag}>
        //           {tag.toUpperCase()}
        //         </Tag>
        //       );
        //     })}
        //   </>
        // ),
      },
      {
        title: 'SL đã mua',
        key: 'countOrder',
        dataIndex: 'countOrder',
      },
      {
        title: 'SP đã mua',
        key: 'listProductsBought',
        dataIndex: 'listProductsBought',
      },
      {
        title: 'Ngày mua',
        key: 'dayBuy',
        dataIndex: 'dayBuy',
      },
    ];

    const dataCare = [];

    if(customers){
      for(let customer of customers){
        dataCare.push(
          {
            key: get(customer,'_id',''),
            name: get(customer,'name',''),
            phone: get(customer,'phone',''),
            dayOfBirth: get(customer,'dayOfBirth','') ? moment(get(customer,'dayOfBirth','')).format('DD/MM/YYYY') : '',
            countOrder: get(customer,'countOrder',''),
            listProductsBought: get(customer,'listProductsBought',''),
            dayBuy: get(customer,'dayBuy','')
          }
        )
      }
    }
    return (
      <Table columns={columns} dataSource={dataCare} />
    );
  }
}
