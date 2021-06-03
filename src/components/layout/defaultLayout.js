import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Tooltip } from 'antd';
import { Avatar } from 'antd';
import get from 'lodash/get'
import {
  UnorderedListOutlined,
  TeamOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

import { USER_INFO, ACCESS_TOKEN, REFRESH_TOKEN } from '../../commons/constant';

import 'antd/dist/antd.css';
import './style.scss';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class DefaultLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      infoUser: '',
      collapsed: false,
    }
  }

  componentDidMount = () => {
    if (!localStorage.getItem(ACCESS_TOKEN)){
      this.props.history.push('/login');
      return;
    }

    if (localStorage.getItem(USER_INFO)) {
      let infoUser = '';
      infoUser = JSON.parse(localStorage.getItem(USER_INFO));
      this.setState({
        infoUser
      })
    }
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  handleClick = e => {
    if(e.key == "manage-lesson"){this.props.history.push('/')}
    else{this.props.history.push(`/${e.key}`)}
  };

  onLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(USER_INFO);
    localStorage.removeItem(REFRESH_TOKEN);
    this.props.history.push('/login');
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo">S.ERP</div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={this.handleClick}>
            <Menu.Item key="manage-products" icon={<UnorderedListOutlined />} >
              Quản lý sản phẩm
            </Menu.Item>
            <Menu.Item key="manage-customer" icon={<TeamOutlined />}>
              Quản lý khách hàng
            </Menu.Item>
            <Menu.Item key="manage-finance" icon={<TeamOutlined />}>
              Quản lý tài chính
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header 
          className="site-layout-background" 
          style={{ padding: 0 }} 
          />
          <Content style={{ margin: '0 16px' }}>
            <div className="wrap-avatar">
              <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf', textTransform: 'uppercase' }}>{get(this.state.infoUser, 'name', '').charAt(0)}</Avatar>
              <span className="ml-2">{get(this.state.infoUser, 'name', '')}</span>
            </div>
            <Tooltip title="Đăng xuất" placement="leftTop">
              <LogoutOutlined className="log-out-icon" onClick={() => this.onLogout()}/>
            </Tooltip>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Application ©2021 S.ERP</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(DefaultLayout);