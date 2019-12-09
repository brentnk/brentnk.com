import React from "react"
import { ResumeCompanyData } from "../../pages/resume"
import RoleContainer from "./roles"

const companyDetailStyle: React.CSSProperties = {
    float: `right`
}

const companyName: React.CSSProperties = {
  fontWeight: `bold`,
  fontSize: `1.25em`,
}

const workDates: React.CSSProperties = {
  color: `grey`,
  fontStyle: `italic`,
  fontSize: `.9em`,
}

const CompanyDetail = (props: ResumeCompanyData) => {
  const { name, detail, roles } = props
  const { startDate, endDate } = detail.timeSpan

  return (
    <>
      <div className="company-detail" style={companyDetailStyle}>
        <div style={companyName} className="company-name">
          {name}
        </div>
        <div className="company-location">{detail.location}</div>
        <div className="work-dates" style={workDates}>
          {startDate} to {endDate}
        </div>
      </div>
      <RoleContainer roles={roles}></RoleContainer>
    </>
  )
}

interface CompanyContainerProps {
  companies: ResumeCompanyData[]
}

const CompanyContainer = (props: CompanyContainerProps) => {
  const { companies } = props
  if (!companies || companies.length == 0)
    return <div className="">There are no companies...</div>

  const companyDetails = companies.map(company => (
    <CompanyDetail {...company}></CompanyDetail>
  ))
  return <div className="companies">{companyDetails}</div>
}

export default CompanyContainer
