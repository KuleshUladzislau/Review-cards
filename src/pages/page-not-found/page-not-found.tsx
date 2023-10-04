import { useNavigate } from 'react-router-dom'

import s from './page-not-found.module.scss'

import PageNotFountIcon from '@/assets/icons/PageNotFountIcon.tsx'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

export const PageNotFound = () => {
  const nagivate = useNavigate()
  const onNavigateHandler = () => {
    nagivate('/')
  }

  return (
    <div className={s.container}>
      <PageNotFountIcon className={s.icon} />
      <Typography variant={'body1'} as={'h2'} className={s.title}>
        Sorry! Page not found!
      </Typography>
      <Button variant={'primary'} className={s.button} onClick={onNavigateHandler}>
        Back to home page
      </Button>
    </div>
  )
}

export default PageNotFound
