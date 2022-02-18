import React from 'react'

function Details({ index, time = '9:40 - 10:20', name = 'Anuj Kumar Singh' }) {
  return (
    <div className=" my-3 flex w-[100%] items-center justify-between rounded-md border-b border-slate-500 bg-gray-900 px-10 py-4 ">
      <p className="w-[10%] font-serif text-[1.3rem] font-semibold text-gray-400 sm:text-[1.5rem] ">
        {index}
      </p>
      <p className="w-[30%] font-serif text-[1.3rem] font-semibold text-gray-400 sm:text-[1.5rem] ">
        {time}
      </p>
      <p className="w-[50%] max-w-[55%] truncate  text-center font-serif text-[1.3rem]  font-semibold text-gray-400 sm:max-w-[40%] sm:text-[1.5rem] ">
        {name}
      </p>
    </div>
  )
}

export default Details
