import React from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'

import { NavBar } from '../../ui/NavBar'
import { messages } from '../helpers/calendar-messages-es'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/es'

moment.locale('es')

const localizer = momentLocalizer(moment) // or globalizeLocalizer

const myEventsList = [{
    title: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa'
}]

export const CalendarScreen = () => {

    const eventStyleGetter = ( event, start, end, isSelected ) => {
        console.log(event, start, end, isSelected)
        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opcaity: 0.8,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    }

    return (
        <div className='calendar-screen'>
            <NavBar />

            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                messages={ messages }
                eventPropGetter={ eventStyleGetter }
            />
        </div>
    )
}
