import mocker from 'mocker-data-generator'

var Project = {
	id: {
		chance: 'guid'
	},
	date: {
		faker: 'date.between(\'2015-01-01\', \'2015-12-31\');'
	},
	responsible: {
		faker: 'name.lastName'
	}
	// id: {
	// 	chance: 'guid'
	// },
	// age: {
	// 	faker: 'random.number({"min": 1, "max": 17})'
	// },
	// country: {
	// 	casual: 'country'
	// },
	// favorite_greeting: {
	// 	randexp: /feed (me|you and me|he and me|she and me)/
	// },
	// name: {
	// 	values: ['txuri', 'pitxi', 'kitty', 'obi']
	// }
}
const mockData = mocker().schema('projects', Project, 150).build().then((result) => { console.log(result.projects); return result.projects })

export default mockData