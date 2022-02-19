import React from 'react'

import { useRecoilState } from 'recoil'
import { storeAbsent } from '../atom/storeAbsent'
import { storeReplace } from '../atom/storeReplace'

function Details({ index, time, name }) {
  const [absent, setAbsent] = useRecoilState(storeAbsent)
  const [replace, setReplace] = useRecoilState(storeReplace)

  let styles = { color: '#7C99AC' }

  for (let i = 0; i < absent.length; i++) {
    if (
      absent[i]?.split(' ').join('').toLocaleLowerCase() ===
      name.split(' ').join('').toLocaleLowerCase()
    ) {
      styles = { color: '#A13333' }
    }

    if (
      replace[i]?.split(' ').join('').toLocaleLowerCase() ===
      name.split(' ').join('').toLocaleLowerCase()
    ) {
      styles = { color: '#8B9A46' }
    }
  }

  return (
    <div
      style={styles}
      className=" my-3 flex w-[100%] items-center justify-between rounded-xl border-b  border-slate-400  bg-gradient-to-r from-sky-900 to-slate-900 px-10 py-4 "
    >
      <p
        style={styles}
        className="w-[10%] font-serif text-[1.3rem] font-semibold text-gray-400 sm:text-[1.5rem] "
      >
        {index}
      </p>
      <p
        style={styles}
        className="w-[30%] font-serif text-[1.3rem] font-semibold text-gray-400 sm:text-[1.5rem] "
      >
        {time}
      </p>
      <p
        style={styles}
        className="w-[50%] max-w-[55%] truncate  text-center font-serif text-[1.3rem]  font-semibold text-gray-400 sm:max-w-[40%] sm:text-[1.5rem] "
      >
        {name}
      </p>
    </div>
  )
}

export default Details
