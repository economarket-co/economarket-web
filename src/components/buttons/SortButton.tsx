"use client";

import { quicksand } from "@/fonts";

type SortButtonProps = { ascSort: Function, descSort: Function, recentSort: Function }

export default function SortButton(props: SortButtonProps, objects: any[]) {

    const handleChange = (e: any) => {
        const value = parseInt(e.target.value);

        switch (value) {
            case 0:
                props.ascSort();
                break;
            case 1:
                props.descSort();
                break;
            case 2:
                props.recentSort();
                break;
            default:
                break;
        }
    }
    return (
        <select
            defaultValue={1}
            placeholder="Ordenar"
            onChange={handleChange}
            className={`
                    h-fit
                    hover:cursor-pointer focus:outline-none 
                    text-base border border-bordersColor rounded-lg
                    px-8 py-3 flex items-center gap-2 hover:bg-gray-50 
                    w-fit bg-[#E2E4E5;] text-[#7F7F7F] ${quicksand.className}`
            }
        >
            
            <option onSelect={() => console.log('hola')} value={0}>Orden alfabético</option>
            <option onClick={() => props.descSort()} value={1}>Más popular</option>
            {/* <option onClick={() => props.recentSort()} value={2}>Most recent</option> */}
            {/* <option value="relevance">Relevance</option> */}
        </select>
    )
}