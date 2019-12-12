import React from "react"
import Layout from "../components/layout"

import resumeYAML from "../../data/resume.yaml"
import ContactInfo from "../components/resume/contactInfo"
import ResumeSection from "../components/resume/section"
import Company from "../components/resume/company"
import RoleContainer from "../components/resume/roles"
import CompanyContainer from "../components/resume/companyContainer"

export interface ResumeTimeSpan {
  startDate: string
  endDate: String
}

export interface ResumeCompanyData {
  order: number
  name: string
  detail: {
    desc: string
    location: string
    timeSpan: ResumeTimeSpan
  }
  roles: ResumeRoleData[]
}

export interface ResumeRolePoint {
  order: number
  text: string
}

export interface ResumeRoleData {
  order: number
  title: string
  technologies: string[]
  timeSpan: ResumeTimeSpan
  points: ResumeRolePoint[]
}

export interface ResumeData {
  name: string
  contact: {
    telephone: string
    email: string
    website: string
    linkedin: string
  }
  summary: string
  experience: {
    companies: ResumeCompanyData[]
  }
}

const resumeContainerStyle: React.CSSProperties = {
  display: `grid`,
  gridTemplateColumns: `repeat(12, 1fr)`,
  gap: `.5em`,
}

const nameStyle: React.CSSProperties = {
  fontSize: `2.25em`,
  fontWeight: `bold`,
  marginTop: `1em`,
  gridColumn: `1 / 9`,
}

const ResumePage = () => {
  const resumeData: ResumeData = resumeYAML
  const { contact, summary, experience } = resumeData

  return (
    <Layout>
      <div className="resume-layout" style={resumeContainerStyle}>
        <div style={nameStyle}>{resumeData.name}</div>
        <ResumeSection style={{ gridColumn: `1 / 10` }}>
          <ContactInfo {...contact}></ContactInfo>
        </ResumeSection>

        {/* <ResumeSection
          title={`Languages`}
          style={{ gridColumn: `11 / -1`, gridRow: `2 / span 2` }}
        >
          Go
          Kotlin/Java
        </ResumeSection> */}

        <ResumeSection
          title={`Professional Summary`}
          style={{ gridColumn: `1 / 10` }}
        >
          <p>{summary}</p>
        </ResumeSection>

        <ResumeSection title={`Experience`} style={{ gridColumn: `1 / -1` }}>
          <CompanyContainer companies={experience.companies}></CompanyContainer>
        </ResumeSection>
      </div>
    </Layout>
  )
}

export { resumeContainerStyle }

export default ResumePage
