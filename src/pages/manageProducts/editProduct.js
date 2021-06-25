import React, { Component, Fragment } from 'react';
import { Modal, Button, Upload, Form, Input } from 'antd';
import {UploadOutlined} from '@ant-design/icons';

export default class ModalEditStudent extends Component {

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
        title="Sửa sản phấm" 
        className="wrap-modal-edit-product"
        visible={this.props.isModalVisible} 
        onOk={this.props.handleOk} 
        onCancel={this.props.handleCancel}
        >
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
          className="row-image-product"
        >
          <Fragment>
            <img 
            src={this.props.product.avatar} 
            style={{
              width: 120,
              height: 120,
            }}
            />
            <Button icon={<UploadOutlined />}>Thay đổi ảnh Sp</Button>
          </Fragment>
        </Form.Item>

        <Form.Item
          label="Tên SP"
          name="name"
        >
        <Input defaultValue={this.props.product.name}/>
        </Form.Item>

        <Form.Item
          label="Loại"
          name="type"
        >
        <Input defaultValue={this.props.product.type}/>
        </Form.Item>

        <Form.Item
          label="Tổng SL"
          name="total_count"
        >
        <Input defaultValue={this.props.product.total}/>
        </Form.Item>

        <Form.Item
          label="Đã bán"
          name="bought"
        >
        <Input defaultValue={this.props.product.totalSold}/>
        </Form.Item>

    </Form>
        </Modal>
      </>
    );
  }
}
