import { create } from 'apisauce'

// define the api
const api = create({
	baseURL: 'http://localhost:3001',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	mode: 'no-cors'
})

//#region Get all Help Items
export const getAllHelpItems = () => {
	return api.get('/helpitems').then((response => response.data))
	// console.log(data)
}

//#endregion

//#region Post an Help Item
export const postHelpItem = (helpItem) => {
	var data = JSON.stringify(helpItem)
	api.post('/helpitems', data).then((response => console.log(response.status)))
}
//#endregion

// // start making (useless) calls (that are called on the moment you open the page)
// api
// 	.get('/helpitems')
// 	.then((response) => response.data[0].commit.message)
// 	.then(console.log)

// customizing headers per-request
// api.post('/helpitems',
// 	{
// 		en: {
// 			help_title: "Test1", help_description: "Test", help_content:
// 				{ text: "Test", image: "Test", video: "Test", link: "Test", svg: "Test", pdf: "Test", document: "Test" }
// 		},
// 		da: {
// 			help_title: "Test", help_description: "Test", help_content:
// 				{ text: "Test", image: "Test", video: "Test", link: "Test", svg: "Test", pdf: "Test", document: "Test" }
// 		}
// 	})