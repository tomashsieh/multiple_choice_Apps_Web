/*
 * ============================================================================
 * FORMATO DE ARCHIVOS DE PREGUNTAS — ESPECIFICACIÓN
 * ============================================================================
 *
 * Este archivo define el contenido de UNA materia para la app de repaso
 * (quiz.html). Se carga con <script src="preguntas.js"></script> (un script
 * clásico, no un módulo ni fetch) para poder abrir quiz.html haciendo doble
 * clic desde el explorador de archivos, sin servidor, sin problemas de CORS.
 *
 * Cada archivo de materia define EXACTAMENTE estas 3 constantes globales,
 * con un sufijo propio (acá "_IAN") para no chocar con los de otras materias
 * si se cargan varios archivos de materia en la misma quiz.html:
 *
 *   const MATERIA_ID_<SUFIJO>     = "id-unico-sin-espacios";
 *   const MATERIA_NOMBRE_<SUFIJO> = "Nombre visible de la materia";
 *   const PREGUNTAS_RAW_<SUFIJO>  = `...texto plano con el formato de abajo...`;
 *
 * Ver el README.md del proyecto para el paso a paso de cómo agregar niveles
 * nuevos a esta materia, o cómo agregar una materia nueva copiando este
 * archivo. Lo que sigue es la especificación exacta del texto plano dentro
 * de PREGUNTAS_RAW_<SUFIJO>:
 *
 * 1. Cada nivel arranca con una línea:
 *      ## Nivel N: Nombre de la clase
 *    donde N es el número de nivel en orden secuencial empezando en 1.
 *
 * 2. Dentro de un nivel, cada pregunta arranca con un número seguido de
 *    punto y el texto de la pregunta:
 *      1. ¿Cuál es la diferencia entre...?
 *
 * 3. Cada pregunta tiene EXACTAMENTE cuatro opciones, cada una en su propia
 *    línea, con el formato:
 *      a) texto
 *      b) texto
 *      c) texto
 *      d) texto
 *
 * 4. La opción correcta se marca anteponiendo un asterisco a la letra:
 *      *c) texto
 *    Debe haber EXACTAMENTE una opción marcada como correcta por pregunta.
 *    Si el parser encuentra una pregunta con cero o más de una opción
 *    marcada, no rompe toda la app: descarta esa pregunta puntual, muestra
 *    un console.error indicando la materia, el nivel y el número de
 *    pregunta involucrados, y avisa con un banner visible en pantalla.
 *
 * 5. Las preguntas dentro de un nivel se separan por una línea en blanco.
 *
 * 6. (Opcional) Dentro de un nivel, las preguntas se pueden agrupar por tema
 *    con una línea:
 *      ### Tema: Nombre del tema
 *    Todas las preguntas hasta el próximo "### Tema:" (o el fin del nivel)
 *    pertenecen a ese tema. Cada tema se convierte en un "checkpoint": al
 *    jugar el nivel se van pasando en el orden en que están escritos en el
 *    archivo, y si se falla una pregunta se reinicia SOLO el tema donde
 *    estabas (rebarajando sus preguntas y opciones), no el nivel entero. Si
 *    un nivel no usa "### Tema:" en absoluto, se juega entero como un único
 *    checkpoint (sin partir en bloques).
 *
 * Ejemplo mínimo de una pregunta bien formada, agrupada por tema:
 *
 *   ### Tema: Patrones arquitectónicos
 *
 *   1. ¿Cuál de los siguientes es un patrón arquitectónico?
 *   a) Bubble sort
 *   *b) Arquitectura en capas
 *   c) Recursión de cola
 *   d) Programación dinámica
 *
 * INSTRUCCIONES PARA GENERAR CONTENIDO NUEVO CON OTRO CHAT/LLM:
 * Pedile que genere preguntas siguiendo EXACTAMENTE este formato, sin
 * markdown adicional, sin numeración fuera de la indicada, con contenido
 * de la materia correspondiente. Cada nivel = un tema o clase distinta, y
 * dentro de cada nivel agrupe las preguntas en "### Tema: Nombre" según el
 * subtema real del material (no en bloques de tamaño parejo ni al azar).
 * Recordarle que no omita el asterisco en la opción correcta y que
 * verifique que cada pregunta tenga una única opción marcada como tal.
 * ============================================================================
 */

