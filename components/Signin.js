import { signIn } from 'next-auth/react'
import React from 'react'
import { ShieldExclamationIcon } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import { useRef } from 'react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { checkPassword } from '../atom/checkPassword'

function Signin({ providers }) {
  const { data: session } = useSession()
  const [password, setPassword] = useRecoilState(checkPassword)
  const router = useRouter()
  let inputs = useRef(null)

  function submitData() {
    if (inputs?.current?.value === 'aiml' && session) {
      setPassword(true)
      router.replace('/')
    } else if (!session) {
      alert('Login with google first ...!')
    } else {
      alert('Enter correct password ...!')
    }
  }

  return (
    <div className=" m-auto min-h-[100vh] w-[100%]  max-w-7xl border border-transparent bg-black sm:h-[100vh]  ">
      {/*  */}

      <div className=" m-auto mt-40 w-[100%] max-w-7xl text-center  sm:mt-20">
        {/*  */}

        <img
          src="/logo-white.png"
          className="m-auto mt-20 w-[80%] sm:mt-10 sm:h-80 "
          alt=""
        />
        {/*  */}

        {/*  */}

        <section className="m-auto mt-32 flex w-[90%] flex-col sm:w-[60%] ">
          {/*  */}

          <div className="m-auto my-10 flex w-[80%] items-center justify-center rounded-xl bg-[#7c7c7c2b] px-10 ">
            {Object.values(providers).map((provider) => (
              <button
                key={provider.name}
                className="flex-1 cursor-pointer px-5   py-4 text-left  text-[1.5rem] text-slate-300 "
                onClick={() => signIn(provider.id)}
              >
                Sign in with {provider.name}
              </button>
            ))}

            <ShieldExclamationIcon
              className={
                !session
                  ? 'h-10 pl-9 text-red-700 '
                  : ' h-10 pl-9 text-green-700 '
              }
            />
          </div>

          <div className="flex w-[100%] flex-col items-center  ">
            <input
              type="password"
              ref={inputs}
              placeholder="Enter Password "
              className="w-[80%] rounded-xl bg-[#7c7c7c2b] px-16 py-4  text-[1.5rem] font-semibold text-slate-300 outline-none "
            />
          </div>

          <div className="mt-20 flex w-[100%] items-center justify-center px-10">
            <a
              href="#_"
              onClick={submitData}
              className="group relative mx-3 inline-flex items-center justify-start overflow-hidden rounded-xl bg-blue-700 px-20 py-3 font-sans text-[1.2rem]  font-semibold transition-all  hover:bg-white"
            >
              <span className="absolute inset-0 rounded-xl border-0 border-white transition-all duration-300 ease-linear group-hover:border-[25px]"></span>
              <span className="relative w-full text-left text-white transition-colors duration-500 ease-in-out group-hover:text-blue-700">
                Submit
              </span>
            </a>

            <a
              href="#_"
              onClick={() => (inputs.current.value = '')}
              className="group relative  mx-3 inline-flex items-center justify-start overflow-hidden rounded-xl bg-blue-700 px-20 py-3  font-sans text-[1.2rem] font-semibold transition-all hover:bg-white "
            >
              <span className="absolute inset-0 rounded-xl border-0 border-white transition-all duration-300 ease-linear group-hover:border-[25px]"></span>
              <span className="relative w-full text-left text-white transition-colors duration-500 ease-in-out group-hover:text-blue-700">
                Cancel
              </span>
            </a>
          </div>

          {/*  */}
        </section>
      </div>
    </div>
  )
}

export default Signin
