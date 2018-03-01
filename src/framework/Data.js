// // import mocker from 'mocker-data-generator'

// var Project = {
// 	id: {
// 		chance: 'guid'
// 	},
// 	date: {
// 		faker: 'date.between(\'2015-01-01\', \'2015-12-31\');'
// 	},
// 	responsible: {
// 		faker: 'name.lastName'
// 	}
// 	// id: {
// 	// 	chance: 'guid'
// 	// },
// 	// age: {
// 	// 	faker: 'random.number({"min": 1, "max": 17})'
// 	// },
// 	// country: {
// 	// 	casual: 'country'
// 	// },
// 	// favorite_greeting: {
// 	// 	randexp: /feed (me|you and me|he and me|she and me)/
// 	// },
// 	// name: {
// 	// 	values: ['txuri', 'pitxi', 'kitty', 'obi']
// 	// }
// }
// const mockData = mocker().schema('projects', Project, 150).build().then((result) => { console.log(result.projects); return result.projects })

// export default mockData

import faker from 'faker'
var _ = require('lodash')
var Projects = []
_.range(0, 150).map(p => {

	return Projects.push({ id: p, name: faker.address.city(), progress: faker.random.number({ min: 0, max: 100 }), date: faker.date.between("2015-01-01", "2020-12-31"), responsible: faker.name.lastName(), img: 'https://picsum.photos/1920/1404/?random=' + p })

})

export default Projects