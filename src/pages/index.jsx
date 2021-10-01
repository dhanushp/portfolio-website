import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import { Parallax } from "react-spring/renderprops-addons.cjs"

// Components
import Layout from "../components/Layout"
import ProjectCard from "../components/ProjectCard"

// Elements
import Inner from "../elements/Inner"
import { Title, BigTitle, Subtitle } from "../elements/Titles"

// Views
import Hero from "../views/Hero"
import Projects from "../views/Projects"
import About from "../views/About"
import Contact from "../views/Contact"

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hey, <br /> I'm Dhanush Bangera.
        </BigTitle>
        <Subtitle>
          A young passionate designer with love for open-source and web
          development.
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Portfolio Website"
            link="https://github.com/dhanushp/Portfolio-v3"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            My Portfolio website developed using GatsbyJs, where you are
            probably reading this right now.
          </ProjectCard>
          
          <ProjectCard
            title="devhost 2020"
            link="https://github.com/so-sc/devhost2020"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Website built with Gatsby.js for annual event of SOSC.
          </ProjectCard>

          <ProjectCard
            title="UK Group"
            link="https://ukgroup.co.in/"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A website made with Gatsby for UK Business Group.
          </ProjectCard>

          <ProjectCard
            title="Pig Game"
            link="https://github.com/dhanushp/pig-game"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            A simple dice game developed using JavaScript after seeing the craze
            for dice games among my friends.
          </ProjectCard>
          
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar
            src="https://avatars1.githubusercontent.com/u/43709470?s=400&u=6ea852501f8b67cef1bde4602cc3c13abb6b4cd8&v=4"
            alt="Dhanush Bangera"
          />
          <AboutSub>
            Geek, Designer, Web-Developer, Open Source Contributor & Future
            Engineer.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          In a nutshell, that means that I sit at my shiny laptop all day long
          creating snazzy designs for cool folks and developing extraordinary
          website's like the one you are on right now. I build things for web
          using React and Gatsby. I am currently pursuing my Bachelors Degree in
          Computer Science and Engineering from Sahyadri College of Engineering
          and Management. I have been part of open source community of my
          college which have been helping students by sharing knowledge of open
          source and latest technologies.
          <br />I am Design Head at{" "}
          <a href="https://sosc.org.in/">Sahyadri Open Source Community</a> and
          also Design Lead at Mozilla Club of Sahyadri.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:dhanushpb420@gmail.com">Hi</a> or find me on
            other platforms:{" "}
            <a href="https://dribbble.com/Dhanushp">Dribbble</a> ,
            <a href="https://www.instagram.com/dhanush_bangera/">Instagram</a>{" "}
          </ContactText>
        </Inner>
        <Footer>
          &copy; {new Date().getFullYear()} by Dhanush Bangera{" "}
          <a href="https://github.com/dhanushp">Github Repository</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
