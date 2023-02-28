// 즉시 실행 함수
(function(){
    const stickyContainer = document.querySelectorAll('.sticky_container');

    let g_containerInViewport;

    //함수의 호출
    init();
    function init(){
        setStickyContainersSize();
        bindEvents();
    }

    //휠이벤트 바인드
    function bindEvents(){
        window.addEventListener("wheel", wheelHandler);
    }

    //sticky요소가 화면에 보이고 있는지를 확인 할 함수
    function isElementInViewport(el){
        /* Rect 클래스는 4개의 가장자리(left, top, right, bottom)로 구성 
            left: 사각형의 왼쪽 기준이 되는 x좌표
            top: 사각형의 위쪽 기준이 되는 y좌표
            right: 사각형의 오른쪽 기준이 되는 x좌표
            bottom: 사각형의 아래쪽 기준이 되는 y좌표
        */
        const rect = el.getBoundingClientRect(); 

        // console.log(document.documentElement);
        // 화면밖에 있는 요소가 진입을 시작하면 true
        return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
    }
    
    //sticky요소의 크기 확인
    function setStickyContainersSize(){
        stickyContainer.forEach((el) => {
            // scrollWidth=숨겨진 영역까지 포함한 크기를 리턴
            // StickyContainer의 높이를 각각 스크롤 너비와 같게 함
            const setStickyContainerHeight = el.querySelector("main").scrollWidth;

            el.setAttribute('style','height:'+setStickyContainerHeight+'px');
        });
    }

    //휠 이벤트 제어
    function wheelHandler(e){
        // sticky요소의 화면 진입여부를 확인
        // 반환값을 순환이 가능한 객체로 만들어 새배열로 저장(Array.from())
        /* querySelector, querySelectorAll-> nodeList 으로 반환
        getElementsbyClassName,getElementbyId-> HTMLCollections으로 반환 */
        const containerInViewport = Array.from(stickyContainer).filter(function(cnt){
            return isElementInViewport(cnt);
        })[0];

        if(!containerInViewport){
            return;
        }

        // StickyContainer의 상단좌표를 스크롤보다 작은지 비교
        let isPlaceHolderBelowTop = containerInViewport.offsetTop < document.documentElement.scrollTop;
        // StickyContainer의 탑과 높이를 합하고(길이) 스크롤양보다 큰지 비교
        let isPlaceHolderBelowBottom = containerInViewport.offsetTop + containerInViewport.offsetHeight > document.documentElement.scrollTop;
        let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom; //true 는 보이는 상태

        console.log(containerInViewport, containerInViewport.offsetTop, isPlaceHolderBelowBottom);

        if (g_canScrollHorizontally) {
            containerInViewport.querySelector('main').scrollLeft += e.deltaY;
        }
    }
})();
