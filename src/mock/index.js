let Mock = require("mockjs");

Mock.mock("/api/index_hot", "get", require("./data/hot.json"));
Mock.mock("/api/index_main", "get", require("./data/index-main.json"));
Mock.mock("/api/goods", "get", require("./data/goods.json"));
Mock.mock("/api/me1", "get", require("./data/me1.json"));
Mock.mock("/api/all", "get", require("./data/all.json"));
Mock.mock("/api/pants", "get", require("./data/pants.json"));
Mock.mock("/api/suit", "get", require("./data/suit.json"));
Mock.mock("/api/jacket", "get", require("./data/jacket.json"));
Mock.mock("/api/info", "get", require("./data/info.json"));
Mock.mock("/api/share", "get", require("./data/share.json"));
Mock.mock("/api/set", "get", require("./data/settings.json"));