import "bootstrap";
import "./style.css";
window.onload = () => {
  //escribiendo mi generador de excusas
  //definiendo constantes a utilizar
  const sujetos = [
    "Mi perro", 
    "Mi gato", 
    "Mi raton", 
    "Mi pokemon"];
  const acciones = [
    "se comió",
    "estropeó",
    "enfermó",
    "perdió",
    "se fumo",
    "regalo"
  ];
  const cosas = ["mi carro", "mi reloj", "mi casa", "mi tesis", "mi codigo"];
  const momentos = [
    "antes de clase",
    "justo a tiempo",
    "cuando terminé",
    "manana",
    "ayer"
  ];
    //creando funcion
    function generarExcusa(indiceAleatorio) {
    const sujeto = sujetos[indiceAleatorio];
    const accion = acciones[indiceAleatorio];
    const cosa = cosas[indiceAleatorio];
    const momento = momentos[indiceAleatorio];

    // Concatenando las partes de la excusa
    const excusa = `${sujeto} ${accion} ${cosa} ${momento}`;

    return excusa;
  }
  const generarExcusaButton = document.getElementById("generarExcusaButton");
  const excusaElement = document.getElementById("excusa");

  generarExcusaButton.addEventListener("click", () => {
    //creando el indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * sujetos.length);
    //generando y mostrando la excusa
    const excusaGenerada = generarExcusa(indiceAleatorio);
    //creando el click para el boton
    excusaElement.textContent = excusaGenerada;
  });
};
