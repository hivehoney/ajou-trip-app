import React, {useEffect} from 'react';
import axios from "axios";
import {connect} from "react-redux";
function TableList({ data }) {
    const downloadFile = () => {
        axios
            .get('http://localhost:8000/download/map', {
                responseType: 'blob',
                params: {
                    filename: 'holidayTrip',
                },
            })
            .then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data], { type: response.headers['content-type'] }));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'holidayTrip.html');
                document.body.appendChild(link);
                link.click();
            })
            .catch((error) => {
                // 에러 처리
            });
    };

    useEffect(() => {
        console.log('TableList 출력', data);
    }, [data]);

    return (
        <>
            {data &&
                data.map((item, index) => (
                    <div id={`day-${Number(index + 1)}`} key={Number(index + 1)}>
                        <div className="card mb-3">
                            <h3 className="card-header">
                                <p className="text-danger" style={{ float: 'left' }}>
                                    {`${item.title.slice(0, 4)}년 ${item.title.slice(4, 6)}월 ${item.title.slice(6, 8)}일`}
                                </p>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    style={{ float: 'right' }}
                                    onClick={() => downloadFile()}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-download"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                                        ></path>
                                        <path
                                            d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                                        ></path>
                                    </svg>
                                </button>
                            </h3>
                        {item.duration &&
                            item.duration.map((durationItem, durationIndex) => (
                            <div id={`fstvl-${durationIndex}`} key={durationIndex}>
                                <div className="card-body">
                                    <h5 className="card-title">{durationItem.festivalName}</h5>
                                    <h6 className="card-subtitle text-muted">{durationItem.addr}</h6>
                                </div>

                                {/*<svg xmlns="http://www.w3.org/2000/svg" className="d-block user-select-none" width="100%" height="200"*/}
                                {/*     aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice"*/}
                                {/*     viewBox="0 0 318 180" style={{fontSize:1.125+"rem", textAnchor:"middle"}}>*/}
                                {/*    <rect width="100%" height="100%" fill="#868e96"></rect>*/}
                                {/*    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>*/}
                                {/*</svg>*/}

                                <div className="card-body">
                                    <p className="card-text">{durationItem.etc}</p>
                                </div>
                                {/*<ul className="list-group list-group-flush">*/}
                                {/*    <li className="list-group-item">{durationItem.location}</li>*/}
                                {/*</ul>*/}

                                <div className="card-footer text-muted">
                                    {/*<a href="#" className="card-link">위치 검색</a>*/}
                                    {/*<a href="#" className="card-link">Another link</a>*/}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

const mapStateToProps = (state) => ({
    data: state.data,
});

export default connect(mapStateToProps)(TableList);
