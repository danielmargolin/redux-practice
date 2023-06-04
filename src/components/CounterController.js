
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../actions/counter.action";

import Counter from "./Counter";

const CounterController =() => {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter);
    return (
        <>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <button disabled={counter === 0 } onClick={() => dispatch(decrement(2))}>-2</button>
                <Counter/>
                <button onClick={() => dispatch(increment(2))}>+2</button>
            </div>
            <button onClick={() => dispatch(reset())}>reset</button>
        </>
    );
}

export default CounterController