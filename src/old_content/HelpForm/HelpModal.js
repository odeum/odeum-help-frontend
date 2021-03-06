import React, { Component } from 'react'
import { ModalDiv } from './HelpStyles'
class HelpModal extends Component {

	preventProp = (e) => {
		e.stopPropagation()
	}
	render() {
		if (this.props.showModal)
	   return (
		 <ModalDiv onClick={this.props.openModal()}>
		   <div onClick={this.preventProp}style={{ width: '70vw', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px' }}>
			   {this.props.children}
		   </div>
		 </ModalDiv>
	   )
	   else {
		   return null
	   }
	 }
}
   
   
export default HelpModal