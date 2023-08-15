import React from 'react'

const Input = ({ id, onChange , value , label, type, notShow,error}) => {
  return (
    <div className='relative' hidden={notShow}>
    <input
    onChange={onChange}
    type={type}
    value={value}
    id={id}
     className={`
     ${error ? "outline outline-red-600 outline-1" : ""}
    block
    rounded-md
    px-6
    pt-6
    pb-1
    w-full
    text-md
    text-white
    bg-neutral-700
    appreance-none
    focus:outline-none
    focus:ring-0
    peer
    `}
    placeholder=''/>
    <label
    className='
    absolute
    text-md
    text-zinc-400
    duration-150
    transform
    -translate-y-3
    scale-75
    top-4
    z-10
    origin-[0]
    left-6
    peer-placeholder-shown:scale-100
    peer-placeholder-shown:translate-y-0
    peer-focus:scale-75
    peer-focus:-translate-y-3
    '
    htmlFor={id}>
        {label}
    </label>
    {error && (
        <>
          <div className="text-red-600 flex flex-row space-x-1 absolute justify-center items-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="default-ltr-cache-0 e1vkmu651" data-name="CircleX" role="img" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" fill="currentColor"></path></svg>
            <span>Please enter a valid {label}.</span>
          </div>
        </>
      )}
    </div>
  )
}

export default Input