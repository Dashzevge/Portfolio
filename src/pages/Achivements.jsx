import  React from 'react'
import {ACHIVEMENTS} from "../constants"

const Achivements = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">Achivements</h1>
        <div>
          {ACHIVEMENTS.map((achivement, index) => (
            <div key={index} className="mb-8 flex flex-map lg:justify-center">
              <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">
                  {achivement.year}
                  </p>
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">
                    {achivement.role} -{" "}
                  <span className="text-sm text-purple-100">
                    {achivement.company} 
                  </span>
                </h6>
                <p className="mb-4 text-neutral-400">{achivement.description}</p>
                {achivement.technologies.map((tech, index) => (
                  <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div> 
          ))}
        </div>     
    </div>
  )
}
export default Achivements