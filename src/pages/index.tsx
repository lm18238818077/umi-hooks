import React, { useState, useEffect } from 'react';
import { Divider, Button } from 'antd';
import Link from 'umi/link';
import Usernameclass from '@/components/usernameclass'
import Usernamefun from '@/components/usernamehooks'
import UsernameUmihooks from '@/components/usernameUmihooks'
import styles from './index.css';

export default function() {
  const [userId, setUserId] = useState(1);
  return (
    <div className={styles.normal}>
      <div>
        <Link to='/table'>table class</Link>
        <Divider />
        <Link to='/table/hooks'>table </Link>
      </div>
      
      <Button onClick={()=>setUserId(Math.random())}>更改</Button>

      {/* <Divider />
      <h2>class</h2>
      <Usernameclass userId={userId}/>
      <Divider />
      <h2>hooks</h2>
      <Usernamefun userId={userId}/>
      <Divider /> */}
      <h2>umi-hooks</h2>
      <UsernameUmihooks userId={userId}/>
    </div>
  );
}
