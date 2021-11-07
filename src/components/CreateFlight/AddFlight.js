import { useState } from "react"
const AddFlight = ({onAdd}) => {
    const [Flight,setFlight]=useState('')
    const [From,setFrom]=useState('')
    const [To,setTo]=useState('')
    const [Date,setDate]=useState('')
    const [DepartureTime,setDepartureTime]=useState('')
    const [ArrivalTime,setArrivalTime]=useState('')
    const [DepartureTerminal,setDepartureTerminal]=useState(0)
    const [ArrivalTerminal,setArrivalTermina]=useState(0)
    const [BusinessClassSeats,setBusinessClassSeats]=useState(0)
    const [EconomyClassSeats,setEconomyClassSeats]=useState(0)
    const [FirstClassSeats,setFirstClassSeats]=useState(0)

    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({Flight,From, To,Date,DepartureTime,ArrivalTime,DepartureTerminal,ArrivalTerminal,BusinessClassSeats,EconomyClassSeats,FirstClassSeats})
        
        setFlight('')
        setFrom('')
        setTo('')
        setDate('') 
        setDepartureTime('')
        setArrivalTime('')
        setDepartureTerminal(0)
        setArrivalTermina(0)
        setBusinessClassSeats(0)
        setEconomyClassSeats(0)
        setFirstClassSeats(0)
        }

    return (
        <form className='add=form' onSubmit={onSubmit}>
            <div className ='form-control'>
                <label>Flight</label>
                <input type='text' placeholder='Add ID' value={Flight}onChange={(e) => setFlight(Number(e.target.value))}/> 
            </div>
            <div className ='form-control'>
                <label>From</label>
                <input type='text' placeholder='Add From' value={From}onChange={(e) => setFrom(e.target.value)}/> 
            </div>
            <div className ='form-control'>
                <label>To</label>
                <input type='text' placeholder='Add To' value={To}onChange={(e) => setTo(e.target.value)}/> 
            </div>
            <div className ='form-control'>
                <label>Date</label>
                <input type='date' placeholder='Add Date' value={Date}onChange={(e) => setDate(e.target.value)}/> 
            </div>
            <div className ='form-control'>
                <label>Departure Time	</label>
                <input type='time' placeholder='Add Departure Time' value={DepartureTime}onChange={(e) => setDepartureTime(e.target.value)}/> 
            </div>
            <div className ='form-control'>
                <label>Arrival Time	</label>
                <input type='time' placeholder='Add Arrival Time' value={ArrivalTime}onChange={(e) => setArrivalTime(e.target.value)}/> 
            </div>
            <div className ='form-control'>
                <label>Departure Terminal</label>
                <input type='number' placeholder='Add Departure Terminal' value={DepartureTerminal}onChange={(e) => setDepartureTerminal(parseInt(e.target.value,10))}/> 
            </div>
            <div className ='form-control'>
                <label>Arrival Terminal</label>
                <input type='number' placeholder='Add Arrival Terminal' value={ArrivalTerminal}onChange={(e) => setArrivalTermina(parseInt(e.target.value,10))}/> 
            </div>
            <div className ='form-control'>
                <label>Business Class Seats</label>
                <input type='number' placeholder='Add Business Class Seats' value={BusinessClassSeats}onChange={(e) => setBusinessClassSeats(parseInt(e.target.value,10))}/> 
            </div>
            <div className ='form-control'>
                <label>Economy Class Seats</label>
                <input type='number' placeholder='Add Economy Class Seats' value={EconomyClassSeats}onChange={(e) => setEconomyClassSeats(parseInt(e.target.value,10))}/> 
            </div>
            <div className ='form-control'>
                <label>First Class Seats</label>
                <input type='number' placeholder='Add First Class Seats' value={FirstClassSeats}onChange={(e) => setFirstClassSeats(parseInt(e.target.value,10))}/> 
            </div>

            <input type='submit' value='Save Flight'className='btn btn-block'/>
        </form>
    )
}

export default AddFlight
