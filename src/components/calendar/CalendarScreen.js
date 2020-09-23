import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'

import { NavBar } from '../ui/NavBar'
import { messages } from '../../helpers/calendar-messages-es'
import { CalendarEvent } from './CalendarEvent'
import { CalendarModal } from './CalendarModal'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/es'

import { uiOpenModal } from '../../actions/ui'
import { eventClearActiveEvent, eventSetActive } from '../../actions/events'
import { AddNewFAB } from '../ui/AddNewFAB'
import { DeleteEventFAB } from '../ui/DeleteEventFAB'

moment.locale('es')

const localizer = momentLocalizer(moment) // or globalizeLocalizer

// const myEventsList = [{
//     title: 'Cumpleaños del jefe',
//     start: moment().toDate(),
//     end: moment().add(2, 'hours').toDate(),
//     bgcolor: '#fafafa',
//     notes: ' Comer torta',
//     user: {
//         _id:'123',
//         name: 'Jose'
//     }
// }]

export const CalendarScreen = () => {

    const dispatch = useDispatch()
    const { events:myEventsList, activeEvent } = useSelector(state => state.calendar)
    
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')    

    const onDoubleClick = (e) => {       
        dispatch( uiOpenModal() )
    }

    const onSelectEvent = (e) => {
        dispatch( eventSetActive(e) )
    }

    const onViewChange = (e) => {       
        setLastView(e)
        localStorage.setItem('lastView', e)
    }

    const onSelectSlot = (e) => {
        // podemos seleccionar otra cuadricula del calendario
        dispatch( eventClearActiveEvent() )
    }

    const eventStyleGetter = ( event, start, end, isSelected ) => {
       
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
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelectEvent }
                onView={ onViewChange }
                onSelectSlot={ onSelectSlot }
                selectable={ true }
                view={ lastView }
                components={{
                    event: CalendarEvent
                }}
            />

            <AddNewFAB />
            {
                activeEvent && <DeleteEventFAB />
            }            

            <CalendarModal />
        </div>
    )
}
