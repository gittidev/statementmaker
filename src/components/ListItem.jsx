import '../styles/ListItem.scss'
import { Link  } from 'react-router-dom'
const ListItem = ({id, title, content}) => {
    return(
        <div className="ListItem">
        <Link to={`/item/${id}`}>
            <p>
                {title}
            </p>
            <p>
                {content}
            </p>            
        </Link>
        </div>
    )
}

export default ListItem