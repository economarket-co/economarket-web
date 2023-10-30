"use client";
import { Button, Input } from "@nextui-org/react";
import { Card, Title } from "@tremor/react";
import { Dispatch, FormEvent, SetStateAction } from "react";

interface FieldProps {
    label: string;
    placeholder: string;
    isRequired?: boolean;
    type?: string;
    value: string | File;
    onChange: any
}

interface FormProps {
    title: string;
    fields: FieldProps[];
    loading: boolean;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function Form(props: FormProps) {
    function HandleCancel() {
        // direct to previous page
        window.history.back()
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        props.handleSubmit(e);
    }

    return (
        <Card className="w-[600px] m-auto">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <Title>{props.title}</Title>

                {
                    props.fields.map((field: FieldProps, index: number) => (
                        <Field key={index} {...field} />
                    ))
                }

                <div className="flex justify-end gap-4">
                    <Button size="md" color="danger" variant="light" onPress={HandleCancel}>Descartar</Button>
                    <Button type="submit" size="md" color="primary" isLoading={props.loading}>Agregar</Button>
                </div>
            </form>
        </Card>
    )
}

function Field(props: FieldProps) {
    return (
        <div className="flex gap-6 items-center">
            <label className="text-sm font-semibold w-1/5">{props.label}</label>
            {
                props.type === "file" ? (
                    <input
                        type="file"
                        className="w-full"
                        onChange={(e) => props.onChange(e.target.files?.[0])}
                    />
                ) :
                    <Input
                        isRequired={props.isRequired}
                        //@ts-ignore
                        type={props.type || "text"}
                        placeholder={props.placeholder}
                        // @ts-ignore
                        value={props.value}
                        onValueChange={props.onChange}
                    />

            }

        </div>
    )
}