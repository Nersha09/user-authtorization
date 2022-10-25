import { configureStore } from "@reduxjs/toolkit"
import stepReduser from './slices/stepSlice'
import phoneConfirmReduser from './slices/phoneCofirmSlice'

export const store = configureStore({
    reducer: {
        steps: stepReduser,
        phoneConfirm: phoneConfirmReduser,
    }
});