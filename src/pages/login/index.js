import React, { Component } from 'react';
import { Button } from 'antd';
import  queryString from 'query-string';
import get from 'lodash/get';
import FormError from './formError';
import './style.scss';


export default class index extends Component {

  constructor(props){
    super(props);
    let objSearch = queryString.parse(props.location.search);

    localStorage.setItem('DOMAIN_OWNER_SHOP', objSearch.domain);
    let domain = objSearch.domain ? objSearch.domain : localStorage.getItem('DOMAIN_OWNER_SHOP');
    
    let domainLocalStore = localStorage.getItem('DOMAIN');
    if(domainLocalStore != domain){
        localStorage.clear();
    }
    
    this.state = {
      // domain: 'hershop.thoitrang.online',
      // domain: 'phaidep3t.thoitrang.online',
      // domain: 'mualathich.sansieusoc.vn',
      domain,
      phoneNumber: {
        value: '',
        isInputValid: true,
        errorMessage: '',
      },
      password: {
        value: '',
        isInputValid: true,
        errorMessage: '',
      },
    }
  }

  loginOwnerShop = async() => {

    if(this.state.phoneNumber.value === '' 
    || this.state.password.value === '' 
    || this.state.phoneNumber.isInputValid === '' 
    || this.state.password.isInputValid === ''
    ){
      return;
    }

    let response = '';
    try{
        response = await staffLogin({
            user_name: this.state.phoneNumber.value,
            password: this.state.password.value,
            domain:  this.state.domain,
        });
        
        if(response.data.status){
          let token = get(response, 'data.token', null);
          let ownerState = jwt_decode(token);
          let staff = {
            staff_id: get(ownerState, 'staff_id', null),
            staff_name: get(ownerState, 'staff_name', null),
            phone: get(ownerState, 'phone', null),
          }
          let userInfo =  {
            website: get(ownerState, 'website', null),
            full_name: get(ownerState, 'full_name', null),
            staff_name: get(ownerState, 'staff_name', null),
            phone: get(ownerState, 'phone', null),
            staff_id: get(ownerState, 'staff_id', null),
            user_id: get(ownerState, 'user_id', null),
            address: get(ownerState, 'address', null),
            collaborator_code: get(ownerState, 'collaborator_code', null),
            code_referrer: get(ownerState, 'collaborator_code', null)
          };

          localStorage.setItem(USER_INFO, JSON.stringify(userInfo));
          localStorage.setItem('STAFF', JSON.stringify(staff));
          localStorage.setItem(ACCESS_TOKEN, token);
          localStorage.setItem('DOMAIN', this.state.domain);

          this.props.history.push('/order/list');
        }

    }catch(error){
      console.log("error ", error);
      errorAlert(error.data.message);
      return;
    } 
  }

  changeInput = (e) => {
    const {name, value} = e.target;
    const newState = {...this.state[name]};
    newState.value = value;
    this.setState({[name]: newState});
  }

  validatePhoneInput = (type, checkingText) => {

    if(type === 'phoneNumber'){
      let phone = checkingText.replace(/\s/g, '');
      phone = phone.replace('+84', '0');
      let phoneno = /^(0)([0-9]{9})$/;
      const checkingResult = phoneno.exec(phone);
      if (checkingResult !== null) {
          return { 
            isInputValid: true,
            errorMessage: ''
          };
      } else {
          return { 
            isInputValid: false,
            errorMessage: 'Số điện thoại không hợp lệ.'
          };
      }
    }

    if(type === 'password'){
      if (checkingText !== '') {
        return { 
          isInputValid: true,
          errorMessage: ''
        };
      } else {
          return { 
            isInputValid: false,
            errorMessage: 'Mật khẩu không được bỏ trống.'
          };
      }
    }

  }

  handleInputValidation = e => {
    const {name} = e.target;
    const { isInputValid, errorMessage } = this.validatePhoneInput(name, this.state[name].value);
    const newState = {...this.state[name]};
    newState.isInputValid = isInputValid;
    newState.errorMessage = errorMessage;
    this.setState({[name]: newState})
  }

  onEnter = (e) => {
    if(e.key === 'Enter'){
      this.loginOwnerShop();
    }
  }

  render() {
    return (
      <div className="wrap-form-login">
        <div className="frame">
          <div className="logo">Chủ Shop</div>
          <div className="wrap-content">
          <div className="wrap-input">
            <div className="wrap-phone-input">

              <input 
              name="phoneNumber"
              className={`input input--medium ${!this.state.phoneNumber.isInputValid ? 'error-input' : ''}`}
              type="text" 
              placeholder="Nhập số điện thoại đăng ký" 
              value={this.state.phoneNumber.value}
              onChange={(e) => this.changeInput(e)}
              onBlur={this.handleInputValidation}
              />

              <FormError
                isHidden={this.state.phoneNumber.isInputValid}
                errorMessage={this.state.phoneNumber.errorMessage}
              />
            </div>
            
            <div className="wrap-password-input">

              <input 
              name="password"
              className={`input input--medium ${!this.state.password.isInputValid ? 'error-input' : ''}`}
              type="password" 
              placeholder="Mật khẩu" 
              value={this.state.password.value}
              onChange={(e) => this.changeInput(e)}
              onBlur={this.handleInputValidation}
              onKeyDown={e => this.onEnter(e)}
              />  

              <FormError
                isHidden={this.state.password.isInputValid}
                errorMessage={this.state.password.errorMessage}
              /> 
            </div>
            
          </div>
          <div className="wrap-button-login">
            {/* <Button className="w-100" onClick={() => this.loginOwnerShop()}>Đăng nhập</Button> */}
            <Button className="w-100">Đăng nhập</Button>
          </div>
          </div>
        </div>
      </div>
    )
  }
}
