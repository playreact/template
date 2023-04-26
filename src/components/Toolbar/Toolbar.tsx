import React, { memo } from 'react'
import ThemeChange from './ThemeChange'
import TablerBrandGithub from '~icons/tabler/brand-github'

const Toolbar: React.FC = () => {
  return (
    <>
      <ThemeChange />
      <a href='https://github.com/playreact/template' className='btn btn-ghost btn-square'>
        <TablerBrandGithub fontSize={22} />
      </a>
    </>
  )
}

export default memo(Toolbar)
