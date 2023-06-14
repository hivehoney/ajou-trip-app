import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

function Map() {
    const data = useSelector((state) => state.data);
    const mapElement = useRef(null);

    useEffect(() => {
        const { naver } = window;
        if (!mapElement.current || !naver) return;

        // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
        const location = new naver.maps.LatLng(36, 126.9769);
        const mapOptions = {
            center: location,
            zoom: 8,
            zoomControl: false,
            zoomControlOptions: {
                position: naver.maps.Position.TOP_RIGHT,
            },
        };

        const map = new naver.maps.Map(mapElement.current, mapOptions);

        if (data) {
            // 데이터를 반복하면서 마커 생성 및 표시
            data.forEach((item) => {
                const {duration} = item;
                duration.forEach((event) => {
                    const {latitude, longitude, festivalName, addr, etc} = event;
                    const position = new naver.maps.LatLng(latitude, longitude);
                    const marker = new naver.maps.Marker({
                        position: position,
                        map: map
                    });

                    const infoWindowContent = `<div><h3>${festivalName}</h3><p>${addr}</p></div>`;
                    const infoWindow = new naver.maps.InfoWindow({
                        content: infoWindowContent,
                    });

                    naver.maps.Event.addListener(marker, 'click', () => {
                        map.panTo(marker.getPosition());
                        map.setZoom(15);
                        infoWindow.open(map, marker);
                    });
                });
            });
        }
    }, [data]);

    return ( <div ref={mapElement} style={{ minHeight: '1200px' }} /> );
}

export default Map;
