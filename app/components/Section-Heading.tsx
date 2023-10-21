import React from 'react'

interface SectionHeadingProps {
    heading : string
}

const SectionHeading:React.FC<SectionHeadingProps> = ({heading}) => {
  return (
    <h2 className="text-3xl text-center font-medium capitalize mb-8">{heading}</h2>
  )
}

export default SectionHeading