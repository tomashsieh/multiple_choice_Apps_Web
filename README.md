# App de repaso multiple choice

App de estudio tipo multiple choice, organizada por materias y niveles. Es un HTML autocontenido: **no necesita servidor, ni instalación, ni conexión a internet**.

## Cómo abrirla

Hacé doble clic en `quiz.html` desde el explorador de archivos. Se abre en el navegador y listo.

Los archivos deben quedar siempre en la misma carpeta:

```
quiz.html        ← la app
preguntas.js     ← contenido de la materia "Arquitectura de Aplicaciones Web"
README.md        ← este archivo
```

## Cómo se juega

1. **Materias**: elegís la materia que querés repasar.
2. **Niveles**: cada nivel es una clase o tema. El nivel 1 siempre está disponible; el resto se desbloquea al aprobar el anterior. Los bloqueados aparecen atenuados con un candado 🔒 y no se pueden abrir.
3. **Checkpoints**: las preguntas de cada nivel se agrupan según los **temas** que se declaren con `### Tema: Nombre` dentro del nivel — cada tema es un checkpoint, y se juegan en el orden en que aparecen en el archivo (no al azar ni en bloques de tamaño parejo). Un nivel que todavía no tenga ningún `### Tema:` se juega entero como un único checkpoint.
4. **Preguntas**: dentro de un checkpoint, sus preguntas se juegan en orden aleatorio y con las 4 opciones también mezcladas. Después de responder ves enseguida si acertaste; si fallaste, se resalta en verde cuál era la correcta y **se reinicia ese checkpoint desde el principio** (se vuelven a barajar sus preguntas y opciones) — no perdés lo ya aprobado en checkpoints anteriores, ni se te obliga a rehacer el nivel entero por un solo error. Avanzás con un botón (no hay temporizador en ningún momento).
5. **Resultado**: al completar los 4 checkpoints el nivel siempre queda aprobado (con checkpoints es imposible terminarlo sin haber acertado cada pregunta, aunque haya sido en un reintento) y se desbloquea el siguiente. Desde ahí podés continuar al siguiente nivel, jugar de nuevo este por repasar, o volver a la lista de niveles.

---

## Formato de las preguntas

Todo el contenido vive como texto plano dentro de un archivo `.js`. Las reglas son:

- Cada nivel arranca con una línea `## Nivel N: Nombre de la clase` (N secuencial, empezando en 1).
- Dentro de un nivel, cada pregunta arranca con un número, punto y el texto: `1. ¿Cuál es...?`
- Cada pregunta tiene **exactamente cuatro opciones**, una por línea: `a) texto`, `b) texto`, `c) texto`, `d) texto`.
- La opción correcta se marca con un asterisco delante de la letra: `*c) texto`. Tiene que haber **exactamente una** por pregunta.
- Las preguntas se separan entre sí con una **línea en blanco**.
- (Opcional, para que los checkpoints sigan el tema real) Dentro de un nivel podés agrupar las preguntas con `### Tema: Nombre del tema`. Todas las preguntas hasta el próximo `### Tema:` (o el fin del nivel) quedan en ese tema, y cada tema se juega como un checkpoint propio en el orden en que aparece. Si no usás `### Tema:` en un nivel, ese nivel se juega entero como un único checkpoint.

Ejemplo:

```
## Nivel 1: Introducción a la Arquitectura de Software

### Tema: Patrones arquitectónicos

1. ¿Cuál de los siguientes es un patrón arquitectónico?
a) Bubble sort
*b) Arquitectura en capas
c) Recursión de cola
d) Programación dinámica

### Tema: Atributos de calidad

2. ¿Qué es un atributo de calidad?
a) El nombre de una variable
*b) Un requisito no funcional como la escalabilidad
c) Un tipo de test unitario
d) Un comando de git
```

### Prompt para generar preguntas con otro chat

Podés pegar esto en otro chat junto con el material de la clase:

