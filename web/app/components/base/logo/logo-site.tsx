'use client'
import type { FC } from 'react'
import { basePath } from '@/utils/var'
import classNames from '@/utils/classnames'

type LogoSiteProps = {
  className?: string
}

const LogoSite: FC<LogoSiteProps> = ({
  className,
}) => {
  return (
    <img
      src={`${basePath}ai_lifebot.jpeg`}
      className={classNames('block h-8 w-auto object-contain', className)}
      alt='AI LifeBot'
    />
  )
}

export default LogoSite
