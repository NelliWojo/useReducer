import { useReducer } from "react";

interface State {
  count: number;
  error: string | null;
}

interface Action {
  type: "increment" | "decrement";
}

function reducer(state: State, action: Action) {
  const { type } = action;

  switch (type) {
    case "increment": {
      return { ...state, count: state.count + 1 }; // make a copy of a state & overwrire this state with a new count value
    }
    case "decrement": {
      return { ...state, count: state.count - 1 };
    }
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    // function
    count: 0, // initial state
    error: null,
  });

  return (
    <div>
      <div>Count: {state.count}</div>
      {state.error && <div>{state.error}</div>}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}
