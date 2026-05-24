var Q = [
  {
    s: "Ir-1 §3",
    q: "Które z poniższych zalicza się do posterunków ruchu?",
    a: [
      "Stacje, mijanki, posterunki odgałęźne, odstępowe i bocznicowe",
      "Wyłącznie stacje i mijanki",
      "Wyłącznie posterunki odgałęźne i bocznice"
    ],
    c: 0,
    e: "Posterunki ruchu to: stacje, mijanki, posterunki odgałęźne, bocznicowe, odstępowe i blokowe."
  },

  {
    s: "Sygnalizacja kształtowa",
    q: "Co oznacza sygnał Sr 2?",
    img: "sr2d.jpeg", // 🔥 bez folderu img/
    a: [
      "Stój",
      "Jazda 40 km/h",
      "Wolna droga – największa prędkość"
    ],
    c: 2,
    e: "Sr 2 oznacza wolną drogę."
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
  }, 1200);
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
