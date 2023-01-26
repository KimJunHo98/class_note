$(function(){
    $.ajax({
        url: "./news.php",
        dataType: "xml",
        success: function(data){
            let $items = $(data).find("item");
            console.log($items);
            
            if($items.length > 0){
                $items = $items.slice(0, 10); // [0]번부터 [9]번까지 10개 잘라줌

                let $ul = $("<ul />"); // <ul></ul>
            
                // $items.each(function(){})
                $.each($items, function(i,o){
                    let $tit = $(o).find("title").text(),
                        $link = $(o).find("link").text(),
                        $aTag = $("<a />"),
                        $li = $("<li />");

                        $aTag.attr({"href": $link, "target": "_blank"}); // 속성 설정
                        $aTag.text($tit);

                        $li.append($aTag);
                        $ul.append($li);
                })
                $(".wrap").append($ul);
            }
        },
    });
})