console.clear(); //pour le bonheur des yeux :)

/**
 * le tableau qui contient la position des mines
 * false (0) -> pas de mines
 * true (1) -> mine
 */
var tabMines = new Array(20).fill(new Array(20).fill(false));

/**
 * [perso description]
 * @type {[type]}
 */
var perso = document.getElementById('perso');
/**
 * //un nombre random entre 0 et 20;
 * @type {integer}
 */
var depart_x = Math.floor(Math.random() * (20));
var perso_X = depart_x;
var perso_Y = 0;
var nombrePas = 0;

var tresor = document.getElementById('tresor');
var tresor_X = Math.floor(Math.random() * (20));

function appuyerTouche(event) {
  var touche = event.keyCode;

  if (touche == 40) {
    //bas
    if (perso_Y < tabMines[1].length - 1) { //si on est dans le quadrillage
      if (tabMines[perso_X][perso_Y] == true) {
        //on est sur une mine;
        alert('vous avez marché sur une mine');
        resetPerso();
      } else {
        perso_Y++;
        Maj();
      }
    }
  }

  if (touche == 38) {
    //haut
    if (perso_Y > 0) {
      if (tabMines[perso_X][perso_Y]) {
        //on est sur une mine;
        alert('vous avez marché sur une mine');
        resetPerso();
      } else {
        //la case est libre
        perso_Y--;
        Maj();
      }
    }
  }

  if (touche == 37) {
    //gauche
    if (perso_X > 0) {
      if (tabMines[perso_X][perso_Y]) {
        //on est sur une mine;
        alert('vous avez marché sur une mine');
        resetPerso();
      } else {
        perso_X--;
        Maj();
      }
    }
  }

  if (touche == 39) {
    //droite
    if (perso_X < tabMines.length - 1) {
      if (tabMines[perso_X][perso_Y]) {
        //on est sur une mine;
        alert('vous avez marché sur une mine');
        resetPerso();
      } else {
        perso_X++;
        Maj();
      }
    }
  }
}

function resetPerso() {
  // on remet le perso au départ.
  perso_X = depart_x;
  perso_Y = 0;
  perso.style.left = perso_X * 20 + "px";
  perso.style.top = perso_Y + "px";
  nombrePas = 0;

  //on replace le trésor
  tresor.style.top = 380 + "px";
  tresor.syle.left = tresor_X + "px";

  //TODO : replacer les mines
  Maj();
}

function Maj() {
  if (perso_X == tresor_X && perso_Y == 20) {
    alert("gagné !");
  }

  nombrePas++;
  document.getElementById('nbPas').innerHTML = "Nombre de pas : " + nombrePas;
  document.getElementById('points').innerHTML = "X: " + perso_X + "<br/> Y: " + perso_Y;
  perso.style.left = perso_X * 20 + "px";
  perso.style.top = perso_Y * 20 + "px";

}

var b = document.body;
b.addEventListener('keydown', appuyerTouche);
Maj();
