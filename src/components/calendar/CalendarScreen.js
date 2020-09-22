import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'

import { NavBar } from '../ui/NavBar'
import { messages } from '../../helpers/calendar-messages-es'
import { CalendarEvent } from './CalendarEvent'
import { CalendarModal } from './CalendarModal'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/es'

import { uiOpenModal } from '../../actions/ui'
import { eventSetActive } from '../../actions/events'
import { AddNewFAB } from '../ui/AddNewFAB'

moment.locale('es')

const localizer = momentLocalizer(moment) // or globalizeLocalizer

const myEventsList = [{
    title: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: ' Comer torta',
    user: {
        _id:'123',
        name: 'Jose'
    }
}]

export const CalendarScreen = () => {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')

    const dispatch = useDispatch()

    const onDoubleClick = (e) => {       
        dispatch( uiOpenModal() )
    }

    const onSelectEvent = (e) => {
        dispatch( eventSetActive(e) )
        dispatch( uiOpenModal() )
    }

    const onViewChange = (e) => {       
        setLastView(e)
        localStorage.setItem('lastView', e)
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
                view={ lastView }
                components={{
                    event: CalendarEvent
                }}
            />

            <AddNewFAB />
            <CalendarModal />
        </div>
    )
}
