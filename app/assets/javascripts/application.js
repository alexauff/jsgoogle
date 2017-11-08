// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

function initJS()  // pour appeler la fonction JS avant l'HTML et voir les actions direct
{let monBouton = document.querySelector('button');

// Créer un lien avec l'objet bouton
let monBoutonSearch = document.querySelector('#rech');

// Texte de recherche
let monUrl;

// je cache mes éléments
document.getElementById('corps').style.display='none';

// au clic je veux que le block apparaisse
monBouton.onclick = function() {
document.getElementById('corps').style.display='flex';
};

// si clique sur bouton recherche google
monBoutonSearch.onclick = function() {

// récupérer le texte tapé
monUrl = document.getElementById("search").value;

// changer l'adresse de l url
window.location.href="https://www.google.fr/search?q=" + monUrl;
};

setTimeout(function() {
alert('Hey le site est trop bien! Viens dessus stp please')
}, 10000);}