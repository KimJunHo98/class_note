$(function(){
    // $.ajax(): $.post $.get $.getJSON 을 합친것데이터를 서버에 전송/요청할수 있는 통합적인 메서드
    $.ajax({
        url: "./MOCK_DATA.json",
        dataType: "json",
        // 인자 data-> 'MOCK_DATA.json'이 참조됨 , 매개변수명은 맘대로
        success: function(data){
            if(data.length > 0){
                let tb = $("<table></table>");

                for(let i in data){
                    console.log(data[i]);
                    let $id = data[i].id,
                        $first_name = data[i].first_name,
                        $last_name = data[i].last_name,
                        $email = data[i].email,
                        $gender = data[i].gender,
                        row = $("<tr></tr>").append(
                            $("<td></td>").text($id),
                            $("<td></td>").text($first_name),
                            $("<td></td>").text($last_name),
                            $("<td></td>").text($email),
                            $("<td></td>").text($gender)
                        );
                        tb.append(row);    
                }
                $(".wrap").append(tb);
            }
        }, 
    }); // 객체로 표기
});