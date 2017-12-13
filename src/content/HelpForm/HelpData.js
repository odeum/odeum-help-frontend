import { create } from 'apisauce'

// Define the API
const api = create({
	baseURL: 'http://localhost:4000',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	mode: 'no-cors'
})

export const getAllHelpItems = async () => {
	var data = await api.get('/helpitems').then((response => { return response.data }))
	// console.log(data)
	return data
}
// Post a Help Item
export const postHelpItem = (helpItem) => {
	var data = JSON.stringify(helpItem)
	// console.log(helpItem)
	api.post('/helpitems', data).then((response => console.log(response.status)))
}

// class HelpData extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {}
// 	}

// 	componentDidMount() {
// 		fetch(getAllHelpItems(this.props.helpitems))
// 			.then(d => d.json())
// 			.then(d => {
// 				this.setState({
// 					helpdataData: d
// 				})
// 			})
// 	}

// 	render() {
// 		if (!this.state.helpdataData) return <p>Rendering list...</p>
// 		return (
// 			<div>
// 				<h2>{this.state.helpdataData.items}</h2>
// 			</div>
// 		)
// 	}
// }

// export default HelpData

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