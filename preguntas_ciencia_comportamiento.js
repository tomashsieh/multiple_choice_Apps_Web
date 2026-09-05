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
 * con un sufijo propio (acá "_CCA") para no chocar con los de otras materias
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

const MATERIA_ID_CCA = "ciencia-comportamiento-aplicada";
const MATERIA_NOMBRE_CCA = "Ciencia del Comportamiento Aplicada";

const PREGUNTAS_RAW_CCA = `
## Nivel 1: Esther Dufló y la Ciencia de las Ideas

### Tema: Duflo: el problema de evaluar intervenciones sociales

1. ¿Qué describe mejor el obstáculo principal que Duflo señala al comienzo de la charla para combatir la pobreza?
*a) La falta de evidencia confiable sobre qué intervenciones de ayuda funcionan
b) La falta de fondos disponibles para financiar programas de ayuda internacional
c) La falta de acuerdo político entre los distintos países donantes
d) La falta de personal capacitado dentro de las organizaciones internacionales de ayuda humanitaria

2. Duflo considera mal planteada la pregunta sobre si la ayuda internacional beneficia o perjudica a África porque...
a) no existen datos económicos suficientes sobre el continente africano
*b) no hay forma de construir un contrafáctico para poder comparar
c) los gobiernos africanos no autorizan ese tipo de estudios
d) la pregunta ya fue respondida por estudios académicos previos

3. La analogía que usa Duflo con la medicina medieval sirve para ilustrar...
a) los avances que trajo la ciencia médica moderna a la ayuda social
b) la importancia de combinar varios tratamientos médicos al mismo tiempo
*c) el riesgo de atribuir mérito a una intervención sin evidencia real
d) la resistencia histórica de los médicos a adoptar nuevos métodos

4. ¿Qué método propone Duflo para evaluar intervenciones sociales, tomado de la medicina?
a) Los estudios de caso cualitativos aplicados a comunidades específicas
b) Las encuestas de opinión realizadas a gran escala poblacional
c) Los paneles de expertos internacionales convocados para cada caso
*d) Los ensayos aleatorizados controlados, igual que en medicina

### Tema: Casos de Duflo: inmunización, mosquiteros y educación

5. El "problema de la última milla" en inmunización infantil se refiere a...
*a) que las familias no llevan a sus hijos a vacunarse aunque haya vacunas cerca
b) que no hay suficientes vacunas producidas para toda la población infantil del país
c) que los laboratorios tardan mucho tiempo en distribuir las nuevas vacunas producidas
d) que las familias desconfían profundamente y desde hace mucho tiempo de la medicina occidental moderna

6. ¿Cuál fue el incentivo que se ofreció a cambio de cada inmunización en el experimento que describe Duflo?
a) Un pequeño pago en efectivo entregado en el momento
*b) Un kilo de lentejas entregado por cada inmunización aplicada
c) Una entrada gratuita para usar el centro de salud
d) Una ración semanal de arroz y aceite para la familia

7. Según Duflo, ¿por qué el costo por inmunización lograda terminó siendo más bajo con el incentivo de lentejas?
a) Porque las lentejas resultaron mucho más baratas que otros insumos médicos habituales
b) Porque las familias terminaron pagando parte del costo del incentivo
c) Porque se redujo la cantidad de campamentos de vacunación necesarios
*d) Porque con el mismo personal pagado se lograron muchas más vacunaciones

8. ¿Qué encontró Duflo respecto al uso de los mosquiteros entregados gratis frente a los pagados?
a) Los que pagaron por su propio mosquitero lo usaron con mucha más frecuencia
*b) Se usaron con la misma frecuencia, sin importar si fueron gratis o pagos
c) Los mosquiteros gratis se usaron mayormente como redes de pesca
d) Los mosquiteros gratis terminaron revendiéndose muy rápido en el mercado informal de la región

9. En el largo plazo, quienes habían recibido el mosquitero gratis...
a) mostraron menor disposición a comprar mosquiteros adicionales por su propia cuenta después
b) dejaron de usar cualquier mosquitero por completo al año siguiente
*c) mostraron mayor probabilidad de comprar mosquiteros adicionales por su cuenta
d) exigieron que el gobierno les siguiera regalando mosquiteros cada año

10. Entre las intervenciones para aumentar la asistencia escolar que compara Duflo, ¿cuál resultó de las más costo-efectivas?
a) Construir muchas más escuelas cerca de las comunidades rurales más alejadas
b) Entregar uniformes escolares gratuitos a cada estudiante inscripto
c) Contratar más docentes para cada escuela de la zona
*d) Desparasitar a los chicos para combatir los parásitos intestinales

11. Según las cifras que menciona Duflo, ¿qué se estima que generan cada 100 dólares invertidos en desparasitación?
*a) Entre 30 y 40 años adicionales de escolarización acumulados en la población
b) Entre 5 y 10 vacunas infantiles adicionales aplicadas en la misma comunidad rural
c) Un aumento cercano al 10% en la matrícula de una escuela
d) La construcción de un aula adicional cada dos años aproximadamente

12. ¿Cuál es el mensaje general que Duflo busca transmitir con los tres casos que presenta?
a) Que la ayuda internacional siempre resulta ser la solución más efectiva posible
*b) Que las soluciones efectivas no siempre son las intuitivas, hay que testearlas
c) Que los gobiernos locales deben decidir sin ninguna injerencia extranjera
d) Que las ONG resultan siempre mucho más eficientes que los programas estatales locales

### Tema: Orígenes de la economía del comportamiento

13. El artículo "Prospect Theory" de Kahneman y Tversky se destaca principalmente por...
a) proponer que la ayuda gratuita reduce el valor percibido de los bienes
b) introducir el concepto de ensayo aleatorizado controlado en la economía
*c) mostrar con experimentos que se violan axiomas de la utilidad esperada
d) demostrar que los incentivos monetarios no modifican el comportamiento humano

14. El libro de Richard Thaler llamado "Misbehaving" ("Portarse mal") se refiere a...
a) las conductas antiéticas de algunas empresas multinacionales conocidas
b) las fallas habituales que tienen los gobiernos al diseñar sus políticas públicas
c) el comportamiento imprevisible que suelen tener los mercados financieros
*d) los errores típicos de percepción y decisión del Homo Sapiens

15. La predicción de Thaler sobre la evolución del "Homo Economicus" plantea que...
*a) el Homo Economicus va a evolucionar hacia el Homo Sapiens en los modelos
b) los modelos económicos van a dejar por completo de usar la racionalidad
c) los seres humanos se van a volver cada vez más racionales
d) la economía del comportamiento va a reemplazar por completo a la microeconomía en el futuro

16. Según el texto, un sesgo (en el sentido de la economía del comportamiento) se define como...
a) un error aleatorio que no sigue ningún patrón reconocible
*b) una desviación sistemática y predecible en la forma de decidir
c) una preferencia personal sin relación alguna con la racionalidad
d) una falla que afecta exclusivamente a las poblaciones de bajos ingresos

17. Las "nudge units" mencionadas en la introducción son...
a) laboratorios académicos dedicados exclusivamente a publicar papers científicos especializados
b) empresas privadas de consultoría en marketing y publicidad
*c) organizaciones que aplican la economía del comportamiento a políticas
d) organismos internacionales que financian programas globales de vacunación en distintos países

### Tema: Sesgos cognitivos y contexto de decisión

18. El experimento con docentes ecuatorianos sobre el "efecto orden" consistió en...
*a) cambiar el orden en que se listaban las escuelas en la plataforma
b) ofrecer un bono económico a quienes eligieran escuelas vulnerables
c) obligar a un grupo de docentes a trabajar en zonas vulnerables
d) comparar el desempeño de los docentes según su año de egreso universitario reciente

19. En el ejemplo hipotético del comité de salud, ¿qué resultado tuvo la política de duplicar hospitales y centros de atención primaria?
a) Redujo las muertes cardiovasculares exactamente en el 20% previsto
*b) Tuvo un impacto modesto, casi imperceptible, sobre las muertes cardiovasculares
c) Aumentó de forma notable la cantidad de consultas preventivas
d) Fracasó por falta de financiamiento suficiente para poder completarla a tiempo

20. En el ejemplo de Luis, ¿por qué la política de más infraestructura funcionó bien con él?
a) Porque Luis tenía sesgo de sobreconfianza, lo cual lo hizo actuar rápido
b) Porque Luis tenía un ingreso más alto que el resto de la población
*c) Porque Luis no tenía las anomalías de decisión que sí tienen otras personas
d) Porque Luis ya conocía personalmente al médico del nuevo centro

21. En la "ciudad de gente normal", ¿qué anomalía hace que unas 30 de las 100 personas ni siquiera consideren estar en riesgo?
a) La inconsistencia temporal de las preferencias de cada persona
b) La procrastinación habitual en la toma de decisiones cotidianas
c) La falta de atención limitada frente a otros problemas urgentes
*d) El sesgo de sobreconfianza o sobreoptimismo respecto al propio riesgo

22. Los "factores aparentemente irrelevantes" que menciona Thaler, ilustrados con los 15 minutos de espera telefónica, muestran que...
*a) pequeñas trabas administrativas pueden tener un impacto desproporcionado sobre la acción
b) las personas siempre priorizan lo urgente por encima de lo importante
c) los llamados telefónicos son el método menos efectivo para pedir turnos
d) el tiempo de espera no afecta a quienes evaluaron bien su riesgo

### Tema: Experimentos y aplicaciones de la economía del comportamiento

23. El trabajo de Eric Bettinger sobre formularios de becas universitarias mostró que...
a) simplificar el trámite no tuvo ningún efecto sobre la cantidad de postulantes
*b) reducir la carga administrativa aumentó fuertemente la cantidad de postulantes
c) los formularios más largos filtraban mejor a los candidatos calificados
d) el monto de la beca era el único factor relevante para postularse

24. El sesgo del presente (preferencias temporalmente inconsistentes), ilustrado con el ejemplo de la panadería, hace que las personas...
a) sean igual de pacientes en el presente que en el futuro
b) eviten de forma sistemática cualquier tipo de tentación cotidiana
*c) sean impacientes en el presente pero se crean pacientes a futuro
d) prioricen siempre las recomendaciones médicas que acaban de recibir

25. En el estudio de Sara Banks sobre campañas de mamografías, el mensaje con encuadre de "pérdida" resultó...
a) contraproducente, porque generaba un fuerte rechazo entre las mujeres
b) igual de efectivo que no enviar ningún mensaje a las mujeres
c) menos efectivo que el encuadre de "ganancia" para motivar el chequeo
*d) más efectivo que el encuadre de "ganancia" para motivar el chequeo

26. El experimento de Altmann y Traxler con pacientes odontológicos alemanes evaluó el efecto de...
*a) enviar recordatorios por SMS antes de la fecha del turno
b) ofrecer descuentos económicos a quienes asistieran al chequeo dental
c) reducir el tiempo de espera dentro de la sala de espera
d) cambiar el horario habitual de atención del consultorio odontológico

27. Una "herramienta de planificación" (planning prompt), como la usada en el experimento de Milkman sobre colonoscopías, consiste en...
a) enviar un recordatorio genérico sin pedir ninguna acción adicional
*b) invitar a completar día, hora y médico a cargo de la cita
c) ofrecer un incentivo monetario a quien asista a la cita
d) programar automáticamente la cita sin consultar antes a la persona

28. El producto CARES, diseñado por Gine, Karlan y Zinman, es un dispositivo de compromiso que ayuda a...
a) ahorrar dinero pensando en gastos médicos futuros imprevistos
b) recordar los turnos médicos programados mediante mensajes de texto
*c) dejar de fumar depositando dinero en una cuenta bloqueada
d) financiar micronutrientes para niños con riesgo de anemia

29. En el experimento de Charness y Gneezy sobre asistencia al gimnasio, ¿qué se observó respecto al incentivo monetario?
a) El efecto desapareció apenas terminó el período de incentivos
b) Solo funcionó en estudiantes que ya iban regularmente al gimnasio
c) El incentivo tuvo efecto únicamente durante la primera semana
*d) El aumento en la asistencia se mantuvo tras terminar los incentivos

30. Un "paquete de tentación", como el experimento de Milkman con audiolibros disponibles solo en el gimnasio, busca...
*a) asociar una actividad deseable pero poco tentadora con algo placentero
b) reemplazar por completo los incentivos monetarios tradicionales usados antes
c) reducir el tiempo total que la persona pasa haciendo ejercicio
d) medir el nivel de autocontrol de cada participante antes de empezar

## Nivel 2: Ciencias del Comportamiento y el Origen del Diseño

### Tema: Diseño y Behavioral Design

1. ¿Qué representa el concepto de "Behavioral Design" según el material?
*a) La intersección entre las ciencias del comportamiento y el design thinking
b) Una técnica de investigación de mercado basada en encuestas
c) Una rama exclusiva del diseño industrial centrada en la ergonomía
d) Un método de programación específico para el diseño de interfaces de usuario

2. Según la definición presentada en la clase, ¿qué implica el acto de diseñar?
a) Copiar soluciones ya existentes sin modificar ningún elemento nuevo
*b) Examinar una situación existente, imaginar una mejor y actuar para lograrla
c) Imaginar posibilidades sin necesidad alguna de implementarlas nunca
d) Registrar únicamente los problemas de un sistema sin proponer ningún cambio concreto

3. El diagrama que vincula "mente" y "entornos" en el material ilustra que...
a) la mente y los entornos funcionan de manera completamente independiente
b) los entornos determinan la mente sin ningún tipo de retroalimentación
*c) la mente genera entornos y esos entornos también transforman la mente
d) la mente solo puede modificar entornos digitales, y nunca los entornos físicos

4. Según el material, ¿cuál es una característica que distingue el diseño humano del de otras especies?
a) Sigue siempre un programa instintivo heredado genéticamente sin cambios
*b) Se comunica a través de abstracciones como planos, diagramas o modelos
c) Solo puede aplicarse a la construcción de refugios físicos
d) Depende exclusivamente de la imitación de comportamientos previos ya observados con frecuencia

5. ¿Qué idea transmite la frase "todo está diseñado, pero no todo está bien diseñado"?
a) Que solo los objetos de uso cotidiano fueron diseñados intencionalmente
b) Que el mal diseño ocurre únicamente en algunos contextos digitales actuales
*c) Que los entornos son resultado de intervenciones humanas, no siempre efectivas
d) Que la mayoría de los entornos actuales carece de intervención humana directa

6. Según el material, ¿qué relación se plantea entre diseño, ciencias del comportamiento y behavioral design?
a) Son tres disciplinas completamente independientes sin relación entre sí
b) El behavioral design reemplaza por completo al diseño tradicional
*c) El behavioral design mejora una situación modificando el contexto de las decisiones
d) El behavioral design se limita únicamente al ámbito de la publicidad comercial actual

### Tema: Ciencias del comportamiento: enfoque y conceptos clave

7. ¿Qué combinación describe el enfoque de las ciencias del comportamiento según el material?
a) Intuición personal combinada con las opiniones de varios expertos reconocidos públicamente
b) Normativa legal combinada con encuestas de opinión pública
c) Tradición cultural combinada con reglas de convivencia social
*d) Método científico y evidencia empírica para poner a prueba hipótesis

8. ¿Qué diferencia plantea el material entre el Homo Economicus y el Homo Heuristicus?
a) El primero toma decisiones grupales y el segundo decisiones individuales
*b) El primero supone racionalidad plena y el segundo racionalidad limitada
c) El primero es un concepto biológico y el segundo un concepto legal
d) El primero prioriza el largo plazo y el segundo el corto plazo

9. ¿Cómo se define la economía del comportamiento en el material?
a) Como la rama de la economía que estudia únicamente los grandes mercados financieros internacionales
b) Como una teoría que rechaza por completo los aportes de la economía clásica
*c) Como la rama de la economía que incorpora psicología para entender las decisiones
d) Como el estudio matemático de la oferta y la demanda sin variables humanas

10. ¿Qué plantea el material respecto a la relación entre creencias, conocimientos y comportamiento?
a) Que las creencias determinan siempre el comportamiento de manera directa
b) Que el comportamiento humano depende únicamente de factores genéticos heredados y prácticamente fijos
c) Que los conocimientos técnicos siempre garantizan decisiones plenamente racionales y correctas
*d) Que las creencias, conocimientos y gustos no siempre coinciden con el comportamiento

11. ¿Cuáles son las tres etapas que propone el material para trabajar con las ciencias del comportamiento?
*a) Identificar, entender y acortar las brechas
b) Diseñar, prototipar y testear soluciones concretas rápidamente
c) Observar, medir y publicar resultados
d) Planificar, ejecutar y evaluar acciones

### Tema: Decisiones, heurísticas y atención

12. ¿Por qué la preferencia adaptativa por alimentos dulces y grasos puede resultar perjudicial hoy en día?
a) Porque esos alimentos ya no aportan ningún tipo de energía al cuerpo
b) Porque el cuerpo humano dejó de digerir azúcares y grasas
c) Porque esa preferencia desapareció por completo en la evolución reciente
*d) Porque hoy esos alimentos abundan y el gasto energético es bajo

13. ¿Qué plantea el material sobre el contexto en el que tomamos decisiones?
a) Que las decisiones se toman siempre de manera aislada del entorno
*b) Que tomamos decisiones en entornos complejos con estímulos que compiten
c) Que el entorno no influye en absoluto en las decisiones humanas
d) Que solo los entornos digitales afectan la toma de decisiones

14. Según el material, ¿por qué no siempre realizamos análisis profundos antes de decidir?
a) Porque los análisis profundos no aportan ningún beneficio a las decisiones
b) Porque el cerebro humano carece de capacidad de razonamiento complejo
*c) Porque los análisis detenidos y profundos requieren mucha energía cognitiva
d) Porque las decisiones importantes se toman siempre de forma colectiva

15. ¿Qué concepto ilustran el experimento y el libro "El gorila invisible" mencionados en el material?
a) La memoria a largo plazo humana es prácticamente ilimitada casi siempre
b) Las personas siempre notan cualquier cambio en su entorno visual
c) La atención mejora notablemente bajo presión de tiempo
*d) Nuestra atención es limitada y podemos no percibir estímulos evidentes

16. ¿Qué buscaba lograr la imagen de una mosca grabada en los urinarios del aeropuerto de Schiphol?
*a) Orientar la puntería de los usuarios para reducir la suciedad
b) Decorar el espacio con un diseño artístico llamativo
c) Medir el caudal de agua utilizado en cada urinario
d) Advertir sobre un posible riesgo sanitario mediante una señal de alerta visible

17. Según el material, además de físicos, ¿qué otro tipo de entornos pueden influir en nuestras decisiones?
a) Únicamente entornos climáticos y geográficos
*b) Entornos digitales, sociales, económicos, temporales y comunicacionales
c) Solamente entornos relacionados con la temperatura ambiente exterior
d) Exclusivamente entornos vinculados a la legislación vigente

## Nivel 3: ¿Cómo tomamos decisiones? (Sesgos e Ilusiones Perceptuales)

### Tema: Percepción e ilusiones visuales

1. ¿Qué describe mejor el concepto de "percepción"?
a) El registro exacto de los estímulos externos, sin intervención del cerebro
b) La capacidad de recordar con precisión información sensorial almacenada previamente
*c) El proceso por el cual el cerebro interpreta la información sensorial recibida
d) La reacción muscular automática e involuntaria frente a un estímulo externo repentino e inesperado

2. ¿Qué explica el fenómeno de "el vestido" (que algunas personas ven blanco/dorado y otras azul/negro)?
*a) Diferencias en los priors de iluminación que el cerebro usa para descontar la luz ambiental
b) Una falla en la retina que afecta de igual manera a todas las personas
c) Un defecto de fabricación en la tela que altera el pigmento real de forma permanente y visible
d) Una variación genética poco frecuente que modifica la cantidad de conos en el ojo

3. Según los priors de iluminación, ¿por qué algunas personas perciben el vestido como blanco/dorado?
a) Porque asumen que la prenda está bajo luz incandescente y descuentan el amarillo
b) Porque perciben el color sin aplicar ningún tipo de corrección lumínica al objeto
c) Porque identifican primero la textura de la tela antes de procesar su color
*d) Porque asumen una sombra bajo cielo azul y descuentan la luz azul percibida

4. ¿Qué plantea el "factor cronotipo" respecto a la percepción del vestido?
a) Los "búhos nocturnos" tienden a percibir blanco/dorado por su exposición a luz artificial
*b) Mujeres y personas mayores tienden a percibir blanco/dorado por mayor exposición a la luz diurna
c) Los hombres jóvenes tienden a percibir blanco/dorado por su mayor exposición reciente y constante a pantallas digitales
d) Las personas que trabajan de noche perciben siempre azul/negro sin ninguna excepción posible

5. ¿Qué demuestra la ilusión de los círculos (el círculo naranja rodeado de círculos grandes frente al rodeado de círculos chicos)?
a) Que el color de un objeto se percibe siempre de forma idéntica en cualquier contexto y situación posible
*b) Que el tamaño percibido de un objeto depende del contexto de los elementos que lo rodean
c) Que la percepción visual depende exclusivamente de la distancia física real que separa al objeto
d) Que dos objetos idénticos son siempre percibidos como iguales sin importar el entorno que los rodea

6. ¿Qué es la anamorfosis?
a) Una técnica que modifica el color real de una imagen según la luz ambiental
b) Un efecto sonoro que altera la percepción de una imagen en movimiento
c) Una ilusión que hace que dos figuras idénticas parezcan de tamaños distintos
*d) Una distorsión visual que solo se percibe correctamente desde un punto de vista específico

7. ¿Qué mostró el estudio que comparó la percepción de ilusiones visuales entre el Reino Unido/Estados Unidos y comunidades de Namibia?
*a) Que las diferencias en el entorno construido moldean cómo se perciben ciertas ilusiones visuales
b) Que la percepción de ilusiones visuales es idéntica en todas las culturas del mundo
c) Que solo las personas con estudios superiores logran ver correctamente las ilusiones visuales
d) Que la edad es el único factor que determina la percepción en una ilusión visual

8. ¿Qué plantea la clase respecto al supuesto de que "todos vemos el mundo de la misma manera"?
a) Confirma que todos los seres humanos ven el mundo exactamente de la misma manera
b) Demuestra que la percepción visual no depende en ningún grado del entorno cultural
*c) Asume universalidad, pero en realidad construye lo percibido a partir de expectativas aprendidas
d) Establece que la fisiología ocular varía tanto que invalida cualquier tipo de generalización

### Tema: Fenómenos perceptuales: pareidolia y sinestesia

9. ¿Qué es la pareidolia?
*a) La tendencia a percibir patrones significativos, como rostros, en estímulos ambiguos o aleatorios
b) La tendencia a recordar con más claridad y detalle las caras familiares que las desconocidas
c) La incapacidad de distinguir rostros humanos de otros objetos con formas similares
d) La preferencia por observar imágenes simétricas antes que imágenes asimétricas o irregulares

10. ¿Qué ventaja evolutiva se asocia a la pareidolia?
a) Permitía reconocer con rapidez el color de los alimentos maduros disponibles
b) Facilitaba recordar con precisión la ubicación exacta de las fuentes de agua
*c) Permitía identificar rápidamente depredadores, compañeros o señales sociales importantes cercanas
d) Ayudaba a distinguir con rapidez los sonidos peligrosos dentro del ruido ambiental

11. ¿Qué es la transmodalidad o sinestesia?
a) La capacidad de ignorar un sentido para concentrarse mejor en otro sentido
*b) La estimulación de un sentido que provoca una respuesta automática e involuntaria en otro
c) La pérdida temporal de un sentido tras una fuerte sobreestimulación sensorial
d) El entrenamiento voluntario de un sentido para mejorar su precisión con el paso del tiempo

12. ¿Qué ilustra el ejemplo de las figuras "splat" y "star" asociadas a distintos sonidos?
a) Que las personas asocian formas redondeadas con sonidos agudos y formas puntiagudas con graves
b) Que las formas geométricas no generan ninguna asociación con el lenguaje hablado
c) Que solo los niños pequeños son capaces de asociar formas con sonidos concretos
*d) Que existe una asociación entre ciertas formas visuales y ciertos sonidos, incluso entre culturas

13. ¿Qué demuestra el efecto McGurk?
a) Demuestra que el sonido que escuchamos nunca es influido por lo que vemos
b) Demuestra que las personas sordas perciben el habla igual que las personas oyentes
c) Demuestra que el tacto es el sentido que más influye sobre toda la percepción auditiva
*d) Demuestra cómo la información visual puede alterar la percepción de los sonidos que escuchamos

### Tema: Sesgos cognitivos en el juicio y la decisión

14. ¿Qué es el sesgo de confirmación?
*a) La tendencia a buscar e interpretar información de manera que confirme las creencias preexistentes
b) La tendencia a cambiar de opinión con facilidad ante cualquier información nueva recibida
c) La tendencia a olvidar con rapidez la información que resulta incómoda o molesta
d) La tendencia a dar el mismo peso a toda la evidencia, sin importar su origen

15. ¿Qué es el sesgo de disponibilidad?
a) La tendencia a subestimar la probabilidad de eventos que ocurrieron hace poco tiempo
b) La tendencia a recordar con la misma intensidad todos los eventos importantes, memorables o no
*c) La tendencia a sobrestimar la probabilidad de eventos que son más recientes o memorables
d) La tendencia a ignorar por completo los eventos que aparecen en los medios

16. ¿Qué es el descuento hiperbólico?
*a) La tendencia a sobrevalorar las recompensas inmediatas frente a las recompensas futuras
b) La tendencia a valorar por igual una recompensa inmediata y una recompensa futura
c) La tendencia a preferir siempre esperar más tiempo para obtener una recompensa mayor
d) La tendencia a calcular con precisión matemática el valor futuro del dinero

17. ¿Qué es el sesgo del presente?
a) La tendencia a planificar el futuro ignorando por completo las necesidades actuales
b) La tendencia a recordar el pasado con mucha más claridad y detalle que el presente
c) La tendencia a postergar indefinidamente cualquier decisión que resulte importante o compleja
*d) La tendencia a darle demasiado peso al "aquí y ahora" al momento de decidir

18. ¿Qué es el sesgo del status-quo?
a) La tendencia a buscar constantemente el cambio, incluso sin ningún motivo aparente
*b) La tendencia a preferir que las cosas permanezcan igual o mantener una decisión previa
c) La tendencia a modificar las decisiones propias ante cualquier objeción externa recibida
d) La tendencia a comparar cada decisión nueva con la opción más cara que esté disponible

19. ¿Qué describe el sesgo de norma social?
*a) La tendencia a seguir lo que se cree que es "normal" o aceptado por la mayoría
b) La tendencia a actuar siempre en contra de lo que hace la mayoría del grupo social concreto
c) La tendencia a ignorar por completo las opiniones ajenas al momento de decidir
d) La tendencia a modificar las normas sociales según la conveniencia propia del momento

20. En el ejemplo de la factura de energía que compara el consumo propio con el de los vecinos eficientes, ¿qué mecanismo se está utilizando?
a) Sesgo de anclaje, al mostrar el precio original tachado junto al precio final
b) Efecto de dotación, al hacer que la persona valore más su propio consumo
*c) Norma social, al comparar el consumo propio con el de los vecinos eficientes
d) Sesgo de autoridad, al presentar la información como proveniente de un experto

21. ¿Qué es el sesgo de anclaje?
a) La tendencia a ignorar cualquier información numérica al momento de tomar una decisión
b) La tendencia a comparar siempre el precio de un producto con el de la competencia
*c) La tendencia a depender demasiado de la primera información recibida al tomar decisiones
d) La tendencia a rechazar ofertas que parecen demasiado buenas para ser verdad

22. ¿Qué es el efecto anzuelo (decoy effect)?
a) Ocurre cuando se elimina una opción intermedia para simplificar la decisión final
*b) Ocurre cuando una tercera opción, menos atractiva, hace que otra opción parezca más atractiva
c) Ocurre cuando se ofrece una única opción para evitar que se comparen precios distintos entre sí
d) Ocurre cuando todas las opciones disponibles tienen exactamente el mismo precio final

23. ¿Qué es el sesgo del superviviente?
a) La tendencia a analizar solo los casos que fracasaron, ignorando los que tuvieron éxito
b) La tendencia a atribuir todos los fracasos a la mala suerte y nunca a las decisiones
c) La tendencia a considerar que el éxito y el fracaso tienen siempre la misma probabilidad
*d) La tendencia a analizar solo los casos de éxito, ignorando los que fracasaron o desaparecieron

24. ¿Qué es el sesgo de atribución?
a) La tendencia a atribuir tanto los propios éxitos como los ajenos a causas externas
*b) La tendencia a atribuir las acciones ajenas a rasgos personales y las propias a circunstancias externas
c) La tendencia a no atribuir ninguna causa a las acciones observadas en otras personas
d) La tendencia a atribuir siempre las acciones ajenas a la casualidad y no al carácter

25. ¿Qué es el sesgo del egocentrismo?
a) La tendencia a considerar que el propio esfuerzo nunca influye en los resultados obtenidos
b) La tendencia a subestimar sistemáticamente las propias capacidades frente a las de las demás personas
*c) La tendencia a sobrestimar el propio mérito en los resultados exitosos, minimizando otros factores
d) La tendencia a atribuir todos los logros propios exclusivamente a un golpe de suerte

### Tema: Esfuerzo, propiedad y aversión a la pérdida

26. ¿Cómo se resolvió el problema de "la fricción" con las premezclas para hacer tortas?
*a) Se resolvió agregando un paso, como sumar un huevo, que devolvió sensación de esfuerzo
b) Se resolvió eliminando cualquier paso adicional del proceso completo de horneado
c) Se resolvió bajando el precio del producto para compensar el esfuerzo percibido
d) Se resolvió cambiando el empaque del producto sin modificar en nada la receta

27. ¿Qué es el efecto Ikea?
a) Nos suele satisfacer más un objeto cuanto menos esfuerzo hayamos invertido en obtenerlo
b) Nos suele resultar bastante indiferente el esfuerzo personal invertido en la creación de un objeto
*c) Nos suelen satisfacer más las cosas si estamos involucrados y nos esforzamos en crearlas
d) Nos suele importar más el precio de un mueble que el proceso de armarlo

28. ¿Qué es el efecto de dotación (endowment effect)?
*a) La tendencia a valorar más un objeto simplemente porque uno mismo lo posee
b) La tendencia a valorar más un objeto cuanto más económico resulta en el mercado
c) La tendencia a valorar menos los objetos propios frente a los objetos ajenos
d) La tendencia a valorar únicamente los objetos que fueron un regalo de otra persona

29. ¿Qué es la aversión a la pérdida?
a) La tendencia a sentir el placer de ganar con mayor intensidad que el dolor de perder
b) La tendencia a evaluar ganancias y pérdidas exactamente con la misma intensidad emocional
c) La tendencia a ignorar por completo las pérdidas pequeñas al tomar una decisión
*d) La tendencia a sentir el dolor de perder más que el placer de ganar

### Tema: Persuasión, influencia social y encuadre

30. ¿Qué es el efecto Forer?
a) La tendencia a rechazar cualquier descripción de personalidad que suene general o vaga
*b) La tendencia a aceptar como válidas descripciones vagas y generales como si fueran específicas
c) La tendencia a memorizar con precisión las descripciones de personalidad que se leen
d) La tendencia a comparar la propia personalidad únicamente con la de personas cercanas

31. ¿Qué es el sesgo de autoridad?
a) La tendencia a desconfiar sistemáticamente de cualquier figura con poder o prestigio
*b) La tendencia a confiar más en una información cuando proviene de una figura de autoridad
c) La tendencia a evaluar críticamente cualquier información antes de aceptarla como válida
d) La tendencia a dar el mismo valor a una opinión, sin importar quién la exprese realmente

32. ¿Qué es el efecto halo?
a) La tendencia a formar una primera impresión negativa que nunca cambia con el tiempo
b) La tendencia a evaluar cada característica de una persona de forma completamente independiente
c) La tendencia a ignorar la primera impresión y basarse solo en el análisis posterior
*d) La tendencia a extender una cualidad positiva percibida inicialmente a otras características

33. ¿Qué es el sesgo de afinidad?
*a) La tendencia a favorecer a personas similares a uno mismo en intereses o antecedentes
b) La tendencia a favorecer a personas completamente distintas a uno mismo en todo
c) La tendencia a evaluar a todas las personas exactamente con los mismos criterios
d) La tendencia a desconfiar de las personas que comparten los propios intereses o gustos personales

34. ¿Qué es el efecto encuadre (framing)?
a) La tendencia a reaccionar siempre de la misma manera sin importar cómo se presente algo
b) La tendencia a ignorar por completo la forma en que se presentan los datos
*c) La tendencia a reaccionar de manera distinta ante una misma información según cómo se presente
d) La tendencia a preferir siempre los datos que se presentan en formato de porcentaje

35. ¿Qué es el sesgo de saliencia?
*a) La tendencia a prestar más atención a la información más destacada o llamativa
b) La tendencia a prestar más atención a la información menos visible pero más relevante
c) La tendencia a ignorar por completo cualquier estímulo que resulte visualmente llamativo
d) La tendencia a recordar con igual intensidad toda la información, sin importar su formato

### Tema: Marco teórico: Sistema 1, Sistema 2 y heurísticas

36. ¿Cómo se define un sesgo cognitivo?
a) Un error aleatorio y poco frecuente que ocurre solo en decisiones muy complejas
b) Una falla que se relaciona exclusivamente con los procesos de memoria a largo plazo
*c) Un error sistemático o tendencia en el juicio y la toma de decisiones rápidas
d) Una estrategia consciente que se usa de forma deliberada para engañar a otros

37. Según Kahneman y Tversky, ¿cómo opera el Sistema 1?
a) Opera con mucho esfuerzo consciente y se utiliza en decisiones complejas
*b) Opera sin esfuerzo, de forma automática e intuitiva, con poca energía mental
c) Opera exclusivamente cuando la persona dispone de mucho tiempo para decidir
d) Opera analizando cada opción de forma matemática antes de tomar una decisión

38. Según Kahneman y Tversky, ¿cómo opera el Sistema 2?
a) Es intuitivo, automático y opera consumiendo muy poca energía mental
b) Es el sistema responsable de todas las decisiones diarias, sin ninguna excepción
c) Es un sistema que actúa exclusivamente mientras la persona está durmiendo
*d) Requiere esfuerzo consciente y se usa en decisiones complejas y reflexivas

39. ¿Qué son las heurísticas?
a) Reglas exactas y matemáticas que garantizan siempre llegar a la decisión correcta
b) Procesos que solo se activan cuando el Sistema 2 falla por completo
c) Mecanismos que eliminan por completo la posibilidad de cometer errores de juicio
*d) Atajos mentales usados para simplificar y agilizar la toma de decisiones

40. ¿Qué describe la brecha entre intenciones y acciones?
a) Ocurre únicamente cuando la persona desconoce los beneficios reales de actuar
*b) Es la distancia entre lo que planeamos hacer y lo que realmente terminamos haciendo
c) Es la diferencia entre las creencias de una persona y sus conocimientos previos
d) Es un fenómeno que solo afecta a las decisiones que involucran dinero

## Nivel 4: Explorar y Definir

### Tema: El doble diamante: explorar y definir

1. ¿Cuál es el objetivo principal de esta etapa del proceso, según el material?
*a) Caracterizar el comportamiento actual y definir el comportamiento deseado
b) Diseñar un prototipo de la solución final
c) Medir el impacto de una intervención ya implementada
d) Elegir la mejor herramienta tecnológica disponible para escalar el proyecto

2. Según el esquema del doble diamante presentado, ¿qué etapas conforman el "espacio para el problema"?
a) Diseñar y Evaluar
*b) Explorar y Definir
c) Evaluar y Escalar
d) Definir y Diseñar

3. Dentro del "espacio para la solución", ¿qué etapas se agrupan en ese diamante?
a) Explorar y Definir
b) Descubrir y Entregar
*c) Diseñar y Evaluar
d) Definir y Escalar

4. En el doble diamante, la etapa "Descubrir" (dentro de Explorar) se caracteriza por ser:
a) Convergente, centrada en definir con precisión el problema
b) Convergente, centrada en priorizar las métricas de impacto
c) Divergente, centrada en construir un producto mínimo viable de manera rápida
*d) Divergente, centrada en mapear el sistema y el campo

5. La etapa "Entregar" (dentro de Evaluar) se caracteriza por ser convergente y enfocarse en:
*a) El producto mínimo viable y las métricas
b) La lluvia de ideas de soluciones posibles
c) El mapeo del sistema y los puntos de palanca
d) El viaje del usuario y el prototipado rápido

### Tema: Tipos de fuentes y papers académicos

6. ¿Qué diferencia principal existe entre el marco teórico y el estado del arte?
a) El marco teórico se basa siempre únicamente en datos estadísticos, mientras que el estado del arte no utiliza ninguna fuente académica
*b) El estado del arte relevanta lo investigado sobre el problema, mientras que el marco teórico define desde qué lugar se mira esa evidencia
c) El estado del arte es un paso opcional dentro de la investigación, mientras que el marco teórico resulta obligatorio en cualquier trabajo académico serio
d) El marco teórico incluye exclusivamente artículos y libros académicos, mientras que el estado del arte se limita a datasets y estadísticas

7. ¿En qué se diferencian las fuentes de contexto de las fuentes científicas?
a) Las de contexto son siempre más confiables que las científicas
b) Las fuentes científicas nunca incluyen datos cuantitativos ni estadísticas
*c) En su proceso de validación, no en su utilidad para la investigación
d) Las fuentes de contexto no pueden usarse nunca para situar un problema real

8. ¿Por qué confiamos en un artículo publicado en una revista con revisión por pares?
a) Porque fue escrito por un autor muy reconocido y con muchos seguidores
b) Porque no puede ser refutado por la comunidad científica
c) Porque no requiere contrastarse nunca con ninguna evidencia posterior
*d) Porque fue evaluado críticamente por otros expertos antes de publicarse

9. Dentro de los papers de "producción de evidencia", ¿qué distingue a un estudio experimental de uno observacional?
*a) El experimental interviene para ver qué pasa; el observacional describe cómo es el mundo
b) El experimental nunca usa datos originales propios, sino que siempre retoma información ya publicada anteriormente
c) El observacional siempre combina resultados numéricos de otros estudios ya realizados anteriormente
d) El observacional propone y valida nuevos instrumentos de medición como cuestionarios

10. ¿Cuál de los siguientes tipos de síntesis de evidencia sigue reglas explícitas de búsqueda, inclusión y exclusión para reducir sesgos?
a) La revisión narrativa clásica
*b) La revisión sistemática y explícita
c) El paper de interpretación teórica
d) El paper de metodología aplicada

11. Un meta-análisis se define como:
a) Una revisión narrativa sin ningún método explícito de búsqueda ni de selección muy clara
b) Un estudio experimental que interviene sobre una muestra para medir efectos
*c) Una revisión sistemática que además combina los resultados en un efecto estadístico promedio
d) Un paper de metodología que valida un nuevo instrumento de medición

12. Los papers de "interpretación" se fundamentan principalmente en:
a) Datos originales recolectados directamente por el propio autor del estudio
b) La validación estadística rigurosa de un instrumento de medición nuevo
c) Encuestas aplicadas directamente a una muestra amplia y representativa de la población de interés
*d) La expertise del autor, la evidencia existente y la coherencia del argumento

13. ¿Qué buscan validar o mejorar los papers de "metodología"?
*a) Métodos, herramientas o protocolos de investigación científica
b) Las políticas públicas de un problema
c) Las hipótesis sustantivas sobre un fenómeno social
d) El estado del arte de un campo científico

14. Según el material, ¿qué relación existe entre el tipo de paper y para qué sirve dentro de una investigación?
a) La síntesis de evidencia aporta datos nuevos, y la producción de evidencia aporta patrones
b) La interpretación aporta datos nuevos, y la metodología aporta patrones generales
*c) La producción de evidencia aporta datos nuevos, y la síntesis de evidencia aporta patrones
d) La metodología aporta opinión y encuadre, y la interpretación aporta cómo producir conocimiento

15. Además de no fundamentarse en datos propios, ¿qué otra característica tienen los papers de "interpretación"?
a) Siempre validan un instrumento de medición nuevo
b) Solo pueden publicarse si superan una revisión por pares
c) Requieren aplicarse a una muestra representativa de la población
*d) No presentan resultados propios de una investigación original

### Tema: Métodos de investigación cualitativa: entrevistas y observación

16. Las observaciones naturales se caracterizan por:
a) Reunir a un grupo grande de participantes para debatir libremente sobre un tema en general
b) Preguntar directamente a las personas sobre sus actitudes y opiniones en profundidad
c) Requerir al menos dos personas conversando sobre un tema puntual y específico
*d) Registrar el comportamiento de los sujetos en su entorno habitual, minimizando la intervención

17. Un focus group se define como una técnica en la que se:
*a) Reúne a un grupo de participantes para responder preguntas en un entorno moderado
b) Registra minuciosamente el comportamiento de una persona sin que esta lo note en absoluto
c) Recopila información mediante una conversación bastante abierta entre dos personas solamente
d) Aplica una escala ya validada para medir un concepto abstracto y complejo

18. ¿Cuál de las siguientes es una característica del análisis cualitativo, según el material?
a) Busca siempre generalizar los resultados a toda la población general
*b) Reconoce la perspectiva y los sesgos del propio investigador
c) Siempre involucra una gran cantidad de participantes
d) Elimina la complejidad del fenómeno estudiado

19. Al elegir la estructura de una entrevista, ¿qué relación se plantea entre estructura y conocimiento previo del tema?
a) A mayor conocimiento del tema, se recomienda menos estructura y más flexibilidad
b) La estructura de la entrevista no depende del conocimiento previo del tema
*c) A menor conocimiento del tema, se recomienda menos estructura y más flexibilidad
d) A mayor conocimiento del tema, se recomienda eliminar por completo la entrevista

20. Al desarrollar la hipótesis dentro del protocolo de una entrevista en profundidad, esta debe ser:
a) Amplia, general y no verificable
b) Redactada únicamente en términos cualitativos
c) Idéntica a la pregunta de investigación original
*d) Clara, específica y falsable en su planteo

21. Según las buenas prácticas para entrevistas en profundidad, durante la entrevista se recomienda:
*a) Escuchar más de lo que se habla, en una proporción cercana a 80/20
b) Hablar más de lo que se escucha para guiar al entrevistado en todo momento
c) Completar las respuestas del entrevistado cuando duda o se traba
d) Evitar tomar notas para no interrumpir el registro de audio

22. ¿Cuáles son los tres tipos de entrevista según su nivel de estructura, mencionados en el material?
*a) Estructurada, semi estructurada y no estructurada
b) Individual, grupal y virtual
c) Exploratoria, confirmatoria, interpretativa y también parcialmente descriptiva
d) Formal, informal y espontánea

23. Al definir la muestra dentro del protocolo de una entrevista en profundidad, ¿cuál de los siguientes es uno de los criterios a considerar?
a) El presupuesto total disponible para la investigación
*b) El rango etario y la ubicación geográfica de los participantes
c) La cantidad de papers científicos consultados previamente
d) El tipo de escala validada que se va a utilizar

24. Al diseñar las preguntas de una entrevista en profundidad, el material recomienda priorizar:
a) Preguntas sobre opiniones generales antes que ejemplos concretos
b) Preguntas idénticas a las de un cuestionario cerrado
*c) Ejemplos y experiencias reales por sobre las opiniones
d) Una única pregunta que abarque todos los conceptos clave

25. Para "explorar el tema" al inicio de una investigación, el material propone combinar:
a) Encuestas cerradas y meta-análisis académicos ya existentes
b) Únicamente entrevistas en profundidad con expertos
c) Datos de acceso restringido, estadísticas oficiales recientes y redes sociales
*d) Revisión bibliográfica (estado del arte) y observaciones de campo

### Tema: Definición y operacionalización de comportamientos

26. Según el material, ¿cuál de las siguientes opciones sí es un comportamiento?
a) Sentirse seguro
*b) Caminar en el parque
c) Ser más empático
d) Querer cambiar muchas cosas en general

27. ¿Por qué "perder peso" no se considera un comportamiento en sí mismo?
a) Porque es un estado interno que no puede medirse
b) Porque no involucra a ningún actor identificable
*c) Porque puede ser causado por múltiples comportamientos distintos
d) Porque no puede operacionalizarse de ninguna manera

28. Las tres características que debe cumplir un comportamiento bien definido son:
a) Observable, Medible y Falsable
b) Divergente, Convergente y Escalable
c) Reflexivo, Automático y Social
*d) Asignable, Observable y Específico

29. La característica "Asignable" de un comportamiento implica identificar:
*a) Los actores involucrados y quiénes tienen capacidad de modificarlo
b) La escala ya validada que finalmente se usará para medirlo
c) El presupuesto total disponible para intervenirlo directamente
d) La cantidad de participantes necesarios para estudiarlo

30. La operacionalización consiste en:
a) Elegir la técnica de recolección de datos más barata disponible
*b) Transformar conceptos abstractos en variables concretas y medibles
c) Reemplazar un comportamiento por un objetivo general equivalente
d) Definir el tamaño de la muestra de un estudio experimental

31. ¿Cuál de las siguientes opciones corresponde a un comportamiento y no a un objetivo general?
a) Cuidar bien el medio ambiente en la vida cotidiana de todos
b) Ser una persona más productiva en el trabajo
*c) Comer 4 porciones de frutas y verduras al día
d) Sentirse bien con uno mismo en general

32. En el ejemplo de la app de ejercicio para una empresa, ¿qué representa la "acción" dentro del esquema outcome-actores-acción?
*a) Ir al gimnasio dos veces por semana durante al menos 30 minutos
b) Los trabajadores de la empresa que todavía no hacen ejercicio de forma regular
c) Disminuir un 50% las visitas al médico o kinesiólogo
d) El costo total de implementar el programa de ejercicio

### Tema: Herramientas de diagnóstico: Behavioral Journey Map y modelo COM-B

33. El Behavioral Journey Map se enfoca específicamente en:
a) Los datos demográficos generales de la población objetivo del proyecto
*b) Los comportamientos y decisiones de la persona, exponiendo barreras y sesgos
c) La lista completa de todos los papers consultados durante toda la investigación
d) El presupuesto total necesario para implementar la solución propuesta

34. El modelo COM-B establece que para que un comportamiento ocurra:
a) Alcanza con que una sola de las tres áreas esté siempre bien presente en algún momento
b) Solo la motivación reflexiva determina si el comportamiento finalmente se realiza o no
*c) Deben abordarse las tres áreas, ya que si una falla el comportamiento probablemente no ocurra
d) La capacidad física siempre pesa más que las demás áreas del modelo

35. Dentro del modelo COM-B, la "Oportunidad" puede ser:
a) Física o psicológica
b) Reflexiva o automática
c) Observable o específica
*d) Social o física

36. En el ejemplo "tener amigos que te inviten a salir a correr en grupo", ¿a qué componente del modelo COM-B corresponde?
*a) Oportunidad social
b) Capacidad física
c) Motivación automática
d) Motivación reflexiva

37. ¿Qué representa "la pólvora" en la metáfora del cañón usada para explicar el modelo COM-B?
*a) El impulso interno que empuja a querer actuar: la motivación
b) La habilidad concreta de la persona para poder hacerlo
c) Lo que el entorno permite o facilita en ese preciso momento
d) La acción final que efectivamente se termina observando

38. ¿Qué representa "el entorno" (el viento) en esa misma metáfora del cañón?
a) El impulso interno que empuja a querer actuar
*b) Lo que el contexto externo permite o facilita en ese momento
c) La habilidad concreta que la persona ya tiene para poder finalmente hacerlo
d) La acción final que efectivamente se llega a observar

39. Dentro del modelo COM-B, la "Capacidad psicológica" se refiere específicamente a:
a) La fuerza física y la destreza motora necesarias para actuar
b) El acceso a recursos materiales o financieros del entorno
*c) El funcionamiento mental de la persona, como la comprensión y la memoria
d) Los hábitos y procesos afectivos que impulsan una acción

40. La "Motivación automática" involucra procesos:
a) Conscientes, como planes y evaluaciones racionales
b) Vinculados exclusivamente a normas sociales y culturales
c) Relacionados con el acceso a recursos materiales disponibles
*d) Habituales, instintivos y afectivos, como deseos o impulsos

41. En el ejemplo "tener la habilidad para tomar una muestra de sangre", ¿a qué componente del modelo COM-B corresponde?
*a) A la capacidad física, una destreza concreta del cuerpo
b) A la motivación reflexiva, una decisión pensada de antemano
c) A la oportunidad social, algo que depende de otras personas
d) A la motivación automática, un impulso poco consciente

42. En el ejemplo "planear ir a un centro de salud", ¿a qué componente del modelo COM-B corresponde?
a) A la capacidad psicológica, un tipo de comprensión mental
*b) A la motivación reflexiva, una decisión pensada de antemano
c) A la oportunidad física, algo que depende de recursos del entorno
d) A la motivación automática, un impulso poco consciente

43. En el ejemplo "sentir placer anticipado ante la idea de comer un pedazo de chocolate", ¿a qué componente del modelo COM-B corresponde?
a) A la capacidad psicológica, un tipo de comprensión mental
b) A la oportunidad social, algo que depende de otras personas
*c) A la motivación automática, un impulso poco consciente
d) A la motivación reflexiva, una decisión pensada de antemano

44. En el ejemplo "falta de acceso a apoyo especializado durante el parto", ¿qué barrera del modelo COM-B ilustra?
a) A la capacidad física, una destreza concreta del cuerpo
b) A la motivación reflexiva, una decisión pensada de antemano
c) A la oportunidad social, algo que depende de otras personas
*d) A la oportunidad física, algo que depende de recursos del entorno

45. Según el modelo COM-B, la Capacidad y la Oportunidad se relacionan con el comportamiento de la siguiente manera:
*a) Juntas hacen posible o facilitan que el comportamiento ocurra
b) Son irrelevantes si la motivación de la persona es suficientemente alta
c) Solo importan en comportamientos relacionados con la salud física
d) Determinan el comportamiento de forma independiente entre sí

46. Además de energizar y dirigir el comportamiento, ¿qué otra relación plantea el modelo COM-B?
a) El comportamiento nunca vuelve a influir sobre la capacidad, la oportunidad o la motivación
*b) El comportamiento realizado también influye de vuelta sobre las otras tres áreas
c) Solo la motivación puede influir sobre el comportamiento, nunca al revés
d) La capacidad es la única área que puede modificarse una vez que el comportamiento ocurrió

## Nivel 5: Sistemas Complejos

### Tema: Concepto de sistema y jerarquías

1. ¿Qué elementos componen todo sistema según lo visto en clase, de manera conjunta?
*a) Los elementos que lo componen, sus conectores internos y su comportamiento general
b) Los objetivos del sistema, sus restricciones internas y los resultados obtenidos con el tiempo
c) Las entradas del proceso, los pasos intermedios y las salidas finales
d) Los actores del sistema, los recursos disponibles y las reglas vigentes

2. Según Donella Meadows, ¿qué es un sistema en términos generales?
a) Una secuencia de eventos que se repite exactamente igual sin importar el contexto
*b) Un conjunto de elementos interrelacionados y organizados de forma coherente para alcanzar un fin
c) Un conjunto de reglas fijas que restringen a todos sus componentes
d) Un conjunto de objetos físicos que comparten un mismo espacio físico

3. En el ejemplo del pájaro sobre "sistemas dentro de sistemas más grandes", ¿qué concepto se ilustra con la palabra "holón"?
a) Un sistema que solo puede existir de forma completamente aislada de su entorno
b) Un componente que jamás se relaciona con ningún otro elemento del sistema
*c) Algo que es simultáneamente un todo y parte de un todo mayor dentro del sistema
d) Un sistema que carece por completo de cualquier tipo de comportamiento emergente

4. Según la clase, ¿qué le ocurre a un ser vivo cuando muere, en términos sistémicos?
a) Se transforma en un sistema más grande junto con su entorno inmediato
b) Mantiene su carácter sistémico porque su materia física sigue existiendo tal como estaba antes
c) Se convierte en un conector que vincula a otros sistemas vivos cercanos
*d) Pierde su carácter sistémico porque sus interrelaciones dejan de funcionar de forma correcta

### Tema: Ciclos reforzadores y balanceadores

5. ¿Qué diferencia principal existe entre los ciclos reforzadores (R) y los ciclos balanceadores (B) de un sistema?
*a) Los reforzadores amplifican el comportamiento del sistema y los balanceadores lo mantienen estable
b) Los reforzadores mantienen el comportamiento del sistema y los balanceadores lo amplifican sin freno
c) Los reforzadores solo existen en sistemas biológicos y los balanceadores en económicos
d) Los reforzadores reducen la incertidumbre y los balanceadores la aumentan de forma constante

6. En el ejemplo del termostato visto en clase, ¿qué tipo de ciclo representa la relación entre la temperatura de la sala y sus ajustes?
a) Un ciclo reforzador que amplifica sin ningún límite la temperatura interior
*b) Un ciclo balanceador que busca mantener estable la temperatura de la sala
c) Un ciclo de crecimiento exponencial propio únicamente de los sistemas financieros
d) Un ciclo de exceso y colapso típico de las poblaciones biológicas

### Tema: Arquetipos de sistemas y casos de dinámica de sistemas

7. ¿Qué caracteriza principalmente al crecimiento exponencial descripto en la clase de hoy?
a) Es un proceso constante que no depende de ningún ciclo de retroalimentación del sistema
b) Es un proceso que se desacelera de forma progresiva hasta detenerse totalmente
*c) Es un proceso que se acelera a medida que la cantidad crece, mediante ciclos reforzadores
d) Es un proceso que ocurre exclusivamente dentro de sistemas de tipo financiero y no en otros

8. En el arquetipo "Overshoot and Collapse" (Exceso y Colapso), ¿qué le sucede a un sistema que supera su capacidad de sostenerse?
a) Se estabiliza de manera automática por la acción de sus propios ciclos balanceadores de forma sostenida
b) Se transforma de manera permanente en un ciclo reforzador que nunca se detiene
c) Aumenta de forma indefinida su capacidad de carga sin ningún límite aparente
*d) Eventualmente colapsa, cayendo muy por debajo de su nivel previo de sostenibilidad en profundidad

9. Según el arquetipo "Soluciones que fracasan", ¿qué sucede al ensanchar rutas para reducir la congestión de tráfico?
a) La congestión se reduce de forma permanente sin generar ningún efecto secundario en el sistema vial
*b) El alivio inicial atrae más conductores y la congestión vuelve a persistir con el tiempo
c) El bucle de refuerzo desaparece por completo apenas se aplica la solución
d) La solución propuesta elimina de raíz la causa principal del problema de tráfico

10. ¿Qué ilustra "el efecto Cobra" contado en la clase sobre la India colonial?
a) Cómo una recompensa por cobras muertas eliminó la plaga de forma sostenible
b) Cómo la cría de cobras se prohibió con éxito desde el inicio del programa
*c) Cómo una solución simple, la recompensa por cobras, aumentó sin querer la plaga
d) Cómo el gobierno británico decidió ignorar por completo el problema de las cobras

11. En el caso de Bogotá, ¿qué resultado tuvo la ley que restringía la circulación de autos según el número de patente?
*a) Los residentes compraron más autos, lo que aumentó la contaminación y el tráfico general
b) Redujo la contaminación y la cantidad de autos en circulación de forma sostenida
c) Eliminó por completo el tráfico vehicular en toda la ciudad de manera inmediata
d) No tuvo ningún efecto sobre la cantidad de vehículos en circulación diaria de la ciudad

12. Al comparar el "sistema DDT" en su versión de expectativa con la versión de realidad, ¿qué se evidencia?
a) Que el sistema real resultó ser mucho más simple de lo esperado inicialmente en la práctica
*b) Que el sistema real incluía muchos más componentes interconectados de lo previsto por la OMS
c) Que la intervención con DDT no tuvo ningún efecto sobre los mosquitos transmisores
d) Que el pueblo Dayak no participó en ningún momento de todo el proceso

### Tema: Pensamiento sistémico y mapeo de sistemas

13. ¿Cómo se define el pensamiento sistémico según lo visto en clase de hoy?
a) Un método que predice con exactitud el comportamiento futuro de cualquier sistema dado
b) Una técnica pensada exclusivamente para resolver problemas propios de la ingeniería
c) Un método que deja de lado por completo el contexto histórico del sistema
*d) Un enfoque centrado en entender cómo se interrelacionan las partes de un sistema

14. ¿Para qué sirve, según la clase, el ejercicio de mapeo de sistemas complejos?
*a) Para ayudar a dar sentido a la "maraña" de un problema complejo
b) Para reemplazar por completo la necesidad de recolectar datos sobre el problema
c) Para garantizar una única solución correcta a cualquier tipo de problema
d) Para eliminar la necesidad de identificar a los actores involucrados

15. Según la clase, ¿qué característica tiene un mapa de sistema una vez que fue elaborado?
a) Es una representación definitiva que ya no debe modificarse con el paso del tiempo
*b) Es un mapa vivo que cambia y se actualiza con el paso del tiempo
c) Solo puede aplicarse a sistemas de tipo estrictamente biológico o natural
d) Deja de ser útil apenas se identifican los actores principales implicados

16. ¿Qué equilibrio es importante lograr al mapear un sistema, según lo visto en clase?
a) Entre usar solamente texto o solamente imágenes al armar el mapa completo
b) Entre incluir únicamente actores del sector público o únicamente del sector privado
*c) Entre mapear la complejidad detallada y hacerla lo suficientemente simple y útil
d) Entre el tamaño final del mapa y la cantidad de colores que se utilizan

17. En los diagramas causales de análisis de causa y efecto vistos en clase, ¿qué representan las interconexiones entre componentes?
a) Actores que no mantienen ninguna relación entre sí dentro del sistema completo de manera clara
b) Límites administrativos que separan a las distintas partes del sistema entero
c) Relaciones que son exclusivamente de tipo económico entre los distintos actores
*d) Un vínculo causal que conecta las variables de causa y de efecto

### Tema: Puntos de palanca y el Iceberg

18. ¿Qué son los "puntos de palanca" (leverage points) definidos por Donella Meadows?
a) Los elementos de un sistema que nunca pueden ser modificados de ningún modo
b) Los conectores que unen entre sí a dos sistemas que resultan exactamente idénticos
c) Los resultados finales que produce un sistema una vez que deja de funcionar
*d) Lugares estratégicos donde un pequeño cambio genera un gran impacto concreto en el sistema

19. Según la jerarquía de puntos de palanca de Donella Meadows, ¿cuál tiene mayor potencial de impacto sobre un sistema?
*a) Transformar los paradigmas o modelos mentales que sostienen los objetivos y las reglas
b) Modificar los parámetros y números del sistema, como montos, plazos o cupos establecidos de forma sostenida
c) Cambiar el tamaño de las reservas o los stocks acumulados dentro del sistema
d) Reducir las demoras que existen entre una acción y sus consecuencias posteriores

20. En la herramienta "El Iceberg" del pensamiento sistémico, ¿qué nivel corresponde a "lo que vemos: hechos y síntomas visibles"?
a) El nivel de patrones y tendencias observadas a lo largo del tiempo en el tiempo
*b) El nivel de eventos concretos que ocurren de manera visible en la superficie
c) El nivel de estructuras subyacentes que sostienen esos patrones y eventos
d) El nivel de modelos mentales y creencias más profundas del sistema

21. Según "El Iceberg", ¿qué acción se asocia al nivel de "estructuras subyacentes" del sistema?
a) Reaccionar ante los síntomas visibles de un problema inmediato y concreto
b) Anticipar los patrones y tendencias que se repiten una y otra vez
*c) Diseñar las reglas, políticas e infraestructuras subyacentes que sostienen el sistema
d) Transformar los modelos mentales y las creencias culturales más profundas

### Tema: Abordaje iterativo frente a la complejidad

22. Según la clase, ¿por qué los problemas complejos rara vez tienen una solución permanente y definitiva?
*a) Porque mantener el equilibrio requiere un ajuste constante de las variables involucradas
b) Porque los sistemas complejos dejan de existir por completo una vez resueltos en cada caso
c) Porque las soluciones complejas siempre terminan generando el llamado efecto cobra
d) Porque los ciclos balanceadores del sistema desaparecen por completo con el tiempo

23. En el ciclo "Testear y Aprender" presentado en clase, ¿cuál es el objetivo de la etapa "Ajustar"?
a) Escalar las soluciones ya validadas hacia otros contextos y poblaciones distintas
*b) Ajustar la solución mediante iteraciones ágiles, empezando por las suposiciones más críticas
c) Detectar los obstáculos para el enfoque de prueba y eliminarlos del proceso en la práctica
d) Definir el resultado deseado y comprender bien el contexto del problema

24. En el esquema de "Espacio para problema / Espacio para solución" (doble diamante), ¿qué caracteriza a la fase divergente de "Descubrir"?
a) Definir el problema mediante el uso de una matriz de viabilidad e impacto
b) Entregar el producto mínimo viable junto con sus métricas de seguimiento correspondientes
*c) Explorar ampliamente mediante mapas del sistema e investigación de campo sobre el problema
d) Realizar una lluvia de ideas de soluciones concretas para resolver el problema

### Tema: Comportamiento, información y cambio sostenible

25. Según la evidencia de las ciencias del comportamiento presentada en clase, ¿qué rol cumple la información al cambiar un comportamiento?
a) Es irrelevante porque el comportamiento depende únicamente de factores estructurales del entorno
b) Es la única variable que garantiza por sí sola el cambio sostenido de conducta
c) Solo resulta relevante dentro de los sistemas de salud y no en otros contextos
*d) Es necesaria pero no suficiente para lograr un cambio sostenido de conducta

26. En el estudio de caso sobre HIV e ITS en Comodoro Rivadavia, ¿qué problema se identificó vinculado al "acceso a la información sobre salud"?
*a) Contenidos dispersos y confusos, y falta de información clara sobre los servicios
b) Exceso de campañas y de referentes confiables disponibles para dar orientación clara
c) Sobreabundancia de circuitos claros y bien definidos para gestionar turnos y derivaciones médicas
d) Exceso de datos actualizados sobre las características de toda la población local

27. Según la frase citada en clase sobre el cambio de conducta sostenible, ¿qué se necesita además de comprender a la persona?
a) Aumentar de manera exclusiva la cantidad de información disponible para las personas
*b) Comprender y transformar el sistema que hace posible o conveniente esa conducta de forma sostenida
c) Reemplazar a la persona involucrada por otro actor dentro del mismo sistema
d) Ignorar por completo el contexto estructural en el que ocurre esa conducta
`;