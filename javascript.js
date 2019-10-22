function move() {
    window.location = 'login.html';
}
 function login() {
     let user = document.getElementById('user').value;
     let pass = document.getElementById('pass').value;
     let  result = new check();
     if( result.getcheck(user,pass)){
         alert("dang nhap thanh cong");
         window.location = 'index - Copy.html';
     }else{
         alert(" Hay nhap tai khoan.");
         window.location = 'login.html';
     }

 }
    function check() {
        let userok = ['admin', 'admin1', 'admin2', 'admin3'];
        let passok = ['123', '456', '789', '012'];
        this.getcheck = function (user,pass) {
            if(user == "" || pass == ""){;
                return  false;
            }else{
                for(let i = 0; i < passok.length; i++ ){
                    if(user == userok[i] && pass == passok[i]){
                        return true
                    }
                }return false;

            }
        }

}

var player1 = new ballplayer(1,96,'Ryan Giggs',23,'Bắc Ninh',99,'Anh');
var player2 = new ballplayer(2,01,'Frank Lampard',22,'Ninh Bình',79,'Anh');
var player3 = new ballplayer(3,22,'David James',21,'Nam Định',59,'Việt Nam');
var player4 = new ballplayer(4,89,'Gareth Barry',20,'Thái Bình',89,'Việt Nam');
var player5 = new ballplayer(5,32,'Gary Speed',24,'Hải Phòng ',39,'Anh');
var player6 = new ballplayer(6,23,'Emile Heskey',26,'Thái Nguyên',69,'Việt Nam');
var player7 = new ballplayer(7,90,'Rio Ferdinand',23,'Bắc Ninh',91,'Việt Nam');
var player8 = new ballplayer(8,96,'Mark Schwarzer',22,'Ninh Bình',79,'Việt Nam');
var player9 = new ballplayer(9,98,'Jamie Carragher',21,'Nam Định',69,'Anh');
var player10 = new ballplayer(10,99,'Philip Neville',20,'Thái Bình',29,'Iceland');
var player11 = new ballplayer(11,95,'Steven Gerrard',24,'Hải Phòng ',59,'Việt Nam');
var player12 = new ballplayer(12,01,'Sol Campbell',26,'Thái Nguyên',89,'Anh');
var player13 = new ballplayer(13,05,'Paul Scholes',23,'Bắc Ninh',89,'Anh');
var player14 = new ballplayer(14,07,'John Terry',22,'Ninh Bình',71,'Việt Nam');
var player15 = new ballplayer(15,11,'Aaron Hughes',21,'Nam Định',49,'Anh');
var player16 = new ballplayer(16,99,'Brad Friedel',20,'Thái Bình',69,'Việt Nam');
var player17 = new ballplayer(17,95,'Kevin Davies',24,'Hải Phòng ',29,'Việt Nam');
var player18 = new ballplayer(18,94,'Shay Given',26,'Thái Nguyên',19,'Anh');
var player19 = new ballplayer(19,96,'Alan Shearer',23,'Bắc Ninh',96,'Việt Nam');
var player20 = new ballplayer(20,97,'Jussi Jääskeläinen',22,'Ninh Bình',19,'Anh');
var player21 = new ballplayer(21,98,'Sylvain Distin',21,'Nam Định',59,'Iceland');
var player22 = new ballplayer(22,99,'Gareth Southgate',20,'Thái Bình',89,'Cộng hòa Ireland');
var player23 = new ballplayer(23,95,'Richard Dunne',24,'Hải Phòng ',39,'Việt Nam');
var player24 = new ballplayer(24,94,'Michael Carrick',26,'Thái Nguyên',69,'Anh');
var player25 = new ballplayer(25,96,'Teddy Sheringham',23,'Bắc Ninh',99,'Việt Nam');
var player26 = new ballplayer(26,97,'Danny Murphy',22,'Ninh Bình',79,'Việt Nam');
var player27 = new ballplayer(27,98,'Andy Cole',21,'Nam Định',59,'Anh');
var player28 = new ballplayer(28,99,'Nicky Butt',20,'Thái Bình',89,'Việt Nam');
var player29 = new ballplayer(29,95,'Wayne Rooney',24,'Hải Phòng ',39,'Iceland');
var player30 = new ballplayer(30,94,'Gary Neville',26,'Thái Nguyên',69,'Anh');
var player31 = new ballplayer(31,96,'Kevin Nolan',23,'Bắc Ninh',91,'Việt Nam');
var player32 = new ballplayer(32,97,'Lee Bowyer',22,'Ninh Bình',79,'Việt Nam');
var player33 = new ballplayer(33,98,'Peter Crouch',21,'Nam Định',59,'Anh');
var player34 = new ballplayer(34,99,'Damien Duff',20,'Thái Bình',89,'Việt Nam');
var player35 = new ballplayer(35,95,'James Milner',24,'Hải Phòng ',39,'Anh');
var player36 = new ballplayer(36,94,'Ashley Cole',26,'Thái Nguyên',59,'Việt Nam');
var player37 = new ballplayer(37,96,'George Boateng',23,'Bắc Ninh',49,'Anh');
var player38 = new ballplayer(38,97,'Jermain Defoe',22,'Ninh Bình',79,'Cộng hòa Ireland');
var player39 = new ballplayer(39,98,'Joe Cole',21,'Nam Định',59,'Việt Nam');
var player40 = new ballplayer(40,99,'Ray Parlour',20,'Thái Bình',89,'Cộng hòa Ireland');
var player41 = new ballplayer(41,95,'Robbie Fowler',24,'Hải Phòng ',39,'Việt Nam');
var player42 = new ballplayer(42,94,'Luke Young',26,'Thái Nguyên',69,'Việt Nam');
var player43 = new ballplayer(42,02,'Đức NV',24,'Bắc Ninh',99,'Việt Nam');
var player44 = new ballplayer(42,22,'Cường VĐ',24,'Hải Phòng',99,'Việt Nam');
var arrVN = [player1, player2, player3,player4,player5,player6,player7,player8,player9,player10,player11];
var arrJP = [player12, player13, player14,player15,player16,player17,player18,player19,player20,player21,player22];
var arrITA = [player23, player24, player25,player26,player27,player28,player29,player30,player31,player32,player33];
var arrESP = [player34, player35, player36,player37,player38,player39,player40,player41,player42,player43, player44];
var arrayCountries = [];
arrayCountries.push({
    'vn': arrVN,
    'ita': arrITA,
    'jp': arrJP,
    'esp': arrESP,
});
$(document).ready(function () {
    $('.button').on('click', function () {
        let idCountry, html = "";
        idCountry = $(this).attr('data-country');
        console.log(arrayCountries);
        arrayCountries[0][idCountry].forEach(function (value) {
            html += '<li><b>' + value.getInfo() + '</b></li>'
        });
        $('.list').hide();
        $('#' + idCountry).html(html).show();
    });

    $('#get_match_calendar').on('click', function () {
        var htmlMatchOne = '', htmlMatchTwo = '', htmlMatchEnd = '';
        htmlMatchOne += '<div>Việt Nam <span id="rs_vn" class="match-one"></span></div><div>Nhật Bản <span id="rs_jp" class="match-one"></span></div>';
        htmlMatchTwo += '<div>Itali <span id="rs_ita" class="match-two"></span></div><div>Tây Ban Nha<span id="rs_esp" class="match-two"></span></div>';
        $('.list').hide();
        $('#btn_semi').html('<button onclick="startSemi()" style="padding: 5px 7px;">Thi đấu</button>');
        $('#macth_one').html(htmlMatchOne);
        $('#macth_two').html(htmlMatchTwo);
    });
});
function startSemi() {
    let results = [], totalPowers, countries = [], values, keys, i, rsOne, rsTwo, text;
    values = Object.values(arrayCountries[0]);
    keys = Object.keys(arrayCountries[0]);
    values.forEach(function (value, key) {
        totalPowers = 0;
        value.forEach(function (val) {
            totalPowers += parseInt(val.getPower());
        });
        $('#rs_'+keys[key]).text(totalPowers).css('color', 'red');
    });
    rsOne = getRsMatch($('.match-one'), 'first_team');
    rsTwo = getRsMatch($('.match-two'), 'second_team');
    text = rsOne[0] > rsTwo[0] ? rsOne[1] : rsTwo[1];
    $('#win_team').html(text);
}

