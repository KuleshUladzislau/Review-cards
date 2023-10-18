import {Button, Modal, SelectCustom, Typography} from "@/components/ui";
import {Control, useForm} from "react-hook-form";
import { ControlledTextField } from "@/components/controlls";
import s from './addCard.module.scss'
import {z} from "zod";
import {useState} from "react";
import {FilePicker} from "@/components/ui/filePicker/filePicker.tsx";


type AddCardProps = {
    open:boolean,
    setOpen:(open:boolean)=>void
}

type AddCardValuesForm = z.infer<typeof useAddCardSchema>

const useAddCardSchema = z.object({
    question:z.string().nonempty().min(4),
    answer:z.string().nonempty().min(4)
})
type FormatType = 'Text'|'Photo'
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
        {label:'Photo',value:'Photo'}
    ]

    return (
        <Modal open={open}  setOpen={setOpen} title={'Add New Card'}>
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
                {/*<TextFormat control={control}/>*/}
                <PhotoFormat/>
                <div className={s.buttonContainer}>
                    <Button variant='secondary'>
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
    return(
        <>
            <div>
                <Typography variant='subtitle2'>
                    Question
                </Typography>
               <FilePicker/>
            </div>
            <div>
                <Typography variant='subtitle2'>
                    Answer
                </Typography>
                <Button variant={'secondary'} >Change Cover</Button>
            </div>


        </>
    )
}

export default AddCardModal;
