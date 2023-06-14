import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from "axios";
import Datepicker from "./Datepicker";
import '../assets/css/bootstrap.min.css';
import TableList from "./TableList";
import {addDays, format} from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { setData } from '../reducers/store';


// 알림 컴포넌트
const AlertMessage = ({ message, onClose }) => {
    return (
        <div className="alert alert-dismissible alert-warning">
            <button type="button" className="btn-close" onClick={onClose}></button>
            <strong>Warning!</strong> {message}
        </div>
    );
};

function Sidebars() {
    const dispatch = useDispatch();
    const tableData = useSelector((state) => state.data);

    const [selectedValues, setSelectedValues] = useState({
        region: '지역',
        duration: '기간',
    });

    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleSelect = (key, value) => {
        setSelectedValues((prevValues) => ({
            ...prevValues,
            [key]: value,
        }));
    };

    const handleStartDateChange = (date) => {
        setSelectedStartDate(date);
    };

    const getData = (start) => {
        console.log("side")

        if (!start || !selectedValues.region || !selectedValues.duration) {
            setShowAlert(true); // 데이터가 비어있을 때 알림 표시
            setAlertMessage('Please fill in all the fields.');
            return;
        }
        setShowAlert(false);

        let startDate = new Date(start);
        if (startDate instanceof Date && !isNaN(startDate)) {
            startDate = format(startDate, 'yyyy-MM-dd');
        }

        const endDate = format(addDays(start, 30), 'yyyy-MM-dd');
        const range = selectedValues.duration.charAt(0);

        axios
        .get('http://127.0.0.1:8000/recomand/trip', {
            params: {
                id: selectedValues.region,
                start_date: startDate,
                end_date: endDate,
                range: range
            }
        })
            .then(response => {
                dispatch(setData(response.data));
                // 응답 처리
            })
            .catch(error => {
                // 에러 처리
            });

    };

    useEffect(() => {
        if (tableData) {
            // 데이터가 있는 경우 Home 컴포넌트를 출력합니다.
            console.log("TableList 출력", tableData);
        }
    }, [tableData]);

    return (
        <>
            <div className="left-sidebar">
                <div className="sidebar-content">
                   {/* <ol className="breadcrumb" style={{margin: 10+'px'}}>
                    <ol className="breadcrumb" style={{margin: 10+'px'}}>
                        <li className="breadcrumb-item active"><font size={4}>여행 계획</font></li>
                    </ol>*/}
                    <div className="card border-primary mb-3" style={{maxWidth: 40+'rem', margin: 10+'px',
                        /*backgroundColor: "#transparent"*/}}>
                        <ol className="breadcrumb" style={{margin: 10+'px'}}>
                            <li className="breadcrumb-item active"><font size={4}>여행 계획</font></li>
                        </ol>
                        <div className="card-body">
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <DropdownButton id="dropdown-basic-button" title={selectedValues.region} onSelect={(value) => handleSelect('region', value)} style={{float: "left", width: 200+'px'}}>
                                        <Dropdown.Item href="#/action-1" eventKey="서울특별시">서울특별시</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" eventKey="경기도">경기도</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" eventKey="부산광역시">부산광역시</Dropdown.Item>
                                    </DropdownButton>
                                    <DropdownButton id="dropdown-basic-button" title={selectedValues.duration} onSelect={(value) => handleSelect('duration', value)} style={{float: "right"}}>
                                        <Dropdown.Item id={1} eventKey="당일">당일</Dropdown.Item>
                                        <Dropdown.Item id={2} eventKey="1박 2일">1박 2일</Dropdown.Item>
                                        <Dropdown.Item id={3} eventKey="2박 3일">2박 3일</Dropdown.Item>
                                        <Dropdown.Item id={4} eventKey="3박 4일">3박 4일</Dropdown.Item>
                                        <Dropdown.Item id={5} eventKey="4박 5일">4박 5일</Dropdown.Item>
                                    </DropdownButton>
                                </Form.Group>
                            </Row>

                            <Form.Group as={Row} className="mb-3">
                                <div className="d-flex justify-content-between">
                                    <div style={{ display: "flex", alignItems: "center"}}>
                                        <strong>여행 일정</strong>
                                    </div>
                                    <div style={{ alignItems: "center"}}>
                                        <Datepicker handleStartDateChange={handleStartDateChange} />
                                    </div>
                                </div>
                            </Form.Group>
                        </div>
                            <Button type="submit" onClick={() => getData(selectedStartDate)}>Search</Button>
                    </div>
                </div>
                {tableData && <TableList data={tableData} />}
            </div>
        </>
    );
};

export default Sidebars;
