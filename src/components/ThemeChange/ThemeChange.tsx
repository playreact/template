import { Check, Palette } from 'lucide-react'
import React, { memo, useEffect } from 'react'
import { themeChange } from 'theme-change'
import { themes } from './ThemeChange.constants'

const ThemeChange: React.FC = () => {
  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <label tabIndex={0} className="btn btn-ghost">
        <Palette />
      </label>
      <div tabIndex={0} className="dropdown-content menu bg-base-200 mt-2 h-64 w-52 overflow-y-auto rounded-md p-2 shadow">
        <div className='grid grid-cols-1 gap-3 p-2'>
          {
            themes.map(theme => (
              <button
                key={theme.id}
                data-theme={theme.id}
                data-set-theme={theme.id}
                data-act-class='[&_svg]:visible'
                className="bg-base-100 flex w-full cursor-pointer gap-2 rounded px-3 py-2 font-mono"
              >
                <Check className='invisible' />
                {theme.id}
              </button>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default memo(ThemeChange)
