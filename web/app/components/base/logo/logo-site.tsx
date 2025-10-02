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
      src={`${basePath}/logo/ai-lifebot-logo.png`}
      className={classNames('block h-[32px] w-auto', className)}
      alt='AI LifeBot'
    />
  )
}

export default LogoSite
