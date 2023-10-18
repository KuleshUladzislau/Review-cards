import {ChangeEvent, useRef} from 'react'

import s from './filePicker.module.scss'

import ChangeCover from '@/assets/icons/ChangeCover.tsx'
import {Button} from '@/components/ui'




type FilePickerProps  = {
  setCover: (cover: File) => void
  className?:string
}

export const FilePicker = ({ setCover,className } :FilePickerProps) => {
  const fileRef = useRef<HTMLInputElement>(null)

  const pickHandler = () => {
    if (fileRef.current) {
      fileRef.current.click()
    }
  }
  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setCover(e.target.files?.[0])
    }
  }

  return (
    <div className={`${s.coverWrap} ${className}`}>
      <Button onClick={pickHandler} type={'button'} className={s.coverButton} variant={'secondary'}>
        <ChangeCover /> Change Cover
      </Button>
      <input ref={fileRef} className={s.hidden} onChange={uploadHandler} type={'file'}  accept={'image/*,'}/>
    </div>
  )
}




