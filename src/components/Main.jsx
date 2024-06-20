import List from "./List"
import StatementForm from "./StatementForm"
import StatementItem from "./StatementItem"
import Button from "./Button"
import "../styles/Main.scss"
import { useRef } from "react"
import { Route, Routes } from "react-router-dom"


const Main = () =>{

    return (
        <>
        <div className="Main">
            <div>
            <List />
            </div>
            <div className="MainSection">

            <Routes>
                <Route path='/' element={<StatementForm />}/>
                <Route path='/Statement/' element={<StatementForm />}/>

                <Route path='/Statement/:id' element={<StatementItem/>}/>
                <Route path='/create' element={<StatementForm />}/>
            </Routes>
                
            </div>
        </div>
        </>
    )
}

export default Main