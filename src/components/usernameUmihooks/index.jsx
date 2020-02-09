import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { getUsername } from '@/services/user';
import { useAsync } from '@umijs/hooks';

export default function({ userId }) {
  const { loading, data } = useAsync(() => getUsername({ userId }), [userId]);
  return (
    <div>
      <Spin spinning={loading}>
    <div style={{ width: '100%', height: 100 }}>username: {data && data.name}</div>
      </Spin>
    </div>
  );
}
