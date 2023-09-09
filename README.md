# proyecto3-chartjs
Este es un proyecto de visualización de datos que utiliza HTML, JavaScript y Chart.js para mostrar gráficos y datos relacionados con ventas y datos históricos de criptomonedas.

# Chart Dashboard

Este es un proyecto de visualización de datos que utiliza HTML, JavaScript y Chart.js para mostrar gráficos y datos relacionados con ventas y datos históricos de criptomonedas.

## Contenido

- [Descripción](#descripción)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Instrucciones de Uso](#instrucciones-de-uso)
- [Estructura de Carpetas](#estructura-de-carpetas)

## Descripción

Este proyecto consiste en una página web que muestra información sobre ventas y datos históricos de criptomonedas en forma de gráficos. Los datos de ventas se obtienen de un servidor local y se muestran en un gráfico de barras utilizando Chart.js. Además, los datos históricos de criptomonedas se obtienen de una API externa y se muestran en un gráfico interactivo.

## Requisitos

Antes de ejecutar este proyecto, asegúrate de tener instalado lo siguiente:

- Navegador web moderno
- Servidor local para obtener datos de ventas (se asume que está en `http://localhost:3000/sales`)

## Instalación

1. Clona este repositorio en tu sistema local o descarga el archivo ZIP.

2. Navega hasta la carpeta del proyecto y abre una terminal.

3. Ejecuta el comando `npm install`, luego el comando `npm run dev` y sigue el link que te proporcionará `http://localhost:5173/`.

## Instrucciones de Uso

1. Abre el archivo `index.html` en tu navegador web.

2. En la página principal, verás dos secciones:

   - **Ventas DB:** Muestra información de ventas en forma de tabla y un gráfico de barras.

   - **Ventas:** Muestra un gráfico de ventas generado con Chart.js.
   - **Crypto Historical:** En la sección "Crypto Historical", puedes seleccionar una criptomoneda en el menú desplegable. La página mostrará un gráfico interactivo con datos históricos de la criptomoneda seleccionada.

## Estructura de Carpetas

- `index.html`: Archivo HTML principal que contiene la estructura de la página.
- `style.css`: Archivo CSS para estilizar la página.
- `historicalChart.js`: Archivo JavaScript que maneja la generación del gráfico de datos históricos de criptomonedas.
- `exChart.js`: Archivo JavaScript que maneja la generación del gráfico de ventas.
- `dbChart.js`: Archivo JavaScript que obtiene los datos de ventas y muestra la información en la página.
- `main.js`: Archivo JavaScript principal que importa los módulos necesarios y maneja la interacción del usuario.

## Agradecimientos

A los coach Mike y Ramiro.

¡Disfruta explorando los datos y gráficos en esta aplicación de Chart Dashboard!
