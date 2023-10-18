import {Button, Modal,  SelectCustom, Typography} from "@/components/ui";
import {Control, useForm} from "react-hook-form";
import { ControlledTextField } from "@/components/controlls";

import {z} from "zod";
import {useState} from "react";
import {FilePicker} from "@/components/ui/filePicker/filePicker.tsx";

import s from './addCard.module.scss'


type AddCardProps = {
    open:boolean,
    setOpen:(open:boolean)=>void
}

type AddCardValuesForm = z.infer<typeof useAddCardSchema>

const useAddCardSchema = z.object({
    question:z.string().nonempty().min(4),
    answer:z.string().nonempty().min(4)
})
type FormatType = 'Text'|'Picture'
const AddCardModal = (
    {
        open,
        setOpen
    }
    :AddCardProps
) => {

    const [format,setFormat] = useState<FormatType>('Text')

    const onChangeFormatHandler = (value:FormatType)=>setFormat(value)
    const {
        control,
        handleSubmit,
    } = useForm<AddCardValuesForm>({
        defaultValues:{
            answer: '',
            question:''
        }
    })

    const onSubmitHandler = (data:AddCardValuesForm)=>{
        console.log(data)

    }

    const options = [
        {label:'Text',value:'Text'},
        {label:'Picture',value:'Picture'}
    ]

    return (

            <Modal open={open} setOpen={setOpen} title={'Add New Card'} >
            <form onSubmit={handleSubmit(onSubmitHandler)} className={s.formContainer}>
                <div className={s.selectContainer}>
                    <SelectCustom
                        name={'format'}
                        options={options}
                        label={'Choose a question format'}
                        className={s.select}
                        defaultValue={format}
                        value={format}
                        onValueChange={onChangeFormatHandler}
                    />
                </div>
                {format === 'Text' && <TextFormat control={control}/>}
                {format === 'Picture' && <PhotoFormat/>}

                <div className={s.buttonContainer}>
                    <Button variant='secondary' onClick={()=>setOpen(false)}>
                        Cancel
                    </Button>
                    <Button variant='primary'>
                        Save Changes
                    </Button>
                </div>
            </form>
        </Modal>

    );
};

type TextFormatProps = {
    control:Control<AddCardValuesForm>
}
const TextFormat = (
    {
      control
    }:TextFormatProps
)=>{
    return(
        <>
            <div className={s.inputContainer}>
                <ControlledTextField
                    name={'question'}
                    control={control}
                    label={'Question'}
                />
            </div>
            <div className={`${s.inputContainer} ${s.lastInput}`}>
                <ControlledTextField
                    name={'answer'}
                    control={control}
                    label={'Answer'}
                />
            </div>
        </>
    )
}

const PhotoFormat = ()=>{

    const [questionImg,setQuestionImg] = useState<File | undefined>()
    const [answerImg,setAnswerImg] = useState<File>()
    const questionImgUrl = questionImg ? URL.createObjectURL(questionImg) : 'https://placehold.co/484x119'
    const answerImgUrl = answerImg ?URL.createObjectURL(answerImg) : 'https://placehold.co/484x119'
    const onQuestionImgHandler = (file:File) => setQuestionImg(file)
    const onAnswerHandler = (file: File) => setAnswerImg(file)

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

export default AddCardModal;
