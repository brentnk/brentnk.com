import React from "react"

interface ResumeSectionProps {
  title?: string
  style: React.CSSProperties
}

const titleStyle: React.CSSProperties = {
  fontSize: `2em`,
  fontWeight: `bold`,
  margin: `.25em 0em .25em 0em`
}

const ResumeSection = (
  props: React.PropsWithChildren<{}> & ResumeSectionProps
) => {
  const { children, title } = props
  return (
    <div className="resume-section" style={props.style}>
      {title ? <div className="title" style={titleStyle}>{props.title}</div> : null}
      <div className="spacer" style={{height:`1em`}}></div>
      <div className="children">{children}</div>
    </div>
  )
}

export default ResumeSection
