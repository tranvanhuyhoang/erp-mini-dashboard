import React, { Component } from 'react';
import { Table, Space, Button, Popconfirm, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons';
import get from 'lodash/get';


import ModalAddProduct from './addProduct';
import ModalEditProduct from './editProduct';
import {addProduct, deleteProduct, getListProducts, updateProduct} from '../../services/products'; 

import './style.scss';

export default class ManageStudents extends Component {

  constructor(props){
    super(props);
    this.state = {
      products: [],
      productActive: '',
      openModalAddProduct: false,
      openModalEditProduct: false,
      avatarProductDisplay: '',
      avatarProductFileUpload: '',
      errMessageUploadAvatarUploadAvatar: '',
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

  uploadProductInList = async (data) => {
    data.idProduct = this.state.productActive.id;
    const response = await updateProduct(data);
    if(response.data.success){
        message.success(response.data.message);
        this.handleCloseModalEditProduct();
        this.getListProducts();
    }else{
      message.error(response.data.message);
    }
  }

  changeAvatar = (e) => {
    console.log("e ", e)
    let _validFileExtensions = [".jpg", ".jpeg", ".png"]; 
    let check = false;
    let nameFile = get(e, 'target.files[0].name');   

    if(nameFile){
        for (let destination of _validFileExtensions){
            let nameLowerCase = nameFile.toLowerCase();
            if(nameLowerCase.endsWith(destination) == true){
                check = true;
                break;
            }
        }
    }

    if(check == true){
        if(e.target.files){
            let result = [];
            for(let image of e.target.files){
                let reader = new FileReader();
                reader.onload = (e) => {
                  result.push(e.target.result);
                  this.setState({
                    avatarProductDisplay: result,
                    errMessageUploadAvatar: '',
                  });
                };
                reader.readAsDataURL(image);
            }
        }
        this.setState({avatarProductFileUpload: get(e, 'target.files[0]')})
    } else {
        this.setState({
            errMessageUploadAvatar: "Vui lòng chọn ảnh có định dạng: .JPG, .JPEG, .PNG"
        })
    }
  }

  uploadAvatarProduct = async() => {
    const formData  = new FormData();
    formData.append('avatar', this.state.avatarProduct); 
    
    try {
        const response = await addProduct(formData);
        if(!response.data.status){
            return;
        }
        this.getBannerCategoryUpload();
    } catch (error) {
        this.props.appStore.alert.error('Đã có lỗi xảy ra, vui lòng thực hiện lại thao tác!');
    }
  }

  handleModalAddProduct = () => {
    this.setState({
      openModalAddProduct: !this.state.openModalAddProduct,
    })
  }

  handleOpenModalEditProduct = (productActive) => {
    this.setState({
      openModalEditProduct: true,
      productActive
    })
  }

  handleCloseModalEditProduct = () => {
    this.setState({
      openModalEditProduct: false,
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
            <Button 
            type="primary" 
            className="d-flex" 
            icon={<EditOutlined className="align-self-center"/>}
            onClick={() => this.handleOpenModalEditProduct(data)}
            >
              Sửa
            </Button>

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
        <div className="row m-0 d-flex justify-content-end mb-2">
          <Button 
          className="justify-content-end d-flex align-self-center" 
          type="primary" 
          icon={<PlusOutlined/>} 
          onClick={this.handleModalAddProduct}
          >
            Thêm sản phẩm
          </Button>
        </div>

        {
          this.state.openModalAddProduct &&
          <ModalAddProduct
          isModalVisible={this.state.openModalAddProduct}
          handleCancel={this.handleModalAddProduct}
          changeAvatar={this.changeAvatar}
          avatarProductDisplay={this.state.avatarProductDisplay}
          />
        }

        {
          this.state.openModalEditProduct &&
          <ModalEditProduct
            isModalVisible={this.state.openModalEditProduct}
            product={this.state.productActive}
            uploadProductInList={(data) => this.uploadProductInList(data)}
            handleCancel={this.handleCloseModalEditProduct}
          />
        }

        <Table 
        columns={columns} 
        dataSource={data} 
        loading={data.length > 0 ? false : true}
        />
      </div>
    );
  }
}
