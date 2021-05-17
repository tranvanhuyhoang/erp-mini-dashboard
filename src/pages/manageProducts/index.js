import React, { Component } from 'react';
import { Table, Tag, Space } from 'antd';
import ModalAddStudent from './addStudent';
import './style.scss';

export default class ManageStudents extends Component {
  render() {

    const columns = [
      {
        title: 'Ảnh SP',
        dataIndex: 'avatar',
        key: 'avatar',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Tên sản phẩm',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Loại',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: 'Tổng SL',
        key: 'total',
        dataIndex: 'total',
        render: () => <a>abc</a>,
      },
      {
        title: 'Đã bán',
        key: 'totalSold',
        render: () => (
          <Space size="middle">
            <a>Invite</a>
            <a>Delete</a>
          </Space>
        ),
      },  
    ];

    const data = [
      {
        key: 'avatar',
        avatar: 'Hình ảnh',
        name: "Đồng hồ curnon",
        type: "local brand",
        total: 30,
        totalSold: 20,
      },
      {
        key: 'avatar',
        avatar: 'Hình ảnh',
        name: "Đồng hồ curnon",
        type: "local brand",
        total: 30,
        totalSold: 20,
      },
      {
        key: 'avatar',
        avatar: 'Hình ảnh',
        name: "Đồng hồ curnon",
        type: "local brand",
        total: 30,
        totalSold: 20,
      },
    ];

    return (
      <div className="wrap-manage-student"> 
        <ModalAddStudent/>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
