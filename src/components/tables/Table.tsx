"use client";
import { formatCurrency } from "@/utils";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { Card, Table, TableBody, TableCell, TableFoot, TableFooterCell, TableHead, TableHeaderCell, TableRow, Title } from "@tremor/react";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

interface FormProps {
    title: string;
    columns: Column[];
    data: any[];
    setData: (data: any[]) => void;
    allowControls?: boolean;
    entity?: string;
    allowActions?: boolean;
    onlyDetails?: boolean;
    showResume?: boolean;
}

interface ModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    onClose: () => void;
    handleDelete: () => void;
}

interface Column {
    name: string;
    key: string;
    isCurrency?: boolean;
    showResume?: boolean;
}

export default function BasicTable(props: FormProps) {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
    const [selectedItem, setSelectedItem] = useState<string>("");

    function HandleAdd() {
        // redirect to add page
        window.location.href = `/dashboard/${props.entity}/add`
    }

    function handleEdit(id: string) {
        window.location.href = `/dashboard/${props.entity}/${id}`
    }

    async function handleDelete() {
        try {
            const response = await axios.delete(`/api/${props.entity}/${selectedItem}`);
            props.setData(props.data.filter(item => item.id !== selectedItem));
            toast.success("Eliminado correctamente");
        } catch (error) {
            console.error(error);
            toast.error("Error al eliminar");
        } finally {
            onClose();
        }
    }

    function getNestedValue(obj: any, path: string) {
        const properties = path.split('.');
        let value = obj;

        for (let prop of properties) {
            if (value !== null  && value[prop] !== null) {
                value = value[prop];
            } else {
                return null; // Property doesn't exist
            }
        }
        return value;
    }


    return (
        <Card>
            <ConfirmModal isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange} handleDelete={handleDelete} />
            <div className="flex justify-between">
                <Title>{props.title}</Title>

                {
                    props.allowControls &&
                    <div>
                        <Button color="primary" size="sm" className="mr-2" onPress={HandleAdd}>Agregar</Button>

                    </div>
                }
            </div>
            <Table className="max-h-[500px]">
                <TableHead>
                    <TableRow>
                        {
                            props.columns.map((column, index) => (
                                <TableHeaderCell key={index}>{column.name}</TableHeaderCell>
                            ))
                        }
                        {
                            props.allowActions &&
                            <TableHeaderCell>Acciones</TableHeaderCell>
                        }
                    </TableRow>
                </TableHead>

                <TableBody className="max-h-[100px] overflow-y-scroll">
                    {
                        props.data.map((row, index) => (
                            <TableRow key={index}>
                                {
                                    props.columns.map((column, index) => {
                                        const value = getNestedValue(row, column.key);
                                        return (
                                            <TableCell key={index}>
                                                {
                                                    column.isCurrency ?
                                                        formatCurrency(value)
                                                        :
                                                        value
                                                }
                                            </TableCell>
                                        )
                                    })
                                }

                                {
                                    props.allowActions &&
                                    (props.onlyDetails ?
                                        <TableCell>
                                            <Button color="primary" size="sm" onPress={(e) => handleEdit(row.id)}>Ver Detalles</Button>
                                        </TableCell>
                                        :
                                        <TableCell>
                                            <div className="flex gap-2">
                                                <Button color="primary" size="sm" onPress={(e) => handleEdit(row.id)}>Editar</Button>
                                                <Button color="danger" size="sm" onPress={() => {
                                                    setSelectedItem(row.id)
                                                    onOpen()
                                                }
                                                }>Eliminar</Button>
                                            </div>
                                        </TableCell>
                                    )
                                }
                            </TableRow>
                        ))
                    }
                </TableBody>


                {
                    props.showResume &&
                    <TableFoot>
                        {

                            props.columns.map((column, index) => (
                                index === 0 ?
                                    <TableFooterCell key={index}>Total</TableFooterCell>
                                    :
                                    <TableFooterCell key={index} className="font-semibold">
                                        {
                                            column.showResume &&
                                            (
                                                column.isCurrency ?
                                                    formatCurrency(props.data.reduce((total: number, item: any) => total + getNestedValue(item, column.key), 0))
                                                    :
                                                    props.data.reduce((total: number, item: any) => total + getNestedValue(item, column.key), 0)
                                            )
                                        }
                                    </TableFooterCell>
                            ))
                        }
                    </TableFoot>
                }
            </Table>
        </Card>
    )
}

function ConfirmModal(props: ModalProps) {
    return (
        <Modal isOpen={props.isOpen} onOpenChange={props.onOpenChange}>
            <ModalContent>
                <ModalHeader>¿Estás Seguro de eliminar?</ModalHeader>
                <ModalBody>
                    <p>La acción de eliminar es irreversible</p>
                </ModalBody>

                <ModalFooter>
                    <Button color="danger" size="sm" onPress={props.handleDelete}>Eliminar</Button>
                    <Button color="primary" size="sm" onPress={props.onClose}>Cancelar</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}