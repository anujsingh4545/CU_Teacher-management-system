import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { db } from '../firebase'
import Leavers from './Leavers'

function Absent() {
  const { data: session } = useSession()
  const select1 = useRef(null)
  const select2 = useRef(null)
  const [loading, setLoading] = useState(false)
  const [absent, setAbsent] = useState([])

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'absentee'), orderBy('timeStamp', 'desc')),
      (snapshot) => {
        setAbsent(snapshot.docs)
      }
    )
    return unsubscribe
  }, [db])

  const options1 = (
    <select
      className=" ml-5 flex-1 truncate  bg-transparent text-center font-serif  text-[1.5rem]  text-slate-300 outline-none sm:text-[1.8rem] "
      ref={select1}
    >
      <option
        value="Pick a teacher"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Pick a teacher ...
      </option>
      <option
        value="Shikha Gupta"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Shikha Gupta
      </option>
      <option
        value="Neha Sharma"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Neha Sharma
      </option>
      <option
        value="Sharanjit Kaur"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Sharanjit Kaur
      </option>
      <option
        value="Durgesh Srivastava"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Durgesh Srivastava
      </option>
      <option
        value="Richa Singh"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Richa Singh
      </option>
      <option
        value="Arun Mittal"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Arun Mittal
      </option>
      <option
        value="Ashok Kumar"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Ashok Kumar
      </option>
      <option value="Leeza" className="bg-black text-[1rem] sm:text-[1.5rem]">
        Leeza
      </option>
      <option
        value="Resham Arya"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Resham Arya
      </option>
      <option
        value="Hariharan"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Hariharan
      </option>
      <option
        value="Shivani Aggarwal"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Shivani Aggarwal
      </option>
      <option
        value="Archna Sharma"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Archna Sharma
      </option>
      <option
        value="Monika Singh"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Monika Singh
      </option>
      <option
        value="Omnamah Shivay"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Omnamah Shivay
      </option>
      <option
        value="Amit Garg"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Amit Garg
      </option>
      <option
        value="Deepak Kumar Mehta"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Deepak Kumar Mehta
      </option>
      <option
        value="Prabhjot Singh"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Prabhjot Singh
      </option>
      <option
        value="Surender Singh"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Surender Singh
      </option>
      <option
        value="Vinay Sharma"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Vinay Sharma
      </option>
      <option
        value="Vijay Kumar"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Vijay Kumar
      </option>
    </select>
  )

  const options2 = (
    <select
      className=" ml-5 flex-1 truncate  bg-transparent text-center font-serif  text-[1.5rem]  text-slate-300 outline-none sm:text-[1.8rem] "
      ref={select2}
    >
      <option
        value="Pick a teacher"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Pick a teacher ...
      </option>
      <option
        value="Shikha Gupta"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Shikha Gupta
      </option>
      <option
        value="Neha Sharma"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Neha Sharma
      </option>
      <option
        value="Sharanjit Kaur"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Sharanjit Kaur
      </option>
      <option
        value="Durgesh Srivastava"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Durgesh Srivastava
      </option>
      <option
        value="Richa Singh"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Richa Singh
      </option>
      <option
        value="Arun Mittal"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Arun Mittal
      </option>
      <option
        value="Ashok Kumar"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Ashok Kumar
      </option>
      <option value="Leeza" className="bg-black text-[1rem] sm:text-[1.5rem]">
        Leeza
      </option>
      <option
        value="Resham Arya"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Resham Arya
      </option>
      <option
        value="Hariharan"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Hariharan
      </option>
      <option
        value="Shivani Aggarwal"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Shivani Aggarwal
      </option>
      <option
        value="Archna Sharma"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Archna Sharma
      </option>
      <option
        value="Monika Singh"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Monika Singh
      </option>
      <option
        value="Omnamah Shivay"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Omnamah Shivay
      </option>
      <option
        value="Amit Garg"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Amit Garg
      </option>
      <option
        value="Deepak Kumar Mehta"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Deepak Kumar Mehta
      </option>
      <option
        value="Prabhjot Singh"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Prabhjot Singh
      </option>
      <option
        value="Surender Singh"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Surender Singh
      </option>
      <option
        value="Vinay Sharma"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Vinay Sharma
      </option>
      <option
        value="Vijay Kumar"
        className="bg-black text-[1rem] sm:text-[1.5rem]"
      >
        Vijay Kumar
      </option>
    </select>
  )

  function defaultSelect() {
    select1.current.value = 'Pick a teacher'
    select2.current.value = 'Pick a teacher'
  }

  const submitData = async () => {
    if (loading) return
    setLoading(true)

    if (
      select1.current.value === 'Pick a teacher' ||
      select2.current.value === 'Pick a teacher' ||
      select1.current.value === select2.current.value
    ) {
      alert('Please choose teachers correctly ...!')
    } else {
      const userdata = {
        username: session.user.username,
        profileImg: session.user.image,
        timeStamp: serverTimestamp(),
        userId: session.user.uid,
        Absent: select1.current.value,
        Replace: select2.current.value,
      }
      await addDoc(collection(db, 'absentee'), userdata)
    }

    setLoading(false)
  }

  return (
    <div className="m-auto mt-32 w-[100%] max-w-7xl ">
      {}

      <section className="flex w-[100%] flex-col items-center  justify-between rounded-3xl bg-[#7c7c7c2b]  sm:flex-row  ">
        {}

        <section className="my-2 flex w-[100%] flex-col  border-slate-700 sm:w-[70%] sm:border-r ">
          {}

          <div className="my-5 flex w-[100%] items-center  px-10 ">
            <p className="font-serif  text-[2rem] font-semibold tracking-wider text-blue-600 sm:text-[2.3rem] ">
              Absenter
            </p>

            {options1}
          </div>

          <div className="my-5 flex w-[100%] items-center px-10">
            <p className="font-serif  text-[2rem] font-semibold tracking-wider text-blue-600 sm:text-[2.3rem] ">
              Replacer{' '}
            </p>

            {options2}
          </div>

          {}
        </section>

        <div className="my-5 flex w-[100%] items-center justify-end   sm:my-0 sm:w-[30%] sm:flex-col ">
          <a
            type="submit"
            onClick={submitData}
            href="#_"
            className="group relative mx-5 inline-flex items-center justify-start overflow-hidden rounded-xl bg-blue-700 px-14 py-3 font-sans text-[1.2rem] font-semibold transition-all  hover:bg-white sm:mx-0 md:px-20"
          >
            <span className="absolute inset-0 rounded-xl border-0 border-white transition-all duration-300 ease-linear group-hover:border-[25px]"></span>
            <span className="relative w-full text-left text-white transition-colors duration-500 ease-in-out group-hover:text-blue-700">
              {loading ? 'loading...' : 'Submit'}
            </span>
          </a>

          <a
            href="#_"
            onClick={defaultSelect}
            className="group relative mx-5 inline-flex items-center justify-start overflow-hidden rounded-xl bg-blue-700 px-14 py-3 font-sans text-[1.2rem] font-semibold transition-all hover:bg-white  sm:mx-0 sm:mt-5 md:px-20"
          >
            <span className="absolute inset-0 rounded-xl border-0 border-white transition-all duration-300 ease-linear group-hover:border-[25px]"></span>
            <span className="relative w-full text-left text-white transition-colors duration-500 ease-in-out group-hover:text-blue-700">
              Cancel
            </span>
          </a>
        </div>

        {}
      </section>

      {}

      <section className="mt-20 h-fit  w-[100%] ">
        {absent.map((post) => (
          <Leavers
            key={post.id}
            id={post.id}
            username={post.data().username}
            userImg={post.data().profileImg}
            userID={post.data().userId}
            absent={post.data().Absent}
            replace={post.data().Replace}
            time={post.data().timeStamp}
          />
        ))}
      </section>
    </div>
  )
}

export default Absent
