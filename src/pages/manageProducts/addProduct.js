import React, { Component } from 'react';
import { Modal, Button, Upload, Form, Input } from 'antd';
import {UploadOutlined} from '@ant-design/icons';

export default class ModalAddStudent extends Component {

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
        <Button icon={<UploadOutlined />}>Tải hình ảnh lên</Button>
        </Form.Item>

        <Form.Item
          label="Tên SP"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
        <Input />
        </Form.Item>

        <Form.Item
          label="Loại"
          name="type"
          rules={[{ required: true, message: 'Please input your type!' }]}
        >
        <Input />
        </Form.Item>

        <Form.Item
          label="Tổng SL"
          name="total_count"
        >
        <Input />
        </Form.Item>

    </Form>
        </Modal>
      </>
    );
  }
}
