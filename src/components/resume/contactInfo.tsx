import React from "react"
import './contactInfo.css'

interface ContactInfoProps {
  telephone: string
  email: string
  website: string
  linkedin: string
}

const ContactInfoStyle: React.CSSProperties = {
  // display: `grid`,
  // gap: `.45em`,
  // gridTemplateColumns: `max-content max-content`,
  // float: `right`,
  margin: `.5em`,
}

const ContactInfo = (props: ContactInfoProps) => {
  const { telephone, email, website, linkedin } = props

  return (
    <div className={"contact-info"} style={ContactInfoStyle}>
      {/* <label>Telephone</label> */}
      <span>{telephone}</span>·

      {/* <label>Email</label> */}
      <span>{email}</span>·

      {/* <label>Website</label> */}
      <span><a href={`https://${website}`}>{website}</a></span>·

      {/* <label>Linkedin</label> */}
      <span><a href={`https://${linkedin}`}>{linkedin}</a></span>
    </div>
  )
}

export default ContactInfo
