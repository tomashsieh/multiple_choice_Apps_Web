# Plan — multiple_choice_Apps_Web

## Estado

### En curso

### Pendientes
- **Habilitar GitHub Pages** — falta que el usuario confirme si el repo pasa a público (hoy es privado, y Pages gratis lo requiere) y que active Pages manualmente en Settings (branch `main`, carpeta raíz). No hay herramienta disponible en esta sesión para cambiar visibilidad del repo ni la config de Pages.
- **Agregar materias/niveles reales adicionales** a medida que el usuario curse nuevas clases, siguiendo el patrón ya documentado en el README.

### Completadas
- 2026-08-19 — App de estudio multiple-choice multi-materia (Arquitectura de Aplicaciones Web)
- 2026-08-28 — Cargar contenido real de "Arquitectura de Aplicaciones Web" (4 niveles) y crear la materia "Ciencia del Comportamiento Aplicada" (3 niveles)
- 2026-08-28 — Checkpoints dentro de cada nivel

## Bitácora de decisiones

### 2026-08-19 — Registro manual de materias en vez de descubrimiento automático
**Contexto:** la app tiene que abrirse con doble clic desde `file://`, sin servidor. Se pidió poder extender la app a otras materias con el tiempo.
**Decisión:** cada materia es un archivo `.js` que define 3 constantes con un sufijo propio (`MATERIA_ID_*`, `MATERIA_NOMBRE_*`, `PREGUNTAS_RAW_*`) cargado con `<script src>` clásico; `quiz.html` arma a mano un array `MATERIAS_DISPONIBLES` que las enumera. Agregar una materia son 2 pasos manuales y documentados (duplicar archivo + agregar 2 líneas en `quiz.html`).
**Alternativas descartadas:** descubrimiento automático vía `fetch` de un directorio de materias (imposible en `file://` por CORS, no hay servidor); un único archivo monolítico con todas las materias mezcladas (peor para copiar/pegar un patrón y para que otro LLM genere contenido de una materia a la vez).
**Revisión post-implementación:** salió tal cual lo planeado.

### 2026-08-19 — Avance entre preguntas con botón manual, no automático
**Contexto:** el pedido original prohíbe cualquier temporizador/cuenta regresiva, pero también pide que el juego avance a la siguiente pregunta sin interrumpirse tras cada respuesta.
**Decisión:** tras ver el feedback de correcto/incorrecto, el usuario avanza con un botón "Siguiente pregunta" — nunca automático.
**Alternativas descartadas:** auto-advance con `setTimeout` de ~1s sin contador visible (técnicamente cumple "sin temporizador" pero es ambiguo y el usuario prefirió control total del ritmo).
**Revisión post-implementación:** salió tal cual lo planeado (confirmado explícitamente por el usuario antes de implementar).

### 2026-08-19 — "Aprobado" es permanente por materia, no depende del último intento
**Contexto:** un nivel se aprueba con 100% de aciertos en un intento; había que definir qué pasa si más adelante el usuario reintentra ese nivel por practicar y falla.
**Decisión:** una vez que un nivel llega a 100% en algún intento, queda marcado como aprobado para siempre y el siguiente nivel permanece desbloqueado, sin importar reintentos posteriores fallidos.
**Alternativas descartadas:** que el estado "aprobado" reflejara solo el último intento (podría re-bloquear el siguiente nivel por un reintento de práctica, lo cual castiga repasar).
**Revisión post-implementación:** salió tal cual lo planeado (confirmado explícitamente por el usuario).

### 2026-08-19 — Reset de progreso individual por materia
**Contexto:** primera versión del plan proponía un único botón de reset global (más simple de implementar).
**Decisión:** cada materia tiene su propio botón "Reiniciar progreso" en su pantalla de niveles, que solo borra `progress.materias[esaMateria]` en localStorage.
**Alternativas descartadas:** un solo botón de "reiniciar todo" en la pantalla de selección de materias (más simple, pero el usuario explícitamente no quiso perder el progreso de todas las materias de una sola vez).
**Revisión post-implementación:** salió tal cual lo planeado, ajustado a pedido explícito del usuario tras la primera propuesta.

### 2026-08-19 — Errores de formato en preguntas: se descartan, no rompen la app
**Contexto:** el parser de texto plano puede encontrarse preguntas mal formadas (sin opción correcta marcada, o con más de una).
**Decisión:** se descarta solo la pregunta malformada, se loguea un `console.error` con materia/nivel/número de pregunta, y se muestra un banner no bloqueante en pantalla — nunca se detiene toda la app.
**Alternativas descartadas:** halt total de la app ante cualquier error de formato (peor experiencia de debugging para el propio usuario editando su archivo de preguntas, y bloquea el resto de niveles bien formados por un solo typo).
**Revisión post-implementación:** salió tal cual lo planeado.

### 2026-08-19 — Publicar `main` empujando la branch directo, sin PR
**Contexto:** el usuario pidió mergear la branch de trabajo a `main` para poder habilitar GitHub Pages, pero el repo no tenía ningún commit ni branch `main` todavía.
**Decisión:** se publicó el contenido de `claude/web-arch-quiz-app-4lxk3a` directamente como `main` (`git push origin claude/web-arch-quiz-app-4lxk3a:main`), equivalente a un merge sin conflictos por no existir historia previa en `main`.
**Alternativas descartadas:** abrir un Pull Request contra `main` (no es posible crearlo si la rama base no existe todavía en GitHub).
**Revisión post-implementación:** salió tal cual lo planeado.

### 2026-08-28 — Checkpoints por nivel: 4 bloques fijos, reintento de checkpoint completo
**Contexto:** con niveles largos (30-60+ preguntas ya cargadas en el contenido real), fallar una sola pregunta tarde obligaba a rehacer el nivel entero desde cero, lo cual el usuario consideró un castigo desproporcionado.
**Decisión:** cada nivel se reparte en 4 checkpoints lo más parejos posible (ej. 33 → 9/8/8/8; <4 preguntas → un único checkpoint con todas). Al fallar una pregunta se reinicia únicamente ese checkpoint desde el principio, rebarajando tanto el orden de sus preguntas como las opciones de cada una. Como esto garantiza terminar el nivel con el 100% de aciertos, la pantalla de resultado quedó con un único desenlace ("aprobado") y se agregó un botón opcional "Jugar de nuevo".
**Alternativas descartadas:** reintentar solo la pregunta puntual fallada, sin agrupar en bloques (el usuario pidió explícitamente bloques/checkpoints, no reintento pregunta por pregunta); checkpoints de tamaño variable u otra cantidad de bloques (se fijó en 4, confirmado explícitamente); mantener la rama "no aprobado / Reintentar nivel" del código aunque quedara inalcanzable (se descartó por ser código muerto, decisión explicada en el plan y confirmada al aprobarlo).
**Revisión post-implementación:** salió tal cual lo planeado.
