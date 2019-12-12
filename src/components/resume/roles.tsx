import React from "react"
import { ResumeRoleData } from "../../pages/resume"

const roleTitleStyle: React.CSSProperties = {
  fontWeight: `bold`,
  fontSize: `larger`
}

const RoleDetail = (props: ResumeRoleData) => {
  const { order, points, timeSpan, title } = props

  // in-place sort
  points.sort((a, b) => a.order - b.order)
  return (
    <>
      <div className="role-title" style={roleTitleStyle}>{title}</div>
      <div className="work-dates">
        {timeSpan.startDate} to {timeSpan.endDate}
      </div>
      <div className="description">
        {points.map(point => (
          <p key={point.order}>{point.text}</p>
        ))}
      </div>
    </>
  )
}

interface RoleContainerProps {
  roles: ResumeRoleData[]
  style: React.CSSProperties
}

const RoleContainer = (props: RoleContainerProps) => {
  const { roles } = props
  return (
    <div className="" style={props.style}>
      {roles.map(role => (
        <RoleDetail key={role.order} {...role}></RoleDetail>
      ))}
    </div>
  )
}

export default RoleContainer
