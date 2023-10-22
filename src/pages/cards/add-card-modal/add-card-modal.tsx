import {Button, Modal,  SelectCustom} from "@/components/ui";

import {TextFormat} from "./TextFormat/TextFormat.tsx";
import {PhotoFormat} from "./PhotoFormat/PhotoFormat.tsx";

import {useState} from "react";


import s from './addCard.module.scss'
import {useAddCardMutation} from "@/services/cards";

import {AddCardValuesForm, useAddCardValidate} from "./useAddCardValidate.ts";





type AddCardProps = {
    deckId?:string
    open:boolean,
    setOpen:(open:boolean)=>void
    onSubmit?:()=>void
}

type FormatType = 'Text'|'Picture'

export const AddCardModal = (
    {
        open,
        setOpen,
        deckId
    }:AddCardProps
) => {

    const options = [
        {label:'Text',value:'Text'},
        {label:'Picture',value:'Picture'}
    ]


    const [format,setFormat] = useState<FormatType>('Text')
    const [questionImg,setQuestionImg] = useState<File>()
    const [answerImg,setAnswerImg] = useState<File>()

    const [createCard] = useAddCardMutation()

    const onChangeFormatHandler = (value:FormatType)=>setFormat(value)

    const {
        reset,
        errors,
        control,
        handleSubmit,
        validatePhotoHelper
    } = useAddCardValidate()




    const onSubmitHandler  = (data:AddCardValuesForm)=>{

        const formData = new FormData()
        formData.append('question', data.question)
        formData.append('answer', data.answer)
        questionImg && formData.append('questionImg', questionImg)
        answerImg && formData.append('answerImg', answerImg)
        createCard({id: deckId, body: formData})
        setOpen(false)
        reset()
    }





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
                {format === 'Text' && <TextFormat control={control} errors={errors} />}
                {format === 'Picture' &&
                    <PhotoFormat
                        questionImg={questionImg}
                        setQuestionImg={setQuestionImg}
                        answerImg={answerImg}
                        setAnswerImg={setAnswerImg}
                        validatePhoto={validatePhotoHelper}
                />}

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






export default AddCardModal;
