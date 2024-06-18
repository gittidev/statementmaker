import "../styles/List.scss"
import ListItem from "./ListItem"
import Statement from "./Statement"
import { useContext, useState } from "react"
import { StatementContext } from "../App"
import { DispatchContext } from "../App"

const List = () => {
    const Statements = useContext(StatementContext)
    const {onCreate} =  useContext(DispatchContext)
    return(
        <div className="List">
            {Statements.map((item)=>{
                return <ListItem key={item.id} {...item} />;
            })}
        </div>
    )
}

export default List