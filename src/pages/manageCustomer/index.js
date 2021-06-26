import React, { Component } from 'react';
import { Table, Tag, Space, Button, Tooltip, Tabs } from 'antd';
import {
  RestOutlined,
  EditOutlined
} from '@ant-design/icons';
import get from "lodash/get";
import moment from 'moment';

import TableCareCustomer from './careCustomer';
import ModalAddLesson from './addLesson';
import { getListCustomers } from '../../services/customer';

import './style.scss';

const { TabPane } = Tabs;
export default class ManageLesson extends Component {

  constructor(props){
    super(props);
    this.state={
      openModalAddLesson: false,
      listCustomers: '',
    }
  }

  componentDidMount = () => {
    this.handleGetListCustomer();
  }

  openModalAddLesson = () => {
    this.setState({
      openModalAddLesson: true,
    })
  }

  cancelModalAddLesson = () => {
    this.setState({
      openModalAddLesson: false,
    })
  }

  handleGetListCustomer = async() => {
    const response = await getListCustomers();
    if(response.data.status){
      this.setState({
        listCustomers: response.data.data,
      })
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

    let data = [];

    if(this.state.listCustomers){
      for(let customer of this.state.listCustomers){
        data.push(
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
      <div className="wrap-manage-lesson"> 

        <ModalAddLesson
          isModalVisible={this.state.openModalAddLesson}
          handleCancel={this.cancelModalAddLesson}
        />
          <div className="card-container">
            <Tabs type="card">
              <TabPane tab="Danh sách khách hàng" key="list-customer-tab">
                {
                  data.length > 0 &&
                  <Table columns={columns} dataSource={data} /> 
                }
              </TabPane>
              <TabPane tab="Chăm sóc khách hàng" key="care-customer-tab">
                <TableCareCustomer data={this.state.listCustomers}/>
              </TabPane>
            </Tabs>
          </div>

        {/* <div className="row m-0 mb-3">
          <Button type="primary" className="ml-auto" onClick={this.openModalAddLesson}>+ Thêm học viên</Button>
        </div> */}
      </div>
    );
  }
}
