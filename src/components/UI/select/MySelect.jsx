import React from 'react';

const MySelect = ({options, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            <option disabled={true} value="">{value}</option>
            {options.map(option =>
                <option key={option.id} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;