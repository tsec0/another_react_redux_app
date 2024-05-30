import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from '../redux-store/features/counter/counterSlice';

const Counter = () => {
    // Read the data from the "store"
    const count = useSelector( (state) => state.counter.value );

    // Changing the data by sending "actions" to the store.
    const dispatch = useDispatch();

    return (
        <>
            <div> Counter: {count} </div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </>
    );
}

export default Counter;