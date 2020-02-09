import { Select, Table } from 'antd';
import React, { useState } from 'react';
import { useAntdTable } from '@umijs/hooks';
import { getUserList } from '@/services/user';


const { Option } = Select;

const getTableData = (data) =>{
  return getUserList(data)
    .then(res => {
      console.log(res)
      return {
        total: res.pagination.total,
        data: res.list,
      }
  })
}

export default () => {
  const [gender, setGender] = useState('male');
  const { tableProps } = useAntdTable(params => getTableData({ ...params, gender }), [gender], {
    defaultPageSize: 5,
  })
  console.log(tableProps)
  const columns = [
    {
      title: '网址',
      dataIndex: 'url',
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
    {
      title: '性别',
      dataIndex: 'gender',
    },
  ];
  return (
    <>
      <Select
        style={{
          width: 180,
          marginBottom: 24,
        }}
        onChange={g => setGender(g)}
        placeholder="select gender"
        allowClear
      >
        <Option value="male">male</Option>
        <Option value="female">female</Option>
      </Select>
      <Table
        columns={columns}
        rowKey="id"
        {...tableProps}
        pagination={{ ...tableProps.pagination, showQuickJumper: true, showSizeChanger: true }}
      />
    </>
  );
};