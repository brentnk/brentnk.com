import React from "react"

interface ContactInfoProps {
  telephone: string
  email: string
  website: string
  linkedin: string
}

const ContactInfoStyle: React.CSSProperties = {
  display: `grid`,
  gap: `.45em`,
  gridTemplateColumns: `max-content max-content`,
  float: `right`,
  marginLeft: `1em`
}

const ContactInfo = (props: ContactInfoProps) => {
  const { telephone, email, website, linkedin } = props

  return (
    <div className={"contact-info"} style={ContactInfoStyle}>
      <label>Telephone</label>
      <a href={`tel:+${telephone}`}>+{telephone}</a>

      <label>Email</label>
      <a href={`mailto:${email}`}>{email}</a>

      <label>Website</label>
      <a href={website}>{website}</a>

      <label>Linkedin</label>
      <a href={linkedin}>{linkedin}</a>
    </div>
  )
}

export default ContactInfo
