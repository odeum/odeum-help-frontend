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

export const getAllHelpItems = async () => {
	const appID = GetAppID()
	var data = api.get('/' + appID).then(
		(result) => result.data
	)
	return data
}