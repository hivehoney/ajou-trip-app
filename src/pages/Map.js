import React, { useEffect, useRef } from 'react';
import axios from "axios";
function Map() {
    const mapElement = useRef(null);

    axios({
        //request
        method: "get",
        url: "http://127.0.0.1:8000/hello/ddd",
        responseType: "type"
    }).then(function (response) {
        console.log(response)
    });

    useEffect(() => {
        const { naver } = window;
        if (!mapElement.current || !naver) return;

        // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
        const location = new naver.maps.LatLng(36, 126.9769);
        const mapOptions: naver.maps.MapOptions = {
            center: location,
            zoom: 8,
            zoomControl: true,
            zoomControlOptions: {
                position: naver.maps.Position.TOP_RIGHT,
            },
        };
        const map = new naver.maps.Map(mapElement.current, mapOptions);
        // new naver.maps.Marker({
        //     position: location,
        //     map,
        // });

    }, []);

    return <div ref={mapElement} style={{ minHeight: '1000px' }} />;
}

export default Map;
