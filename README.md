## Como correr la app

Correr `npm install && npm run preview` para levantar el proyecto y correr el script de seed para la base de datos y asegurarse que la información se encuentra en la db

## Resumen

Hola! Este es un resumen de lo que hice:

Para esta prueba decidí usar **Next.js** para crear rutas API e interactuar con ellas desde un frontend en React, simulando una arquitectura tradicional con un backend mínimo.

Evitando algunas funcionalidades propias de Next.js, intenté imitar un flujo más cercano a una app React + backend tipo Nest.js.

---

## ⚙️ Detalles

### 1. API para leer archivo JSON

Creé una ruta API que lee un archivo JSON local para obtener y devolver los datos al cliente.

### 2. Renderizado inicial en el frontend

Rendericé los datos en la página principal con la idea de luego personalizarlos según la ubicación del usuario y filtrar por ciudad.

### 3. Migración a SQLite + Prisma

Aunque empecé usando `.sort()` y `.filter()` sobre el JSON, migré a una **base SQLite con Prisma ORM** para tener mejor estructura y escalabilidad. Esto agregó algo de complejidad pero simula mejor un entorno real.

### 4. Poblado de la base de datos

Usé IA para generar un script de seed y poblar la base con los datos de propiedades.

### 5. Paginación y filtro por ciudad

Implementé **paginación** y uso de parámetros en la API para filtrar por **ciudad y página**. En el frontend agregué un input para filtrar por ciudad.

### 6. Vista de detalles de propiedad

- Creé una ruta API para obtener una propiedad por **ID** y devolver también algunas **recomendaciones**.
- Hice una página de detalles para mostrar toda la información.

---

## 🛠️ Tech Stack

- **Next.js** (API routes + React frontend)
- **Prisma ORM** (for DB interaction)
- **SQLite** (lightweight DB for the test)
- **TypeScript**
- **TailwindCSS** (optional, if you used it)

# 🧩 Prueba Técnica – Desarrollo Web

**Alt94 Strategy & Development**

---

👋 ¡Hola!  
Gracias por formar parte de este proceso. Esta prueba técnica es parte de la selección organizada por **Alt94**, una empresa especializada en el desarrollo de soluciones digitales personalizadas, integraciones inteligentes y automatizaciones a medida.

Estamos buscando a alguien con iniciativa, capacidad técnica y autonomía para construir soluciones eficientes y bien estructuradas. A continuación, encontrarás el desafío técnico con el que podrás mostrar tu enfoque de diseño, lógica y ejecución.

---

## 🧪 Desafío Técnico – Sistema de Recomendación de Propiedades

### 🎯 Objetivo

Diseñar y construir una aplicación sencilla que permita visualizar un listado de propiedades y mostrar recomendaciones basadas en similitudes entre ellas.

El objetivo es evaluar tu criterio técnico, tu capacidad para organizar un sistema funcional y la claridad con la que comunicas tus decisiones y resultados.

---

### 📦 Qué proporcionamos

Desde Alt94 te entregamos un archivo JSON con **100 propiedades simuladas**, que ya incluye todos los campos necesarios.  
**No es necesario que crees tus propios datos** ni que definas la estructura de la información. Tu enfoque debe estar puesto en **el diseño del sistema, la lógica de recomendación y la presentación del resultado**.

---

### 📌 Requisitos funcionales

Tu sistema debe incluir:

1. **Visualización de propiedades**  
   Utilizando los datos proporcionados, presenta un listado navegable con las propiedades disponibles.

2. **Recomendaciones de propiedades similares**  
   Junto a cada propiedad, o al seleccionarla, deben mostrarse al menos **dos propiedades similares**. Puedes definir la lógica de similitud libremente, pero sugerimos considerar criterios como:

   - Misma ciudad
   - Mismo tipo de propiedad
   - Precio en un rango aproximado (por ejemplo, ±20%)

3. **Diseño técnico del sistema**  
   Puedes organizar el proyecto como consideres mejor: ya sea con una separación entre frontend y backend, o en una única estructura si el framework lo permite. Se valorará especialmente:
   - Lógica clara y bien documentada
   - Código ordenado y legible
   - Enfoque modular y mantenible

---

### 🧰 Tecnologías

Puedes utilizar el stack que prefieras. No evaluamos tecnologías específicas, sino tu **capacidad para estructurar, razonar y ejecutar** una solución técnica funcional. Frameworks frontend, backend o fullstack son bienvenidos.

---

### 📤 Entregables

En el formulario de entrega podrás subir un enlace (Google Drive, iCloud…etc) que contenga:

- 🖼️ Capturas de pantalla o, preferentemente, un **video corto** mostrando la aplicación en funcionamiento.
  - **Recomendamos especialmente el video** (entre 2 y 5 minutos).
- 📦 Enlace al repositorio del código (GitHub, GitLab, etc.).
- 🧠 Una **breve explicación en vídeo** (Si no quieres aparecer en el vídeo puede ser solo con tu voz) que incluya:
  - Las tecnologías utilizadas
  - Cómo organizaste el sistema
  - Cómo funciona la lógica de recomendación
  - Qué mejorarías o qué agregarías con más tiempo

## El formulario de entrega se encuentra en https://alt-94.com/prueba-tecnica

### 📁 Datos de prueba

El archivo JSON con propiedades ya está preparado para usar. Puedes trabajar directamente con él o ampliarlo si lo consideras necesario para mejorar tu sistema o probar nuevas ideas.

---

### ✨ Bonus (opcional)

Si te sientes con tiempo y ganas de ir más allá, puedes incorporar funcionalidades como:

- Guardado de propiedades favoritas
- Buscador por texto libre
- Filtros adicionales o paginación
- Documentación técnica (README o breve esquema del sistema)

  ### 📆 Fecha límite 3 días desde la recepción del enlace
