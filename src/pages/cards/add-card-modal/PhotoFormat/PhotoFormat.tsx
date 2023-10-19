import {Typography} from "@/components/ui";
import s from "@/pages/cards/add-card-modal/addCard.module.scss";
import {FilePicker} from "@/components/ui/filePicker/filePicker.tsx";




type PhotoFormat = {
    questionImg:File | undefined
    setQuestionImg:(value:File)=>void
    answerImg:File | undefined
    setAnswerImg:(value:File)=>void
    validatePhoto:(file:File)=>boolean
}

export const PhotoFormat = (
    {
        questionImg,
        setQuestionImg,
        setAnswerImg,
        answerImg,
        validatePhoto
    }:PhotoFormat
)=>{


    const questionImgUrl = questionImg ? URL.createObjectURL(questionImg) : 'https://placehold.co/484x119'
    const answerImgUrl = answerImg ?URL.createObjectURL(answerImg) : 'https://placehold.co/484x119'




    const onQuestionImgHandler = (file: File) => {
        if (validatePhoto(file)) {
            setQuestionImg(file);
        }
    };

    const onAnswerHandler = (file: File) => {
        if (validatePhoto(file)) {
            setAnswerImg(file);
        }
    };

    return(
        <>
            <div>
                <Typography variant='subtitle2' >
                    Question
                </Typography>
                <div className={s.imgContainer}>
                    <img src={questionImgUrl}/>
                </div>
                <FilePicker setCover={onQuestionImgHandler} className={s.buttonFile}/>
            </div>
            <div className={s.answerContainer}>
                <Typography variant='subtitle2'>
                    Answer
                </Typography>
                <div className={s.imgContainer}>
                    <img src={answerImgUrl}/>
                </div>
                <FilePicker setCover={onAnswerHandler} className={s.buttonFile}/>
            </div>


        </>
    )
}
