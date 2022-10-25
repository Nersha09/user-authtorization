import { createSlice } from "@reduxjs/toolkit"

// Глобальное состояние однотипных этапов регистрации
const initialState = {
    signUp: [
        {value: '', name:'Логин', type: 'text', required: true},
        {value: '', name:'Почта', type: 'email', required: true},
        {value: '', name:'Пароль', type: 'password', required: true},
        {value: '', name:'Повторите пароль', type: 'password', required: true},
    ],
    location: [
        {value: '', name: ' Страна ', type: 'text', required: false},
        {value: '', name: ' Город ', type: 'text', required: false},
        {value: '', name: 'Улица', type: 'text', required: false},
        {value: '', name: 'Дом', type: 'text', required: false},
    ],
};

const stepSlice = createSlice({
    name: 'regSteps',
    initialState,
    reducers: {
        setSignUp: (state, action) => {
            state.signUp = action.payload
        },
        setLocation: (state, action) => {
            state.location = action.payload
        }
    }
});

export const {setSignUp, setLocation} = stepSlice.actions;
export default stepSlice.reducer;

 