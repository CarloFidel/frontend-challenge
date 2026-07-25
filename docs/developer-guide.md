# Guía para desarrolladores de la app

Esta guía resume las acciones que debe seguir un desarrollador para trabajar de forma ordenada en esta aplicación de clima, manteniendo coherencia con el flujo de ramas que hemos venido usando para el proyecto.

## 1. Objetivo del proyecto

La app es una implementación MVP de un clima forecast en React + TypeScript con Vite y Tailwind. El foco principal es cumplir con los user stories del sprint, mantener el código limpio y facilitar el trabajo por tareas.

## 2. Flujo de trabajo por ramas

El flujo recomendado para esta app es el siguiente:

- Rama principal: main
  - Debe contener siempre una versión estable del proyecto.
  - No se debe trabajar directamente sobre ella.

- Ramas de funcionalidad: feature/<ticket>-<descripcion>
  - Se usan para desarrollar nuevas funcionalidades.
  - Ejemplos:
    - feature/wf-25-search-component
    - feature/wf-29-forecast-api
    - feature/wf-33-favorites

- Ramas de corrección: fix/<ticket>-<descripcion>
  - Se usan para arreglar errores o problemas puntuales.
  - Ejemplo:
    - fix/wf-28-loading-error-states

- Ramas de mantenimiento: chore/<descripcion>
  - Se usan para ajustes de configuración, refactors menores o limpieza.

### Regla general

Cada tarea debe empezar en una rama nueva y cerrarse con una integración limpia en main o en la rama de integración correspondiente.

## 3. Pasos recomendados para trabajar en una tarea

### 1) Partir desde la rama base

Antes de empezar, asegúrate de trabajar desde la rama correcta y con el estado actualizado del proyecto.

### 2) Crear la rama correspondiente

Usa un nombre claro y consistente con el ticket o la historia.

Ejemplos:

- feature/wf-25-build-search-component
- feature/wf-30-weather-hero
- feature/wf-34-favorites-state

### 3) Implementar la tarea de forma aislada

Haz cambios pequeños y enfocados. Si una historia implica varios puntos, divídela en subtareas y trabaja una por una.

### 4) Validar el resultado

Antes de dar por terminada la tarea, revisa lo siguiente:

- El componente o flujo funciona correctamente.
- El código es legible y está bien organizado.
- No hay errores evidentes de TypeScript o de lógica.
- La UI sigue la idea del diseño del sprint.

### 5) Preparar la entrega

Cuando la tarea esté lista:

- Revisa los cambios.
- Asegúrate de que el resultado sea consistente con la rama de origen.
- Prepara un resumen claro de lo que se implementó.
- Si corresponde, deja listo el cambio para revisión.

## 4. Prioridades del proyecto

El orden de trabajo recomendado para esta app es:

1. Búsqueda de ciudades
2. Integración de datos del clima
3. Visualización del forecast actual y futuro
4. Favoritos
5. Paginación del forecast de 30 días
6. Ajustes responsive y mejoras de UX

Esto sigue la lógica del backlog del sprint y permite ir construyendo la app de forma incremental.

## 5. Estructura de trabajo esperada

Aunque la estructura puede evolucionar, el desarrollo debería mantenerse ordenado en torno a estas áreas:

- Componentes: UI reutilizable y piezas pequeñas de pantalla.
- Hooks o lógica compartida: si se necesita manejar estado o efectos repetidos.
- Servicios o capas de datos: para integrar APIs o transformar respuestas.
- Utilidades: funciones pequeñas y reutilizables.
- Estilos: Tailwind y clases consistentes para mantener la app legible.

## 6. Checklist de calidad antes de cerrar una tarea

Antes de dar por finalizada una tarea, revisa:

- [ ] La rama tiene un nombre claro y coherente.
- [ ] Los cambios están limitados a la funcionalidad objetivo.
- [ ] El código es comprensible.
- [ ] La experiencia de usuario es consistente.
- [ ] La tarea está alineada con el sprint y con la historia correspondiente.
- [ ] El resultado se puede explicar fácilmente en una revisión.

## 7. Recomendaciones para este repositorio

Este proyecto está orientado a un challenge frontend, por lo que conviene priorizar:

- Claridad sobre la arquitectura.
- Simplicidad en la implementación.
- Progresión por historias de usuario.
- Mantenibilidad del código.
- Entrega incremental en lugar de intentar resolver todo de una vez.

## 8. Resumen práctico

Si eres desarrollador en este proyecto, la rutina recomendada es:

1. Elegir una historia o subtarea.
2. Crear una rama específica para ella.
3. Implementar la solución de forma aislada.
4. Revisar que el resultado sea coherente y limpio.
5. Preparar la entrega con un resumen claro.

Este enfoque permite trabajar de forma ordenada, evitar mezclar cambios y mantener el proyecto alineado con el flujo de desarrollo del sprint.
