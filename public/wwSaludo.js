
/**
 * @param {MessageEvent} evt mensaje recibido de la interfaz gráfica. La
 * property data tiene los datos enviados con hilo.postMessage(modelo). */
onmessage = evt => {
  // Calcula y envía de regreso la respuesta a la interfaz gráfica.
  // @ts-ignore

  postMessage(`La cantidad de motherboard es: ${evt.data.nombre1} y la cantidad de procesadores es ${evt.data.nombre2}`);
};
