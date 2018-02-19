import React from 'react'
import {
	Container,
	ContentContainer,
	LabelHeader,
	Header, IconDiv,
	Label, Contentdiv,
	Paragraf, ProgressContent,
	Progress, ProgressDiv,
	ProgressMeter
} from './FormCardStyles'
import { Icon } from 'odeum-ui'
import PropTypes from 'prop-types'

export const Content = (props) => {
	return (
		<Container>

			<Header>
				<IconDiv><Icon icon={'stars'} iconSize={30} color={'#F39C12'} /></IconDiv>
				<Label>{props.headertext}</Label>
			</Header>

			<Contentdiv>

				<ContentContainer>
					<LabelHeader>{props.activeHeader}</LabelHeader>
					<Paragraf>{props.date}</Paragraf>
				</ContentContainer>
				<ContentContainer>
					<LabelHeader>{props.registrationHeader}</LabelHeader>
					<Paragraf>{props.number}</Paragraf>
				</ContentContainer>
				<ContentContainer>
					<LabelHeader>{props.responsible}</LabelHeader>
					<Paragraf>{props.people}</Paragraf>
				</ContentContainer>

			</Contentdiv>

			<ProgressContent>
				<Progress>Trin {props.progressOut} af {props.OutOf} </Progress>
				<ProgressDiv><ProgressMeter progress={props.progressMeter}>{props.progressMeter}</ProgressMeter></ProgressDiv>
			</ProgressContent>

		</Container>
	)
}

Content.propTypes = {
	headertext: PropTypes.string,
	activeHeader: PropTypes.string,
	date: PropTypes.object,
	registrationHeader: PropTypes.string,
	number: PropTypes.number,
}