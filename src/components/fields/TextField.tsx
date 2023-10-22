import { Input } from "@nextui-org/react";
import { Dispatch, SetStateAction } from "react";

export type FieldProps = {
    label: string;
    placeholder: string;
    isRequired?: boolean;
    type?: string;
    value: string;
    onChange: Dispatch<SetStateAction<string>> | ((value: string) => void);
    isDisable?: boolean;
}

export function TextField(props: FieldProps) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold w-1/5">{props.label}</label>
            <Input
                isRequired={props.isRequired}
                type={props.type || "text"}
                placeholder={props.placeholder}
                value={props.value}
                onValueChange={props.onChange}
                isDisabled={props.isDisable}
                className="w-[300px]"
            />
        </div>
    )
}