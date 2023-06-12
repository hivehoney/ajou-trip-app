import React from 'react';
function TableList(props) {
    const { data } = props;
    console.log("TableList 입니다.", data)
    console.log(data)

    return (
        <>
            {data.map((item, index) => (
                <div id={`day-${index}`} key={index}>
                    <div className="card mb-3">
                        <h3 className="card-header"><p className="text-danger">{index} Days</p></h3>
                        {item.duration.map((durationItem, durationIndex) => (
                            <div id={`fstvl-${durationIndex}`} key={durationIndex}>
                                <div className="card-body">
                                    <h5 className="card-title">{durationItem.festivalName}</h5>
                                    <h6 className="card-subtitle text-muted">{durationItem.location}</h6>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="d-block user-select-none" width="100%" height="200"
                                     aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice"
                                     viewBox="0 0 318 180" style={{fontSize:1.125+"rem", textAnchor:"middle"}}>
                                    <rect width="100%" height="100%" fill="#868e96"></rect>
                                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
                                </svg>
                                <div className="card-body">
                                    <p className="card-text">{durationItem.etc}</p>
                                </div>
                                {/*<ul className="list-group list-group-flush">*/}
                                {/*    <li className="list-group-item">{durationItem.location}</li>*/}
                                {/*</ul>*/}
                                <div className="card-footer text-muted">
                                    <a href="#" className="card-link">위치 검색</a>
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

export default TableList;
