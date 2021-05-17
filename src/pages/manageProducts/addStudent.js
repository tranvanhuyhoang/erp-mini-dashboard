import React, { Component } from 'react';
import { Modal, Button, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

export default class ModalAddStudent extends Component {

    constructor(props){
      super(props);
      this.state = {
        fileList: {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }
      }
    }

    onChange = ({ fileList: newFileList }) => {
      this.setState({
        fileList:newFileList,
      })
    };

    onPreview = async file => {
      let src = file.url;
      if (!src) {
        src = await new Promise(resolve => {
          const reader = new FileReader();
          reader.readAsDataURL(file.originFileObj);
          reader.onload = () => resolve(reader.result);
        });
      }
      const image = new Image();
      image.src = src;
      const imgWindow = window.open(src);
      imgWindow.document.write(image.outerHTML);
    };

  render() {
    return (
      <>
        <Modal title="Thêm bài học" visible={this.props.isModalVisible} onOk={this.props.handleOk} onCancel={this.props.handleCancel}>
          <div className="wrap-avatar-upload">
            <ImgCrop rotate>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={this.state.fileList}
                onChange={this.onChange}
                onPreview={this.onPreview}
              >
                {this.state.fileList.length < 5 && '+ Upload'}
              </Upload>
            </ImgCrop>
          </div>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  }
}
