
function mostrar(texto) {
   var elemento = document.getElementById("TextoOculto");
   elemento.style.color = "white";

   if (texto == "contacto") {elemento.innerHTML= "<p id='titulo'>"+ texto + "</p>" + contacto}
   if (texto == "idiomas") {elemento.innerHTML= "<p id='titulo'>"+ texto + "</p>" + idiomas}
   if (texto == "academico") {elemento.innerHTML= "<p id='titulo'>"+ texto + "</p>" + academico}
   if (texto == "cursos") {elemento.innerHTML= "<p id='titulo'>"+ texto + "</p>" + cursos}
   if (texto == "experiencia") {elemento.innerHTML= "<p id='titulo'>"+ texto + "</p>" + experiencia}
   
}

function scrolltotop(){
   window.scrollTo({top:0, behavior: 'smooth'})
}

function ocultar(obj){
   document.getElementById(obj).style.display = 'none';
}

function expandir(obj){
   document.getElementById(obj).style.display = 'block';
}


var contacto = "<ul>Telefono: 2324687537</ul><ul>Mail: lucasponti22@gmail.com</ul><ul>Instagram: /lucasponti22</ul><ul>Linkedin: /lucas-ponti</ul><ul>Github: /LucasPonti22</ul>";


var idiomas = "<ul>Español: Nativo</ul><ul>Ingles: Upper Intermediate</ul><ul>Portugues: Basico</ul>"


var academico = "<ul>Analista de Sistemas - Universidad Nacional de Lujan - En Curso</ul><ul>Ingles - ICANA Mercedes</ul><ul>Secundario Completo - Colegio San Antonio de Padua </ul>"


var cursos = "<ul>Argentina Programa - 2023</ul><ul>Se Programar - 2022</ul><ul>SCRUM Metodologias Agiles - 2021</ul><ul>Reparacion de PC - 2018</ul><ul>Asistente Juridico y Notarial - 2013</ul>"


var experiencia = "<ul>Banco Macro - Soporte Tecnico IT - (2022 - Actualidad)</ul><ul>CyP Ingenieria Mercedes - Coordinador - (2020 - 2022)</ul><ul>Estrella Tour Mercedes - Administrativo - (2015 - 2020)</ul>"
