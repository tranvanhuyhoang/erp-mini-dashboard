import React, { Component } from 'react';
import { Table, Space, Button, Popconfirm, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons';


import ModalAddStudent from './addStudent';
import {deleteProduct, getListProducts} from '../../services/products'; 

import './style.scss';

export default class ManageStudents extends Component {

  constructor(props){
    super(props);
    this.state = {
      products: [],
      openModalAddProduct: false,
    }
  }

  componentDidMount = () => {
    this.getListProducts();
  }

  getListProducts  = async() => {
    const response = await getListProducts();
    if(response.data.success){
      this.setState({
        products: response.data.data
      })
    }
  }

  deleteProductInList = async (id) => {
    const response = await deleteProduct(id);
    if(response.data.success){
        message.success(response.data.message);
        this.getListProducts();
    }else{
      message.error(response.data.message);
    }
  }

  handleModalAddProduct = () => {
    this.setState({
      openModalAddProduct: !this.state.openModalAddProduct,
    })
  }


  confirmDeleteProduct = (id) => {
    this.deleteProductInList(id);
  }

  cancelDeleteProduct = () => {

  }

  render() {
    const columns = [
      {
        title: 'Ảnh SP',
        dataIndex: 'avatar',
        key: 'avatar',
        render: url => <img className="wrap-avatar-product" src={url} alt="cannot display"/>,
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
      },
      {
        title: "SL bán",
        key: 'totalSold',
        dataIndex: 'totalSold',
      },
      {
        title: 'Thao tác',
        key: 'action',
        render: (data) => (
          <Space size="middle">
             <Button type="primary" className="d-flex" icon={<EditOutlined className="align-self-center"/>}>Sửa</Button>

             <Popconfirm
                id={data._id}
                title="Bạn muốn xóa sản phẩm này?"
                onConfirm={() => this.confirmDeleteProduct(data.id)}
                onCancel={this.cancelDeleteProduct}
                okText="Xóa"
                cancelText="Đóng"
              >
                <Button danger className="d-flex" icon={<DeleteOutlined className="align-self-center"/>}>Xóa</Button>
              </Popconfirm>
          </Space>
        ),
      },  
    ];

    const data = [];

    this.state.products.forEach(item => {
      data.push({
        key: item._id,
        id: item._id,
        avatar: item.avatar,
        name: item.name,
        type: item.type,
        total: item.total,
        totalSold: item.totalSold,
      })
    })
    
    return (
      <div className="wrap-manage-student">
        <div className="row m-0 d-flex justify-content-end mt-3 mb-3">
          <Button 
          className="justify-content-end d-flex align-self-center" 
          type="primary" 
          icon={<PlusOutlined/>} 
          onClick={this.handleModalAddProduct}
          >
            Thêm sản phẩm
          </Button>
        </div>
        <ModalAddStudent
          isModalVisible={this.state.openModalAddProduct}
          handleCancel={this.handleModalAddProduct}
        />
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
