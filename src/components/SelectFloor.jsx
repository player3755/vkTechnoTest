import React from 'react';
import MySelect from "./UI/select/MySelect";

const SelectFloor = ({onChange, value}) => {
    class Floor {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
    }

    let floors = []

    for (let i = 1; i <= 25; i++) {
        floors = [...floors, new Floor(i, i + 2)]
    }
    return (
        <MySelect options={floors} value={value} onChange={onChange}/>
    );
};

export default SelectFloor;