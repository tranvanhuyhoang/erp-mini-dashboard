import React, { Component, Fragment } from 'react';
import { Modal, Button, Upload, Form, Input, message } from 'antd';
import {UploadOutlined, LoadingOutlined, PlusOutlined} from '@ant-design/icons';
import get from 'lodash/get';

export default class ModalAddStudent extends Component {

  constructor(props){
    super(props);
    this.state = {
      avatar: '',
      errMessage: '',
      upAvatar: '',
    }
  }

  render() {
    
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };

    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };

    return (
      <>
        <Modal 
          title="Thêm sản phấm" 
          visible={this.props.isModalVisible} 
          onOk={this.props.handleOk} 
          onCancel={this.props.handleCancel}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
        >

        <Form.Item
          label="Hình SP"
          name="image"
        >
          <div className="wrap-form-avatar d-flex justify-content-center">
            {
              !this.props.avatarProductDisplay ?
              <form encType="multipart/form-data" className="wrap-image-avatar align-self-center">
                <input type="file" id="file" name="file" onChange={this.props.changeAvatar}/>
                <label htmlFor="file" className="choose-image"><PlusOutlined className="d-flex justify-content-center"/> Upload</label>
              </form> 
              :
              <div>
              <div className="wrap-image-avatar align-self-center" onClick={this.props.changeAvatar}>
                <input type="file" id="file" name="file" onChange={this.props.changeAvatar}/>
                <img src={this.props.avatarProductDisplay} alt="cannot display" className="avatar-custom"/>
              </div>
              {/* <form encType="multipart/form-data" className="wrap-image-avatar align-self-center">
                <input type="file" id="file" name="file" onChange={this.props.changeAvatar}/>
                <label htmlFor="file" className="choose-image"><PlusOutlined className="d-flex justify-content-center"/> Thay đổi</label>
              </form>  */}
              </div>
            }

          </div>
        </Form.Item>

        <Form.Item
          label="Tên SP"
          name="name"
        >
        <Input />
        </Form.Item>

        <Form.Item
          label="Loại"
          name="type"
        >
        <Input />
        </Form.Item>

        <Form.Item
          label="Tổng SL"
          name="total"
        >
        <Input />
        </Form.Item>

        <Form.Item
          label="SL bán"
          name="totalSold"
        >
        <Input />
        </Form.Item>

    </Form>
        </Modal>
      </>
    );
  }
}
