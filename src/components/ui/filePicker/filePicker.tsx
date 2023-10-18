import { useRef } from 'react'

import s from './filePicker.module.scss'

import ChangeCover from '@/assets/icons/ChangeCover.tsx'
import { Button } from '@/components/ui'

export const FilePicker = () => {
  const fileRef = useRef<HTMLInputElement>(null)

  const pickHandler = () => {
    if (fileRef.current) {
      fileRef.current.click()
    }
  }

  return (
    <div className={s.coverWrap}>
      <Button onClick={pickHandler} type={'button'} className={s.coverButton} variant={'secondary'}>
        <ChangeCover /> Change Cover
      </Button>
      <input ref={fileRef} className={s.hidden} type={'file'} />
    </div>
  )
}
