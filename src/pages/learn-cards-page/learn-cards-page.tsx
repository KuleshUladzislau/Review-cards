import s from './LearnCardsPage.module.scss'
import { Button, Card, Page, Typography } from '@/components/ui'

import { useState } from 'react'
import { AnswerPage } from '@/pages/learn-cards-page/answer-page/answer-page.tsx'
import { useLocation, useParams } from 'react-router-dom'
import { useGetCardQuery } from '@/services/learnCards/learn-cards-service.ts'

export const LearnCardsPage = () => {
  const params = useParams()
  const location = useLocation()

  const { data } = useGetCardQuery({ cardsId: params?.cardsId })

  const [showAnswer, setShowAnswer] = useState(false)
  const showAnswerHandler = () => setShowAnswer(true)

  const decksName = location.state.decksName

  return (
    <Page>
      <Card className={s.wrapper}>
        <div className={s.container}>
          <Typography as={'h1'} variant={'large'} className={s.title}>
            Learn “{decksName}”
          </Typography>

          <Typography as={'div'} variant={'subtitle1'} className={s.question}>
            Question:{data?.question}
            {data?.questionImg && <img className={s.questionImg} src={data?.questionImg} />}
          </Typography>
          <Typography variant={'body2'} className={s.attempts}>
            Количество попыток ответов на вопрос: {data?.shots}
          </Typography>

          {!showAnswer && <Button onClick={showAnswerHandler}>Show Answer</Button>}
          {showAnswer && (
            <AnswerPage
              answer={data?.answer}
              cardId={data?.id}
              decksId={data?.deckId}
              showAnswer={setShowAnswer}
              answerImg={data?.answerImg}
            />
          )}
        </div>
      </Card>
    </Page>
  )
}
