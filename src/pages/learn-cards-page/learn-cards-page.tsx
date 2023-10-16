import {Button, Card, Typography} from "@/components/ui";
import s from './LearnCardsPage.module.scss'
import {useState} from "react";
import {AnswerPage} from "@/pages/learn-cards-page/answer-page/answer-page.tsx";


export const LearnCardsPage = () => {
    const [showAnswer,setShowAnswer] = useState(false)
    return (
        <Card className={s.wrapper}>
            <div className={s.container}>
                <Typography as={'h1'} variant={'large'} className={s.title}>
                    Learn “Pack Name”
                </Typography>

                <Typography as={'div'} variant={'subtitle1'} className={s.question}>
                    Question
                </Typography>
                <Typography variant={'body2'} className={s.attempts}>
                    Количество попыток ответов на вопрос: 10
                </Typography>

                {!showAnswer &&
                    <Button  onClick={() => setShowAnswer(true)}>
                        Show Answer
                    </Button>
                }
                {showAnswer && <AnswerPage/>}
            </div>
        </Card>
    );
};

