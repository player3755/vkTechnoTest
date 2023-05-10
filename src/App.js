import './styles/App.css';
import React, {useState} from "react";
import SelectTower from "./components/SelectTower";
import SelectFloor from "./components/SelectFloor";
import SelectRoom from "./components/SelectRoom";
import SelectDate from "./components/SelectDate";

function App() {

    const [SelectedTower, setSelectedTower] = useState('');
    const [SelectedFloor, setSelectedFloor] = useState('');
    const [SelectedRoom, setSelectedRoom] = useState('');
    const [SelectedDate, setSelectedDate] = useState('');
    const [comment, setComment] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')

    const getNewDate = (date) => {
        setSelectedDate(date);
    }

    const response = {
        tower: SelectedTower,
        floor: SelectedFloor,
        room: SelectedRoom,
        date: SelectedDate,
        time: `${startTime} - ${endTime}`,
        comment: comment
    }

    const handleStartTime = (time) => {
        setStartTime(time.target.value)
    }
    const handleEndTime = (time) => {
        setEndTime(time.target.value)
    }

    return (
        <div className="App">
            <h1>Бронирование переговорной</h1>
            <hr/>
            <div className='appElement'>Башня <SelectTower onChange={setSelectedTower} value={SelectedTower}/></div>
            <div className='appElement'>Этаж <SelectFloor id='SelectFloor' onChange={setSelectedFloor} value={SelectedFloor}/></div>
            <div className='appElement'>Номер переговорки <SelectRoom id='SelectRoom' onChange={setSelectedRoom} value={SelectedRoom}/></div>
            <div className='appElement'>Выбор даты <SelectDate styles={{padding: '5px', margin: '5px'}} value={SelectedDate} onChange={getNewDate}/></div>

            <div className='appElement'>
                <div>Выбор интервала времени</div>
                <span>Начало <input type={'time'} value={startTime} onChange={handleStartTime}/></span>
                <span>  Конец <input type={'time'} value={endTime} onChange={handleEndTime}/></span>

            </div>
            <div className='appElement'>Комментарий <input type="text" placeholder={'Введите комментарий'} value={comment} onChange={(event => setComment(event.target.value))}/>
            </div>

            <button onClick={(e) => {
                e.preventDefault();
                console.log(JSON.stringify(response))
            }}>Отправить
            </button>

            <button onClick={(e) => {
                e.preventDefault();
                setSelectedTower('')
                setSelectedFloor('')
                setSelectedRoom('')
                setSelectedDate('')
                setStartTime('')
                setEndTime('')
                setComment('')
            }}>Очистить
            </button>

        </div>
    );
}

export default App;
