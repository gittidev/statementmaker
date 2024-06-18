import List from "./List"
import Statement from "./Statement"
import Button from "./Button"
import "../styles/Main.scss"
import { useRef } from "react"


const Main = () =>{

    return (
        <>
        <div className="Main">
            <div>
            <List />
            </div>
            <div>
            <Statement />
            </div>
            <div>
            <Button content={'Upload Signature'} action={'upload'}/>
            <Button content={'Temporary Save'} action={'temp_save'} />
            <Button content={'Download JPG'} action={'download'}/>
            </div>
        </div>
        </>
    )
}

export default Main