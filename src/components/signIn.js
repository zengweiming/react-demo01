import React, { useState } from "react";
import { Button, List, InputItem, WhiteSpace, Toast } from 'antd-mobile';
import axios from 'axios'

export default function SignIn() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('123456')

  const submit = () => {
    if (name && password) {
      const params = {
        user: {
          username: name,
          password: password
        }
      }
      axios.post('https://conduit.productionready.io/users/login', params).then(res => {
        console.log(res, '---')
      })
    }
  }
  return <div>
    <List>
      <InputItem
        type='text'
        value={name}
        placeholder="手机号或邮箱"
        moneyKeyboardAlign="left"
        onChange={(e) => setName(e)}
      >用户名</InputItem>

      <InputItem
        type='password'
        value={password}
        placeholder="请输入用密码"
        moneyKeyboardAlign="left"
        onChange={(e) => setPassword(e)}
      >密码</InputItem>
    </List>
    <WhiteSpace />

    <WhiteSpace />
    <WhiteSpace />
    <Button type="primary" onClick={submit}>登录</Button>
  </div>
}