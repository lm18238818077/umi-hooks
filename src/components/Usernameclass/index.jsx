import React from 'react';
import { Spin } from 'antd';
import { getUsername } from '@/services/user';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }
  componentDidMount() {
    const { userId } = this.props;
    this.loadData({userId});
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.userId!==this.props.userId) {
      this.loadData(nextProps.userId)
    }
  }
  componentWillUnmount() {

  }
  loadData = userId => {
    this.setState({
      loading: true,
    });
    getUsername(userId).then(res => {
      this.setState({
        loading: false,
        username: res.name,
      });
    });
  };

  render() {
    const { loading } = this.state;
    return (
      <div>
        <Spin spinning={loading}>
          <div style={{ width: '100%', height: 100 }}>username: {this.state.username}</div>
        </Spin>
      </div>
    );
  }
}