> Generá preguntas multiple choice sobre el siguiente material, respetando EXACTAMENTE este formato de texto plano, sin markdown adicional ni texto explicativo alrededor:
>
> - Cada nivel arranca con una línea `## Nivel N: Nombre de la clase` (N secuencial empezando en 1).
> - Dentro de cada nivel, agrupá las preguntas por subtema real del material usando `### Tema: Nombre del tema` antes de cada grupo (no repartas en bloques de tamaño parejo ni al azar: cada `### Tema:` debe corresponder a un tema o sección real del contenido).
> - Cada pregunta arranca con un número seguido de punto: `1. texto de la pregunta`.
> - Cada pregunta tiene exactamente cuatro opciones, una por línea: `a) texto`, `b) texto`, `c) texto`, `d) texto`.
> - La opción correcta se marca con un asterisco antes de la letra: `*c) texto`. Exactamente una por pregunta.
> - Las preguntas se separan entre sí con una línea en blanco.

---

## Cómo subir preguntas nuevas (a una materia que ya existe)

Esto es lo que vas a hacer cada vez que curses una clase nueva. **No hace falta tocar `quiz.html`.**

1. Abrí el archivo de la materia (por ejemplo `preguntas.js`) con cualquier editor de texto.
2. Bajá hasta el final del texto entre comillas invertidas (` `` `), justo antes de la línea `` `; ``.
3. Pegá el nuevo nivel respetando el formato, con el número que le corresponde:

```js
const PREGUNTAS_RAW_AAW = `
## Nivel 1: Introducción a la Arquitectura de Software
... (niveles que ya tenías) ...

## Nivel 4: Seguridad en Aplicaciones Web      ← nivel nuevo

### Tema: Inyección de código

1. ¿Qué previene principalmente el uso de consultas parametrizadas?
a) Ataques de denegación de servicio
*b) Inyección SQL
c) Ataques de fuerza bruta
d) Fugas de memoria

2. ...

### Tema: Autenticación

3. ...
`;
```

4. Guardá el archivo y recargá `quiz.html` en el navegador (F5). El nivel nuevo aparece automáticamente, bloqueado hasta que apruebes el anterior. Los `### Tema:` son opcionales: si el nivel nuevo no los usa, se juega entero como un único checkpoint.