const MATERIA_ID_IAN = "inteligencia-artificial-neurociencias";
const MATERIA_NOMBRE_IAN = "Inteligencia Artificial y Neurociencias";
const PREGUNTAS_RAW_IAN = `
## Nivel 1: Modelado Computacional del Comportamiento Humano

### Tema: Motivación y diseño del estudio (Cuatro en Línea)

1. ¿Cuál es el objetivo principal del estudio de van Opheusden y colegas?
*a) Estudiar si los jugadores expertos planifican más pasos adelante que los novatos
b) Comparar distintos algoritmos de ajedrez por computadora entre sí
c) Diseñar una interfaz de juego más accesible para principiantes
d) Medir con mucha precisión el tiempo de reacción visual ante estímulos simples presentados

2. Según el paper, ¿por qué el ajedrez resulta poco adecuado para estimar la profundidad de planificación?
a) Porque no hay suficientes jugadores expertos disponibles para estudiar sus partidas registradas
b) Porque las partidas suelen ser demasiado largas para registrarlas
*c) Porque su complejidad dificulta obtener estimaciones cuantitativas de la planificación
d) Porque el tablero de ajedrez es demasiado grande para modelarlo

3. ¿Qué limitación tienen las tareas de planificación simples típicas en ciencia cognitiva?
a) Requieren equipamiento de laboratorio muy costoso para aplicarlas
*b) Imponen un techo a la profundidad de planificación alcanzable por cualquiera
c) Solo pueden aplicarse a participantes con formación técnica previa
d) No permiten registrar el tiempo que tarda cada jugador en responder

4. ¿Por qué el juego "Cuatro en Línea" resultó adecuado para este estudio?
a) Porque solo puede jugarse contra una computadora, nunca entre personas
b) Porque su tablero es idéntico al del ajedrez tradicional
c) Porque no requiere absolutamente ningún tipo de planificación por parte del jugador
*d) Porque combina reglas simples con suficiente complejidad para ser tratable computacionalmente

### Tema: El modelo computacional: función de valor y búsqueda

5. ¿Cuáles son los tres componentes del modelo computacional propuesto?
*a) Función de valor basada en features, algoritmo de búsqueda y mecanismo de atención
b) Red neuronal profunda, función de recompensa y módulo de memoria episódica
c) Codificador visual convolucional, decodificador de acciones y filtro de ruido gaussiano
d) Motor de físicas del tablero de juego, generador de movimientos posibles y árbol de decisiones

6. ¿Qué hace la función de valor V(s, w) del modelo?
a) Cuenta la cantidad total de piezas presentes en el tablero
b) Genera de forma totalmente aleatoria los movimientos legales disponibles en cada turno de juego
*c) Asigna un valor a un estado del tablero como suma ponderada de features
d) Registra el tiempo que el jugador tarda en cada movimiento

7. ¿Cuál de las siguientes NO es una de las cinco features que usa la función de valor?
a) Patrón de tres piezas propias alineadas en el tablero
*b) Cantidad total de piezas propias colocadas en el tablero
c) Tendencia central, es decir la cercanía al centro del tablero
d) Patrón de dos piezas propias en línea sin conectar

8. ¿Qué hace específicamente la feature de "centro" dentro de la función de valor?
a) Penaliza las piezas ubicadas cerca de los bordes del tablero
b) Cuenta cuántas veces aparece un patrón distinto de cuatro piezas alineadas en el tablero
c) Suma los turnos que restan hasta el final de la partida
*d) Asigna un valor más alto a las casillas del centro del tablero

9. ¿Por qué los pesos de las features del jugador activo se multiplican por una constante de escala C?
*a) Porque tres en línea señala una victoria inminente solo para el jugador activo
b) Para compensar diferencias en el tamaño del tablero entre distintas partidas
c) Para que el proceso completo de entrenamiento del modelo converja con mucha mayor rapidez
d) Porque el jugador activo siempre cuenta con más piezas en juego

10. En cada iteración del algoritmo de búsqueda, ¿qué hace el modelo con los movimientos de menor valor?
a) Los guarda sin usarlos para evaluarlos en la siguiente partida que se juegue
b) Los convierte automáticamente en la variación principal del árbol
*c) Los descarta cuando su valor baja del mejor movimiento menos un umbral
d) Los ejecuta igual, aunque con menor probabilidad de resultar acertados

11. ¿Qué determina cuándo el algoritmo de búsqueda deja de iterar?
a) Un límite fijo de diez iteraciones por cada posición evaluada
*b) Una probabilidad γ de detenerse después de cada iteración realizada
c) El momento exacto en que se ocupa la totalidad del tablero
d) Un contador de tiempo real medido en segundos desde el inicio

12. En el árbol de decisión construido por el modelo, ¿qué representa la "variación principal"?
a) La rama del árbol que el modelo explora primero por defecto
b) El conjunto de movimientos ilegales descartados en cada nodo
c) El promedio de valores de todas las ramas evaluadas
*d) La secuencia de movimientos de mayor valor para ambos jugadores

### Tema: Mecanismo de atención y ruido en el modelo

13. ¿Cómo modela el mecanismo de atención la atención selectiva humana?
*a) Descartando aleatoriamente ciertas features antes de construir el árbol de decisión
b) Aumentando el peso de todas las features por igual en cada turno
c) Eliminando del tablero las piezas menos relevantes para la partida
d) Duplicando la profundidad de búsqueda en las posiciones centrales

14. Además de descartar features, ¿qué otro tipo de ruido incorpora el mecanismo de atención?
a) Un retraso aleatorio adicional en el tiempo de respuesta del jugador humano
b) Una distorsión aleatoria en la posición de las piezas
*c) Ruido gaussiano agregado al valor V(s) en cada nodo del árbol
d) Una reducción aleatoria en la cantidad de movimientos legales

15. ¿Qué representa la tasa de lapsus (lapse rate) λ en el modelo?
a) La velocidad con la que decae progresivamente la memoria del jugador durante la partida
*b) La probabilidad de que el jugador se equivoque al elegir su acción
c) La cantidad de features que el modelo procesa por segundo
d) El porcentaje de partidas que el jugador abandona sin terminar

### Tema: Validación del modelo con datos humanos

16. ¿Con qué tipos de datos humanos se validó el modelo, además de las elecciones de movimiento?
a) Con encuestas de satisfacción y cuestionarios de personalidad
b) Con registros de frecuencia cardíaca durante la partida
c) Con grabaciones de audio de los comentarios del jugador
*d) Con los tiempos de respuesta registrados y los movimientos oculares

17. ¿Qué método se usó para evaluar qué tan bien el modelo predice las elecciones humanas?
*a) Validación cruzada de cinco pliegues, prediciendo elecciones fuera de muestra
b) Comparación directa contra un jugador de ajedrez profesional
c) Una encuesta posterior preguntando a los jugadores si acertó
d) Un conteo manual de coincidencias en cada partida jugada

18. ¿Qué supone el modelo de "azar" (chance model) usado como punto de comparación?
a) Que el jugador siempre elige el movimiento que maximiza su ventaja
b) Que el jugador imita el último movimiento visto del oponente
*c) Que el jugador se mueve a una casilla desocupada elegida al azar
d) Que el jugador repite siempre la misma jugada inicial

19. ¿Qué relación se encontró entre los movimientos oculares humanos y la búsqueda del modelo?
a) No se encontró ninguna relación estadística significativa entre ambas medidas registradas
*b) Las casillas visitadas por el modelo coincidieron con la atención humana registrada
c) Los movimientos oculares se concentraron únicamente en las esquinas del tablero de juego
d) Los jugadores expertos movieron los ojos con mucha menor frecuencia que los novatos

20. ¿Qué se utilizó como predictor del tiempo de respuesta en cada ensayo?
a) La cantidad total de piezas presentes en el tablero en ese momento
b) El rating Elo que tenía el jugador en ese momento
c) La distancia entre las dos últimas piezas colocadas en el tablero
*d) El árbol de decisión construido por el modelo en ese ensayo

### Tema: Métricas del modelo: definiciones

21. ¿Cómo se define la "profundidad de planificación" (planning depth) en este estudio?
*a) Como la longitud de la variación principal del árbol de búsqueda
b) Como la cantidad total de movimientos legales disponibles en una posición
c) Como el tiempo total que dura una partida completa
d) Como el número de features activas en un momento dado

22. ¿Cómo se define la "tasa de abandono de features" (feature drop rate)?
a) Como la cantidad de partidas perdidas por errores de cálculo
b) Como el porcentaje de piezas retiradas del tablero por turno
*c) Como la probabilidad de lapsus atencional, un parámetro del modelo
d) Como la velocidad de decaimiento del rating Elo entre sesiones

23. ¿Cómo se define la "calidad heurística" (heuristic quality) del modelo?
a) Como la cantidad de sesiones necesarias para alcanzar el máximo rating
*b) Como la correlación entre el valor heurístico y el valor objetivo
c) Como el tiempo promedio que tarda el modelo en converger
d) Como la proporción de movimientos legales que el modelo descarta

### Tema: Resultados: aprendizaje y diferencias individuales

24. A lo largo de las sesiones de juego, ¿qué le sucedió a la profundidad de planificación de los participantes?
a) Se mantuvo constante a lo largo de todas las sesiones
b) Disminuyó progresivamente a medida que aumentaba la experiencia de juego
c) Osciló de forma irregular sin mostrar ninguna tendencia clara
*d) Aumentó junto con el rating Elo de los participantes

25. ¿Qué ocurrió con la tasa de abandono de features a lo largo de las sesiones?
*a) Disminuyó de forma progresiva a medida que avanzaban las sesiones
b) Aumentó progresivamente junto con el rating Elo de los jugadores
c) Se mantuvo idéntica en todas las sesiones registradas del estudio
d) Aumentó únicamente en los participantes con menor rating inicial

26. ¿Qué ocurrió con la calidad heurística de los participantes a lo largo de las sesiones?
a) Mejoró de forma sostenida junto con el rating Elo de los jugadores
b) Empeoró de forma marcada inmediatamente después de la primera sesión
*c) No mostró una mejora clara pese al aumento del rating Elo
d) Se volvió indistinguible entre expertos y novatos desde el inicio

27. Según la conclusión principal del estudio, ¿qué distingue a los jugadores más fuertes de los más débiles?
a) Conocen una mayor cantidad de aperturas memorizadas de antemano
*b) Planifican más profundo y cometen menos lapsus de atención
c) Utilizan exclusivamente movimientos cercanos al centro del tablero
d) Dedican más tiempo total a cada partida que juegan

28. Según los datos de diferencias individuales entre jugadores, ¿qué variable NO se correlacionó con el rating Elo?
a) La profundidad de planificación alcanzada por cada jugador
b) La tasa de abandono de features de cada jugador
c) El desempeño general medido a lo largo de las sesiones
*d) La calidad heurística de los pesos de cada jugador

### Tema: Hipótesis sobre la implementación neural del modelo

29. Según la hipótesis planteada sobre la implementación neural del modelo, ¿con qué región se asocia la función de valor basada en features?
*a) Con la corteza orbitofrontal del cerebro
b) Con el cerebelo y el tronco encefálico
c) Con la corteza visual primaria únicamente
d) Con el núcleo accumbens de forma exclusiva

30. Según esa misma hipótesis, ¿con qué red se asocia el mecanismo de atención del modelo?
a) Con la red por defecto del cerebro en reposo
b) Con el sistema límbico de forma exclusiva
*c) Con la red frontoparietal del cerebro
d) Con la corteza auditiva primaria del cerebro

## Nivel 2: Aprendizaje: Humanos vs Máquinas

### Tema: Aprendizaje y condicionamiento

1. ¿Cómo se define el aprendizaje según la clase?
*a) Como un cambio en el comportamiento debido a la experiencia
b) Como la capacidad de resolver problemas matemáticos complejos de forma rápida
c) Como el aumento de neuronas nuevas en el cerebro
d) Como la memorización de datos durante la infancia

2. ¿Con qué científico se asocia el condicionamiento clásico mencionado en la clase?
a) Con el psicólogo conductista B. F. Skinner
b) Con el naturalista británico Charles Darwin
*c) Con el fisiólogo ruso Iván Pavlov
d) Con el neurocientífico francés Stanislas Dehaene

3. ¿Con qué científico se asocia el condicionamiento operante mencionado en la clase?
a) Con el fisiólogo ruso Iván Pavlov
*b) Con el psicólogo conductista B. F. Skinner
c) Con el naturalista británico Charles Darwin
d) Con el neurocientífico francés Stanislas Dehaene

### Tema: Neuronas artificiales y arquitectura cerebro-computadora

4. Según el esquema comparativo presentado, ¿qué elemento de la neurona artificial corresponde a las dendritas?
a) La capa de salida, que produce el resultado final
b) El axón, que transmite la señal hacia otras neuronas
c) La función de no linealidad aplicada a la suma
*d) Las entradas ponderadas que recibe la neurona artificial

5. ¿Qué dos operaciones realiza una neurona artificial antes de generar su salida?
*a) Una suma ponderada de sus entradas y una función de no linealidad
b) Una multiplicación de matrices y un ordenamiento de valores
c) Una normalización de datos y una compresión de imagen
d) Una selección aleatoria de entradas y un promedio simple de todas ellas

6. A diferencia de la arquitectura de Von Neumann de las computadoras, ¿cómo funcionan las redes neuronales del cerebro?
*a) La memoria y el procesamiento utilizan el mismo sustrato físico
b) La memoria y el procesamiento están completamente separados el uno del otro
c) Solo existe memoria, sin ningún tipo de procesamiento activo
d) Solo existe procesamiento, sin ningún tipo de memoria disponible

### Tema: Estudios con neuronas biológicas: organoides y neuronas in vitro

7. ¿Qué propone el estudio sobre "brainoware" (organoides cerebrales) mencionado en la clase?
a) Que las computadoras cuánticas pueden reemplazar a las neuronas
b) Que los organoides cerebrales pueden reemplazar el ADN humano
*c) Que los organoides cerebrales pueden funcionar como hardware de cómputo para IA
d) Que las redes neuronales artificiales podrían algún día cultivarse en un laboratorio especializado

8. ¿Qué demostró el estudio de neuronas in vitro que jugaron al videojuego Pong?
a) Que las neuronas cultivadas no pueden responder a ningún estímulo externo
*b) Que las neuronas modifican su actividad para reducir la impredictibilidad del entorno
c) Que las neuronas artificiales superan siempre a las neuronas biológicas
d) Que el videojuego Pong no puede ser aprendido por ningún tipo de sistema biológico

### Tema: Priors innatos y aprendizaje rápido en humanos

9. Según el paper de Dubey y colegas, ¿qué pregunta central motiva el estudio sobre videojuegos?
a) Por qué las computadoras siempre prefieren jugar videojuegos simples en vez de los complejos
b) Por qué los videojuegos antiguos son más difíciles que los modernos
c) Por qué los jugadores expertos memorizan más niveles que los novatos
*d) Por qué los humanos aprenden un videojuego mucho más rápido que una computadora

10. En el ejemplo de las víboras y las flores, ¿qué ilustra el hecho de que las detectemos más rápido?
*a) Que tenemos priors evolutivos que orientan la atención hacia estímulos relevantes para la supervivencia
b) Que las flores son objetos visualmente mucho más simples de reconocer que las víboras venenosas
c) Que el color rojo capta más la atención que el color verde
d) Que los humanos ven mejor de noche que durante el día

11. ¿Qué revela el experimento en el que bebés de pocos meses se sorprenden ante eventos que violan leyes físicas?
a) Que los bebés no pueden distinguir objetos de distinto tamaño o forma
b) Que los bebés prefieren los sonidos graves a los agudos
*c) Que los bebés ya tienen hipótesis previas sobre el mundo físico
d) Que los bebés imitan automáticamente los gestos de los adultos

12. En el experimento con la pelota de color, ¿qué indica que los bebés miren más tiempo cuando cae la bola menos probable?
a) Que los bebés distinguen los colores primarios sin dificultad
*b) Que los bebés tienen una noción intuitiva de la probabilidad
c) Que los bebés prefieren los objetos que se mueven lentamente
d) Que los bebés memorizan la posición exacta de cada objeto

13. Según la clase, ¿a qué otra modalidad sensorial generalizan los bebés su sentido numérico?
a) A la modalidad táctil, distinguiendo distintas texturas por cantidad total percibida
b) A la modalidad olfativa, distinguiendo aromas por intensidad
c) A la modalidad gustativa, distinguiendo sabores por cantidad
*d) A la modalidad auditiva, prefiriendo imágenes con la misma cantidad

14. ¿Qué mostró el estudio sobre precursores del razonamiento lógico en bebés preverbales?
*a) Que los bebés tienen nociones de sumas, restas y conservación de las cosas
b) Que los bebés pueden resolver pequeñas ecuaciones simples antes de aprender a hablar correctamente
c) Que los bebés reconocen letras del alfabeto desde bastante temprano
d) Que los bebés distinguen lenguas extranjeras de su lengua materna

15. Según la clase, ¿desde cuándo mostramos preferencia por estímulos con forma de cara?
a) Recién a partir de los tres años de edad
b) Solo después de aprender a reconocer expresiones emocionales
*c) Desde antes de nacer, incluso de forma intrauterina
d) Únicamente después de los seis meses de vida

### Tema: Comportamiento instintivo

16. ¿Cómo se define un comportamiento instintivo según la clase?
a) Como una habilidad que se aprende únicamente en la escuela formal y estructurada
*b) Como un comportamiento que aparece en humanos típicos con desarrollo típico
c) Como una conducta que solo aparece en animales no humanos
d) Como un comportamiento que depende únicamente de la cultura

17. ¿Qué ejemplo de comportamiento instintivo que habilita aprendizajes más complejos menciona la clase?
a) Que los bebés instintivamente evitan las alturas desde el nacimiento
b) Que los bebés instintivamente reconocen números desde una edad muy temprana en la vida
c) Que los bebés instintivamente imitan sonidos de animales conocidos y comunes
*d) Que los bebés instintivamente prestan atención al habla para aprender una lengua

### Tema: Evolución y selección natural

18. ¿Cómo se define la evolución según la clase?
*a) Como el cambio en los organismos de una población en el tiempo
b) Como el aumento en el tamaño del cerebro de una especie
c) Como la extinción progresiva y natural de las especies menos aptas para sobrevivir
d) Como la aparición espontánea de nuevas especies en un día

19. ¿Cómo se define la selección natural según la clase?
a) Como un tipo de mutación genética totalmente espontánea y aleatoria
b) Como el proceso mediante el cual todos los genes se copian sin ningún error
*c) Como el mecanismo particular de evolución que explica la evolución de las especies
d) Como la elección consciente que hacen los animales de su pareja

20. Según Darwin, ¿qué tres condiciones deben darse para que ocurra un proceso de selección natural?
a) Mutación, recombinación y extinción
*b) Variabilidad, heredabilidad y adaptabilidad
c) Competencia, cooperación y territorialidad
d) Reproducción, migración y aislamiento

21. ¿Cuál es la principal diferencia entre la teoría de Lamarck y la de Darwin?
a) Lamarck negaba que existiera la herencia biológica en absoluto
*b) Para Lamarck los rasgos adquiridos se heredan; para Darwin no
c) Darwin negaba que las especies pudieran extinguirse con el tiempo
d) Lamarck proponía que solo las plantas evolucionan por selección natural

### Tema: El concepto de gen

22. ¿De qué dos observaciones surgió históricamente el concepto de gen, según la clase?
a) Que los animales y las plantas comparten exactamente el mismo tipo de ADN en su estructura
b) Que las mutaciones ocurren con mucha mayor frecuencia en la vejez avanzada
c) Que el ambiente modifica de forma directa la apariencia física de los hijos
*d) Que padres e hijos se parecen, y en aspectos heredados de forma independiente

23. ¿Cómo se define un gen en términos clásicos, según la clase?
*a) Como la unidad mínima e irreductible de herencia
b) Como la totalidad del ADN de un organismo
c) Como una proteína que regula el metabolismo celular
d) Como el conjunto de cromosomas de una célula

24. Según la clase, ¿de qué es independiente el concepto de gen?
a) De la existencia de posibles mutaciones dentro de la población
b) De la capacidad reproductiva del organismo portador
*c) Del sustrato físico donde se guarda la información hereditaria
d) Del número de cromosomas presentes en cada célula

### Tema: Selección de comportamientos: adaptaciones y subproductos

25. Según la clase, ¿mediante qué mecanismo se seleccionan los comportamientos a lo largo de la evolución?
a) Mediante la imitación directa y constante de comportamientos entre distintos individuos de la misma especie
b) Mediante el aprendizaje acumulado durante toda la vida de cada individuo
c) Mediante la selección artificial realizada por los propios seres humanos actuales
*d) Mediante la selección de genes que influyen en la estructura del cerebro

26. Según la clase, ¿qué tres "frutos" puede tener un proceso evolutivo darwinista?
*a) Adaptaciones, subproductos y ruido
b) Mutaciones, selecciones y extinciones
c) Genes, cromosomas y proteínas
d) Especies, poblaciones e individuos

27. ¿Cuál de los siguientes ejemplos se menciona en la clase como una adaptación biológica?
a) El color rojo característico de la sangre humana
b) El ombligo que queda tras el nacimiento
*c) El cordón umbilical durante el embarazo
d) El apéndice vermiforme del intestino humano

28. ¿Cuál de los siguientes ejemplos se menciona en la clase como un subproducto evolutivo?
a) La hemoglobina de la sangre
*b) El ombligo que queda tras el nacimiento
c) El cordón umbilical durante el embarazo
d) La capacidad pulmonar para respirar

29. ¿Cómo se define un rasgo o comportamiento adaptativo según la clase?
a) Como cualquier conducta que resulta agradable y placentera para el individuo
b) Como cualquier rasgo biológico presente en todos los mamíferos conocidos
c) Como cualquier comportamiento aprendido a lo largo de toda la infancia temprana del individuo
*d) Como aquel que aumentó el éxito reproductivo del organismo en su ambiente

30. ¿Cuál de los siguientes se menciona en la clase como ejemplo de comportamiento adaptativo humano?
*a) El impulso sexual como motor reproductivo
b) El gusto por el fútbol como pasatiempo
c) Las adicciones a distintas sustancias químicas
d) El uso de métodos anticonceptivos modernos

31. ¿Cómo se define un comportamiento subproducto (byproduct) según la clase?
a) Como un rasgo que mejora de forma directa la supervivencia
b) Como un rasgo presente únicamente en los primates superiores actuales
*c) Como consecuencia de rasgos adaptativos sin ser en sí una ventaja evolutiva
d) Como un rasgo que solo aparece bajo condiciones ambientales muy extremas y poco frecuentes

32. ¿Cuál de los siguientes se menciona en la clase como ejemplo de comportamiento subproducto humano?
a) El apego paterno-materno hacia los hijos pequeños
*b) Las adicciones a distintas sustancias y conductas
c) El impulso sexual con fines reproductivos
d) El enamoramiento romántico entre dos personas

### Tema: Módulos mentales y áreas cerebrales especializadas

33. ¿Cómo se define un módulo mental o cerebral según la clase?
a) Como una región del cerebro dedicada solo al lenguaje
b) Como una parte del cerebro que solo se activa dormido
c) Como el conjunto total de neuronas del cerebro
*d) Como una estructura cerebral innata para procesar información específica

34. Según la clase, ¿qué áreas cerebrales se mencionan como módulos relacionados al lenguaje?
*a) El área de Broca y el área de Wernicke
b) El hipocampo y la amígdala cerebral profunda
c) El cerebelo y el tronco encefálico inferior
d) La corteza visual primaria y la corteza auditiva secundaria del cerebro

35. Según la clase, ¿a qué función cognitiva se asocia el surco intraparietal (intraparietal sulcus)?
a) Al reconocimiento de caras familiares y conocidas
b) Al procesamiento del lenguaje hablado y escrito
*c) A la numerosidad, es decir, la noción de cantidad
d) A la coordinación motora fina de las manos

36. ¿Qué dilema se menciona en la clase como ejemplo de módulo moral?
a) El dilema del prisionero en teoría de juegos
*b) El dilema del tranvía, sobre desviar o no un vehículo
c) El dilema del huevo y la gallina en la biología evolutiva
d) El dilema de Monty Hall sobre probabilidades condicionales

### Tema: Plasticidad cerebral y aprendizaje neuronal

37. ¿Cómo se define la plasticidad cerebral según la clase?
a) Como la cantidad total de neuronas presentes en todo el cerebro humano
b) Como la velocidad de conducción de los impulsos nerviosos
c) Como la resistencia del cerebro a sufrir cualquier daño
*d) Como la capacidad del sistema nervioso de cambiar con la experiencia

38. ¿Qué establece el principio de Hebb mencionado en la clase?
*a) Que las neuronas que se activan juntas terminan conectándose entre sí
b) Que las neuronas más grandes procesan la información más rápido
c) Que las neuronas nunca pueden formar nuevas conexiones sinápticas
d) Que las neuronas se destruyen si no reciben ningún estímulo

39. Según la clase, ¿con qué proceso biológico se identifica al aprendizaje?
a) Con la producción de nuevas neuronas cada día
b) Con el aumento del tamaño total del cerebro
*c) Con la plasticidad sináptica entre las neuronas
d) Con la eliminación completa de neuronas antiguas

40. ¿Cómo se define el reciclaje neuronal según la clase?
a) Como la eliminación de circuitos cerebrales que ya no se usan
*b) Como la reutilización de circuitos preexistentes para aprender habilidades culturales recientes
c) Como la creación de neuronas completamente nuevas para cada habilidad
d) Como la transferencia de memorias entre distintas regiones del cerebro humano adulto

41. Según el desarrollo de la clase, ¿qué explicaría la "paradoja de la lectura"?
a) Que la lectura es en realidad un comportamiento instintivo
b) Que la selección natural favoreció directamente la lectura
c) Que los genes de la lectura mutaron muy recientemente
*d) Que la lectura reutiliza mediante reciclaje neuronal circuitos ya existentes

### Tema: Memoria de trabajo y capacidades cognitivas

42. Según la clase, ¿cuáles son las dos limitaciones principales de la memoria de trabajo humana?
a) Alta capacidad y baja velocidad de acceso a la información
b) Baja capacidad y alta durabilidad de la información guardada
*c) Baja capacidad y baja durabilidad de la información guardada
d) Alta capacidad y alta durabilidad sin ningún tipo de límite

43. ¿Qué característica distingue a la memoria de trabajo de largo plazo, según la clase?
a) Que solo puede almacenar información durante unos pocos segundos
*b) Que tiene una capacidad prácticamente ilimitada y se evoca con rapidez
c) Que se borra por completo cada vez que dormimos
d) Que solo funciona correctamente durante la niñez temprana

44. Según la clase, ¿qué es lo que realmente permite pensar mejor, más allá del acceso rápido a información externa?
a) La cantidad total de dispositivos electrónicos que usa una persona a diario
b) La velocidad de la conexión a internet disponible
c) La cantidad de búsquedas que se hacen por día
*d) La información bien consolidada en la memoria de largo plazo

45. Según la cita de Stanislas Dehaene mencionada en la clase, ¿qué afirma sobre el cerebro al nacer?
*a) Que el cerebro no es una tabla rasa, sino que nace con circuitos organizados
b) Que el cerebro nace completamente vacío y se llena solo con la experiencia
c) Que el cerebro deja de cambiar por completo después del nacimiento
d) Que el cerebro solo puede aprender lenguaje durante los primeros meses

46. Según el paper mencionado sobre atletas mentales ("mental athletes"), ¿qué argumentan los autores sobre sus habilidades?
a) Que sus habilidades son completamente innatas y no pueden entrenarse
b) Que sus habilidades dependen de una estructura cerebral única e irrepetible
*c) Que sus habilidades se basan en trucos que cualquier persona puede aprender
d) Que sus habilidades solo pueden desarrollarse durante la infancia temprana
`;
