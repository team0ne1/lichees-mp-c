/**
 * cloudbase helper
 */

let cloud1 = new wx.cloud.Cloud({
  resourceEnv: 'cloud1-0gcmjje1d9bf828c'
})
const initCloud = async () => {
	await cloud1.init()	
}

const getCloud =  (path) => {
	return new Promise((resolve,reject)=>{
		cloud1.callContainer({
			path: '/container-mp-server-v1/api' + path,
			method: 'GET',
		}).then((res)=>{
			resolve(res)
		}).catch((err)=>{
			reject(err)
		})	
	})
}

const postCloud =  (path) => {
	return new Promise((resolve,reject)=>{
		cloud1.callContainer({
			path: '/container-mp-server-v1/api' + path,
			method: 'POST',
		}).then((res)=>{
			resolve(res)
		}).catch((err)=>{
			reject(err)
		})	
	})
}

const putCloud =  (path) => {
	return new Promise((resolve,reject)=>{
		cloud1.callContainer({
			path: '/container-mp-server-v1/api' + path,
			method: 'PUT',
		}).then((res)=>{
			resolve(res)
		}).catch((err)=>{
			reject(err)
		})	
	})
}

const deteleCloud =  (path) => {
	return new Promise((resolve,reject)=>{
		cloud1.callContainer({
			path: '/container-mp-server-v1/api' + path,
			method: 'DETELE',
		}).then((res)=>{
			resolve(res)
		}).catch((err)=>{
			reject(err)
		})	
	})
}

export default {
	initCloud,
	getCloud,
	postCloud,
	putCloud,
	deteleCloud
}

