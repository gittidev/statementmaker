import './App.css';
import Home from './pages/Home';
import { useReducer, createContext, useRef } from 'react';

function reducer(state, action) {
    let nextState;

    switch (action.type) {
        case "CREATE":
            nextState = [...state, action.data];
            break;
        case "DELETE":
            nextState = state.filter(item => item.id !== action.data);
            break;
        case "UPDATE":
            nextState = state.map(item =>
                item.id === action.data.id ? { ...item, ...action.data } : item
            );
            break;
        default:
            return state;
    }
    return nextState;
}

export const StatementContext = createContext();
export const DispatchContext = createContext();

function App() {
    const idRef = useRef(1);

    const [data, dispatch] = useReducer(reducer, []);

    const onCreate = (newData) => {
        dispatch({
            type: "CREATE",
            data: { ...newData, id: idRef.current++ }
        });
    };

    const onDelete = (id) => {
        dispatch({
            type: "DELETE",
            data: id
        });
    };

    const onUpdate = (updatedData) => {
        dispatch({
            type: "UPDATE",
            data: updatedData
        });
    };

    return (
        <StatementContext.Provider value={data}>
            <DispatchContext.Provider value={{ onCreate, onDelete, onUpdate }}>
                <Home />
            </DispatchContext.Provider>
        </StatementContext.Provider>
    );
}

export default App;