function getRsMatch(arrays, id) {
    let i, rs, response;
    rs = 0;
    response = '';
    for (i=0; i<arrays.length; i++) {
        if ( parseInt(arrays[i].innerHTML)> rs) {
            rs = parseInt(arrays[i].innerHTML);
            arrays[i].removeAttribute('id');
            response = arrays[i].closest('div').innerHTML;
        }
    }
    $('#'+id).html(response);
    return [rs, response];
}
function ballplayer (id, clonum, name, age, addr, power, nation) {
    this.id = id;
    this.clonum = clonum;
    this.name = name;
    this.age = age;
    this.addr = addr;
    this.power = power;
    this.nation = nation;
    this.getInfo = function () {
        return 'Số áo: '+this.clonum+' Tên: '+this.name+' Tuổi: '+this.age;
    };
    this.getPower = function () {
        return this.power;
    };
    this.setId = function (id) {
        return this.id = id;
    };
    this.setClonum = function (clonum) {
        return this.clonum = clonum;
    };
    this.setName = function (name) {
        return this.name = name;
    };
    this.setAge = function (age) {
        return this.age = age;
    };
    this.setAddr = function (addr) {
        return this.addr = addr;
    };
    this.setPower = function (power) {
        return this.getPower = power;
    };
    this.setNation = function (nation) {
        return this.nation = nation;
    };
}
