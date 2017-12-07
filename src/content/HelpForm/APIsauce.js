import { create } from 'apisauce'

// define the api
const api = create({
	baseURL: 'http://localhost:3000',
	headers: { 'Accept': 'application/vnd.github.v3+json' }
})

// start making calls
api
	.get('/helpitems')
	.then((response) => response.data[0].commit.message)
	.then(console.log)

// customizing headers per-request
api.post('/helpitems', 
	{ en: { help_title: "Test1", help_description: "Test", help_content: 
        { text: "Test", image: "Test", video: "Test", link: "Test", svg: "Test", pdf: "Test", document: "Test" } }, 
	da: { help_title: "Test", help_description: "Test", help_content: 
        { text: "Test", image: "Test", video: "Test", link: "Test", svg: "Test", pdf: "Test", document: "Test" } } } )