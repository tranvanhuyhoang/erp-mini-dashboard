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
    ];

    const data = [
      {
        key: '1',
        name: 'John Brown',
        phone: "hioho",
        dayOfBirth: 'New York No. 1 Lake Park',
        countOrder: 10,
        listProductsBought: 'Curnon, casio, neiko',
      },
      {
        key: '2',
        name: 'John Brown',
        phone: "hioho",
        dayOfBirth: 'New York No. 1 Lake Park',
        countOrder: 10,
        listProductsBought: 'Curnon, casio, neiko',
      },
      {
        key: '3',
        name: 'John Brown',
        phone: "hioho",
        dayOfBirth: 'New York No. 1 Lake Park',
        countOrder: 10,
        listProductsBought: 'Curnon, casio, neiko',
      },

    ];

    return (
      <div className="wrap-manage-lesson"> 

        <ModalAddLesson
          isModalVisible={this.state.openModalAddLesson}
          handleCancel={this.cancelModalAddLesson}
        />

        <div className="row m-0 mb-3">
          <Button type="primary" className="ml-auto" onClick={this.openModalAddLesson}>+ Thêm học viên</Button>
        </div>
        
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
