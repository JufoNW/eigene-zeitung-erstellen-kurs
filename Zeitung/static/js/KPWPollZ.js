const questions = [
    "Wie gut können Sie Englisch?",
    "Wünschen Sie sich besser Englisch sprechen zu können?",
    "Empfinden Sie Englisch im Alltag als störend",
    "Fühlen Sie die deutsche Sprache durch andere Entwicklungen bedroht",
    "Sind sie viel im Internet unterwegs",
    "Wie oft nutzen Sie Anglizismen?",
    "Haben Sie in der Corona-Pandemie viel an digitalen Konferenzen teilgenommen",
    "Sollte Englisch eine zusätzliche Amtssprache in Deutschland sein",
    "Finden Sie dass die deutsche Kultur dank Englisch im Alltag untergeht",
    "Finden Sie, dass das TV am Aussterben ist?",
    "Sprechen Sie noch andere Sprachen?",
    "Benutzen Sie das Wort 'Okay' oft",
];

let answers = [];

let question_count = 0;

let is_first = true;

let age = -1;

function buttonclick(button){
    if (is_first){
        document.getElementById("buttons").innerHTML = "" +
            "<button value=\"1\" style=\"font-size: 19vw; width: 20vw; height: 20vw; color: #59d941; margin-right: 5vw;\" onclick=\"buttonclick(this)\">\n" +
            "   <i class=\"fa-solid fa-face-smile\"></i>\n" +
            "</button>\n" +
            "<button value=\"0\" style=\"font-size: 19vw; width: 20vw; height: 20vw; color: #ffd531\" onclick=\"buttonclick(this)\">\n" +
            "   <i class=\"fa-solid fa-face-meh\"></i>\n" +
            "</button>\n" +
            "<button value=\"-1\" style=\"font-size: 19vw; width: 20vw; height: 20vw; color: #fa1a1a; margin-left: 5vw;\" onclick=\"buttonclick(this)\">\n" +
            "   <i class=\"fa-solid fa-face-frown\"></i>\n" +
            "</button>"
        is_first = false;
        age = button.value
        document.getElementById("title").innerHTML = questions[question_count];
        question_count++;
    } else {
        if (question_count === questions.length)             {
            post("/english/finished/", {"answers": answers.toString(), "age": age})
        } else {
            document.getElementById("title").innerHTML = questions[question_count];
            question_count++;
            answers.push(button.value)
        }
    }
}


function post(path, params, method='post') {

  // The rest of this code assumes you are not using a library.
  // It can be made less verbose if you use one.
  const form = document.createElement('form');
  form.method = method;
  form.action = path;

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const hiddenField = document.createElement('input');
      hiddenField.type = 'hidden';
      hiddenField.name = key;
      hiddenField.value = params[key];

      form.appendChild(hiddenField);
    }
  }

  document.body.appendChild(form);
  form.submit();
}

