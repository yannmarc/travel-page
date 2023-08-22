import React, { Fragment } from 'react'

const Headline = ({heading, subHeading, descText}) => {
  return (
    <Fragment>
        <div className="max-w-[352px]">
            <span className="block uppercase text-[#5C8D96]">{subHeading}</span>
            <h2 className="font-medium text-[32px]">{subHeading}</h2>
            <p className="text-[#828282] mt-[40px]">{descText}</p>
        </div>
    </Fragment>
  )
}

export default Headline