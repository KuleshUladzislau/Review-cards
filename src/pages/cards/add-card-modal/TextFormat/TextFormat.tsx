import {Control, FieldErrors} from "react-hook-form";
import s from "@/pages/cards/add-card-modal/addCard.module.scss";
import {ControlledTextField} from "@/components/controlls";
import {AddCardValuesForm} from "../useAddCardValidate.ts";

type TextFormatProps = {
    control:Control<AddCardValuesForm>
    errors:FieldErrors<AddCardValuesForm>
}
export const TextFormat = ({control,errors}:TextFormatProps)=>{
    return(
        <>
            <div className={s.inputContainer}>
                <ControlledTextField
                    name={'question'}
                    control={control}
                    label={'Question'}
                    errorMessage={errors.question?.message}
                />
            </div>
            <div className={`${s.inputContainer} ${s.lastInput}`}>
                <ControlledTextField
                    name={'answer'}
                    control={control}
                    label={'Answer'}
                    errorMessage={errors.answer?.message}
                />
            </div>
        </>
    )
}
