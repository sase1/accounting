import { configureStore } from '@reduxjs/toolkit'
import translationReducer from './translation'

export const store = configureStore({
    reducer: {
        languageChangeHandler: translationReducer,
    },
})
