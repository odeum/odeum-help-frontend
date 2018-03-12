import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PageButton, PageNumberButton, PageNumberContainer, PaginationContainer } from './PaginationStyles'
var _ = require('lodash')

const propTypes = {
	onChangePage: PropTypes.func.isRequired,
	initialPage: PropTypes.number
}

const defaultProps = {
	initialPage: 1
}

class Pagination extends Component {
	constructor(props) {
		super(props)
		this.state = { pager: {} }
	}

	componentWillMount() {
		// set page if items array isn't empty
		if (this.props.items && this.props.items.length) {
			this.setPage(this.props.initialPage)
		}
	}
	componentWillUpdate = (nextProps, nextState) => {
		// if (this.props.items.length !== nextProps.items.length) {
		// 	this.setPage(this.props.initialPage)
		// }
		// Page size related -  if last page with 8 items on page (ex: page 17), user changes to show 12 items,
		// pages reduce their numbers(page 17 dissapears) and it will be set the last existing page
		if (this.state.pager.currentPage > nextState.pager.endPage && nextState.pager.currentPage !== 1) {
			this.setPage(nextState.pager.endPage)
		}

	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.pageSize !== prevProps.pageSize) {
			if (this.state.pager.currentPage < this.state.pager.endPage) {
				this.setPage(this.state.pager.currentPage)
			}
			else {
				this.setPage(this.state.pager.endPage)
			}
		}

		// reset page if items array has changed
		if (this.props.items !== prevProps.items) {
			this.setPage(this.props.initialPage)
		}
	}
	// shouldComponentUpdate(prevProps) {
	// 	if (this.props.items.length !== prevProps.items.length)
	// 		return true
	// 	else return false

	// }

	setPage(page) {
		var items = this.props.items
		var pager = this.state.pager

		// if (page < 1 || page > pager.totalPages) {
		// 	return
		// }

		// get new pager object for specified page
		pager = this.getPager(items.length, page, this.props.pageSize)

		// get new page of items from items array
		var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1)

		// update state
		this.setState({ pager: pager })

		// call change page function in parent component
		this.props.onChangePage(pageOfItems)
	}

	getPager(totalItems, currentPage, pageSize) {
		// default to first page
		currentPage = currentPage || 1

		// default page size is 10
		pageSize = pageSize || this.props.pageSize || 10

		// calculate total pages
		var totalPages = Math.ceil(totalItems / pageSize)

		var startPage, endPage
		if (totalPages <= 10) {
			// less than 10 total pages so show all
			startPage = 1
			endPage = totalPages
		} else {
			// more than 10 total pages so calculate start and end pages
			if (currentPage <= 6) {
				startPage = 1
				endPage = 10
			} else if (currentPage + 4 >= totalPages) {
				startPage = totalPages - 9
				endPage = totalPages
			} else {
				startPage = currentPage - 5
				endPage = currentPage + 4
			}
		}

		// calculate start and end item indexes
		var startIndex = (currentPage - 1) * pageSize
		var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)

		// create an array of pages to ng-repeat in the pager control
		var pages = _.range(startPage, endPage + 1)

		// return object with all pager properties required by the view
		return {
			totalItems: totalItems,
			currentPage: currentPage,
			pageSize: pageSize,
			totalPages: totalPages,
			startPage: startPage,
			endPage: endPage,
			startIndex: startIndex,
			endIndex: endIndex,
			pages: pages
		}
	}

	render() {
		var pager = this.state.pager

		// if (!pager.pages || pager.pages.length <= 1) {
		// 	// don't display pager if there is only 1 page
		// 	return null
		// }
		return (
			<PaginationContainer>
				{pager.totalPages >= 1 ? <React.Fragment>
					<PageButton onClick={() => this.setPage(1)}>First</PageButton>
					<PageButton onClick={() => this.setPage(pager.currentPage - 1)}>Previous</PageButton>
					<PageNumberContainer>
						{pager.pages.map((page, index) =>
							<PageNumberButton key={index} active={pager.currentPage === page ? true : false} onClick={() => this.setPage(page)}>{page}</PageNumberButton>
						)}
					</PageNumberContainer>
					<PageButton onClick={() => this.setPage(pager.currentPage + 1)}>Next</PageButton>
					<PageButton onClick={() => this.setPage(pager.totalPages)}>Last</PageButton>
				</React.Fragment> : null}
			</PaginationContainer>
		)
	}
}

Pagination.propTypes = propTypes
Pagination.defaultProps = defaultProps
export default Pagination