import './App.css'
// import React, { useRef, useState, useEffect } from "react";
import { Tabs } from 'antd-mobile';

import SignIn from './components/signIn'
import SignUp from './components/signUp'

const tabs = [
  { title: '登录' },
  { title: '注册' }
];
function App() {
  
  // const [sign, setSign] = useState(true)
  return <div className="main">
    <div className="box">
      <Tabs tabs={tabs}
        initialPage={'t2'}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          <SignIn></SignIn>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          <SignUp></SignUp>
        </div>
      </Tabs>
    </div>
  </div>
}

export default App;
