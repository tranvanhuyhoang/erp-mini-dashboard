import React, { Component } from 'react';
import { Modal, Button, Upload, Input } from 'antd';
import UploadNewwords from './uploadNewwords';
import UploadGrammar from './uploadGrammar';
import UploadExercise from './uploadExercise';

export default class ModalAddStudent extends Component {
  render() {
    return (
      <>
        <Modal title="Thêm bài học" visible={this.props.isModalVisible} onOk={this.props.handleOk} onCancel={this.props.handleCancel}>

          <div className="wrap-name-lesson mb-3">
            <p>Thêm tên bài học</p>
            <Input placeholder="Tên bài học" />
          </div>

          <div className="wrap-new-words-upload">
            <p>Thêm từ vựng</p>
            <UploadNewwords/>
          </div>

          <div className="wrap-grammar-upload">
            <p>Thêm ngữ pháp</p>
            <UploadGrammar/>
          </div>

          <div className="wrap-new-words-upload">
            <p>Thêm bài tập</p>
            <UploadExercise/>
          </div>

        </Modal>
      </>
    );
  }
}
