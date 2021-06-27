import React, { Component, Fragment } from 'react';
import { Table, Tag, Space, Button, Tooltip } from 'antd';
import moment from "moment";
import get from 'lodash/get';

import './style.scss';

export default class careCustomer extends Component {
  render() {
    const columns = [
      {
        title: 'Tên KH',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'SĐT',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: 'Ngày Sinh',
        key: 'dayOfBirth',
        dataIndex: 'dayOfBirth',
        // render: tags => (
        //   <>
        //     {tags.map(tag => {
        //       let color = tag.length > 5 ? 'geekblue' : 'green';
        //       if (tag === 'loser') {
        //         color = 'volcano';
        //       }
        //       return (
        //         <Tag color={color} key={tag}>
        //           {tag.toUpperCase()}
        //         </Tag>
        //       );
        //     })}
        //   </>
        // ),
      },
      {
        title: 'SL đã mua',
        key: 'countOrder',
        dataIndex: 'countOrder',
      },
      {
        title: 'SP đã mua',
        key: 'listProductsBought',
        dataIndex: 'listProductsBought',
      },
      {
        title: 'Ngày mua',
        key: 'dayBuy',
        dataIndex: 'dayBuy',
      },
      {
        title: 'Action',
        key: 'action',
        dataIndex: 'action',
        render: (data) => (
          <Space size="middle">
            <Button 
            // type="primary" 
            className="d-flex" 
            onClick={() => this.handleOpenModalEditProduct(data)}
            >
              Gửi voucher mừng sinh nhật
            </Button>

            {/* <Popconfirm
              id={data._id}
              title="Bạn muốn xóa sản phẩm này?"
              onConfirm={() => this.confirmDeleteProduct(data.id)}
              onCancel={this.cancelDeleteProduct}
              okText="Xóa"
              cancelText="Đóng"
            >
              <Button danger className="d-flex" icon={<DeleteOutlined className="align-self-center"/>}>Xóa</Button>
            </Popconfirm>*/}
          </Space>
        ),
      },
    ];

    let dataCare = [];

    if(this.props.data){
      for(let customer of this.props.data){
        dataCare.push(
          {
            key: get(customer,'_id',''),
            name: get(customer,'name',''),
            phone: get(customer,'phone',''),
            dayOfBirth: get(customer,'dayOfBirth','') ? moment(get(customer,'dayOfBirth','')).format('DD/MM/YYYY') : '',
            countOrder: get(customer,'countOrder',''),
            listProductsBought: get(customer,'listProductsBought',''),
            dayBuy: get(customer,'dayBuy','')
          }
        )
      }
    }
    return (
      <Fragment>
        <div className="wrap-select-time mt-3 mb-3">
            <div className="mr-2 d-inline-block">Tháng:</div>
            <span className={`box-month ${this.props.monthCareActive === 1 && 'month-active'}`} onClick={() => this.props.getListCustomerCare(1)}>Tháng 1</span> 
            <span className={`box-month ${this.props.monthCareActive === 2 && 'month-active'}`} onClick={() => this.props.getListCustomerCare(2)}>Tháng 2</span>
            <span className={`box-month ${this.props.monthCareActive === 3 && 'month-active'}`} onClick={() => this.props.getListCustomerCare(3)}>Tháng 3</span> 
            <span className={`box-month ${this.props.monthCareActive === 4 && 'month-active'}`} onClick={() => this.props.getListCustomerCare(4)}>Tháng 4</span> 
            <span className={`box-month ${this.props.monthCareActive === 5 && 'month-active'}`} onClick={() => this.props.getListCustomerCare(5)}>Tháng 5</span> 
            <span className={`box-month ${this.props.monthCareActive === 6 && 'month-active'}`} onClick={() => this.props.getListCustomerCare(6)}>Tháng 6</span> 
            <span className={`box-month ${this.props.monthCareActive === 7 && 'month-active'}`} onClick={() => this.props.getListCustomerCare(7)}>Tháng 7</span> 
            <span className={`box-month ${this.props.monthCareActive === 8 && 'month-active'}`} onClick={() => this.props.getListCustomerCare(8)}>Tháng 8</span> 
            <span className={`box-month ${this.props.monthCareActive === 9 && 'month-active'}`} onClick={() => this.props.getListCustomerCare(9)}>Tháng 9</span> 
            <span className={`box-month ${this.props.monthCareActive === 10 && 'month-active'}`} onClick={() => this.props.getListCustomerCare(10)}>Tháng 10</span> 
            <span className={`box-month ${this.props.monthCareActive === 11 && 'month-active'}`} onClick={() => this.props.getListCustomerCare(11)}>Tháng 11</span> 
            <span className={`box-month ${this.props.monthCareActive === 12 && 'month-active'}`} onClick={() => this.props.getListCustomerCare(12)}>Tháng 12</span>  
        </div>
        <Table 
        columns={columns} 
        dataSource={dataCare} 
        locale={{emptyText:"Chưa có dữ liệu"}}
        />
      </Fragment>
    );
  }
}
