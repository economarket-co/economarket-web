import { Select, SelectItem, Selection } from "@nextui-org/react";

interface SelectFieldProps {
    label: string;
    placeholder: string;
    isRequired?: boolean;
    type?: string;
    value: Selection;
    options: any[];
    onSelectionChange: any;
    disable?: boolean;
}


export function SelectField(props: SelectFieldProps) {
    return (
        // <div className="flex gap-6 items-center">
            // <label className="text-sm font-semibold w-1/5">{props.label}</label>
            <Select
                isRequired={props.isRequired}
                placeholder={props.placeholder}
                selectedKeys={props.value}
                defaultSelectedKeys={props.value}
                onSelectionChange={props.onSelectionChange}
                isDisabled={props.disable}
            >
                {
                    props.options.map((option: any, index: number) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))
                }
            </Select>
        // </div>
    )
}