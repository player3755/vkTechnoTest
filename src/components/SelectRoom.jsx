import React from 'react';
import MySelect from "./UI/select/MySelect";

const SelectRoom = ({onChange, value}) => {
    class Room {
        constructor(id, name) {
            this.id = id;
            this.name = name
        }
    }

    let rooms = []

    for (let i = 1; i <= 10; i++) {
        rooms = [...rooms, new Room(i, i)]
    }
    return (
        <MySelect options={rooms} value={value} onChange={onChange}/>
    );
};

export default SelectRoom;