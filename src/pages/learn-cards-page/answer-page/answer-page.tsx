import { Button, Typography } from '@/components/ui'
import s from './answerPage.module.scss'
import {
  useLazyGetCardQuery,
  useSaveGradeCardMutation,
} from '@/services/learnCards/learn-cards-service.ts'
import { ControlledRadioButton } from '@/components/controlls/controlled-radio-button/controlled-radio-button.tsx'

import {GradeAnswerType, useGradeValidation} from "./useGradeValidation.ts";
import {AnswerPageProps} from "../types.ts";




const options = [
  { title: 'Did not know', value: '1' },
  { title: 'Forgot', value: '2' },
  { title: 'A lot of though', value: '3' },
  { title: 'Confused', value: '4' },
  { title: 'Knew new answer', value: '5' },
]

export const AnswerPage = (
  {
    answer,
    cardId,
    decksId,
    showAnswer
  }
  : AnswerPageProps) => {

  const [saveGradeCards] = useSaveGradeCardMutation()
  const [getNewCard] = useLazyGetCardQuery()

  const {
      handleSubmit,
      control
  } = useGradeValidation()
  const onSubmitHandler = (data: GradeAnswerType) => {
    showAnswer(false)
    saveGradeCards({ decksId, cardId, grade: Number(data.grade) })
      .unwrap()
      .then(() => getNewCard({ cardsId: decksId }))
  }

  return (
    <>
      <Typography variant={'subtitle1'} className={s.answer}>
        Answer:{answer}
      </Typography>
      <Typography variant={'subtitle1'} className={s.rateTitle}>
        Rate yourself:
      </Typography>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <ControlledRadioButton
          options={options}
          className={s.radioGroup}
          name={'grade'}
          control={control}
        />
        <Button fullWidth>Next Question</Button>
      </form>
    </>
  )
}
