import '../styles/Statement.scss'
import {  useReducer, useRef, useEffect } from 'react'
import { Formik, Field, Form } from 'formik';
import Button from "./Button";
import { DispatchContext } from '../App';
import { StatementContext } from '../App'
import { useContext } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.data];
        case "DELETE":
            return state.filter((item) => item.id !== action.data.id);
        default:
            return state;
    }
};



const Statement = () => {
    const dataList = useContext(StatementContext)
    const onCreate = useContext(DispatchContext)


    const idRef = useRef(0);
    const initialData = [
        {   id: idRef.current++,
            itemName: '',
            standard: '',
            quantity: '',
            unitPrice: '',
            price: '',
            tax: '', },
    ];

    const [data, dispatch] = useReducer(reducer, initialData);
    

    const addRow = () => {
        console.log("!")
        dispatch({
            type: "ADD",
            data: {
                id: idRef.current++,
                itemName: '',
                standard: '',
                quantity: '',
                unitPrice: '',
                price: '',
                tax: '',
            }
        });
    };

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div className="Statement">
            <Formik
                initialValues={{
                    registrationNumber: '',
                    companyName: '',
                    representativeName: '',
                    businessType: '',
                    category: '',
                    address: '',
                    createDate: '',
                    name: '',
                    itemName: '',
                    standard: '',
                    quantity: '',
                    unitPrice: '',
                    price: '',
                    tax: '',
                    items: data,
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));

                    console.log(values)
                }}
            >
                {({ values, setFieldValue }) => (
                    <Form className='Form'>
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
                                        <td><Field id="registrationNumber" name="registrationNumber" placeholder="사업자 번호" /></td>
                                        <td><Field id="companyName" name="companyName" placeholder="(주)OO산업" /></td>
                                        <td><Field id="representativeName" name="representativeName" placeholder="홍길동" /></td>
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
                                        <td><Field id="businessType" name="businessType" placeholder="토목" /></td>
                                        <td><Field id="category" name="category" placeholder="철근콘크리트" /></td>
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
                                        <td><Field id="address" name="address" placeholder="주소를 입력하세요" size="72" /></td>
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
                                        <td><Field id="createDate" name="createDate" placeholder="Jane" /></td>
                                        <td><Field id="name" name="name" placeholder="OOO 귀하" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='section section3'>
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
                                    {data.map((item, index) => (
                                        <tr key={item.id}>
                                            <td><Field name={`items[${index}].itemName`} placeholder="제품명" id="itemName"/></td>
                                            <td><Field name={`items[${index}].standard`} placeholder="규격" id="standard"/></td>
                                            <td><Field name={`items[${index}].quantity`} placeholder="1ea" id="quantity"/></td>
                                            <td><Field name={`items[${index}].unitPrice`} placeholder="70,000" id="unitPrice" /></td>
                                            <td><Field name={`items[${index}].price`} placeholder="수량 * 단가" id="price"/></td>
                                            <td><Field name={`items[${index}].tax`} placeholder="공급가액 * 10%" id="tax"/></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Button type={"button"} content={"줄 추가"} action='add' onClick={addRow} />
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Statement;
