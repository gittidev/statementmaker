import '../styles/ListItem.scss';
import { Link } from 'react-router-dom';


const ListItem = ({ id, companyName, items }) => {
    let totalprice = 0

    return (
        <div className="ListItem">
            <Link to={`/statement/${id}`}>
                <div>
                    <p>{id}번 거래명세표</p>
                    <p>{companyName}</p>
                    <ul>
                        {items.forEach((item, index) => (
                            totalprice+=item.unitPrice
                    
                        ))}
                    </ul>
                </div>
            </Link>
        </div>
    );
};

export default ListItem;
