import React from "react"
import Layout from "../components/layout"

import resumeYAML from "../../data/resume.yaml"
import ContactInfo from "../components/resume/contact_info"
import CompanyContainer from "../components/resume/company"

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
  order: number,
  title: string
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

const ResumePage = () => {
  const resumeData: ResumeData = resumeYAML
  const {contact, name, summary, experience} = resumeData

  return (
  <Layout>
    <h1>{resumeData.name}</h1>
    <ContactInfo {...contact}></ContactInfo>

    <h2>Professional Summary</h2>
    <p>{summary}</p>

    <h2>Experience</h2>
    <CompanyContainer companies={experience.companies}></CompanyContainer>
  </Layout>
)}

export default ResumePage
