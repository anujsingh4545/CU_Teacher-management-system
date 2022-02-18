import React from 'react'
import { InformationCircleIcon, XIcon } from '@heroicons/react/solid'
import { useState } from 'react'

function Infocall() {
  const [modal, setModal] = useState(false)
  return (
    <>
      <div className=" fixed right-5 bottom-10 cursor-pointer rounded-full   bg-slate-800 p-2 lg:right-10 ">
        <InformationCircleIcon
          className=" h-16 text-blue-600 "
          onClick={() => setModal(true)}
        />
      </div>

      {modal && (
        <>
          <div
            className="fixed top-0 left-0 h-[100%] w-[100%] min-w-[450px] bg-[#fcfcfc54] blur-md "
            onClick={() => setModal(false)}
          ></div>

          <div className=" tranform fixed  top-[50%] left-[50%]  h-fit w-[90vw] min-w-[400px] max-w-[7xl] translate-x-[-50%] translate-y-[-50%] rounded-3xl bg-[#000000f5]  px-10 sm:w-[70vw] md:w-[60vw] lg:w-[40vw] ">
            <XIcon
              className="absolute top-5 right-5 h-10  cursor-pointer text-slate-300 "
              onClick={() => setModal(false)}
            />
            <h1 className="text-clenter m-auto my-3 w-fit font-serif text-[4rem] font-semibold text-blue-600 ">
              {' '}
              Developers{' '}
            </h1>

            <p className="mt-5 font-serif text-[2.5rem]  font-semibold text-slate-300 ">
              Website
            </p>
            <section className="m-auto mt-3 flex   items-center justify-between  ">
              <p className="font-serif text-[1.8rem] font-semibold italic text-slate-600 ">
                Anuj Kumar Singh
              </p>
              <p className=" w-[30%] font-sans text-[1.8rem] font-bold italic  text-slate-600 ">
                20BCS6544
              </p>
            </section>

            <p className="mt-10  font-serif  text-[2.5rem] font-semibold text-slate-300 ">
              Data Entry
            </p>
            <section className=" mt-3 flex  items-center justify-between  ">
              <p className="font-serif text-[1.8rem] font-semibold italic text-slate-600 ">
                Ishita Choudhary
              </p>
              <p className=" w-[30%] font-sans text-[1.8rem] font-bold italic  text-slate-600 ">
                20BCS6548
              </p>
            </section>
            <section className=" mt-4 mb-14 flex  items-center justify-between ">
              <p className="font-serif text-[1.8rem] font-semibold italic text-slate-600 ">
                Gavin Reji Thoppil
              </p>
              <p className=" w-[30%] font-sans text-[1.8rem] font-bold  italic text-slate-600 ">
                20BCS6559
              </p>
            </section>
          </div>
        </>
      )}
    </>
  )
}

export default Infocall
