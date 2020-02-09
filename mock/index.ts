var Mock = require('mockjs');
const Random = Mock.Random;

export default {

  'GET /api/users': (req, res) => {
    setTimeout(() => {
      res.send(
        Mock.mock({
          name: '@cname()',
          id: req.query.userId,
        }),
      );
    }, 700);
  },

  'POST /api/userList': (req, res) => {
    let dataList = []
    for (let i = 0; i < 26; i++) {
      const template = Mock.mock({
        "id":'@increment(1)',
        'gender': ['female', 'male'],
        'url': Random.url(), 
        'address': Random.province(), 
      })
      dataList.push(template);
    }
    var info = req.body;
    var [index, size, total] = [info.current, info.pageSize, dataList.length]
    var len = total / size
    var totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len
    var newDataList = dataList.slice(index * size, (index + 1) * size)
    setTimeout(() => {
      res.send(
        Mock.mock({
          list: newDataList,
          pagination: {
            total: total,
            current: index,
            pageSize: size,
          },
        }),
      );
    }, 700)
  },

};