> ⚠️ Ojo con el texto de las preguntas: si una pregunta contiene el carácter de comilla invertida (`` ` ``) o la secuencia `${`, hay que escaparlos con `\` porque el contenido va dentro de un template literal de JavaScript. En la práctica casi nunca pasa.

---

## Cómo subir una materia nueva

La app no puede "descubrir" archivos sola porque se abre directamente desde el disco (sin servidor, un navegador no puede listar carpetas ni leer archivos por su cuenta). Por eso agregar una materia son 2 pasos manuales, pero es siempre igual:

### Paso 1 — Crear el archivo de la materia

Copiá `preguntas.js` y renombralo, por ejemplo `preguntas_bases_datos.js`. Adentro, cambiá el sufijo `_AAW` de las tres constantes por uno propio (por ejemplo `_BD`) y poné tu contenido:

```js
const MATERIA_ID_BD = "bases-de-datos";              // id único, sin espacios
const MATERIA_NOMBRE_BD = "Bases de Datos";          // nombre que se ve en la app
const PREGUNTAS_RAW_BD = `
## Nivel 1: Modelo Relacional

1. ¿Qué es una clave primaria?
a) Una contraseña de acceso a la base
*b) Un atributo o conjunto de atributos que identifica unívocamente cada fila
c) Un índice secundario opcional
d) Un tipo de backup incremental

...
`;
```

El sufijo tiene que ser distinto al de las otras materias, si no las variables chocan entre sí.

### Paso 2 — Registrarla en `quiz.html`

Abrí `quiz.html` y buscá el bloque de scripts cerca del final. Agregá dos cosas:

```html
<script src="preguntas.js"></script>
<script src="preguntas_bases_datos.js"></script>   <!-- ← 1) el archivo nuevo -->

<script>
const MATERIAS_DISPONIBLES = [
  { id: MATERIA_ID_AAW, nombre: MATERIA_NOMBRE_AAW, raw: PREGUNTAS_RAW_AAW },
  { id: MATERIA_ID_BD,  nombre: MATERIA_NOMBRE_BD,  raw: PREGUNTAS_RAW_BD  },  // ← 2) la entrada nueva
];
</script>
```

Guardá, recargá `quiz.html` y la materia nueva aparece en la pantalla inicial.

---

## Cómo cambiar el aspecto visual

Todos los colores, la tipografía y el redondeo de bordes están en un único bloque `:root { ... }` al principio del `<style>` de `quiz.html`, cada uno con un comentario de qué controla. El resto del CSS solo usa esas variables, así que no hace falta buscar colores repetidos por el archivo.

Por ejemplo, para cambiar el dorado por un azul, editás una sola línea:

```css
:root {
  --accent:      #4aa3df;   /* antes: #d4af37 */
  --accent-text: #06121c;   /* texto sobre el color de acento, para que contraste */
}
```

Variables principales:

| Variable | Qué controla |
|---|---|
| `--bg-body` | Fondo general de la página |
| `--bg-panel` / `--bg-panel-alt` | Fondo de tarjetas y de los botones de opción |
| `--text-primary` / `--text-muted` | Texto principal y secundario |
| `--accent` / `--accent-text` | Color de acento (títulos, botones principales) |
| `--correct-bg` / `--correct-fg` | Colores de respuesta correcta |
| `--incorrect-bg` / `--incorrect-fg` | Colores de respuesta incorrecta |
| `--radius` | Redondeo de bordes |
| `--font-body` | Familia tipográfica |
| `--max-width` | Ancho máximo del contenido en pantallas grandes |

La app es responsive: funciona igual en computadora y en el navegador del celular (las tarjetas se apilan en una columna en pantallas angostas y los botones tienen buen tamaño para tocar con el dedo).

La tipografía se carga desde Google Fonts, pero si no hay internet cae automáticamente a una fuente del sistema sin romper nada.

---

## Cómo funciona el progreso guardado

- El progreso se guarda en el **localStorage del navegador** de esa computadora o teléfono. No se sincroniza entre dispositivos: si abrís la app en el celular, arranca de cero ahí.
- Un nivel queda **aprobado** cuando lográs el 100% de aciertos en algún intento. Una vez aprobado, queda aprobado para siempre: si después volvés a jugarlo para practicar y fallás, no se vuelve a bloquear nada.
- El botón **"Reiniciar progreso de esta materia"** está en la pantalla de niveles de cada materia y pide confirmación antes de ejecutarse. Solo borra el progreso de **esa** materia: el de las demás queda intacto.

---

## Si algo no funciona

**Aparece un aviso amarillo de "preguntas ignoradas".** Significa que alguna pregunta no cumple el formato y fue descartada (el resto de la app sigue funcionando normal). Abrí la consola del navegador con **F12 → Consola** y vas a ver mensajes que indican exactamente la materia, el nivel y el número de pregunta con problema. Las causas más comunes son:

- Ninguna opción marcada con `*`, o más de una marcada.
- Menos o más de 4 opciones, o letras repetidas.
- Falta la línea en blanco que separa una pregunta de la siguiente.
- La pregunta no arranca con `número. texto`.

**Un nivel aparece como "Sin preguntas válidas".** Todas sus preguntas fueron descartadas por errores de formato, o el nivel quedó vacío. Revisá la consola como arriba.

**Un nivel no muestra los checkpoints por tema que esperaba.** Revisá que cada `### Tema:` esté escrito exactamente así (con los tres `#`, dos puntos y el nombre) y que no le falten preguntas válidas — si todas las preguntas de un tema quedan descartadas por errores de formato, ese tema se descarta entero y verás el aviso en consola.

**La materia nueva no aparece.** Revisá que hayas hecho los dos pasos: agregar el `<script src="...">` y la entrada en `MATERIAS_DISPONIBLES`. Si en la consola ves un error del tipo "X is not defined", es que el sufijo de las variables del archivo nuevo no coincide con el que pusiste en `MATERIAS_DISPONIBLES`.
