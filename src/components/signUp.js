import React, { useState } from "react";
import { Button, List, InputItem, WhiteSpace } from 'antd-mobile';
import axios from 'axios'

export default function SignIn() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const submitSignUp = () => {
    if (name && phone && password) {
      const params = {
        user: {
          username: name,
          email: phone,
          password: password
        }
      }
      axios.post('https://conduit.productionready.io/users', params).then(res => {
        console.log(res, '---')
      })
    }
  } 
  return <div>
    <List>
      <InputItem
        type='text'
        value={name}
        placeholder="你的昵称"
        moneyKeyboardAlign="left"
        onChange={(val) => setName(val)}
      >昵称</InputItem>

      <InputItem
        type='text'
        value={phone}
        placeholder="手机号"
        moneyKeyboardAlign="left"
        onChange={(val) => setPhone(val)}
      >手机</InputItem>

      <InputItem
        type='password'
        value={password}
        placeholder="请输入密码"
        moneyKeyboardAlign="left"
        onChange={(val) => setPassword(val)}
      >密码</InputItem>
    </List>

    <WhiteSpace />
    <WhiteSpace />
    <Button type="primary" onClick={submitSignUp}>注册</Button>
  </div>
}