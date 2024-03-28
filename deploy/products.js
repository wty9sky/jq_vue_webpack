/*
 *定义多个服务器账号 及 根据 SERVER_ID 导出当前环境服务器账号
 */
const SERVER_LIST = [
  {
    id: 0,
    name: "服务器",
    host: "", // ip
    url: "",
    port: 22, // 端口
    username: "", // 登录服务器的账号
    password: "", // 登录服务器的账号
    path: "" // 发布至静态服务器的项目路径
  }
];

module.exports = SERVER_LIST;
