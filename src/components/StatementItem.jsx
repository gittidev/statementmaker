import { useParams } from "react-router-dom"
import { useContext } from "react"
import { StatementContext } from "../App"

const StatementItem = () =>{
    const { id } = useParams();
    
    const dataList = useContext(StatementContext);
    
    const data = dataList.find(item => parseInt(item.id) === parseInt(id));
    
    if (!data) {
        return <div>No data found for ID: {id}</div>;
    }
    const totalPrice = data.items.reduce((total, item) => total + item.quantity * item.unitPrice, 0);

    return (
        <div>
            <h1>{id} Statement Item</h1>
          
                        <div className='section-wrapper'>
                            <div className='section section1'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th><label htmlFor="registrationNumber">등록번호</label></th>
                                            <th><label htmlFor="companyName">상호</label></th>
                                            <th><label htmlFor="representativeName">대표자명</label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{data.representativeName}</td>
                                            <td>{data.companyName}</td>
                                            <td>{data.representativeName}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table>
                                    <thead>
                                        <tr>
                                            <th><label htmlFor="businessType">업태</label></th>
                                            <th><label htmlFor="category">종목</label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{data.businessType}</td>
                                            <td>{data.category}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table>
                                    <thead>
                                        <tr>
                                            <th><label htmlFor="address">사업장주소</label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{data.address}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='section section2'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th><label htmlFor="createDate">작성일</label></th>
                                            <th><label htmlFor="name">받으시는 분</label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{data.category}</td>
                                            <td>{data.category}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
        
                        </div>
                        <div className='section section4'>
                            <table>
                                <thead>
                                    <tr>
                                        <th><label htmlFor="itemName">품목</label></th>
                                        <th><label htmlFor="standard">규격</label></th>
                                        <th><label htmlFor="quantity">수량</label></th>
                                        <th><label htmlFor="unitPrice">단가</label></th>
                                        <th><label htmlFor="price">공급가액</label></th>
                                        <th><label htmlFor="tax">세액</label></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.items && data.items.map((item, index) => (
                                        <tr key={item.itemIdRef}>
                                            <td>{item.itemName}</td>
                                            <td>{item.standard}</td>
                                            <td>{item.quantity} </td>
                                            <td>{item.unitPrice}</td>
                                            <td>{item.price}</td>
                                            <td>{item.tax}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
             
                        </div>

                        <div className='btnSection'>
                        </div>

        </div>
    );
};


export default StatementItem