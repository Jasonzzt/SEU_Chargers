# SEU_Chargers
**方便东南大学师生快速查询校内充电桩的实时使用情况**

## 以下通过Fiddler抓包实现
### 首先，从响应中获取 openid 和 phone，继而获取 token
### 调试过程中发现openid和phone可以为任意值，则可以向向 mapi.7mate.cn/api/authorizations发送 openid 和 phone 获取token
### 向 mapi.7mate.cn/api/chargers/XXXXXXXX 发送带 authorization 字段的请求头, 将 token 填入，返回充电桩实时信息

## 获取所有充电桩的api调用地址，启动时一次访问api获取相应信息并显示