import React from 'react'

const Smallbox = () => {
  return (
    <div className="flex flex-grow justify-center px-16 py-5 text-center">
      <div className="box-border rounded-lg border-[1px] border-black  p-5 text-lg text-red-500">
        <p className="">
          You may come across some features or links in our new NPTEL site that
          are not fully functional. We are doing our best to resolve all the
        </p>
        <p>
          issues as quickly as possible. Please provide your
          suggestions/feedback at this link:{' '}
          <a className='text-blue-700' href="https://docs.google.com/forms/d/e/1FAIpQLSd8zS-9aal7K220DawDa6uneSkKUrzGszmMt6QrbQHrOmmdfg/viewform">
            click here
          </a>
        </p>
        <p>
          If you are facing any difficulties with the new site, and want to
          access our old site, please go to{' '}
          <a className='text-blue-700' href="https://archive.nptel.ac.in">https://archive.nptel.ac.in</a>
        </p>
      </div>
    </div>
  )
}

export default Smallbox
