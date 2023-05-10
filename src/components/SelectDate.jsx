import React, {useState, useRef, useEffect} from 'react';
import {Calendar} from "react-date-range";
import {format} from "date-fns";
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const SelectDate = ({value, onChange}) => {

    const [open, setOpen] = useState(false)

    const handleSelect = (date) => {
        onChange(format(date, 'dd/MM/yyyy').toString())
    }

    const refOne = useRef(null)

    useEffect(() => {
        document.addEventListener('keydown', hideOnEsc, true)
        document.addEventListener('click', hideOnClickOutside, true)
    }, [])

    const hideOnEsc = (e) => {
        if (e.key === 'Escape') {
            setOpen(false)
        }
    }

    const hideOnClickOutside = (e) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false)
        }
    }

    return (
        <div className='calendarWrap'>
            <input
                type='text'
                value={value}
                readOnly
                className={'inputBox'}
                onClick={() => setOpen(open => !open)}
            />

            <div ref={refOne}>
                {open && <Calendar
                    date={new Date()}
                    onChange={handleSelect}
                    className='calendarElement'
                />}
            </div>

        </div>
    );
};

export default SelectDate;