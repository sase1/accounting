import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    initalLanguage: true
}
export const translationSlice = createSlice({
    name: 'languageChangeHandler',
    initialState,
    reducers: {
        changeLanguage: (state) => {
            state.initalLanguage = !state.initalLanguage
        },
    },
})
// Action creators are generated for each case reducer function
export const { changeLanguage } = translationSlice.actions

export default translationSlice.reducer