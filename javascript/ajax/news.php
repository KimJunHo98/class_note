<?php
    //cURL 메서드를 사용해 교차도메인 데이터 불러오기
    $ch = curl_init();  //cURL을 초기화, 세션생성

    //curl_setopt(세션,옵션,값) cURL 세션의 옵션 설정
    curl_setopt($ch, CURLOT_SSL_VERIFYPEER, false); //SSL인증서검사여부
    curl_setopt($ch, CURLOT_RETRUNTRANSFER, true); //결과값을 받을것인지 여부
    curl_setopt($ch, CURLOT_HEADER, 0); //헤더정보출력여부, 0: false
    curl_setopt($ch, CURLOT_URL, "https://www.chosun.com/arc/outboundfeeds/rss/category/entertainments/?outputType=xml"); //접속 URL 설정

    $url_source = curl_exec($ch); //curl_exec: cURL 세션실행
    
    echo $url_source;
?>  