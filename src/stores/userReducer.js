import { createSlice } from "@reduxjs/toolkit"; 

// tutte le cose che tenevamo separate sono tutte comprese in questa slice
export const userSlice = createSlice({
    name: 'user',
    // ogni fetta gestita separatamente ed ha il proprio valore
    initialState: {
        isLogged: false
    },
    // i reducer sono le funzione che andiamo a chiamare
    reducers: {
        changeLog: (state) => {
            state.isLogged = !state.isLogged
        }
    },
})

// esportiamo le varie azioni
export const {changeLog} = userSlice.actions
export const userReducer = userSlice.reducer
