//прокрутка
mybutton = document.getElementById("top");
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }


//скрпит добавления достижения

  var dost = 1;
  function add_fields() {
      dost++;
      var objTo = document.getElementById('container')
      var divtest = document.createElement("div");
      divtest.innerHTML = '<div><p style="margin-left: 10px;">Достижение ' + dost +':</p><p class="napr">\<select required="required">\
      <option></option>\
      <option>Социально-гуманитарная</option>\
      <option>Естественнонаучная</option>\
      <option>Художественная</option>\
      <option>Физкультурно-спортивная</option>\
      <option>Туристско-краеведческая</option>\
      <option>Техническая</option></select>\
      <label for="napr">Направление деятельности <b style ="color: red">*</b></label>\
      </p>\
      <p class="vid">\
      <select required="required">\
        <option></option>\
        <option>Секция</option>\
        <option>Кружок</option>\
        <option>Факультатив</option>\
        <option>Конференция</option>\
        <option>Школьное научное сообщество</option>\
        <option>Олимпиада</option>\
        <option>Соревнование, состязание, научная игра</option>\
        <option>Поисковые и научные исследования</option>\
        <option>Общественно полезные практики</option>\
        <option>Онлайн-курсы</option>\
        <option>Клуб (военно-патриотический клуб, например)</option>\
        <option>Творческое объединение (ансамбль, творческий коллектив и прочее)</option>\
      </select>\
      <label for="vid">Вид деятельности <b style ="color: red">*</b></label>\
      </p>\
      <p class="period">\
      <input type="text" name="period" placeholder="5 лет" required/>\
      <label for="period">Период занятости<b style ="color: red">*</b></label>\
      </p>\
      <p class="poluch">\
      <textarea name="poluch" placeholder="Спортивный разряд"></textarea>\
      <label for="poluch">Полученное достижение</label>\
      </p>\
      <p class="dob">\
      <button type="button" id="btnAddForm" onclick="add_fields();">Добавить достижение</button>\
      </p>\
      </div>';

      objTo.appendChild(divtest)
  }
