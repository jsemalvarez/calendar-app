import { types } from "../types/types"


export const eventAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
})

export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
})


export const eventClearActiveEvent = () => ({type: types.eventClearActiveEvent})

export const eventUpDated = (event) => ({
    type: types.eventUpDated,
    payload: event
})

export const eventDeleted= () => ({type: types.eventDeleted})