import './App.css'
import Home from './pages/Home'
import { useReducer,createContext, useRef } from 'react'


function reducer(state, action) {
    let nextState;

    switch (action.type) {
      case "CREATE":
        nextState = [action.data, ...state]
        break;
      default:
        return state
    }


}

export const StatementContext = createContext()
export const DispatchContext = createContext()


function App() {
  const idRef = useRef(1)
  const mokData = [
    {
    id : idRef.current++,
    title : '받는분',
    content : '금액'
    },
    {
    id : idRef.current++,
    title : 'mok2',
    content : '세부내용'
    },
    {
    id : idRef.current++,
    title : 'mok3',
    content : '세부내용'
    }
]

  const [data, dispatch] = useReducer(reducer, mokData)

  const onCreate = (createdDate, title, content) =>{
    dispatch({
      type : "CREATE",
      data : {
        id : idRef.current,
        createdDate,
        title,
        content
      }
    })
  }

  return (
    <>
    <StatementContext.Provider value={data}>
      <DispatchContext.Provider value={onCreate}>
        <Home />
      </DispatchContext.Provider>
    </StatementContext.Provider>
    </>
  )
}

export default App
