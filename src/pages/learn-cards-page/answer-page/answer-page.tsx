import {Button, Typography} from "@/components/ui";
import {RadioButton} from "@/components/ui/radioButton/radioButton.tsx";
import s from './answerPage.module.scss'


export const AnswerPage = () => {
    const options = [
        {title: 'Did not know', value: '1'},
        {title: 'Forgot', value: '2'},
        {title: 'A lot of though', value: '3'},
        {title: 'Confused', value: '4'},
        {title: 'Knew new answer', value: '5'},
    ]
    const onAnswerHandler = (value:string)=>{
        console.log(value)
    }
    return (
        <>
            <Typography variant={'subtitle1'} className={s.answer}>
                Answer:asdfasdfsadfasdfasdfsa
            </Typography>
            <Typography variant={'subtitle1'} className={s.rateTitle}>
                Rate yourself:
            </Typography>
            <RadioButton options={options} className={s.radioGroup} onValueChange={onAnswerHandler}/>
            <Button>
                Next Question
            </Button>
        </>
    );
};

