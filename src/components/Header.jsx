import "../styles/Header.scss"
import { Link } from "react-router-dom"

const Header =  ()=>{
    return (
        <div className="Header">
            <Link to={'/'}>
                <h1>거래명세표 생성기</h1>
                <p>간단하게 거래명세표를 작성해보세요</p>
            </Link>
        </div>
    )
}

export default Header