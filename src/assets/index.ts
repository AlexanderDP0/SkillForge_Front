import { Data } from "../components/interfaces";

export const data: Data[] = [
  {
    id: 1,
    content: "Mantiene información dinámica dentro de un componente.",
    status: "key",
  },
  {
    id: 2,
    content: "Se utilizan para pasar datos entre componentes.",
    status: "estado",
  },
  {
    id: 3,
    content:
      "Identifica que elementos han cambiado, añadido o eliminado de una lista.",
    status: "props",
  },
  {
    id: 4,
    content:
      "Manejan acciones especificas que realiza el usuario como clics, tecleos o movimientos de mouse.",
    status: "fragmentos",
  },
  {
    id: 5,
    content:
      "Permite acceder a un elemento del DOM o un componente, sin necesidad de usar el flujo normal de datos de React.",
    status: "eventos",
  },
  {
    id: 6,
    content:
      "Herramienta para agrupar múltiples elementos sin agregar nodos adicionales al DOM.",
    status: "refs",
  },
];
