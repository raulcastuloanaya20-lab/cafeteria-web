function responder(opcion) {
  let respuesta = document.getElementById("respuesta");

  if (opcion === "menu") {
    respuesta.innerText =
      "☕ Tenemos café americano, latte, capuccino y pan dulce.";
  }

  else if (opcion === "horario") {
    respuesta.innerText =
      "⏰ Nuestro horario es de lunes a domingo de 8:00 am a 8:00 pm.";
  }

  else if (opcion === "ubicacion") {
    respuesta.innerText =
      "📍 Estamos ubicados en el centro de la ciudad.";
  }

  else if (opcion === "promos") {
    respuesta.innerText =
      "🔥 Promoción: 2x1 en capuccino los viernes.";
  }
}
