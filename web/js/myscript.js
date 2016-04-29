function atrim(str) {
    return str.replace(/\s/g, '');
}
function blankcheck(el, msg) {
    if (el.value == "") {
        alert(msg + "¸¦(À») ÀÔ·ÂÇØÁÖ¼¼¿ä.");
        el.focus();
        return true;
    }
    if (el.value.length != atrim(el.value).length) {
        alert(msg + "¿¡´Â °ø¹éÀ» Çã¿ëÇÏÁö ¾Ê½À´Ï´Ù.");
        el.focus();
        return true;
    }
}
function doSubmit() {

    console.log("doSubmit");

    if (blankcheck(joinfrm.m_id, '¾ÆÀÌµð') || joinfrm.id_ch.value == false) {
        return;
    }

    if (blankcheck(joinfrm.m_pass, 'ºñ¹Ð¹øÈ£') || joinfrm.pass_ch.value == false) {
        return;
    }

    if (blankcheck(joinfrm.m_pass_ch, 'ºñ¹Ð¹øÈ£'))
        return;

    if (blankcheck(joinfrm.m_name, 'ÀÌ¸§'))
        return;

    if (blankcheck(joinfrm.m_date, '³¯ÀÚ'))
        return;

    if (blankcheck(joinfrm.m_tel1, 'ÀüÈ­'))
        return;
    if (blankcheck(joinfrm.m_tel2, 'ÀüÈ­'))
        return;
    if (blankcheck(joinfrm.m_tel3, 'ÀüÈ­'))
        return;
    joinfrm.m_tel.value = joinfrm.m_tel1.value + "-" + joinfrm.m_tel2.value + "-" + joinfrm.m_tel3.value;
    if (blankcheck(joinfrm.m_gender, '¼ºº°'))
        return;

    if (blankcheck(joinfrm.m_email, 'ÀÌ¸ÞÀÏ' || joinfrm.email_ch.value == false))
        return;
    joinfrm.submit();
}

$(document).ready(function () {
    var check_Eng = /[a-z]|[A-Z]/;
    var check_Num = /[0-9]/;
    var check_Num_Eng = /[0-9]|[a-z]|[A-Z]/;
    var check_kor = /([^°¡-ÆR¤¡-¤¾¤¿-¤Ó\x20])/i;
    var check_email = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    $("#m_id").change(function () {
        joinfrm.id_ch.value = false; //id_ch È÷µç°ª ÃÊ±âÈ­ ÈÄ °Ë»ç ½ÃÀÛ
        console.log('1. ' + joinfrm.id_ch.value);
        // alert('id°ª º¯°æ');
        var id = joinfrm.m_id.value;
        var id_flag = false;
        if (id.match(check_Num_Eng) == null || id.match(check_Eng) == null) {
            /*if(!check_kor.test(id)){*/
            $("#info_id1").css("color", "red");
            // alert('¿µ¹® ¶Ç´Â ¿µ¹®,¼ýÀÚ Á¶ÇÕÀ» »ç¿ëÇÏ¿©¾ß ÇÕ´Ï´Ù.');
            id_flag = true;
        } else { $("#info_id1").css("color", "blue"); }

        if (id.length < 5 || id.length > 13) {
            $("#info_id2").css("color", "red");
            id_flag = true;
        } else { $("#info_id2").css("color", "blue"); }
        if (id_flag) {
            joinfrm.m_id.focus();
            return;
        }
        joinfrm.id_ch.value = true;
        console.log('2. ' + joinfrm.id_ch.value);
    });

    $("#m_pass").change(function () {
        joinfrm.pass_ch.value = false;
        // joinfrm.m_pass_ch.value = ""; //ºñ¹Ð¹øÈ£ º¯°æ½Ã ºñ¹Ð¹øÈ£ È®ÀÎ Ä­ ÃÊ±âÈ­
        var pass = joinfrm.m_pass.value;
        // alert("Æ÷Ä¿½º ¾Æ¿ô  " + pass);
        var pass_flag = false;
        if (pass.match(check_Num_Eng) == null || pass.match(check_Num) == null || pass.match(check_Eng) == null) {
            // alert("ÆÐ½º¿öµå Àß¸øµÊ");
            $("#info_pass1").css("color", "red");
            pass_flag = true;
        } else { $("#info_pass1").css("color", "blue"); }
        if (pass.length < 8) {
            $("#info_pass2").css("color", "red");
            pass_flag = true;
        } else { $("#info_pass2").css("color", "blue"); }
        if (pass_flag) {
            joinfrm.m_pass.focus();
            return;
        }
        joinfrm.pass_ch.value = true;
        console.log(pass);

    });

    $("#m_pass_ch").change(function () {
        alert("¤¾¤·");
        joinfrm.pass_ch.value = false;
        if (joinfrm.m_pass_ch.value != joinfrm.m_pass.value) {
            alert("¤¾¤·");
            $("#pass_ch_notice").css("display", "block");
            joinfrm.m_pass_ch.focus();
            return;
        }
        $("#pass_ch_notice").css("display", "none");
        joinfrm.pass_ch.value = true;
    });

    $("#m_email").change(function () {
        joinfrm.email_ch.value = false;
        if (!joinfrm.m_email.value.match(check_email)) {
            $("#email_notice").css("display", "block");
            joinfrm.m_email.focus();
            return;
        }
        $("#email_notice").css("display", "none");
        joinfrm.email_ch.value = true;
    });
});