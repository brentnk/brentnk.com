import React from "react"
import { ResumeCompanyData } from "../../pages/resume"

const companyName: React.CSSProperties = {
  fontWeight: `bold`,
  fontSize: `1.25em`,
}

const workDates: React.CSSProperties = {
  color: `grey`,
  fontStyle: `italic`,
  fontSize: `.9em`,
}

interface StyledComponent {
  style: React.CSSProperties
}

const Company = (props: ResumeCompanyData & StyledComponent) => {
  const { name, detail } = props
  const { startDate, endDate } = detail.timeSpan

  return (
    <>
      <div className="company-detail" style={props.style}>
        <div style={companyName} className="company-name">
          {name}
        </div>
        <div className="company-location">{detail.location}</div>
        <div className="work-dates" style={workDates}>
          {startDate} to {endDate}
        </div>
      </div>
    </>
  )
}

export default Company
