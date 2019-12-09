import React from "react"
import { ResumeRoleData } from "../../pages/resume"

import "./roles.css"

const RoleDetail = (props: ResumeRoleData) => {
  const { order, points, timeSpan, title } = props

  // in-place sort
  points.sort((a, b) => a.order - b.order)
  return (
    <>
      <div className="role-title">{title}</div>
      <div className="work-dates">
        {timeSpan.startDate} to {timeSpan.endDate}
      </div>
      <div className="description" style={{
          borderLeft: `solid #000000`,
          paddingLeft: `1em`
      }}>
        {points.map(point => (
          <p>{point.text}</p>
        ))}
      </div>
    </>
  )
}

interface RoleContainerProps {
  roles: ResumeRoleData[]
}

const RoleContainer = (props: RoleContainerProps) => {
  const { roles } = props
  return (
    <div className="">
      {roles.map(role => (
        <RoleDetail {...role}></RoleDetail>
      ))}
    </div>
  )
}

export default RoleContainer
