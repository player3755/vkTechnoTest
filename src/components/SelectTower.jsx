import React from 'react';
import MySelect from "./UI/select/MySelect";

const SelectTower = ({onChange, value}) => {
    const towers = [
        {id: 1, name: 'А'},
        {id: 2, name: 'Б'}
    ]
    return (
        <MySelect onChange={onChange} options={towers} value={value}/>
    );
};

export default SelectTower;