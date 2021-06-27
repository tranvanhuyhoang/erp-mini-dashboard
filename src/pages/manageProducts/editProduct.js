import React, { Component, Fragment } from 'react';
import { Modal, Button, Upload, Form, Input } from 'antd';
import {UploadOutlined} from '@ant-design/icons';

export default class ModalEditStudent extends Component {

  constructor(props){
    super(props);

  }

  onFinish = (data) => {
    Object.keys(data).forEach(key => data[key] === undefined && delete data[key]);
    this.props.uploadProductInList(data);
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
        title="Sửa sản phấm" 
        className="wrap-modal-edit-product"
        footer={false}
        visible={this.props.isModalVisible} 
        onOk={this.props.handleOk} 
        onCancel={this.props.handleCancel}
        >
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
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
          dataIndex={this.props.product.name}
        >
        <Input defaultValue={this.props.product.name}/>
        </Form.Item>

        <Form.Item
          label="Loại"
          name="type"
          dataIndex={this.props.product.type}
        >
        <Input defaultValue={this.props.product.type}/>
        </Form.Item>

        <Form.Item
          label="Tổng SL"
          name="total"
          dataIndex={this.props.product.total}
        >
        <Input defaultValue={this.props.product.total}/>
        </Form.Item>

        <Form.Item
          label="Đã bán"
          key="totalSold"
          name="totalSold"
          dataIndex={this.props.product.totalSold}
        >
        <Input defaultValue={this.props.product.totalSold}/>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 10, span: 8 }}>
          <Button type="primary" htmlType="submit">
            Xác nhận sửa
          </Button>
        </Form.Item>

    </Form>
        </Modal>
      </>
    );
  }
}
