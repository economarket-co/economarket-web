'use client';
import { useState, useEffect } from "react";
import { formatCurrency } from "@/app/utils";
import { Checkbox, CheckboxGroup, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";

type ProductsFilterProps = {
    categoriesList: any[];
    categories: string[];
    setCategories: any;
    supermarkets: string[];
    setSupermarkets: any;
    maxPrice: number;
    priceRange: number;
    setPriceRange: (priceRange: number) => void;
}

export default function ProductsFilter(props: ProductsFilterProps) {
    const [isMobile, setIsMobile] = useState(false);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 1024);
        }

        window.addEventListener('resize', handleResize);
        setIsMobile(window.innerWidth < 1024);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function handlePriceRange(e: any) {
        const price = parseInt(e.target.value);

        props.setPriceRange(price);
    }

    if (isMobile) {
        return (
            <div className="bg-white px-4"
            >
                <button 
                    onClick={(e) => 
                    setIsActive(!isActive)} 
                    className=" text-start font-quicksand text-base py-4 font-semibold w-full flex gap-2 items-center">
                    Filtros
                    <img src="/icons/filter.svg" alt="" className="h-3"/>
                </button>

                <div className={`${!isActive ? 'hidden' : 'flex flex-col divide-y-1'}`}>
                    <div className="flex flex-col gap-4 py-7">
                        <h4 className="font-quicksand text-xl">Categoría</h4>

                        <CheckboxGroup
                            value={props.categories}
                            onValueChange={props.setCategories}
                        >
                            {
                                props.categoriesList.map((category: any) => (
                                    <Checkbox key={category.id} value={category.id}>{category.name}</Checkbox>
                                ))
                            }
                        </CheckboxGroup>
                    </div>

                    <div className="flex flex-col gap-4 py-7">
                        <h4 className="font-quicksand text-xl">Rango de precios</h4>


                        <input
                            id="default-range"
                            type="range"
                            value={props.priceRange}
                            max={props.maxPrice}
                            // value="50" 
                            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                            onChange={handlePriceRange}
                        />

                        <p>{formatCurrency(props.priceRange)} - {formatCurrency(props.maxPrice)}</p>
                    </div>

                    <div className="flex flex-col gap-4 py-7">
                        <h4 className="font-quicksand text-xl">Supermercado</h4>

                        <CheckboxGroup
                            value={props.supermarkets}
                            onValueChange={props.setSupermarkets}
                        // defaultValue={["Exito", "Jumbo", "Olimpica", "Carulla"]}
                        >
                            <Checkbox value="Exito">Exito</Checkbox>
                            <Checkbox value="Jumbo">Jumbo</Checkbox>
                            <Checkbox value="Olimpica">Olimpica</Checkbox>
                            <Checkbox value="Carulla">Carulla</Checkbox>
                        </CheckboxGroup>
                    </div>

                </div>

            </div>
        )
    }

    return (
        <div className="flex flex-col w-[300px] gap-7 divide-y-1 min-h-full bg-white border-r px-10 py-10"
            style={{ boxShadow: "0px 4px 26px 0px rgba(0, 0, 0, 0.45)" }}
        >
            <h3 className="font-quicksand text-3xl font-semibold">Filtros</h3>


            <div className="flex flex-col gap-4 py-7">
                <h4 className="font-quicksand text-xl">Categoría</h4>

                <CheckboxGroup
                    value={props.categories}
                    onValueChange={props.setCategories}
                >
                    {
                        props.categoriesList.map((category: any) => (
                            <Checkbox key={category.id} value={category.id}>{category.name}</Checkbox>
                        ))
                    }
                </CheckboxGroup>
            </div>

            <div className="flex flex-col gap-4 py-7">
                <h4 className="font-quicksand text-xl">Rango de precios</h4>


                <input
                    id="default-range"
                    type="range"
                    value={props.priceRange}
                    max={props.maxPrice}
                    // value="50" 
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    onChange={handlePriceRange}
                />

                <p>{formatCurrency(0)} - {formatCurrency(props.priceRange)}</p>
            </div>

            <div className="flex flex-col gap-4 py-7">
                <h4 className="font-quicksand text-xl">Supermercado</h4>

                <CheckboxGroup
                    value={props.supermarkets}
                    onValueChange={props.setSupermarkets}
                // defaultValue={["Exito", "Jumbo", "Olimpica", "Carulla"]}
                >
                    <Checkbox value="Exito">Exito</Checkbox>
                    <Checkbox value="Jumbo">Jumbo</Checkbox>
                    <Checkbox value="Olimpica">Olimpica</Checkbox>
                    <Checkbox value="Carulla">Carulla</Checkbox>
                </CheckboxGroup>
            </div>
        </div>
    )
}