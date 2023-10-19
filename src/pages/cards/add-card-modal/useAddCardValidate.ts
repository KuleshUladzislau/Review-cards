import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "react-toastify";

export type AddCardValuesForm = z.infer<typeof useAddCardSchema>

const useAddCardSchema = z.object({
    question:z.string().nonempty(),
    answer:z.string().nonempty()
}).refine((arg)=>{
    if(!arg.answer && !arg.question){
        toast.error('add text question and answer')
    }else {
        toast.success('card has been added')
        return true
    }
})


export const useAddCardValidate = ()=>{


    const validatePhotoHelper = (file:File)=>{
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (file.size > 400000) {
            toast.error('File size exceeds the maximum limit');
            return false;
        }
        if (!allowedTypes.includes(file.type)) {
            toast.error('Invalid file type');
            return false;
        }else {
            toast.error('file is not valid format')
            return  true
        }
    }


    const {
        control,
        handleSubmit,
        formState:{errors},
        reset
    } = useForm<AddCardValuesForm>({
        resolver:zodResolver(useAddCardSchema),
        defaultValues:{
            answer: '',
            question:''
        }
    })




    return {
        control,
        handleSubmit,
        errors,
        reset,
        validatePhotoHelper
    }
}
