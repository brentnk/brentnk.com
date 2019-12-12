import React from "react"
import { ResumeCompanyData, resumeContainerStyle } from "../../pages/resume"
import Company from "./company"
import RoleContainer from "./roles"

interface CompanyContainerProps {
  companies: ResumeCompanyData[]
}

const CompanyContainer = (props: CompanyContainerProps) => {
  const { companies } = props
  if (!companies || companies.length == 0) {
    return <div className="">There are no companies...</div>
  }

  return (
    <div className="companies" style={resumeContainerStyle}>
      {companies.map(company => {
        return (
          <>
            <RoleContainer
              roles={company.roles}
              style={{ gridColumn: `1 / 10` }}
            ></RoleContainer>
            <Company style={{ gridColumn: `11 / -1` }} {...company}></Company>
          </>
        )
      })}
    </div>
  )
}

export default CompanyContainer
