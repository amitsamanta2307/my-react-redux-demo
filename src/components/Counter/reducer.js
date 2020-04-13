import { DECREMENT, INCREMENT } from './constants';

const initialState = {
    counter: 0
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                counter: state.counter + 1
            };

        case DECREMENT:
            return {
                counter: state.counter > 0 ? state.counter - 1 : state.counter
            };

        default:
            return state;
    }
}