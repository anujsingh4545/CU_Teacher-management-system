import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import { DotsVerticalIcon } from '@heroicons/react/solid'
import { useRecoilState } from 'recoil'
import { checkPassword } from '../atom/checkPassword'
import { useEffect } from 'react'
import { db } from '../firebase'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { storeAbsent } from '../atom/storeAbsent'
import { storeReplace } from '../atom/storeReplace'
import { modalData } from '../atom/modalData'

function Teacher() {
  const { data: session } = useSession()
  const [password, setPassword] = useRecoilState(checkPassword)
  const [absent, setAbsent] = useRecoilState(storeAbsent)
  const [replace, setReplace] = useRecoilState(storeReplace)
  const [modal, setModal] = useRecoilState(modalData)

  useEffect(async () => {
    setAbsent([])
    setReplace([])
    const unsubscribe = await onSnapshot(
      query(collection(db, 'absentee'), orderBy('timeStamp', 'desc')),
      (snapshot) => {
        snapshot.docs.map((check) => {
          setAbsent((data) => [...data, check.data().Absent])
          setReplace((data) => [...data, check.data().Replace])
        })
      }
    )
    return unsubscribe
  }, [db, modal])

  function sign() {
    signOut()
    setPassword(false)
  }
  return (
    <div className="m-auto w-[100%] max-w-7xl ">
      {}

      <section className="flex items-center justify-end py-10 px-5 sm:px-0 ">
        <div className="flex items-center rounded-full bg-[#7c7c7c2b]  p-2 ">
          <img
            src={session?.user?.image}
            className="h-14 rounded-full p-1"
            alt=""
          />
          <p className="mx-3 text-[1.3rem] font-semibold  italic tracking-widest text-gray-300">
            {session?.user?.username}
          </p>
          <DotsVerticalIcon
            className="ml-5 mr-3 h-6 cursor-pointer text-gray-200 "
            onClick={sign}
          />
        </div>
      </section>

      <section className=" mt-5 w-[100%]  ">
        <img
          src="/logo-white.png"
          alt=""
          className="m-auto h-56 w-[90%] sm:h-72 sm:w-[80%] "
        />
      </section>

      {}
    </div>
  )
}

export default Teacher
