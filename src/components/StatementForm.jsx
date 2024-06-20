import '../styles/StatementForm.scss'
import { useReducer, useRef, useContext } from 'react'
import { Formik, Field, Form } from 'formik';
import Button from "./Button";
import { DispatchContext, StatementContext } from '../App';

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                items: [...state.items, action.data]
            }
        case "DELETE":
            return {
                ...state,
                items: state.items.filter((item) => item.itemIdRef !== action.id)
            };
        default:
            return state;
    }
};

const StatementForm = () => {
    const dataList = useContext(StatementContext)
    const { onCreate } = useContext(DispatchContext)

    const idRef = useRef(dataList.length);
    const itemIdRef = useRef(0)
    const initialData = {
        id: idRef.current,
        registrationNumber: '',
        companyName: '',
        representativeName: '',
        businessType: '',
        category: '',
        address: '',
        createDate: '',
        name: '',
        items: [
            {
                itemIdRef: itemIdRef.current,
                itemName: '',
                standard: '',
                quantity: '',
                unitPrice: '',
                price: '',
                tax: '',
            }
        ]
    };

    const [data, dispatch] = useReducer(reducer, initialData);

    const addRow = (values, setFieldValue) => {
        const newItem = {
            itemIdRef: itemIdRef.current++,
            itemName: '',
            standard: '',
            quantity: '',
            unitPrice: '',
            price: '',
            tax: '',
        };
        const updatedItems = [...values.items, newItem];
        setFieldValue('items', updatedItems);
    };

    const deleteRow = (id, values, setFieldValue) => {
        if (values.items.length > 1) {
            const updatedItems = values.items.filter(item => item.itemIdRef !== id);
            setFieldValue('items', updatedItems);
        }
    }

    return (
        <div className="StatementForm">
            <Formik
                initialValues={data}
                enableReinitialize={true}
                onSubmit={async (values) => {
                    await onCreate(values);
                }}
            >
                {({ values, setFieldValue }) => (
                    <Form className='Form'>
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
                                            <td><Field id="createDate" name="createDate" placeholder="0000-00-00" type='date' /></td>
                                            <td><Field id="name" name="name" placeholder="OOO 귀하" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='section3'>
                                <Button type={"button"} content={'Upload Signature'} action={'upload'} />
                            </div>
                        </div>
                        <div className='section section4'>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th><label htmlFor="itemName">품목</label></th>
                                        <th><label htmlFor="standard">규격</label></th>
                                        <th><label htmlFor="quantity">수량</label></th>
                                        <th><label htmlFor="unitPrice">단가</label></th>
                                        <th><label htmlFor="price">공급가액</label></th>
                                        <th><label htmlFor="tax">세액</label></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {values.items.map((item, index) => (
                                        <tr key={item.itemIdRef}>
                                            <td><Button type={"button"} content={"-"} action={'Delete'} onClick={() => deleteRow(item.itemIdRef, values, setFieldValue)} /></td>
                                            <td><Field name={`items[${index}].itemName`} placeholder="제품명" /></td>
                                            <td><Field name={`items[${index}].standard`} placeholder="규격" /></td>
                                            <td><Field name={`items[${index}].quantity`} placeholder="1ea" /></td>
                                            <td><Field name={`items[${index}].unitPrice`} placeholder="70,000" /></td>
                                            <td><Field name={`items[${index}].price`} placeholder="수량 * 단가" /></td>
                                            <td><Field name={`items[${index}].tax`} placeholder="공급가액 * 10%" /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Button type={"button"} content={"add + "} action={'add'} onClick={() => addRow(values, setFieldValue)} />
                        </div>

                        <div className='btnSection'>
                            <Button type={"submit"} content={'Temporary Save'} action={'temp_save'} />
                            <Button type={"button"} content={'Download JPG'} action={'download'} />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default StatementForm;
