import React, { Component } from 'react';
import { Modal, Button, Upload } from 'antd';

export default class ModalAddStudent extends Component {
  render() {
    return (
      <>
        <Modal title="Thêm sản phấm" visible={this.props.isModalVisible} onOk={this.props.handleOk} onCancel={this.props.handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  }
}
