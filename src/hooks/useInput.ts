import {ChangeEvent, EventHandler, ReactEventHandler, useState} from "react";
import {useValidation} from "./useValidation";

export const useInput = (initialValue :string, validations:{}) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations )
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {setValue(e.target.value)}
    const onBlur = () => {setDirty(true)}
    return {value, onChange, onBlur, ...valid, isDirty}
}