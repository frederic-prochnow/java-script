// récupération de l'élément canvas sur lequel faire les dessins
var canvas = document.getElementById("essai1");
// récupération du contexte graphique
var gfx    = canvas.getContext("2d");
// changement de la couleur utilisé pour les dessins de figures pleines
gfx.fillStyle = 'rgb(200,0,0)';
// affichage d'un rectangle plein sur l'ensemble du canvas
gfx.fillRect(10, 10, 55, 50);
for (var i=0; i<100; i++) {
    // tirage aléatoire de la couleur

    // dessin d'un rectable placé aléatoirement sur le canvas

}