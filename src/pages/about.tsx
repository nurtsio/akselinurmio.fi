import Link from "../components/InternalLink"
import React from "react"
import BlockText from "../components/BlockText"
import Section from "../components/Section"
import SEO from "../components/SEO"
import TextWithMarginLine from "../components/TextWithMarginLine"
import MainLayout from "../layouts/MainLayout"
import { PageProps } from "../types/PageProps"

const title = "About me"
const description =
  "I created my first website when I was 6 years old. " +
  "Now I’m designing and developing cool web apps as a professional, " +
  "a dream come true, some would say."

const AboutPage = (props: PageProps) => {
  const path = props.location.pathname

  return (
    <React.Fragment>
      <SEO title={title} description={description} path={path} />
      <MainLayout>
        <Section>
          <BlockText>
            <h1>
              <TextWithMarginLine>About me</TextWithMarginLine>
            </h1>
            <p>
              I created my first website at the age of 6. I hugely admired the
              talented makers of the web, but never thought I could be one of
              them.
            </p>
            <p>
              Couple of years passed and I found myself preparing for an
              entrance examination of a digital design school.
            </p>
            <p>
              I have been working in the field of digital design and development
              for a couple of years now.
            </p>
            <p>
              I feel thrilled to be part of such an ever-changing field, and
              every day I work to achieve my goal to be the best web maker there
              is.
            </p>
            <p>
              I also make lots of bad jokes and do some cycling on sunny days.
            </p>
          </BlockText>
        </Section>
        <Section>
          <BlockText>
            <h2>
              <TextWithMarginLine>Let’s discuss!</TextWithMarginLine>
            </h2>
            <p>
              If you would like to hear more or have a chat about your next
              project, just <Link to="/contact/">ping me!</Link>
            </p>
          </BlockText>
        </Section>
      </MainLayout>
    </React.Fragment>
  )
}

export default AboutPage
