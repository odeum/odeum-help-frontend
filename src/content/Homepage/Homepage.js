import React from 'react'
import { ButtonPanel, LinkButton } from 'odeum-ui'
import { 
	AlignCenter, 
	HomepageHeader, 
	HomepageTagLine, 
	HomepageButonsContainer, 
	// LinkTo, 
	HomepageButtonSpacer,
	HomepageFlexContainer,
	HomepageBox, 
	HomepageSectionHeader,
	HomepageSection } from './HomepageStyles'

const Homepage = () => {
	return (
		<div>
			<AlignCenter>
				<HomepageHeader>ODEUM Code Help</HomepageHeader>
				<HomepageTagLine>A NodeJS API and React components for building Help Indexes for ODEUM Code Apps</HomepageTagLine>
				<HomepageButonsContainer>
					<ButtonPanel>

						<LinkButton label={'Get Help'} icon={'help'} route={'/help/gethelp'} color={'#13A085'}/>
						<HomepageButtonSpacer />
						<LinkButton label={'Tutorial'} icon={'star'} route={'/help/tutorial'}/>

					</ButtonPanel>
				</HomepageButonsContainer>

			</AlignCenter>
			
			<HomepageFlexContainer>

				<HomepageBox width={1 / 2} ml={40} mr={40}>					
					<HomepageSectionHeader>Declarative API</HomepageSectionHeader>
					<HomepageSection>ODEUM Code Help exhibits a simple NodeJS API for CRUD based persistance of help items and help indexes for an ODEUM Code App.</HomepageSection>
					<HomepageSection>Create, Read, Update and Delete help items for a specific App ID and access the API through React components.</HomepageSection>
				</HomepageBox>

				<HomepageBox width={1 / 2} ml={40} mr={40}>					
					<HomepageSectionHeader>React components</HomepageSectionHeader>
					<HomepageSection>ODEUM Code Help implements React components for creating, listing, editing and deleting help items for a designated ODEUM Web App.</HomepageSection>
					<HomepageSection>Get ODEUM Code Help before your neighbor calls for help somewhere else.</HomepageSection>
				</HomepageBox>

				{/* <HomepageBox width={1 / 3} ml={40} mr={40}>					
					<HomepageSectionHeader>Fast Frontend Development</HomepageSectionHeader>
					<HomepageSection>By introducing not only the basic framework of your Web App, but also a plethora of <LinkTo to={'/docs/installation'}>Ready-made UI components</LinkTo>, you can build frontends for Web Apps and websites pretty fast. Reuse existing React components and apply our responsive component model to ensure perfect rendering on all devices.</HomepageSection>
					<HomepageSection>Through framework and visual UI primitives ODEUM Code is scaffolding your Web App with a quick launch in sight.</HomepageSection>
				</HomepageBox> */}
				
			</HomepageFlexContainer>
		</div>
	)
}

export default Homepage
