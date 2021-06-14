import axios from 'axios'
// 为了考虑扩展性问题，这里导出不用default
export function request(config){
    
        // 1.创建axios实例(尽量不要使用全局),在这里instance已经通过axios的create方法返回了一个Promise对象
        const instance = axios.create({
            baseURL:'http://152.136.185.210:7878/api/m5',
            timeout:5000
        })
        // axios拦截器
        // 请求,传入两个箭头函数
        instance.interceptors.request.use(config => {
            // 发送成功的状况
            // console.log(config)
            // 获取config后一定要返回config

            // 每次发送网络请求的时候，都希望在界面发送一个显示图标

            // 某些网络请求(比如登录)，必须携带特殊的信息
            return config
        },err => {
            // 发送失败的状况
            // console.log(err)
        })
        // 响应拦截
        instance.interceptors.response.use(res => {
            return res.data
        },err=>{
            console.log(err)
        })
    
        // 发送真正的网络请求
        return instance(config)
}
