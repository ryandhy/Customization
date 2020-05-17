let express = require("express");
let mongoose = require("mongoose");

let app = express();

//跨域
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next();
});

//设置集合
let collect = mongoose.model("customs", {
    value1: String,
    value2: String
});
let searchCollect = mongoose.model("searchs", {
    word: String,
    img: String,
    title: String,
    price: String
});

//注册
app.get("/enter", function (req, res) {
    let value1 = req.query.value1;
    let value2 = req.query.value2;

    mongoose.connect("mongodb://127.0.0.1:27017/ryan", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function (err) {
        if (err) {
            console.log("连接失败");
        } else {
            console.log("连接成功");

            collect.find({
                value1
            }).then((ok) => {
                // console.log(ok);
                if (ok.length >= 1) {
                    let data = {
                        name: value1,
                        code: value2
                    };
                    res.send({
                        mag: "用户已存在",
                        status: 300,
                        data: {
                            id: 11,
                            data
                        }
                    });
                } else {
                    let user = new collect({
                        value1,
                        value2
                    });
                    let data = {
                        name: value1,
                        code: value2
                    };
                    user.save().then(() => {
                        console.log("插入成功");
                        res.send({
                            msg: "插入成功",
                            status: 200,
                            data: {
                                id: 1,
                                data
                            }
                        });
                    }, () => {
                        console.log("插入失败");
                        res.send({
                            msg: "插入失败",
                            status: 500,
                            data: {
                                id: 0
                            }
                        });
                    });
                }
            });
        }
    });
});

//搜索
app.get("/search", function (req, res) {
    let value = req.query.val;

    mongoose.connect("mongodb://127.0.0.1:27017/ryan", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function (err) {
        if (err) {
            console.log("连接失败");
        } else {
            console.log("连接成功");

            // let user = new searchCollect({
            //     word: "套西",
            //     img: "suit8.png",
            //     title: "浅灰色人字纹商务套西",
            //     price: "￥1899.00"
            // });
            // user.save().then((ok) => {
            //     console.log(ok + "成功");
            // });

            searchCollect.find({
                word: value
            }).then((ok) => {
                // console.log(ok);
                res.send({
                    mag: "搜索成功",
                    status: 200,
                    data: {
                        data: ok
                    }
                });
            });
        }
    });
});

app.listen(13000);