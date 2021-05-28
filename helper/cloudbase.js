/**
 * cloudbase helper
 */
import env from '../env.js'

let cloud1 = new wx.cloud.Cloud({
  resourceEnv: env.resourceEnv
})
const initCloud = async () => {
	await cloud1.init()	
}

const baseURL = '/container-mp-server-v3/api'

const getCloud =  (path,query) => {
	let queryStr = '?'
	if(query){
		for(const key in query){
			queryStr = queryStr + key + '=' + query[key] + '&'
		}
		console.log(queryStr)	
		path = path + queryStr
	}

	return new Promise((resolve,reject)=>{
		cloud1.callContainer({
			path: baseURL + path,
			method: 'GET',
		}).then((res)=>{
			resolve(res)
		}).catch((err)=>{
			reject(err)
		})	
	})
}

const postCloud =  (path,data) => {
	let post = {
		path: baseURL + path,
		method: 'POST',
		data:data
	}
	return new Promise((resolve,reject)=>{
		cloud1.callContainer(post).then((res)=>{
			resolve(res)
		}).catch((err)=>{
			reject(err)
		})	
	})
}

const putCloud =  (path,data) => {
	return new Promise((resolve,reject)=>{
		cloud1.callContainer({
			path: baseURL + path,
			method: 'PUT',
			data:data
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
			path: baseURL + path,
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

