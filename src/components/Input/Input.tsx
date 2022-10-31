import {ChangeEvent, useState} from "react";
import {useInput} from "../../hooks/useInput";

interface propsInput {
    name: string
    valid: {
        value:string;
        onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
        onBlur:()=> void
    }
    required:boolean
}


function Input({name, required, valid} :propsInput) {
    return (
        <div className="mt-4">
            <div className="text-left">{required ? name+"*" : name}</div>
            <input value={valid.value} onChange={valid.onChange} onBlur={valid.onBlur} className=" mt-2 w-full bg-inherit border-b outline-0 border-black" type="text"/>
        </div>


    );
}

export default Input;
