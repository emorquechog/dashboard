import React, {useState} from "react"
import {schedulerTimes, eventsData} from "../../../utilities/api"
import "./scheduler.css"
import Card from "../Card"
import {red, blue, green, yellow} from "../../../utilities/colors"

//single components responsibility
const Calendar = (props) => {
    return (
        <React.Fragment>
            <button onClick={() => props.onSetDay(props.currentDay === "Dec, 17th" ? "Dec, 18th" : "Dec, 17th")}>
                Change Day
            </button>
            <div className="calendar">
                {
                    props.currentDay
                }
            </div>
            {props.children}
        </React.Fragment>
    )
}
const ShiftContainer = (color, shiftLabel) => (
    <div className="info">
        <span>
            {shiftLabel}
        </span>
        <div style={{backgroundColor: color}}></div>
    </div>
)

const Scheduler = () => {
    const [currentDay, setDay] = useState("Dec, 17th");

    //single functions responsibility
    const fillCard = (data, shift, time) => {
        const findStart = data.shiftData.find(x => x.start === time)
        if (findStart && data.day === currentDay) {
            const now = findStart.start - 1;
            const then = findStart.end;
            const width = (then - now) * 55
            return <Card height={`${width}px`} margin={shift.resourceId === "r2" ? "48%" : undefined} bgColor={findStart.bgColor} {...shift}></Card>
        }
        return null
    }

    const getShifts = (shift, time) => {
        return shift.shifts.map((data) => {
            return fillCard(data, shift, time)
        })
    }
    const getEvent = (time) => {
        return eventsData.map((data) => {
            return getShifts(data, time)
        })


    }

    //create the shifts by array to avoid repeat html elements
    const shifts = [
        {
            label: "Shift A",
            color: red
        },
        {
            label: "Shift B",
            color: blue
        },
        {
            label: "Shift C",
            color: yellow
        },
        {
            label: "Shift D",
            color: green
        }
    ]
    return (
        <React.Fragment>
            <Calendar onSetDay={setDay} currentDay={currentDay}>
                <div className="scheduler">
                    {
                        schedulerTimes.availabilityOfCurrentWeek.map((data) => (
                            <div>
                                <span> {data.label}</span>
                                {(getEvent(data.value))}
                            </div>
                        ))
                    }
                </div>
            </Calendar>
            {shifts.map((data) => (
                ShiftContainer(data.color, data.label)
            ))}
        </React.Fragment>
    )
}



export default Scheduler
