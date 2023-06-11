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
import Map from "../pages/Map";


function Sidebars() {
    const [selectedValues, setSelectedValues] = useState({
        region: '== 지역 ==',
        duration: '== 기간 ==',
    });

    const [data, setData] = useState(null);

    const handleSelect = (key, value) => {
        setSelectedValues((prevValues) => ({
            ...prevValues,
            [key]: value,
        }));
    };

    const getData = () => {
        axios
            .get('http://127.0.0.1:8000/hello/ddd')
            .then(response => {
                const data = response.data;
                setData(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <>
            <h2>여행지 검색</h2>
            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 4 }}>
                    <span>여행 시작일 </span><Datepicker />
                </Col>
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <DropdownButton id="dropdown-basic-button" title={selectedValues.region} onSelect={(value) => handleSelect('region', value)}>
                        <Dropdown.Item href="#/action-1" eventKey="서울특별시">서울특별시</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" eventKey="경기도">경기도</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey="부산광역시">부산광역시</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey="부산광역시">부산광역시</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey="부산광역시">부산광역시</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey="부산광역시" >부산광역시</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey="부산광역시">부산광역시</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey="부산광역시">부산광역시</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey="부산광역시">부산광역시</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey="부산광역시">부산광역시</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey="부산광역시">부산광역시</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey="부산광역시">부산광역시</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey="부산광역시">부산광역시</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey="부산광역시">부산광역시</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey="부산광역시">부산광역시</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey="부산광역시">부산광역시</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey="부산광역시">부산광역시</Dropdown.Item>
                    </DropdownButton>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <DropdownButton id="dropdown-basic-button" title={selectedValues.duration} onSelect={(value) => handleSelect('duration', value)}>
                        <Dropdown.Item href="#/action-1" eventKey="당일">당일</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" eventKey="2일">2일</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey="3일">3일</Dropdown.Item>
                        <Dropdown.Item href="#/action-4" eventKey="4일">4일</Dropdown.Item>
                        <Dropdown.Item href="#/action-5" eventKey="5일">5일</Dropdown.Item>
                        <Dropdown.Item href="#/action-6" eventKey="6일">6일</Dropdown.Item>
                        <Dropdown.Item href="#/action-7" eventKey="7일">7일</Dropdown.Item>
                    </DropdownButton>
                </Form.Group>
            </Row>
            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 4 }}>
                    <Button type="submit" onClick={getData}>Search</Button>
                </Col>
            </Form.Group>
            {data && <Map data={data} />}
        </>
    );
};

export default Sidebars;
