import FilledButton from '@/components/ui/Buttons/Filled'
import withAuthAdmin from '@/components/withAuthAdmin'
import cx from "classnames"
import { useUser } from '@/hooks/user/useUser'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import Index from '@/components/dashboard/Index'
import withAuth from '@/components/withAuth'

const options = [
  "General",
  'Add track',
  'Update track',
  'Delete track'
]

function dashboard() {
  const [option, setOption] = useState(0)
  const { data: currentUser } = useUser();
  const {theme} = useTheme()

  const handleOptionChange = (e) => {
    for (let index = 0; index < options.length; index++) {
      if (options[index] === e.target.name) {
        setOption(index)
      }
    }
  }

  useEffect(() => {
    // first

    return () => {
      // second
    }
  }, [option])

  return (
    <div className="h-auto bg-slate-500/10 p-4 rounded">
      <div className={cx("w-full bg-black p-8 rounded flex justify-between items-center flex-row",theme === "dark" ? "text-black bg-white":"text-white")}>
        <div className="text-xl font-bold">HI {currentUser.name.toUpperCase()}</div>
        <div>
          {/* <FilledButton text="Visit" /> */}
          {/* <FilledButton text="Deploy" /> */}
          <FilledButton text="Update profile" href="/profile"/>
        </div>
      </div>
      <div className="pt-4 flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/4 bg-slate-700/20 h-full rounded p-1 mr-2">
          {options.map((option) => (
            <div
              key={option}
              className="w-auto m-2 hover:bg-black hover:text-white h-10 text-center rounded-full flex justify-center align-center"
            >
              <button
                onClick={handleOptionChange}
                name={option}
                className="w-full font-semibold"
              >
                {option}
              </button>
            </div>
          ))}
        </div>
        <div className="w-full md:w-3/4 h-auto bg-slate-700/20 rounded">
          <Index value={option} />
        </div>
      </div>
    </div>
  )
}

export default withAuth(dashboard)
