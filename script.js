var Q = [
{
s:"Ir-1 §3",
q:"Które z poniższych zalicza się do posterunków ruchu?",
a:[
"Stacje, mijanki, posterunki odgałęźne, odstępowe i bocznicowe",
"Wyłącznie stacje i mijanki",
"Wyłącznie bocznice"
],
c:0,
e:"Posterunki ruchu to m.in. stacje, mijanki i posterunki odgałęźne."
},

{
s:"Ir-1 §3",
q:"Czym jest mijanka?",
a:[
"Posterunek na linii jednotorowej umożliwiający wymijanie pociągów",
"Posterunek zmiany kierunku jazdy",
"Tor postojowy"
],
c:0,
e:"Mijanka umożliwia wymijanie pociągów na linii jednotorowej."
},

{
s:"Ir-1 §3",
q:"Co to jest szlak kolejowy?",
a:[
"Odcinek między dwoma posterunkami zapowiadawczymi",
"Odcinek między semaforami",
"Cała linia kolejowa"
],
c:0,
e:"Szlak to odcinek między posterunkami zapowiadawczymi."
},

{
s:"Ir-1 §4",
q:"Kto koordynuje ruch na danym terenie?",
a:[
"Dyżurny ruchu",
"Maszynista",
"Kierownik pociągu"
],
c:0,
e:"Dyżurny ruchu koordynuje ruch kolejowy."
},

/* ========== SEMAFORY KSZTAŁTOWE ========== */

{
s:"Semafory kształtowe",
q:"Co oznacza Sr 1?",
img:"sr1d.jpeg",
a:[
"Stój",
"Wolna droga",
"40 km/h"
],
c:0,
e:"Sr1 oznacza bezwzględny zakaz jazdy."
},

{
s:"Semafory kształtowe",
q:"Co oznacza Sr 2?",
img:"sr2d.jpeg",
a:[
"Stój",
"Wolna droga",
"Ostrożnie"
],
c:1,
e:"Sr2 = wolna droga (największa prędkość)."
},

{
s:"Semafory kształtowe",
q:"Co oznacza Sr 3?",
img:"sr3d.jpeg",
a:[
"Stój",
"Jazda do 40 km/h",
"Jazda bez ograniczeń"
],
c:1,
e:"Sr3 = jazda do 40 km/h."
},

{
s:"Semafory kształtowe",
q:"Jak ustawione jest ramię Sr1?",
img:"sr1d.jpeg",
a:[
"Poziomo w prawo",
"45° w górę",
"Poziomo w lewo"
],
c:0,
e:"Sr1 = ramię poziomo w prawo."
},

{
s:"Semafory kształtowe",
q:"Ile ramion ma semafor kształtowy Sr3?",
img:"sr3d.jpeg",
a:[
"Jedno",
"Dwa",
"Trzy"
],
c:1,
e:"Sr3 wykorzystuje dwa ramiona."
},

/* ========== SEMAFORY ŚWIETLNE ========== */

{
s:"Semafory świetlne",
q:"Co oznacza S1?",
img:"s1.jpeg",
a:[
"Stój",
"Jazda",
"100 km/h"
],
c:0,
e:"S1 = bezwzględny zakaz jazdy."
},

{
s:"Semafory świetlne",
q:"Co oznacza S2?",
img:"s2.jpeg",
a:[
"Stój",
"Jazda z największą prędkością",
"40 km/h"
],
c:1,
e:"S2 = jazda z największą prędkością."
},

{
s:"Semafory świetlne",
q:"Co oznacza S3 (migające zielone)?",
img:"s3.jpeg",
a:[
"Stój",
"Jazda z największą dozwoloną prędkością w przodzie są dwa odstępy blokowe wolne – albo przy następnym semaforze z prędkością nie większą niż 100 km/h",
"Manewry"
],
c:1,
e:"S3 = Jazda z największą dozwoloną prędkością w przodzie są dwa odstępy blokowe wolne – albo przy następnym semaforze z prędkością nie większą niż 100 km/h"
},

{
s:"Semafory świetlne",
q:"Co oznacza S5?",
a:[
"Stój na następnym",
"100 km/h",
"Brak sygnału"
],
c:0,
e:"S5 informuje o sygnale Stój na następnym semaforze."
},

{
s:"Semafory świetlne",
q:"Co oznacza S7?",
a:[
"100 km/h i kolejny 100",
"Stój",
"40 km/h"
],
c:0,
e:"S7 = 100 km/h i kolejny 100 km/h."
},

{
s:"Semafory świetlne",
q:"Co oznacza S9?",
a:[
"100 km/h i Stój",
"200 km/h",
"40 km/h"
],
c:0,
e:"S9 = 100 km/h i następny Stój."
},

{
s:"Semafory świetlne",
q:"Co oznacza S10?",
a:[
"40 km/h",
"60 km/h",
"100 km/h"
],
c:0,
e:"S10 = 40 km/h."
},

{
s:"Semafory świetlne",
q:"Co oznacza S10a?",
a:[
"40 km/h",
"60 km/h",
"80 km/h"
],
c:1,
e:"S10a = 60 km/h."
},

{
s:"Semafory świetlne",
q:"Co oznacza sygnał Sz?",
a:[
"Stój",
"Jazda do 40 km/h bez rozkazu",
"Awaria"
],
c:1,
e:"Sz = jazda zastępcza."
},

/* ========== TARCZE OSTRZEGAWCZE ========== */

{
s:"Tarcze ostrzegawcze",
q:"Co oznacza tarcza On?",
a:[
"Semafor w odległości hamowania",
"Stój",
"40 km/h"
],
c:0,
e:"On informuje o semaforze."
},

{
s:"Tarcze ostrzegawcze",
q:"Co oznacza Ot2?",
a:[
"Stój",
"Wolna droga",
"Awaria"
],
c:1,
e:"Ot2 = wolna droga."
},

{
s:"Tarcze ostrzegawcze",
q:"Co oznacza Od1?",
a:[
"Stój",
"Jazda",
"Brak sygnału"
],
c:0,
e:"Od1 = Stój."
},

/* ========== MANEWRY ========== */

{
s:"Manewry",
q:"Czy S1 dotyczy manewrów?",
a:[
"Tak",
"Nie",
"Tylko nocą"
],
c:0,
e:"S1 dotyczy pociągów i manewrów."
},

{
s:"Manewry",
q:"Czy można minąć S1 bez pozwolenia?",
a:[
"Tak zawsze",
"Tylko z pozwoleniem",
"Zawsze"
],
c:1,
e:"Wymagane pozwolenie."
},

/* ========== DODATKOWE ========== */

{
s:"Ruch kolejowy",
q:"Kto wydaje zgodę na jazdę pociągu?",
a:[
"Dyżurny ruchu",
"Maszynista",
"Dróżnik"
],
c:0,
e:"Zgodę wydaje dyżurny ruchu."
},

{
s:"Bezpieczeństwo",
q:"Co oznacza zatrzymanie przed S1?",
img:"s1.jpeg,
a:[
"Bezwzględny zakaz jazdy",
"Można jechać",
"Manewr"
],
c:0,
e:"S1 = zakaz jazdy."
},

{
s:"Semafory",
q:"Ile świateł ma S2?",
img:"s2.jpeg,
a:[
"1 zielone",
"2 czerwone",
"3 białe"
],
c:0,
e:"S2 = jedno zielone światło."
}
];

