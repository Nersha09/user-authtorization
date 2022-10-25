import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    phoneConfirm: {
        phone: '',
        password: ''
    }
};

const phoneConfirmSlice = createSlice({
    name: 'phoneConfirm',
    initialState,
    reducers: {
        setPhoneConfirm: (state, action) => {
            state.phoneConfirm = action.payload
            // state.phone = action.payload.phone
            // state.password = action.payload.password

        }
    }
});

export const {setPhoneConfirm} = phoneConfirmSlice.actions;
export default phoneConfirmSlice.reducer;

 