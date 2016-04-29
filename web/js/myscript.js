function atrim(str) {
    return str.replace(/\s/g, '');
}
function blankcheck(el, msg) {
    if (el.value == "") {
        alert(msg + "��(��) �Է����ּ���.");
        el.focus();
        return true;
    }
    if (el.value.length != atrim(el.value).length) {
        alert(msg + "���� ������ ������� �ʽ��ϴ�.");
        el.focus();
        return true;
    }
}
function doSubmit() {

    console.log("doSubmit");

    if (blankcheck(joinfrm.m_id, '���̵�') || joinfrm.id_ch.value == false) {
        return;
    }

    if (blankcheck(joinfrm.m_pass, '��й�ȣ') || joinfrm.pass_ch.value == false) {
        return;
    }

    if (blankcheck(joinfrm.m_pass_ch, '��й�ȣ'))
        return;

    if (blankcheck(joinfrm.m_name, '�̸�'))
        return;

    if (blankcheck(joinfrm.m_date, '����'))
        return;

    if (blankcheck(joinfrm.m_tel1, '��ȭ'))
        return;
    if (blankcheck(joinfrm.m_tel2, '��ȭ'))
        return;
    if (blankcheck(joinfrm.m_tel3, '��ȭ'))
        return;
    joinfrm.m_tel.value = joinfrm.m_tel1.value + "-" + joinfrm.m_tel2.value + "-" + joinfrm.m_tel3.value;
    if (blankcheck(joinfrm.m_gender, '����'))
        return;

    if (blankcheck(joinfrm.m_email, '�̸���' || joinfrm.email_ch.value == false))
        return;
    joinfrm.submit();
}

$(document).ready(function () {
    var check_Eng = /[a-z]|[A-Z]/;
    var check_Num = /[0-9]/;
    var check_Num_Eng = /[0-9]|[a-z]|[A-Z]/;
    var check_kor = /([^��-�R��-����-��\x20])/i;
    var check_email = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    $("#m_id").change(function () {
        joinfrm.id_ch.value = false; //id_ch ���簪 �ʱ�ȭ �� �˻� ����
        console.log('1. ' + joinfrm.id_ch.value);
        // alert('id�� ����');
        var id = joinfrm.m_id.value;
        var id_flag = false;
        if (id.match(check_Num_Eng) == null || id.match(check_Eng) == null) {
            /*if(!check_kor.test(id)){*/
            $("#info_id1").css("color", "red");
            // alert('���� �Ǵ� ����,���� ������ ����Ͽ��� �մϴ�.');
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
        // joinfrm.m_pass_ch.value = ""; //��й�ȣ ����� ��й�ȣ Ȯ�� ĭ �ʱ�ȭ
        var pass = joinfrm.m_pass.value;
        // alert("��Ŀ�� �ƿ�  " + pass);
        var pass_flag = false;
        if (pass.match(check_Num_Eng) == null || pass.match(check_Num) == null || pass.match(check_Eng) == null) {
            // alert("�н����� �߸���");
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
        alert("����");
        joinfrm.pass_ch.value = false;
        if (joinfrm.m_pass_ch.value != joinfrm.m_pass.value) {
            alert("����");
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