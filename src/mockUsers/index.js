const Mock = require("mockjs");

var data = Mock.mock({
    "data": [
        {
            "id": 1,
            "username": "zq992045024",
            "password": "ranmuawm123"
        }
    ]
})

Mock.mock(/\user\/usersList/, "post", function (options) {
    var userObj = JSON.parse(options.body)
    var username = userObj.username;
    var password = userObj.password;
    for (var i = 0; i < data.data.length; i++) {
        if (data.data[i].username == username) {
            if (data.data[i].password == password) {
                return data
            } else {
                return {
                    info: "用户名或密码错误"
                }
            }
        } else {
            return {
                info: "用户名或密码错误"
            }
        }
    }
})


Mock.mock(/\user\/addInfo/, "get", (options) => {
    console.log(options.body)
    var newObj = JSON.parse(options.body);
    data.data = data.data.concat(newObj)
    console.log(data)
})