var idx = 0;
var correct = 0;
var wrong = 0;
var wrongList = [];
var shuffled = [];

/* ================= SHUFFLE ================= */
function shuffle(arr){
  var a = arr.slice();
  for(var i = a.length - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a;
}

/* ================= START ================= */
document.getElementById('startBtn').onclick = function(){
  shuffled = shuffle(Q);

  idx = 0;
  correct = 0;
  wrong = 0;
  wrongList = [];

  document.getElementById('start').style.display = 'none';
  document.getElementById('result').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';

  showQ();
};

/* ================= SHOW QUESTION ================= */
function showQ(){
  var q = shuffled[idx];

  var pct = Math.round((idx / shuffled.length) * 100);
  document.getElementById('pb').style.width = pct + '%';
  document.getElementById('pt').textContent = (idx + 1) + ' / ' + shuffled.length;

  document.getElementById('badge').textContent = q.s;
  document.getElementById('qtxt').textContent = q.q;

  document.getElementById('expl').textContent = '';
  document.getElementById('expl').className = 'expl';

  document.getElementById('nxt').style.display = 'none';

  /* ===== OBRAZEK (NAPRAWIONE) ===== */
  var img = document.getElementById('qimg');

  if(q.img){
    img.src = q.img;   // działa jeśli plik jest w tym samym folderze
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }

  var opts = document.getElementById('opts');
  opts.innerHTML = '';

  for(var i = 0; i < q.a.length; i++){
    (function(i){
      var btn = document.createElement('button');
      btn.className = 'opt';
      btn.textContent = ['A) ','B) ','C) '][i] + q.a[i];

      btn.onclick = function(){
        answer(i);
      };

      opts.appendChild(btn);
    })(i);
  }
}

/* ================= ANSWER (AUTO NEXT) ================= */
function answer(chosen){
  var q = shuffled[idx];

  var btns = document.getElementById('opts').querySelectorAll('button');

  for(var i = 0; i < btns.length; i++){
    btns[i].disabled = true;
  }

  btns[q.c].classList.add('reveal');

  if(chosen === q.c){
    btns[chosen].classList.add('correct');
    correct++;
  } else {
    btns[chosen].classList.add('wrong');
    wrong++;

    wrongList.push({
      q: q.q,
      ca: q.a[q.c],
      e: q.e
    });

    document.getElementById('expl').textContent = q.e;
    document.getElementById('expl').className = 'expl show';
  }

  document.getElementById('nxt').style.display = 'none';

  /* ===== AUTO NEXT ===== */
  setTimeout(function(){
    idx++;

    if(idx >= shuffled.length){
      showResult();
    } else {
      showQ();
    }
  }, 2200);
}

/* ================= RESULT ================= */
function showResult(){
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('result').style.display = 'block';

  var total = shuffled.length;
  var pct = Math.round((correct / total) * 100);

  var circle = document.getElementById('circle');
  circle.textContent = pct + '%';

  circle.className =
    'circle ' +
    (pct >= 80 ? 'good' :
     pct >= 50 ? 'ok' : 'bad');

  document.getElementById('rc').textContent = correct;
  document.getElementById('rw').textContent = wrong;
  document.getElementById('rt').textContent = total;

  var wlist = document.getElementById('wlist');
  wlist.innerHTML = '';

  if(wrongList.length > 0){
    var h = document.createElement('h3');
    h.textContent = 'Błędy do powtórzenia:';
    wlist.appendChild(h);

    for(var i = 0; i < wrongList.length; i++){
      var d = document.createElement('div');
      d.className = 'wi';

      d.innerHTML =
        '<strong>' + wrongList[i].q + '</strong>' +
        '<span class="ca">Poprawna: ' + wrongList[i].ca + '</span>' +
        '<div class="ex">' + wrongList[i].e + '</div>';

      wlist.appendChild(d);
    }
  }
}

/* ================= BACK ================= */
document.getElementById('rbtn').onclick = function(){
  document.getElementById('result').style.display = 'none';
  document.getElementById('start').style.display = 'block';
};
