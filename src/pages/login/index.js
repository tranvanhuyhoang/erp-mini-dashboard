import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import jwt_decode from "jwt-decode";

import { ACCESS_TOKEN, REFRESH_TOKEN, USER_INFO } from '../../commons/constant';
import { login } from '../../services/auth';

import './style.scss';

export default function NormalLoginForm(){
  let history = useHistory();

  async function OnLogin(values){
    try {
      const response = await login({
        email: values.email,
        password: values.password 
      });

      if(!response.data.status){
        return;
      }

      let data = response.data.data;
      let JWTDecode = jwt_decode(data.token);
      localStorage.setItem(USER_INFO, JSON.stringify(JWTDecode.data));
      localStorage.setItem(ACCESS_TOKEN, data.token);
      localStorage.setItem(REFRESH_TOKEN, data.refreshToken); 
      history.push("/");

    } catch (error) {
      
    }
  };


  return (
    <div className="wrap-login-page">
      <div className="wrap-form">
        <h2 className="erp-logo">ERP <small>Small</small></h2>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={OnLogin}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Vui lòng nhập email' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập password' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" className="login-form-button" htmlType="submit">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
    </div>
    </div>
  );
};