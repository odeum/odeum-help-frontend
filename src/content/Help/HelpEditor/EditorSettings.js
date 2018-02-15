import Immutable from 'immutable'
import Draft from 'draft-js'
import { TextLeft, TextRight, TextCenter, CodeBlock } from './HelpEditorStyles'
import createStyles from 'draft-js-custom-styles'



const blockRenderMap = Immutable.Map({
	'LEFT': {
		element: TextLeft,
		// wrapper: MyCustomBlock,
	},
	'RIGHT': {
		element: TextRight
	},
	'CENTER': {
		element: TextCenter
	},
	'CODE_BLOCK': {
		element: CodeBlock
	}
})

const extendedBlockRenderMap = Draft.DefaultDraftBlockRenderMap.merge(blockRenderMap)

const styleMap = {
	ATOMIC: {
		backgroundColor: 'red'
	},
	BOLD: {
		fontWeight: 700,
	},
	CODE: {
		backgroundColor: 'rgba(0, 0, 0, 0.05)',
		fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
		padding: 2,
	},
	LEFT: {
		display: 'flex',
		justifyContent: 'left'
	},
	RIGHT: {
		display: 'flex',
		justifyContent: 'right'
	},
	CENTER: {
		display: 'flex',
		justifyContent: 'center'
	}
}
const { styles, customStyleFn, exporter } = createStyles(['font-size', 'color'], 'STYLES_', styleMap)

export default { extendedBlockRenderMap, styleMap, styles, customStyleFn, exporter }