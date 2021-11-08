import { useState } from "react"
const SearchFlight = ({onSearch}) => {
    const [Flight,setFlight]=useState('')
    const [From,setFrom]=useState('')
    const [To,setTo]=useState('')
    const [Date,setDate]=useState('')
    const [DepartureTime,setDepartureTime]=useState('')
    const [ArrivalTime,setArrivalTime]=useState('')
    const [DepartureTerminal,setDepartureTerminal]=useState('')
    const [ArrivalTerminal,setArrivalTermina]=useState('')
    const [BusinessClassSeats,setBusinessClassSeats]=useState('')
    const [EconomyClassSeats,setEconomyClassSeats]=useState('')
    const [FirstClassSeats,setFirstClassSeats]=useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        // if (!Flight) {
        //     alert('Please add a Flight number')
        //     return
        //   }
        //   if (!From||!To||!Date||!DepartureTime||!ArrivalTime||!DepartureTerminal||!ArrivalTerminal) {
        //     alert('Please complete all inputs')
        //     return
        //   } 

        onSearch({Flight,From, To,Date,DepartureTime,ArrivalTime,DepartureTerminal,ArrivalTerminal,BusinessClassSeats,EconomyClassSeats,FirstClassSeats})
        
        // setFlight('')
        // setFrom('')
        // setTo('')
        // setDate('') 
        // setDepartureTime('')
        // setArrivalTime('')
        // setDepartureTerminal('')
        // setArrivalTermina('')
        // setBusinessClassSeats('')
        // setEconomyClassSeats('')
        // setFirstClassSeats('')
        //alert('Flight added')
        }

    return (
        <form className='' onSubmit={onSubmit}>
            <div className ='form-control.'>
                <label>Flight Number</label>
                <input type='text' placeholder='Fight Number' value={Flight}onChange={(e) => setFlight((e.target.value))}/> 
            </div>
            <div className ='form-control.'>
                <label>From</label>
                <input type='text' placeholder='From' value={From}onChange={(e) => setFrom(e.target.value)}/> 
            </div>
            <div className ='form-control.'>
                <label>To</label>
                <input type='text' placeholder='To' value={To}onChange={(e) => setTo(e.target.value)}/> 
            </div>
            <div className ='form-control.'>
                <label>Flight Date</label>
                <input type='date' placeholder='Fight Date' value={Date}onChange={(e) => setDate(e.target.value)}/> 
            </div>
            <div className ='form-control.'>
                <label>Departure Time</label>
                <input type='time' placeholder='Departure Time' value={DepartureTime}onChange={(e) => setDepartureTime(e.target.value)}/> 
            </div>
            <div className ='form-control.'>
                <label>Arrival Time</label>
                <input type='time' placeholder='Arrival Time' value={ArrivalTime}onChange={(e) => setArrivalTime(e.target.value)}/> 
            </div>
            <div className ='form-control.'>
                <label>Departure Terminal</label>
                <input type='text' placeholder='Departure Terminal' value={DepartureTerminal}onChange={(e) => setDepartureTerminal(Number(e.target.value))}/> 
            </div>
            <div className ='form-control.'>
                <label>Arrival Terminal</label>
                <input type='text' placeholder='Arrival Terminal' value={ArrivalTerminal}onChange={(e) => setArrivalTermina(Number(e.target.value))}/> 
            </div>
            <div className ='form-control.'>
                <label>Business Class Seats</label>
                <input type='text' placeholder='Business Class Seats' value={BusinessClassSeats}onChange={(e) => setBusinessClassSeats(Number(e.target.value))}/> 
            </div>
            <div className ='form-control.'>
                <label>Economy Class Seats</label>
                <input type='text' placeholder='Economy Class Seats' value={EconomyClassSeats}onChange={(e) => setEconomyClassSeats(Number(e.target.value))}/> 
            </div>
            <div className ='form-control.'>
                <label>First Class Seats</label>
                <input type='text' placeholder='First Class Seats' value={FirstClassSeats}onChange={(e) => setFirstClassSeats(Number(e.target.value))}/> 
            </div>

            <input type='submit' value='Search Flight'className='btn btn-block'/>
        </form>
    )
}

export default SearchFlight
