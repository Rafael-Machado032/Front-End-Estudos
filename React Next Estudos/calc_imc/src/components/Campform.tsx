import React from 'react';

interface CampformProps {
    label: string,
    state: number | "",
    funcState: React.Dispatch<React.SetStateAction<number | "">>
}


export default function Campform(props: CampformProps) {
    return (
        <div className='flex flex-col w-[80%]'>
            <label>{props.label}</label>
            <input
                className='border-2 border-black pl-0.5 h-8'
                type="number"
                value={props.state}
                onChange={(e) => props.funcState(Number(e.target.value))}
            />
        </div>
    );
}
