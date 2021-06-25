import React, { Component } from 'react';
import { Table, Tag, Space, Button, Tooltip } from 'antd';
import ModalAddLesson from './addLesson';
import {
  RestOutlined,
  EditOutlined
} from '@ant-design/icons';
import './style.scss';

export default class ManageLesson extends Component {

  constructor(props){
    super(props);
    this.state={
      openModalAddLesson: false,
    }
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

    const data = [
      {
        key: '1',
        name: 'Hoàng Trần',
        phone: "0327375733",
        dayOfBirth: '20/01/1998',
        countOrder: 1,
        listProductsBought: 'Curnon-v1',
        dayBuy: '20/01/2021'
      },
      {
        key: '2',
        name: 'Phát Nguyễn',
        phone: "0327375731",
        dayOfBirth: '13/01/2000',
        countOrder: 2,
        listProductsBought: 'Curnon-v2, Curnon-v3',
        dayBuy: '12/01/2021'
      },
      {
        key: '3',
        name: 'Nhàn Lê',
        phone: "0392379743",
        dayOfBirth: '30/06/2001',
        countOrder: 20,
        listProductsBought: 'Curnon-v1',
        dayBuy: '20/11/2021'
      },
      {
        key: '4',
        name: 'Chiến Nguyễn',
        phone: "0392379741",
        dayOfBirth: '25/02/1996',
        countOrder: 120,
        listProductsBought: 'Curnon-v2',
        dayBuy: '12/04/2021'
      },
      {
        key: '5',
        name: 'Hoàng Trần',
        phone: "0327375733",
        dayOfBirth: '20/01/1998',
        countOrder: 1,
        listProductsBought: 'Curnon-v1',
        dayBuy: '20/01/2021'
      },
      {
        key: '6',
        name: 'Phát Nguyễn',
        phone: "0327375731",
        dayOfBirth: '13/01/2000',
        countOrder: 2,
        listProductsBought: 'Curnon-v2, Curnon-v3',
        dayBuy: '12/01/2021'
      },
      {
        key: '7',
        name: 'Nhàn Lê',
        phone: "0392379743",
        dayOfBirth: '30/06/2001',
        countOrder: 20,
        listProductsBought: 'Curnon-v1',
        dayBuy: '20/11/2021'
      },
      {
        key: '8',
        name: 'Chiến Nguyễn',
        phone: "0392379741",
        dayOfBirth: '25/02/1996',
        countOrder: 120,
        listProductsBought: 'Curnon-v2',
        dayBuy: '12/04/2021'
      },
    ];

    return (
      <div className="wrap-manage-lesson"> 

        <ModalAddLesson
          isModalVisible={this.state.openModalAddLesson}
          handleCancel={this.cancelModalAddLesson}
        />

        {/* <div className="row m-0 mb-3">
          <Button type="primary" className="ml-auto" onClick={this.openModalAddLesson}>+ Thêm học viên</Button>
        </div> */}
        
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
