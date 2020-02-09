import React, { useState, useEffect } from 'react';
import {Spin} from 'antd';
import { getUsername } from '@/services/user';

export default function({userId}) {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    getUsername({userId}).then(res=>{
      setLoading(false)
      setUsername(res.name)
    })
  },[userId])

  return (
    <div>
        <Spin spinning={loading}>
          <div style={{ width: '100%', height: 100 }}>username: {username}</div>
        </Spin>
    </div>
  );
}