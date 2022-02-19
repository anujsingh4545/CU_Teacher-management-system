import React, { useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalData } from '../atom/modalData'
import { onData } from '../atom/onData'

import timetable from '../data/timetable'
import Absent from './Absent'
import Details from './Details'

function Searchpanel() {
  const [modal, setModal] = useRecoilState(modalData)
  const [on, setOn] = useRecoilState(onData)
  const day = useRef(null)
  const time = useRef(null)
  const [data, setData] = useState([])

  let val = 1,
    val2 = 0

  const searchData = async () => {
    await setData(timetable[`${day.current.value}`][`${time.current.value}`])
    setOn(true)
  }

  function execute() {
    setModal(true)
    setOn(false)
  }

  return (
    <div className="md: m-auto w-[100%] max-w-7xl px-5 md:px-0">
      <section className=" mt-32 flex w-[100%] items-center justify-between rounded-3xl  bg-gray-900 py-5 ">
        <p
          className=" w-[50%]   cursor-pointer border-r border-slate-600  text-center font-serif text-[1.8rem] font-semibold tracking-wider text-gray-300 sm:text-[2.5rem]"
          onClick={() => setModal(false)}
        >
          Teacher Details
        </p>

        <p
          className=" w-[50%] cursor-pointer  border-l border-slate-600 text-center  font-serif text-[1.8rem] font-semibold tracking-wider text-gray-300 sm:text-[2.5rem] "
          onClick={execute}
        >
          Absentee Details
        </p>
      </section>

      {modal === true ? (
        <Absent />
      ) : (
        <>
          {' '}
          <section className="mt-16 flex w-[100%] items-center justify-between  rounded-3xl bg-[#7c7c7c2b] px-5 py-5 ">
            <select
              ref={day}
              id="Days"
              className="  rounded-xl  bg-transparent py-4 pr-3 font-serif  text-[1.5rem] text-slate-300 outline-none md:pr-16  md:text-[2rem]  "
            >
              <option
                value="monday"
                className="bg-black py-2 text-[1rem] lg:text-[1.5rem] "
              >
                Monday
              </option>
              <option
                value="tuesday"
                className="bg-black py-2 text-[1rem] lg:text-[1.5rem] "
              >
                Tuesday
              </option>
              <option
                value="wednesday"
                className="bg-black py-2 text-[1rem] lg:text-[1.5rem] "
              >
                Wednesday
              </option>
              <option
                value="thursday"
                className="bg-black py-2 text-[1rem] lg:text-[1.5rem] "
              >
                Thursday
              </option>
              <option
                value="friday"
                className="bg-black py-2 text-[1rem] lg:text-[1.5rem] "
              >
                Friday
              </option>
              <option
                value="saturday"
                className="bg-black py-2 text-[1rem] lg:text-[1.5rem] "
              >
                Saturday
              </option>
            </select>

            <select
              id="TIme Zone"
              ref={time}
              className="   rounded-xl  bg-transparent py-4 pr-3 text-left font-serif text-[1.5rem] text-slate-300 outline-none md:pr-16 md:text-[2rem] "
            >
              <option
                value="9:40 - 10:20"
                className="bg-black py-2 text-[1rem] lg:text-[1.5rem] "
              >
                9:40 - 10:20
              </option>
              <option
                value="10:30 - 11:10"
                className="bg-black py-2 text-[1rem] lg:text-[1.5rem] "
              >
                10:30 - 11:10
              </option>
              <option
                value="11:20 - 12:00"
                className="bg-black py-2 text-[1rem] lg:text-[1.5rem] "
              >
                11:20 - 12:00
              </option>
              <option
                value="12:10 - 12:50"
                className="bg-black py-2 text-[1rem] lg:text-[1.5rem] "
              >
                12:10 - 12:50
              </option>
              <option
                value="12:50 - 13:50"
                className="bg-black py-2 text-[1rem] lg:text-[1.5rem] "
              >
                12:50 - 13:50
              </option>
              <option
                value="13:50 - 14:30"
                className="bg-black py-2 text-[1rem] lg:text-[1.5rem] "
              >
                13:50 - 14:30
              </option>
              <option
                value="14:40 - 15:20"
                className="bg-black py-2 text-[1rem] lg:text-[1.5rem] "
              >
                14:40 - 15:20
              </option>
              <option
                value="15:30 - 16:10"
                className="bg-black py-2 text-[1rem] lg:text-[1.5rem] "
              >
                15:30 - 16:10
              </option>
            </select>

            <a
              href="#_"
              onClick={searchData}
              className="group relative inline-flex items-center justify-start overflow-hidden rounded-xl bg-blue-700 px-14 py-3 font-sans text-[1.2rem] font-semibold  transition-all hover:bg-white md:px-20"
            >
              <span className="absolute inset-0 rounded-xl border-0 border-white transition-all duration-300 ease-linear group-hover:border-[25px]"></span>
              <span className="relative w-full text-left text-white transition-colors duration-500 ease-in-out group-hover:text-blue-700">
                Submit
              </span>
            </a>
          </section>
          <section className="my-20 flex w-[100%] max-w-7xl flex-col items-center ">
            {data.length > 0 && on === true ? (
              data?.map((index) => (
                <Details
                  key={val2++}
                  name={index}
                  time={time?.current?.value}
                  index={val++}
                />
              ))
            ) : (
              <p className="my-8 text-center text-[2.5rem] font-semibold italic text-gray-400  ">
                No Data Found ⚠️
              </p>
            )}
          </section>
        </>
      )}
    </div>
  )
}

export default Searchpanel
