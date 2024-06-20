import "../styles/List.scss";
import ListItem from "./ListItem";
import { useContext } from "react";
import { StatementContext } from "../App";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const List = () => {
    const data = useContext(StatementContext) || [];

    const nav = useNavigate();

    const onClickButton = () => {
        nav('/create');
    };

    return (
        <div className="List">
            <Button type={"button"} content={'add +'} action={'add'} onClick={onClickButton} />

            {data.length > 0 ? (
                data.map((item) => (
                    <ListItem key={item.id} {...item} />
                ))
            ) : (
                <p>No items available</p>
            )}
        </div>
    );
};

export default List;
