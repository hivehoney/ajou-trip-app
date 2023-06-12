import React, { useEffect, useRef } from 'react';
import axios from "axios";

function Map(props) {
    const { data } = props;
    const mapElement = useRef(null);

    console.log("MAP")
    /*axios({
        //request
        method: "get",
        url: "http://127.0.0.1:8000/hello/sss",
        responseType: "type"
    }).then(function (response) {
        console.log("sss"+response)
    });*/

    useEffect(() => {
        const { naver } = window;
        if (!mapElement.current || !naver) return;

        // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
        const location = new naver.maps.LatLng(36, 126.9769);
        const mapOptions = {
            center: location,
            zoom: 8,
            zoomControl: true,
            zoomControlOptions: {
                position: naver.maps.Position.TOP_RIGHT,
            },
        };

        const map = new naver.maps.Map(mapElement.current, mapOptions);

        var markers = [
            { position: new naver.maps.LatLng(37.283002350000004, 127.04537818934068), info: 'Marker 1 Info' },
            { position: new naver.maps.LatLng(37.5675, 126.9790), info: 'Marker 2 Info' },
            { position: new naver.maps.LatLng(37.5685, 126.9800), info: 'Marker 3 Info' },
            // 추가적인 마커 정보들...
        ];


        // 마커 생성 및 지도에 표시
        for (var i = 0; i < markers.length; i++) {
            var marker = new naver.maps.Marker({
                position: markers[i].position,
                map: map
            });

            // 팝업 생성 및 마커 클릭 시 팝업 표시
            var infoWindow = new naver.maps.InfoWindow({
                content: markers[i].info,
            });

            // 마커 클릭 이벤트 핸들러
            naver.maps.Event.addListener(marker, 'click', (function (infoWindow, marker) {
                return function () {
                    // 마커 위치로 이동하면서 확대
                    map.panTo(marker.getPosition());
                    map.setZoom(15);

                    // 팝업 표시
                    infoWindow.open(map, marker);
                };
            })(infoWindow, marker));
        }
    }, []);


    return (
            <div ref={mapElement} style={{ minHeight: '1200px' }} />
        );
}

export default Map;
