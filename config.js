let BASE_URL = ''
if (process.env.NODE_ENV == 'development') {
    BASE_URL = '127.0.0.1:3000' // dev环境
} else {
    BASE_URL = 'https://www.baidu.com' // 生产环境
}
const config = {
	base_url: BASE_URL,
	appId: 'wx5b3065ec41a57489',
	appKey: '5bf73fe278b7818d3daba9c1821d8d27'
}

export { config }
