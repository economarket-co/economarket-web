import { poppins } from "@/fonts";
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
            <label className={`text-sm md:text-base lg:text-[20px]] text-inputText font-medium w-1/5 ${poppins.className}`}>{props.label}</label>
            <Input
                isRequired={props.isRequired}
                type={props.type || "text"}
                placeholder={props.placeholder}
                value={props.value}
                onValueChange={props.onChange}
                isDisabled={props.isDisable}
                className="w-[270px] lg:w-[400px] text-[20px]"
                classNames={
                    {
                        input: "text-sm md:text-base lg:text-[20px]",
                        inputWrapper: "font-normal px-4 h-[40px] md:h-[50px] text-inputText",
                    }
                }
            />
        </div>
    )
}