import { create } from 'apisauce'
import {  GetAppID } from 'odeum-app'
const api = create({
	baseURL: 'https://help.odeum.com/rest/help/items',
	timeout: 10000,
	header: {
		'Content-Type': 'application/json',
		'Accept': 'appication/json'
	},
	mode: 'no-cors'
})
const appID = GetAppID()

export const getAllHelpItems = async () => {
	console.log(appID)
	var data = await api.get('/help')
	return data.data
}