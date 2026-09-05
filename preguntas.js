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
 * con un sufijo propio (acá "_AAW") para no chocar con los de otras materias
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

const MATERIA_ID_AAW = "arquitectura-apps-web";
const MATERIA_NOMBRE_AAW = "Arquitectura de Aplicaciones Web";

const PREGUNTAS_RAW_AAW = `
## Nivel 1: Ingeniería de Requerimientos de Software

### Tema: Ingeniería de software y calidad

1. Según el material, ¿de qué se ocupa la Ingeniería de Software?
a) De construir un producto de software siguiendo exclusivamente los requerimientos del cliente
b) De documentar de forma exhaustiva todos los procesos de negocio de una organización
*c) De construir software de alta calidad dentro de restricciones de tiempo y presupuesto
d) De diseñar interfaces de usuario accesibles para distintos tipos de dispositivos modernos y variados

2. ¿Cómo se define la calidad del software en relación con su propósito?
*a) Como el grado en que el software cumple su propósito
b) Como el grado de cumplimiento de los estándares de codificación
c) Como la cantidad de pruebas unitarias superadas antes de la entrega
d) Como el nivel de satisfacción medido solo durante el mantenimiento

### Tema: El software como sistema

3. Según la visión sistémica presentada, ¿en qué está siempre embebido el software?
a) Únicamente en el hardware sobre el que se ejecuta en producción
b) Únicamente en las organizaciones que lo utilizan
c) Únicamente en los estándares de la industria vigentes
*d) En hardware, en actividad humana y en un mundo físico

4. En el ejemplo del sistema de remate por Internet, ¿qué se identifica como "software" a construir?
a) Los compradores, vendedores y las empresas transportistas del sistema
*b) El componente para insertar ítems, manejar ofertas y facturar al ganador
c) La relación de confianza que se genera entre compradores y vendedores
d) El subsistema de pago electrónico externo, ya construido por otra empresa del proyecto

### Tema: Importancia y costos de los requerimientos

5. Según el gráfico de costo relativo de corrección de errores (Boehm), ¿en qué etapa resulta más costoso corregir un error?
*a) En la etapa de mantenimiento
b) En la etapa de requerimientos
c) En la etapa de test de unidad
d) En la etapa de diseño

6. Según los datos del Standish Group para 1998, ¿cuál era la categoría de mayor porcentaje entre los proyectos relevados?
a) Proyectos exitosos
b) Proyectos cancelados
c) Proyectos sin clasificar
*d) Proyectos con problemas

7. Según el Standish Group, ¿cuál figuraba entre las tres causas principales percibidas de éxito de un proyecto?
a) Tecnología nueva
*b) Involucramiento de usuarios
c) Incompetencia técnica
d) Objetivos poco claros

8. Según el Standish Group, ¿cuál figuraba entre las tres causas principales percibidas de cancelación de un proyecto?
a) Entregas (milestones) más pequeñas
b) Personal competente
*c) Requerimientos incompletos
d) Visión y objetivos claros

9. Según el relevamiento del European Software Institute citado en el material, ¿cuáles fueron señalados como los problemas mayores en el desarrollo de software?
*a) La especificación de requerimientos y la gestión de requerimientos
b) La falta de personal capacitado y el uso de tecnología obsoleta
c) La falta de presupuesto y la falta de apoyo gerencial
d) El diseño detallado y la integración de componentes

### Tema: Ingeniería de requerimientos: rol y actividades

10. Según la definición del material, la Ingeniería de Requisitos actúa como:
a) Una fase inicial y aislada dentro del ciclo de vida del software
b) Un conjunto de pruebas de aceptación posteriores a la implementación final del sistema completo
*c) Un puente entre las necesidades reales de los interesados y las tecnologías disponibles
d) Un documento contractual firmado únicamente por el cliente del proyecto

11. ¿Cuál de las siguientes se menciona como una fuente de complejidad esencial en la Ingeniería de Requerimientos?
a) La existencia de un único sistema a construir sin propuestas alternativas
b) La disponibilidad de una formulación definitiva y cerrada del problema en todo momento
c) La posibilidad de dar siempre una respuesta binaria sobre la solución
*d) La coexistencia de múltiples partes interesadas con intereses contrapuestos entre sí

12. Según el material, ¿qué busca incrementar el proceso de validación?
a) La corrección de una descripción formal respecto de otra descripción
*b) La confianza en que una descripción formal se corresponda con la realidad
c) La cantidad de casos de test generados a partir de los requerimientos
d) La velocidad de desarrollo alcanzada por el equipo de trabajo

13. ¿Cuál de las siguientes NO forma parte de las actividades de desarrollo de requerimientos listadas en el material?
a) Elicitación de requerimientos junto a los interesados del proyecto en reuniones iniciales
b) Negociación de prioridades entre los distintos interesados del sistema
*c) Despliegue en producción del sistema una vez finalizado su desarrollo
d) Especificación completa y detallada de los requerimientos acordados

### Tema: Modelos de ciclo de vida

14. En el modelo de ciclo de vida en cascada (Royce, 1970), ¿qué etapa se ubica inmediatamente antes del diseño?
*a) La etapa de Requerimientos iniciales
b) La etapa de Implementación
c) La etapa de Integración de componentes
d) La etapa de Validación final del sistema

15. ¿Qué representa el eje horizontal del Modelo V presentado en el material?
a) El nivel de abstracción con que se describen las actividades del proyecto
b) El grado de dependencia que existe con la implementación final
c) La completitud alcanzada por los requerimientos ya documentados y validados
*d) El tiempo, desde el análisis hacia el testeo e integración

16. ¿Qué contrapone el Modelo Twin Peaks al definir el desarrollo?
a) La gestión de requerimientos frente a la gestión de configuración
*b) La definición del problema y la definición de la solución en paralelo
c) El desarrollo de requerimientos frente a las pruebas de aceptación
d) Los modelos de objetivos frente a los modelos arquitectónicos

### Tema: Niveles y tipos de requerimientos

17. Según los tres niveles de requerimientos de software presentados, ¿cuáles son?
a) Requerimientos de arquitectura, de diseño y de implementación
b) Requerimientos de hardware, de software y de red
*c) Requerimientos de negocio, de usuario y funcionales/no funcionales
d) Requerimientos de elicitación, de análisis y de especificación

18. Dentro de los requerimientos no funcionales, ¿cómo se caracterizan las restricciones?
*a) Como características no negociables que impone el cliente al sistema
b) Como propiedades que afectan la satisfacción pero pueden negociarse libremente
c) Como atributos de calidad medibles solo mediante pruebas de rendimiento
d) Como requerimientos relacionados exclusivamente con la seguridad del sistema

## Nivel 2: Atributos de Calidad

### Tema: Concepto y características de los atributos de calidad

1. ¿Qué son los atributos de calidad ("ilities") según el material?
a) Los casos de test de aceptación definidos por el cliente final del proyecto
*b) Características específicas que debe tener el sistema, antes llamadas requerimientos no funcionales
c) Los componentes de procesamiento, datos o conexión del sistema
d) Las restricciones no negociables impuestas por el cliente al inicio

2. Según el material, ¿qué relación tiene la funcionalidad "de negocio" con lo que debe hacer un sistema?
a) Es lo único que un sistema necesita para funcionar correctamente en producción
b) Reemplaza por completo a los atributos de calidad del sistema
c) Determina exclusivamente las restricciones no negociables del sistema
*d) Es solo una parte de lo que el sistema debe hacer

3. Según el material, ¿por qué necesitamos conocer los atributos de calidad?
*a) Porque son necesarios para poder definir una arquitectura
b) Porque reemplazan a los requerimientos funcionales del sistema
c) Porque eliminan la necesidad de identificar restricciones
d) Porque determinan el precio final del proyecto de software

4. Según el material, ¿qué ejemplo de tensión entre atributos de calidad se menciona?
a) La tensión entre seguridad y usabilidad, o entre escalabilidad y confiabilidad
b) La tensión entre modificabilidad y auditabilidad del sistema completo y del proceso
*c) La tensión entre portabilidad y performance, o entre flexibilidad y performance
d) La tensión entre disponibilidad e integridad de los datos almacenados

5. Según la definición citada del IEEE Std. 1061, ¿cómo se describe la calidad del software?
a) Como el cumplimiento estricto de los plazos y el presupuesto asignado originalmente al proyecto
*b) Como el grado en que el software posee una combinación deseada de atributos
c) Como la ausencia total de errores detectados durante las pruebas
d) Como la satisfacción exclusiva de los requerimientos funcionales del cliente

6. Según el material, ¿qué problema suelen tener los atributos de calidad al especificarse?
a) Suelen especificarse con fórmulas matemáticas demasiado complejas
b) Suelen especificarse en un documento aparte del resto de requerimientos
c) Suelen especificarse únicamente por el equipo de testing
*d) Suelen estar pobremente especificados o directamente no especificados

7. Según el material, ¿qué ocurre en general con las dependencias entre atributos de calidad?
*a) En general no se analizan las dependencias entre ellos
b) Se documentan siempre en un diagrama formal específico del sistema
c) Se eliminan automáticamente durante el diseño arquitectónico
d) Se prueban exhaustivamente antes de cada entrega del sistema

8. Según el material, ¿de qué depende la importancia de los atributos de calidad?
a) Depende exclusivamente del presupuesto disponible para el proyecto actualmente en curso
b) Depende únicamente de la opinión personal del arquitecto de software
*c) Depende del dominio para el cual se construye el software
d) Depende solamente del lenguaje de programación que se utilice

9. Según el material, además de requerimientos funcionales y atributos de calidad, ¿qué debe identificar correctamente el ingeniero de software?
a) Los patrones de diseño aplicables al proyecto en curso
*b) Las restricciones que enmarcan el desarrollo del sistema
c) Los casos de uso del cliente final
d) Los diagramas de secuencia del sistema

10. Según el material, ¿qué rol cumplen las "tácticas" de arquitectura respecto a los atributos de calidad?
a) Son los únicos requerimientos que se documentan formalmente
b) Reemplazan la necesidad de definir atributos de calidad
c) Son fines en sí mismas dentro del proceso de diseño
*d) Son formas de alcanzar los atributos de calidad deseados

11. Según el material, ¿cuál suele ser el atributo de calidad más importante?
*a) La flexibilidad, entendida como facilidad de cambios
b) La seguridad, entendida como resistencia a ataques externos
c) La usabilidad, entendida como facilidad de aprendizaje
d) La portabilidad, entendida como independencia del hardware

### Tema: Modelo de calidad ISO 9126

12. Según el material, ¿cómo se caracteriza la calidad "interna" de un software?
a) Se mide a partir del comportamiento del producto en una prueba
b) Se mide durante la utilización efectiva por parte del usuario final del sistema
*c) Se mide a partir de características intrínsecas, como el código fuente
d) Se mide exclusivamente mediante encuestas de satisfacción a clientes

13. Según el material, ¿cómo se caracteriza la calidad "externa" de un software?
a) Se mide a partir de las características intrínsecas del código fuente
*b) Se mide en el comportamiento del producto, como en una prueba
c) Se mide durante la utilización efectiva por parte del usuario final
d) Se mide exclusivamente en la etapa de mantenimiento del sistema ya en producción

14. Según el material, ¿cuándo se mide la calidad "en uso" de un software?
a) Durante la etapa de diseño detallado que realiza el arquitecto
b) Durante la revisión de código que hacen los pares del equipo
c) Durante las pruebas unitarias que ejecuta el equipo de testing
*d) Durante la utilización efectiva del sistema por parte del usuario

15. Según el modelo de ISO 9126 presentado, ¿qué relación existe entre la calidad de proceso, interna, externa y en uso?
*a) Se relacionan mediante vínculos de "influye" y "depende de" entre sí
b) Son etapas independientes que no se relacionan entre sí
c) Se relacionan únicamente a través de la calidad interna
d) Solo la calidad en uso influye sobre las demás calidades del sistema

### Tema: Disponibilidad

16. Según el material, ¿cuándo ocurre un "failure" en un sistema?
a) Cuando el código fuente no sigue el estándar de codificación
b) Cuando un usuario reporta un error durante las pruebas unitarias
*c) Cuando el sistema no entrega más un servicio según su especificación
d) Cuando el sistema tarda más de un segundo en responder

17. Según el material, ¿cómo se define la disponibilidad de un sistema?
a) Como el tiempo total que un sistema estuvo fuera de servicio durante el mes
*b) Como la probabilidad de que un sistema esté disponible cuando se lo necesite
c) Como la cantidad de fallas reportadas durante un período determinado
d) Como el porcentaje de usuarios satisfechos con el sistema en general

18. Según el material, ¿qué ocurre con los "downtimes" programados al calcular la disponibilidad?
a) Se consideran como fallas graves del sistema
b) Se contabilizan doblemente en el cálculo final
c) Se consideran solo si superan una hora de duración
*d) No se consideran dentro del cálculo de disponibilidad

19. Según el material, ¿cómo se caracteriza a la disponibilidad en cuanto a especificarla y verificarla?
*a) Relativamente fácil de especificar, pero difícil de verificar
b) Imposible de especificar y a la vez imposible de verificar
c) Muy difícil de especificar, pero fácil de verificar
d) Fácil de especificar y también fácil de verificar

### Tema: Facilidad de cambios (modifiability)

20. Según el material, ¿qué elementos se mencionan como aspectos que pueden cambiar dentro de la facilidad de cambios?
a) Solo la funcionalidad y el lenguaje de programación utilizado en el proyecto
b) Solo las interfaces y la documentación técnica del sistema
*c) La funcionalidad, la plataforma, otros atributos de calidad y las interfaces
d) Solo la plataforma y el equipo de desarrollo asignado

21. Según el material, ¿quiénes pueden hacer un cambio sobre un sistema?
a) Únicamente los administradores del sistema en producción
*b) Usuarios, desarrolladores y administradores del sistema
c) Únicamente los desarrolladores que escribieron el código original
d) Únicamente el cliente que solicitó el sistema

22. Según el material, una vez que un cambio se especifica, ¿qué pasos debe seguir?
a) Debe ser aprobado por gerencia, presupuestado y luego archivado
b) Debe ser documentado, revisado por pares y luego descartado
c) Debe ser priorizado, negociado con los interesados y luego eliminado
*d) Debe ser diseñado, implementado, probado y finalmente liberado

### Tema: Performance

23. Según el material, ¿con qué está relacionado el atributo de calidad "performance"?
*a) Con el tiempo que le lleva al sistema responder a un evento
b) Con la cantidad de usuarios que pueden registrarse en el sistema cada día
c) Con la facilidad para aprender a usar el sistema
d) Con la resistencia del sistema a usos no autorizados

24. Según el material, ¿cómo se define la "latencia" dentro del atributo de performance?
a) La cantidad de transacciones procesadas en un período de tiempo
b) La variación que existe en el tiempo de respuesta del sistema ante distintos eventos
*c) El tiempo entre la llegada del estímulo y el inicio de la respuesta
d) El límite de tiempo máximo permitido para completar un proceso

25. Según el material, ¿cómo se define el "throughput" dentro del atributo de performance?
a) La variación en la latencia de respuesta del sistema
*b) La cantidad de transacciones procesadas por el sistema en un período
c) Los eventos que el sistema no llega a procesar
d) El límite de tiempo para completar un proceso determinado

26. Según el material, ¿de qué depende principalmente la dificultad para expresar el atributo de performance?
a) Depende únicamente del lenguaje de programación elegido para el proyecto
b) Depende únicamente de la cantidad de desarrolladores del equipo asignado
c) Depende únicamente del presupuesto asignado al proyecto por la empresa
*d) Depende de los volúmenes, el equipamiento y el software de base

### Tema: Seguridad

27. Según el material, ¿cómo se define la habilidad de seguridad de un sistema?
*a) Como la habilidad de resistir accesos no autorizados sin dejar de dar servicio
b) Como la capacidad de encriptar toda la información almacenada en el servidor
c) Como la capacidad de evitar cualquier tipo de falla del sistema en todo momento
d) Como la capacidad de escalar automáticamente ante más usuarios en simultáneo

28. Según el material, ¿qué significa "nonrepudiation" dentro de los temas de seguridad?
a) Que los datos se protegen de accesos no autorizados
b) Que el sistema puede recuperarse rápidamente ante un ataque
*c) Que quienes hicieron algo no puedan negarlo posteriormente
d) Que el sistema registra todas las actividades del usuario

29. Según el material, ¿cuál es la diferencia entre confidencialidad e integridad dentro de la seguridad?
a) La confidencialidad mide el tiempo de respuesta y la integridad la disponibilidad del sistema
*b) La confidencialidad protege de accesos no autorizados y la integridad asegura datos correctos
c) La confidencialidad audita actividades y la integridad negocia permisos de acceso
d) La confidencialidad mejora el rendimiento y la integridad reduce la latencia

### Tema: Otros atributos de calidad

30. Según el material, ¿qué aspectos incluye la usabilidad de un sistema?
a) Solo la velocidad de procesamiento de las transacciones
b) Solo la capacidad de resistir ataques externos al sistema
c) Solo la posibilidad de escalar ante más volumen de usuarios
*d) Aprender la funcionalidad, usarla eficientemente y minimizar el impacto de errores

31. Según el material, ¿cómo se define la escalabilidad de un sistema?
*a) Como qué tan bien la solución cumple sus requerimientos al cambiar los volúmenes
b) Como la capacidad de operar en distintas plataformas de hardware y de software
c) Como la posibilidad de ver el estado interno de la aplicación en tiempo de ejecución
d) Como la capacidad de resistir usos no autorizados del sistema en todo momento

32. Según el material, ¿cómo se define la portabilidad de un sistema?
a) Como la capacidad de resistir ataques de usuarios no autorizados
b) Como la facilidad para aprender a usar el sistema rápidamente
*c) Como la facilidad de un sistema para ser operado en distintas plataformas
d) Como la posibilidad de ver el estado interno de la aplicación

33. Según el material, ¿qué representa la "facilidad de testing" de un sistema?
a) La cantidad de pruebas automatizadas que tiene el sistema
*b) La posibilidad de ver el estado interno de la aplicación
c) El tiempo que tarda el sistema en ejecutar las pruebas
d) La cantidad de errores detectados durante las pruebas unitarias

### Tema: Escenarios de atributos de calidad (SEI)

34. Según el escenario de calidad (Quality Attribute Scenario) del SEI presentado, ¿qué componentes lo conforman?
a) Elicitación, modelado, análisis, validación y priorización del requerimiento
b) Objetivos, restricciones, tácticas y patrones arquitectónicos del sistema
c) Elementos, forma y razón, según el modelo de Perry y Wolf
*d) Fuente del estímulo, estímulo, entorno, artefacto, respuesta y su medición

35. En el escenario de performance presentado sobre los colectivos, ¿qué atributo de calidad se está especificando?
*a) El atributo de performance, por el tiempo de respuesta exigido al sistema
b) El atributo de seguridad, por la protección de los datos del pasajero
c) El atributo de escalabilidad, por la cantidad de usuarios simultáneos
d) El atributo de portabilidad, por el uso en distintos dispositivos móviles

36. Según el escenario de performance sobre los colectivos, ¿cuál es la medición de la respuesta especificada?
a) Tiempo de respuesta total menor o igual a 3 segundos
*b) Tiempo de respuesta total menor o igual a 1 segundo
c) Tiempo de respuesta total menor o igual a 5 segundos
d) Tiempo de respuesta total menor o igual a 10 segundos

### Tema: Atributos de calidad en aplicaciones reales

37. Según el material, ¿qué atributo de calidad se utiliza como ejemplo en el caso de Uber?
a) Disponibilidad, por la continuidad del servicio ante fallas del sistema
b) Seguridad, por la protección de los pagos ante accesos indebidos
*c) Escalabilidad, por la capacidad de atender picos de demanda
d) Usabilidad, por la facilidad de uso para pasajeros nuevos

38. Según el material, ¿qué atributo de calidad se utiliza como ejemplo en el caso de Zoom?
a) Rendimiento, por la velocidad de respuesta ante el usuario
b) Modificabilidad, por la facilidad para incorporar nuevas funciones
c) Usabilidad, por la facilidad de uso durante una reunión
*d) Disponibilidad, por la continuidad del servicio ante una falla

39. Según el material, ¿qué atributo de calidad se utiliza como ejemplo en el caso de Google Maps?
*a) Rendimiento, por la velocidad para recalcular la ruta en tiempo real
b) Seguridad, por la protección de la ubicación del usuario
c) Escalabilidad, por la cantidad de usuarios conectados a la vez
d) Disponibilidad, por la continuidad del servicio durante el viaje

40. Según el material, ¿qué atributo de calidad se utiliza como ejemplo en el caso de Mercado Pago?
a) Usabilidad, por la facilidad para completar un pago
*b) Seguridad, por la detección de transacciones fraudulentas en tiempo real
c) Modificabilidad, por la facilidad para agregar nuevos medios de pago
d) Rendimiento, por la velocidad de respuesta ante cada compra

41. Según el material, ¿qué atributo de calidad se utiliza como ejemplo en el caso de Duolingo?
a) Escalabilidad, por la cantidad de usuarios simultáneos conectados
b) Disponibilidad, por la continuidad del servicio durante la lección
*c) Usabilidad, por la facilidad de uso para un usuario nuevo
d) Seguridad, por la protección de los datos personales del usuario

42. Según el material, ¿qué atributo de calidad se utiliza como ejemplo en el caso de Instagram?
a) Rendimiento, por la velocidad de carga del feed principal
b) Escalabilidad, por la cantidad de publicaciones simultáneas
c) Disponibilidad, por la continuidad del servicio de mensajería
*d) Modificabilidad, por la facilidad para agregar nuevas funciones al feed

## Nivel 3: Arquitecturas de Software - Vistas

### Tema: Definición de arquitectura de software (Bass y Clements)

1. Según la definición de Bass y Clements, ¿qué es la arquitectura de software de un sistema de computación?
*a) El conjunto de estructuras necesarias para razonar sobre el sistema completo
b) El conjunto de algoritmos necesarios para procesar los datos del sistema
c) El conjunto de casos de uso necesarios para validar el sistema
d) El conjunto de pruebas necesarias para certificar la calidad del sistema

2. Según el material, ¿en términos de qué define la arquitectura al sistema?
a) En términos de algoritmos y estructuras de datos internas del sistema
*b) En términos de elementos e interacción con el sistema
c) En términos de casos de test y su cobertura
d) En términos de costos y plazos del proyecto

3. Según el material, ¿qué correspondencia muestra la arquitectura de un sistema?
a) La correspondencia entre el presupuesto y los recursos asignados
b) La correspondencia entre el cliente y los stakeholders involucrados en el proyecto
*c) La correspondencia entre los requerimientos y los elementos del sistema construido
d) La correspondencia entre el cronograma y las entregas realizadas

4. Según el material, ¿qué atributos de calidad resuelve la arquitectura a nivel del sistema?
a) Usabilidad, auditabilidad, latencia y throughput
b) Modificabilidad, testing, latencia y jitter
c) Seguridad, integridad, confidencialidad y disponibilidad
*d) Escalabilidad, flexibilidad, confiabilidad y performance

5. Según el material, ¿sobre qué trata la arquitectura de un sistema?
a) Sobre el lenguaje de programación empleado para construir el sistema
b) Sobre el presupuesto total asignado para desarrollar el proyecto
*c) Sobre cómo el sistema se descompone en partes y cómo interactúan
d) Sobre el cronograma completo de entregas realizadas en el proyecto

### Tema: Analogía con la ingeniería civil

6. Según la analogía con la ingeniería civil presentada, ¿a qué equivalen los estilos arquitectónicos (colonial, victoriano, griego)?
*a) A los paradigmas de organización de sistemas de software modernos
b) A los lenguajes de programación elegidos para cada proyecto
c) A los estándares de calidad certificados por la industria del software
d) A las metodologías ágiles utilizadas para el desarrollo del sistema

7. Según la analogía con la ingeniería civil, ¿cómo se llaman las arquitecturas pensadas para un dominio específico, como hospitales o cárceles?
a) Patrones de interacción específicos del dominio elegido
*b) Arquitecturas de referencia para ese dominio
c) Estilos arquitectónicos certificados del dominio
d) Estructuras de referencia del sistema completo

### Tema: Estilos, patrones y arquitecturas de referencia

8. Según Bass y Clements, ¿cómo se define un estilo o patrón arquitectónico?
a) Solo un conjunto de pruebas automatizadas para el sistema ya completo
*b) Como una descripción de tipos de relaciones y elementos, con restricciones de uso
c) Solo un documento que detalla el presupuesto total del proyecto
d) Solo un diagrama que muestra el cronograma completo de trabajo

9. Según Bass y Clements, ¿cómo se define una arquitectura de referencia?
a) Como un conjunto de pruebas de aceptación del cliente final
b) Como un documento legal que regula todo el proyecto
*c) Como una división común de funcionalidad mapeada a elementos que la implementan
d) Como un cronograma detallado de las entregas finales del proyecto

### Tema: Principios fundamentales de la arquitectura

10. Según el material, ¿cuál es el primer principio fundamental sobre arquitectura?
a) Solo las aplicaciones grandes tienen una arquitectura definida
b) Ninguna aplicación necesita una arquitectura formal
c) Solo los sistemas críticos requieren una arquitectura
*d) Toda aplicación tiene una arquitectura definida

11. Según el material, ¿cuál es el segundo principio fundamental sobre arquitectura?
*a) Cada aplicación tiene al menos un arquitecto
b) Cada aplicación necesita al menos diez desarrolladores
c) Cada aplicación requiere un presupuesto ilimitado
d) Cada aplicación debe tener un único usuario final

12. Según el material, ¿cuál es el tercer principio fundamental sobre arquitectura?
a) La arquitectura es siempre la última fase del desarrollo
*b) La "arquitectura" no es una fase del desarrollo
c) La arquitectura solo se define al inicio del proyecto
d) La arquitectura se define exclusivamente al finalizar el proyecto

13. Según el material, ¿cómo se define la arquitectura en relación con las decisiones de diseño?
a) Como el conjunto de decisiones menores de implementación técnica tomadas a diario
b) Como el conjunto de decisiones tomadas únicamente por el cliente
*c) Como el conjunto de decisiones principales de diseño de un sistema
d) Como el conjunto de decisiones tomadas después de liberar el sistema

14. Según Clements (1996), ¿cuáles son los temas fundamentales de la arquitectura de software?
a) Elicitación, modelado, análisis y validación de requerimientos
b) Componentes, conectores y propiedades del sistema
c) Vistas lógica, de procesos, física y de despliegue del sistema
*d) Diseño, representación, evaluación, desarrollo y recuperación de la arquitectura

### Tema: Características de una buena arquitectura

15. Según el material, ¿qué implica la "integridad conceptual" de una buena arquitectura?
*a) Que sea producto de un arquitecto o un grupo pequeño con líder claro
b) Que sea aprobada formalmente por todos los stakeholders del proyecto sin excepción
c) Que sea documentada exclusivamente utilizando diagramas en formato UML estándar
d) Que sea implementada siempre por un equipo grande y distribuido geográficamente

16. Según el material, ¿qué debe tener claro el equipo de arquitectura para lograr una buena arquitectura?
a) El cronograma detallado y el presupuesto total del proyecto
*b) Los requerimientos funcionales y los atributos de calidad que sean claros
c) El organigrama completo de la empresa que contrata el proyecto
d) La lista de tecnologías que prefiere usar cada desarrollador

17. Según el material, ¿qué dos condiciones adicionales debe cumplir una buena arquitectura respecto a su documentación?
a) Debe estar documentada, pero no necesita ser revisada por nadie
b) Debe ser revisada por gerencia, pero no necesita estar documentada
*c) Debe estar documentada y debe ser revisada por los stakeholders
d) Debe estar documentada solo si el cliente lo solicita expresamente

18. Según el material, ¿qué otras características debe tener una buena arquitectura, además de estar documentada?
a) Ser evaluada solo al finalizar el proyecto, sin permitir cambios
b) Ser implementada de una sola vez, sin fases intermedias de desarrollo
c) Ser revisada únicamente por el arquitecto principal del proyecto
*d) Ser evaluada cuantitativamente y permitir una implementación incremental del sistema

19. Según el material, ¿en qué se basan los módulos bien definidos de una buena arquitectura?
*a) En el ocultamiento de la información, con interfaces claramente definidas
b) En la cantidad de líneas de código de cada módulo
c) En la opinión personal de cada desarrollador del equipo de trabajo
d) En la cantidad de pruebas unitarias que posee cada módulo

### Tema: Representación y objetivos de la arquitectura

20. Según el material, ¿cómo se describe la representación de las arquitecturas de software?
a) Como una representación de bajo nivel centrada en el código fuente
*b) Como una representación de alto nivel de la estructura del sistema
c) Como una representación exclusiva de la base de datos del sistema
d) Como una representación centrada solo en la interfaz de usuario final del sistema

21. Según el material, ¿qué tipo de aspectos trata la arquitectura que no pueden tratarse dentro de los módulos?
a) Aspectos exclusivamente relacionados con el presupuesto del proyecto
b) Aspectos exclusivamente relacionados con la interfaz gráfica de usuario final
*c) Aspectos del diseño y desarrollo que exceden a los módulos individuales
d) Aspectos exclusivamente relacionados con la documentación del usuario

22. Según el material, ¿cuál es uno de los objetivos de las arquitecturas de software respecto a la comprensión del sistema?
a) Ocultar la estructura de las aplicaciones para simplificar su uso
b) Eliminar la necesidad de documentar las aplicaciones complejas
c) Reemplazar el diseño detallado por diagramas automáticos
*d) Comprender y mejorar la estructura de las aplicaciones complejas

23. Según el material, ¿qué objetivo cumple la arquitectura respecto a la reutilización?
*a) Reutilizar la estructura, o partes de ella, para resolver problemas similares
b) Reutilizar el mismo código fuente en todos los proyectos futuros
c) Reutilizar la documentación de proyectos anteriores sin modificarla bajo ninguna circunstancia particular
d) Reutilizar las pruebas unitarias de otros sistemas ya liberados

24. Según el material, ¿qué objetivo cumple la arquitectura respecto a la corrección de la aplicación?
a) Analizar exclusivamente el rendimiento de la base de datos del sistema
*b) Analizar la corrección de la aplicación y su cumplimiento de los requisitos
c) Analizar exclusivamente el costo total estimado para el proyecto
d) Analizar exclusivamente la satisfacción declarada por el cliente final

25. Según el material, ¿qué objetivo cumple la arquitectura respecto a la evolución de la aplicación?
a) Impedir cualquier cambio futuro sobre la aplicación ya liberada
b) Eliminar las partes inmutables de la aplicación en cada versión del sistema
*c) Planificar la evolución identificando partes mutables e inmutables y sus costos
d) Delegar la evolución completa al equipo de testing del proyecto

26. Según el material, ¿qué aspectos incluye la adaptación al cambio que facilita la arquitectura?
a) Solo la reconfiguración y nada más del sistema
b) Solo la escalabilidad y la mantenibilidad del sistema completo
c) Solo la composición y la reutilización exclusivamente
*d) Composición, reconfiguración, reutilización, escalabilidad y mantenibilidad del sistema

27. Según el material, ¿de qué no se ocupa la arquitectura de software?
*a) Del diseño detallado, de algoritmos y de estructuras de datos
b) De la definición de los requerimientos funcionales del sistema completo y validado
c) De la identificación de los atributos de calidad del sistema
d) De la definición de las restricciones impuestas por el cliente

### Tema: Definición de arquitectura según Garlan y Shaw

28. Según Garlan y Shaw (1993), ¿cómo se define la arquitectura de software?
a) Como un conjunto de pruebas y casos de uso del sistema completo
*b) Como una colección de componentes junto con una descripción de sus interacciones
c) Como un documento que detalla los requerimientos del cliente final
d) Como un cronograma de tareas asignadas a todo el equipo

29. Según Garlan y Shaw, ¿qué representan los "componentes" de una arquitectura de software?
a) Los protocolos de comunicación entre los distintos módulos del sistema
b) Las restricciones no negociables impuestas por el cliente
*c) Los lugares de almacenamiento o cómputo, como filtros o bases de datos
d) Los diagramas que documentan la arquitectura del sistema

30. Según Garlan y Shaw, ¿qué representan los "conectores" de una arquitectura de software?
a) Los lugares de almacenamiento de datos del sistema
b) Las propiedades utilizadas para la construcción y el análisis del sistema
c) Los atributos de calidad requeridos por los stakeholders
*d) Los mediadores entre componentes, como llamadas a procedimientos o pipes

31. Según Garlan y Shaw, ¿qué representan las "propiedades" de una arquitectura de software?
*a) La información para construcción, como pre y post condiciones del sistema
b) Los lugares de almacenamiento o cómputo utilizados por el sistema completo y actual
c) Los mediadores entre los distintos componentes del sistema completo
d) Los protocolos de sincronización utilizados por todo el sistema

### Tema: Vistas arquitectónicas: concepto y ejemplos

32. Según el material, ¿qué tipos de estructuras pueden ser la base de una vista arquitectónica?
a) Solo la estructura interna del código fuente del sistema
b) Solo las estructuras de datos internas utilizadas por el sistema
c) Solo los diagramas de clases y de secuencia del sistema
*d) Del código, run-time, de deployment y del entorno de desarrollo del sistema

33. Según el material, ¿en qué estuvo el foco históricamente al hablar de vistas arquitectónicas?
*a) En las vistas de código fuente del sistema
b) En las vistas de despliegue realizadas en la nube pública
c) En las vistas de procesos de negocio
d) En las vistas físicas de hardware

34. Según el material, ¿qué representan las vistas arquitectónicas?
a) La totalidad de la arquitectura de software en un único diagrama del sistema
*b) Un aspecto parcial de la arquitectura que muestra propiedades específicas del sistema
c) El código fuente completo del sistema en un solo archivo
d) El cronograma completo de todas las entregas del proyecto

35. Según el material, ¿por qué existen múltiples vistas arquitectónicas en lugar de una sola?
a) Porque cada vista corresponde a un cliente distinto del proyecto
b) Porque cada vista se genera automáticamente por una herramienta
*c) Porque una única representación resultaría demasiado compleja de entender
d) Porque cada vista debe ser aprobada por un comité distinto

36. Según el material, ¿de qué depende la relevancia de una vista arquitectónica?
a) Depende únicamente de la antigüedad del sistema
b) Depende únicamente del tamaño del equipo de desarrollo asignado al proyecto
c) Depende únicamente del presupuesto asignado al proyecto
*d) Depende del propósito, como el análisis de atributos de calidad

37. Según el material, ¿qué atributo de calidad suele exponer especialmente la vista modular?
*a) La portabilidad
b) La confiabilidad
c) La performance
d) La disponibilidad

38. Según el material, ¿qué atributos de calidad suele exponer especialmente la vista de deployment?
a) Usabilidad y accesibilidad
*b) Performance y confiabilidad
c) Portabilidad y modificabilidad
d) Seguridad y auditabilidad

39. Según el material, ¿es correcto afirmar que una vista arquitectónica es "LA" arquitectura del sistema?
a) Sí, la vista lógica siempre representa la arquitectura completa
b) Sí, cualquier vista puede considerarse la arquitectura completa
*c) No, ninguna vista es "LA" arquitectura del sistema
d) Sí, pero solo si el sistema es suficientemente pequeño

40. Según las estructuras propuestas por David Parnas (1974), ¿cuáles se mencionan como base de las vistas?
a) Estructura lógica, estructura física y estructura de despliegue
b) Estructura de datos, estructura de control y estructura de red del sistema
c) Estructura de clases, estructura de objetos y estructura de paquetes
*d) Estructura de módulos, estructura de uso y estructura de procesos

### Tema: El modelo de vistas 4+1 de Kruchten

41. En la Vista 4+1 de Kruchten (1995), ¿a qué stakeholder corresponde la Vista Lógica?
*a) Al usuario final, centrada en la funcionalidad del sistema
b) A los programadores, centrada en la gestión del software
c) A los integradores, centrada en el rendimiento y la escalabilidad
d) A los ingenieros de sistemas, centrada en la topología del sistema

42. En la Vista 4+1 de Kruchten, ¿a qué stakeholder corresponde la Vista de Despliegue?
a) Al usuario final, centrada en la funcionalidad del sistema
*b) A los programadores, centrada en la gestión del software
c) A los integradores, centrada en el rendimiento y la escalabilidad
d) A los ingenieros de sistemas, centrada en la topología del sistema

43. En la Vista 4+1 de Kruchten, ¿qué representa la "+1" del modelo?
a) La vista de despliegue, centrada en la gestión del software
b) La vista física, centrada en la topología del sistema
*c) La vista de escenarios, representada mediante el diagrama de casos de uso
d) La vista de procesos, centrada en el rendimiento y la escalabilidad del sistema

## Nivel 4: Viewtypes y Estilos Arquitectónicos

### Tema: Diseño In the Small vs In the Large

1. ¿En qué se enfoca principalmente el diseño "In the Small"?
*a) En algoritmos, estructuras de datos e interfaces de módulos individuales
b) En la comunicación entre los componentes principales del sistema
c) En la selección de tecnologías, patrones y herramientas para el desarrollo
d) En la planificación del crecimiento futuro del sistema completo

2. ¿Qué enfoque caracteriza al diseño "In the Large"?
a) Los detalles de implementación específicos a nivel del código fuente del sistema
*b) La estructura general del sistema y la comunicación entre sus componentes
c) La organización óptima de las estructuras de datos internas
d) La eficiencia de los algoritmos utilizados por cada módulo

3. Según la comparación entre ambos enfoques de diseño, ¿cómo se caracteriza cada uno?
a) In the Small es estratégico; In the Large es táctico
b) Ambos enfoques del diseño son estratégicos y no tienen ningún componente táctico
*c) In the Small es táctico; In the Large es estratégico
d) Ambos enfoques del diseño son tácticos y no tienen ningún componente estratégico

### Tema: Viewtypes: concepto general y estilos asociados

4. ¿Qué son los "Viewtypes" según el material?
a) Los diagramas de casos de uso que documentan los requerimientos del sistema
b) Los patrones de diseño que se aplican a nivel de código fuente
c) Las plataformas de mensajería utilizadas para la comunicación entre distintos sistemas externos del proyecto
*d) Las vistas de arquitectura orientadas a estructuras de módulos, C&C y alocación

5. Según el cuadro de estilos de viewtypes, ¿cuáles corresponden al Module?
*a) Descomposición, Usos, Generalización y Capas (Layers)
b) Pipe & Filter, Publish & Subscribe y Client-Server
c) Deployment, Implementation y Work Assignment
d) Blackboard, Shared-data y Point to point messaging

6. Según el cuadro de estilos de viewtypes, ¿cuáles corresponden al C&C?
a) Los estilos de Descomposición, Usos y Generalización del módulo
*b) Pipe & Filter, Publish & Subscribe, Shared Data y Client-Server
c) Deployment, Implementation y Work Assignment del entorno de alocación
d) Batch sequential, Pipeline y UNIX Pipe & Filter del estilo Data-Flow

### Tema: Module Viewtype

7. Según el material, ¿qué es un módulo dentro del Module Viewtype?
*a) Una unidad de código que implementa un conjunto de responsabilidades
b) Una entidad con manifestación runtime que consume recursos de ejecución
c) Un mecanismo de comunicación utilizado entre distintos componentes independientes del sistema
d) Una estructura de datos central compartida por varios componentes

8. En el Module Viewtype, ¿qué relación describe el diagrama de Descomposición?
a) La relación de herencia entre las clases del sistema
*b) La relación "es un submódulo de" entre los módulos
c) La relación de comunicación entre procesos en tiempo de ejecución
d) La relación entre elementos de software y su entorno de despliegue

9. Según el material, ¿cuándo se dice que un módulo A "usa a" un módulo B?
a) Cuando A invoca directamente una función definida dentro de B
b) Cuando B hereda directamente todas las responsabilidades y atributos definidos en A
*c) Cuando la correcta ejecución de B resulta necesaria para la ejecución de A
d) Cuando A y B pertenecen exactamente al mismo paquete de código fuente del sistema

10. En el Module Viewtype, ¿a qué corresponde el diagrama de Clases?
a) A módulos que representan estructuras de datos persistentes del sistema completo
b) A módulos vinculados por relaciones de despliegue en distintos entornos
c) A módulos organizados exclusivamente según su visibilidad de interfaces
*d) A módulos que son clases, relacionadas entre sí mediante herencia

11. Según el material, ¿para qué sirve el Module Viewtype en el ámbito del análisis?
*a) Para la trazabilidad de requerimientos y el análisis de impacto
b) Para asignar la responsabilidad del desarrollo a distintos equipos
c) Para mapear el software a estructuras de archivos en repositorios
d) Para mostrar cómo el software se asigna a hardware y comunicación

### Tema: Component & Connector (C&C) Viewtype

12. ¿En qué están centradas las estructuras del C&C Viewtype?
a) En los módulos de código fuente y sus relaciones de dependencia
*b) En los procesos que se comunican entre sí
c) En la estructura de archivos de los repositorios de control de versiones
d) En la asignación de trabajo entre distintos equipos de programadores

13. Según el material, ¿cómo se conforma la configuración del sistema en el C&C Viewtype?
a) Como una jerarquía de módulos organizados por capas
b) Como una tabla de asignación de trabajo entre distintos equipos de desarrollo
*c) Como un grafo conformado por la asociación entre componentes y conectores
d) Como una secuencia lineal de pasos ejecutados hasta completarse

14. Según el material, ¿cómo se relacionan e interactúan los componentes en el C&C Viewtype?
a) Se relacionan directamente entre sí, sin necesidad de conectores
b) Se relacionan únicamente mediante relaciones de herencia entre las clases del sistema
c) Se relacionan a través de una estructura de datos compartida central
*d) Son entidades independientes que solo se relacionan a través de conectores

15. En el C&C Viewtype, ¿qué indica la relación de "attachment"?
*a) Qué componentes están vinculados con qué conectores
b) Qué módulos son submódulos de otros módulos del sistema
c) A qué hardware se asigna cada elemento de software
d) Qué equipo de programadores es responsable de cada componente

### Tema: Allocation Viewtype

16. Dentro del Allocation Viewtype, ¿qué muestra la estructura de Deployment?
a) Cómo se mapean los elementos de software a estructuras de archivos
*b) Cómo el software se asigna a hardware y elementos de comunicación
c) Cómo se asigna la responsabilidad del desarrollo a equipos de programadores
d) Cómo se relacionan los componentes con los conectores dentro del sistema completo

17. Dentro del Allocation Viewtype, ¿qué muestra la estructura de Implementación?
a) Cómo el software se asigna a hardware y elementos de comunicación
b) Cómo se comunican los componentes entre sí a través de sus distintos conectores del sistema
*c) Cómo los elementos de software se mapean a estructuras de archivos en repositorios
d) Cómo se organiza el código fuente según su visibilidad de interfaces

18. Dentro del Allocation Viewtype, ¿a qué se refiere la "asignación de trabajo" (work assignment)?
a) A la asociación entre componentes y sus puertos de conexión
b) A la relación de herencia entre las clases del sistema
c) A la correspondencia directa entre el software y el hardware de ejecución
*d) A la responsabilidad del desarrollo y la implementación asignada a equipos

### Tema: Documentación de la arquitectura

19. Según el material, ¿qué elementos incluye la documentación de una arquitectura?
a) Solo el código fuente comentado y las pruebas unitarias
b) Solo el cronograma de entregas y el presupuesto del proyecto
c) Solo los diagramas de despliegue en el entorno de producción
*d) Descripción de requerimientos, contexto, diagramas y restricciones de implementación

### Tema: Estilos arquitectónicos: concepto general

20. ¿Qué determina un estilo arquitectónico según el material?
a) Los requerimientos funcionales que debe cumplir el sistema completo
b) El cronograma de desarrollo, las entregas y el presupuesto total asignado al proyecto
*c) El vocabulario de componentes y conectores y las restricciones de cómo combinarlos
d) Los atributos de calidad exigidos por los stakeholders del sistema

21. Según las propiedades de un estilo arquitectónico, ¿qué aporta el "vocabulario para los elementos de diseño"?
a) Las restricciones topológicas sobre cómo se combinan los elementos
b) Los criterios utilizados para evaluar cuantitativamente una arquitectura de software ya construida
c) La asignación de responsabilidades a los equipos de desarrollo
*d) Los tipos de componentes y conectores utilizables, como clases o pipes

22. Según el material, ¿qué ejemplo se da de una regla de composición de un estilo?
*a) Que los elementos de un layer se comuniquen solo con el layer inferior
b) Que los componentes solo puedan comunicarse mediante llamadas a procedimiento
c) Que todo componente deba tener asociado siempre un módulo propio de memoria persistente exclusiva
d) Que los conectores solo puedan transferir datos de forma síncrona

23. Según el material, ¿qué es importante tener en cuenta sobre un estilo arquitectónico?
a) Que siempre determina de forma concreta la funcionalidad completa del sistema construido
*b) Que no define la funcionalidad de un sistema, es algo "abstracto"
c) Que reemplaza la necesidad de definir componentes y conectores
d) Que solo puede aplicarse a sistemas pequeños o medianos

### Tema: Arquitecturas heterogéneas

24. ¿De qué resultan las arquitecturas heterogéneas según el material?
a) De la combinación de distintos entornos de despliegue físico
b) De la combinación de distintos equipos de desarrollo
*c) De la combinación de distintos estilos arquitectónicos
d) De la combinación de distintas bases de datos compartidas

25. Según el material, ¿qué estilos probablemente combine una arquitectura heterogénea hecha con JEE?
a) Batch sequential, Pipeline y UNIX Pipe & Filter
b) Blackboard, Shared-data y Point to point messaging
c) Deployment, Implementation y Work Assignment
*d) Layered, Repository, Independent components e Information hiding

### Tema: Componentes y conectores: conceptos generales

26. Según el material, ¿cuál es la diferencia entre módulos y componentes?
*a) Los módulos son entidades de diseño, mientras que los componentes tienen entidad en ejecución
b) Los módulos tienen entidad en tiempo de ejecución, mientras que los componentes son entidades de diseño
c) Los módulos y los componentes son sinónimos dentro de una arquitectura de software
d) Los módulos definen conectores, mientras que los componentes definen los atributos de calidad

27. Según el material, ¿cómo se describe una arquitectura en términos de Componentes y Conectores?
a) Como un conjunto de módulos organizados exclusivamente por capas
*b) Como una colección de módulos de software interactuando mediante conectores
c) Como una secuencia de pasos que se ejecutan uno a uno hasta completarse
d) Como un documento que detalla los requerimientos del sistema

### Tema: Tipos de componentes

28. Según los tipos de componentes presentados, ¿qué caracteriza a un componente "Computacional"?
a) Mantiene una colección de datos persistentes, como una base de datos
b) Contiene estado y operaciones asociadas mantenidas entre invocaciones sucesivas
*c) Realiza el procesamiento en algún orden, como una función matemática
d) Gobierna la secuencia de tiempo de otros eventos dentro del sistema

29. ¿Qué caracteriza a un componente de tipo "Memoria"?
a) Realiza el procesamiento de los datos en algún orden determinado
b) Contiene un estado y un conjunto de operaciones asociadas entre invocaciones sucesivas del componente
c) Gobierna la secuencia de tiempo de otros eventos del sistema
*d) Mantiene una colección de datos persistentes, como bases de datos o archivos

30. ¿Qué caracteriza a un componente de tipo "Manejador"?
*a) Contiene estado y operaciones asociadas, mantenido entre invocaciones
b) Realiza el procesamiento de datos, como una función matemática
c) Mantiene una colección de datos persistentes del sistema
d) Gobierna la secuencia de tiempo de otros eventos, como un scheduler

31. ¿Qué caracteriza a un componente de tipo "Controlador"?
a) Mantiene una colección de datos persistentes, como tablas de símbolos
*b) Gobierna la secuencia de tiempo de otros eventos, como un scheduler
c) Contiene un estado interno y operaciones asociadas entre distintas invocaciones sucesivas del componente
d) Realiza el procesamiento en algún orden, como un filtro

### Tema: Tipos de conectores

32. Entre los tipos de conectores, ¿qué caracteriza al "Procedure call"?
a) La interacción de procesos a través de flujos de datos, como pipes
b) Que el proceso se inicia recién cuando ocurre un evento determinado
*c) Un simple thread de control entre el invocado y el invocador, como RPC
d) El acceso concurrente a datos, utilizando un esquema definido de bloqueo entre distintos procesos

33. ¿Qué caracteriza al conector de tipo "Data flow"?
a) Un simple thread de control entre invocado e invocador
b) La transferencia explícita de datos discretos entre distintos componentes del sistema, como TCP/IP
c) El acceso concurrente a datos, como una pizarra compartida
*d) La interacción de procesos a través de flujos de datos, como pipes

34. ¿Qué caracteriza al conector de tipo "Implicit invocation"?
*a) Que el proceso se inicia recién cuando ocurre un evento, como listas de correo
b) La transferencia explícita de datos discretos entre distintos componentes del sistema
c) Un thread de control simple entre el componente invocado y el invocador del sistema completo
d) El acceso concurrente a datos con un esquema de bloqueo definido

35. ¿Qué caracteriza al conector de tipo "Message passing"?
a) El acceso concurrente a datos con algún esquema de bloqueo
*b) La interacción mediante transferencia explícita de datos discretos, como TCP/IP
c) Que el proceso se inicia recién cuando ocurre un evento
d) La interacción de procesos a través de flujos de datos continuos

36. ¿Qué caracteriza al conector de tipo "Shared data"?
a) La interacción de procesos a través de flujos de datos continuos
b) Un simple thread de control entre el invocado y el invocador
*c) El acceso concurrente a datos, con un esquema de bloqueo, como una pizarra
d) El inicio del proceso recién cuando ocurre un evento externo predefinido del sistema completo

### Tema: Taxonomía de estilos arquitectónicos

37. Según la taxonomía de estilos arquitectónicos, ¿qué subestilos se desprenden de "Data-Flow"?
a) Publish-subscribe y Point to point messaging
b) Client-Server y Peer to Peer
c) Blackboard y Shared-data como estilos del Repository
*d) Batch sequential y Pipe & Filter

38. Según la taxonomía de estilos arquitectónicos, ¿qué subestilos se desprenden de "Call-Return"?
*a) Client-Server y Peer to Peer
b) Batch sequential y Pipeline
c) Blackboard y Shared-data
d) Publish-subscribe y Point to point messaging

39. Según la taxonomía de estilos arquitectónicos, ¿qué subestilos se desprenden de "Event-Based"?
a) Client-Server y Peer to Peer, del estilo Call-Return
*b) Publish-subscribe y Point to point messaging
c) Batch sequential y Pipe & Filter
d) Blackboard y Shared-data del Repository

40. Según la taxonomía de estilos arquitectónicos, ¿qué subestilos se desprenden de "Repository"?
a) Client-Server y Peer to Peer
b) Publish-subscribe y Point to point messaging
*c) Blackboard y Shared-data
d) Pipeline y UNIX Pipe & Filter

### Tema: Estilos de la familia Data-Flow

41. Según el material, ¿en qué se basa la estructura del estilo Data Flow?
a) En la asignación de trabajo a distintos equipos de desarrollo
b) En el acceso concurrente a una estructura de datos central
c) En la comunicación directa que se establece entre nodos autónomos e iguales del sistema
*d) En transformaciones sucesivas a los datos de input, que fluyen hasta su destino

42. ¿Qué caracteriza al estilo "Batch Sequential" dentro de Data Flow?
*a) Cada paso se ejecuta hasta completarse, recién después comienza el siguiente
b) Cada componente lee y produce streams de datos de forma continua
c) Los componentes se suscriben a un canal para recibir mensajes
d) Los datos se almacenan en una única estructura central compartida por todos

43. ¿Qué caracteriza al estilo "Pipes & Filters" dentro de Data Flow?
a) Cada paso debe completarse antes de que comience el siguiente
*b) Los filtros ejecutan transformaciones y los pipes pasan streams entre ellos
c) Los componentes se comunican exclusivamente mediante datos compartidos entre sí en todo momento
d) Un componente de control asigna trabajo a los demás componentes

### Tema: Estilos de la familia Call-Return

44. Según el material, ¿cómo funciona el estilo "Call Return"?
a) Los componentes se suscriben a un canal para recibir eventos del sistema
b) Los datos fluyen de forma continua entre los distintos filtros del sistema
*c) Un componente llama o invoca a otro y se queda esperando la respuesta
d) Varios componentes acceden de forma concurrente a una misma estructura de datos compartida entre todos

45. Según el material, ¿qué caracteriza al estilo Layered o Multi-tier?
a) Cada nivel accede libremente a cualquier otro nivel del sistema
b) Los niveles se comunican exclusivamente mediante una estructura de datos compartida entre todos
c) Todos los niveles se ejecutan en un único proceso sin distinción
*d) Cada nivel oculta al siguiente y provee servicios al nivel anterior

46. Según el material, ¿cuál se menciona como una desventaja del estilo Layered?
*a) La dificultad para encontrar la abstracción correcta y posibles pérdidas de performance
b) La imposibilidad de reutilizar el código entre distintos niveles
c) La imposibilidad de aplicar portabilidad entre distintas plataformas de hardware y de software
d) La necesidad obligatoria de usar una base de datos compartida

47. Según el material, ¿cuál es la diferencia entre "Layer" y "Tier"?
a) Layer es una capa física y Tier es una capa lógica del sistema
*b) Layer es una capa lógica, mientras que Tier es la capa física de ejecución
c) Layer y Tier son sinónimos exactos dentro de toda la arquitectura del sistema
d) Layer se aplica solo a los componentes, mientras que Tier se aplica a los conectores

48. Según el material, ¿qué característica tiene el estilo Client/Server respecto al conocimiento entre sus partes?
a) Los servidores conocen la identidad de todos sus clientes
b) Ni los clientes ni los servidores conocen identidades entre sí
*c) Los clientes conocen la identidad del servidor, pero no al revés
d) Tanto clientes como servidores conocen la identidad de la otra parte del sistema

### Tema: Estilo centrado en datos (Repository)

49. Según el material, ¿en qué se basa el estilo "Centradas en datos"?
a) En la comunicación directa entre pares del sistema, sin intermediarios
b) En transformaciones sucesivas aplicadas a los datos de entrada del sistema
*c) En una estructura de datos central a la que acceden los componentes
d) En la asignación jerárquica de responsabilidades entre los distintos módulos del sistema completo

### Tema: Estilo Event-Based, Pub/Sub y tecnologías de mensajería

50. Según el material, ¿cómo se describe el flujo del estilo Event Based (EDA)?
*a) Event Producer, Event Processor y luego Event Consumer
b) Event Consumer, Event Processor y luego Event Producer
c) Event Processor, Event Producer y luego Event Consumer
d) Event Consumer y Event Producer, sin intervención de un procesador

51. Según el material, ¿cómo funciona el estilo Publish & Subscribe?
a) Un componente central asigna tareas específicas a los demás componentes
*b) Los componentes se suscriben a un canal para recibir mensajes de otros
c) Los componentes acceden concurrentemente a una base de datos central
d) Un componente invoca a otro y espera su respuesta directa

52. En el modelo Pub/Sub, ¿qué función cumple el Message Broker?
*a) Recibe los mensajes y los distribuye a los suscriptores adecuados
b) Envía mensajes o eventos directamente a otros publicadores del sistema completo
c) Se suscribe a ciertos tipos de mensajes para recibirlos
d) Almacena de forma permanente todos los mensajes publicados

53. Según el material, ¿qué caracteriza a Apache Kafka?
a) Un broker de mensajes basado en el protocolo AMQP
*b) Un sistema de mensajería distribuida y streaming en tiempo real
c) Un servicio de mensajería exclusivo de Google Cloud
d) Una cola de mensajes utilizada junto con un servicio de notificación

54. Según el material, ¿qué caracteriza a RabbitMQ?
a) Un sistema de streaming en tiempo real usado por Netflix
b) Una alternativa a Kafka diseñada para alta escalabilidad
*c) Un broker de mensajes basado en el protocolo AMQP
d) Un servicio de mensajería de Google Cloud para eventos

55. Según el material, ¿qué relación tienen SNS y SQS dentro de AWS?
a) SNS es la cola de mensajes y SQS permite la publicación
b) Ambos cumplen exactamente la misma función de mensajería dentro de todo AWS
c) SNS y SQS son alternativas de Kafka usadas por Yahoo y Tencent en la nube
*d) SNS permite la publicación de mensajes, y SQS es la cola de mensajes

56. Según el material, ¿dónde se utiliza especialmente Google Cloud Pub/Sub?
*a) En Google Analytics, Firebase y aplicaciones IoT
b) En sistemas de mensajería usados por Slack e Instagram
c) En plataformas de streaming usadas por LinkedIn y Uber
d) En sistemas de cola de mensajes usados por Amazon y Airbnb

57. Según el material, ¿qué caracteriza a Apache Pulsar?
a) Un broker basado en el protocolo AMQP usado por MercadoLibre
*b) Una alternativa a Kafka diseñada para alta escalabilidad
c) Un servicio de mensajería exclusivo de Google Cloud
d) Una cola de mensajes utilizada junto con un servicio de notificación

### Tema: Estilo Peer to Peer y protocolo BitTorrent

58. ¿Cómo se describe el estilo Peer to Peer según el material?
a) Un componente central controla la comunicación de todos los nodos
b) Los nodos se organizan jerárquicamente en niveles o capas del sistema
c) Los nodos comparten exclusivamente una única estructura de datos central compartida entre todos
*d) Nodos autónomos e iguales se comunican entre sí a través de la red

59. Según el material, ¿qué contiene un archivo .torrent?
a) El archivo completo que se va a compartir en la red
b) La lista completa de peers conectados en ese momento
*c) Información sobre los fragmentos del archivo y la ubicación del tracker
d) El historial completo de descargas realizadas por cada peer del sistema entero

60. Según el material, ¿qué función cumplen los Trackers en una red peer to peer?
a) Almacenan una copia completa de los archivos compartidos
b) Descargan los archivos en representación de los demás peers
c) Reemplazan por completo la necesidad de contar con peers
*d) Coordinan la comunicación entre pares, sin almacenar archivos

61. Según el material, ¿cuál es la diferencia entre Seeders y Leechers?
*a) Los Seeders tienen el archivo completo y los Leechers aún lo están descargando
b) Los Seeders coordinan la red y los Leechers almacenan solamente los metadatos del archivo
c) Los Seeders solo descargan y los Leechers solo comparten archivos completos
d) Los Seeders son servidores centrales y los Leechers son trackers

62. Según el material, ¿qué es el "Swarm" en una red peer to peer?
a) El servidor central que coordina toda la red de peers
*b) El conjunto de todos los peers, seeders y leechers, compartiendo un archivo
c) El protocolo que permite compartir listas de peers sin usar nunca un tracker central
d) El mecanismo alternativo a los trackers basado en tabla hash

63. Según el material, ¿para qué sirve el mecanismo DHT (Distributed Hash Table)?
a) Para almacenar una copia completa del archivo compartido en la red
b) Para coordinar exclusivamente la comunicación entre los distintos seeders
*c) Para que los peers se encuentren sin necesidad de un servidor centralizado
d) Para transformar de forma sucesiva los datos de entrada de todo el sistema

64. Según el material, ¿qué permite el protocolo PEX (Peer Exchange)?
a) Almacenar una copia completa del archivo directamente en el tracker central del sistema
b) Que un servidor central coordine la totalidad de la red
c) Que los leechers se conviertan automáticamente en trackers del sistema completo
*d) Que los clientes compartan listas de peers directamente, sin depender del tracker

## Nivel 5: Modelos y Diagramas

### Tema: Fundamentos de objetos y clases (POO)

1. ¿Qué es un objeto, según la definición dada en la clase?
*a) Un componente de software con variables y métodos que modela un aspecto de la vida real
b) Un método que agrupa operaciones comunes a varias clases del mismo sistema
c) Una clasificación abstracta de conceptos relacionados entre sí dentro de un mismo dominio
d) Un identificador único que no cambia durante toda la ejecución del sistema

2. ¿Qué es una clase, según la definición dada en la clase?
a) Una instancia concreta y particular de un objeto ya creado anteriormente
*b) Un plano que define las variables y métodos comunes a un tipo de objetos
c) Un mensaje que se envía entre dos objetos para modificar su estado interno sin restricciones
d) Un identificador global y único que distingue a un objeto del resto

3. Según las características del oid (Object Identifier), ¿cuál de las siguientes afirmaciones es correcta?
*a) Es independiente de la localización física y de las propiedades del objeto
b) Puede reutilizarse nuevamente una vez que el objeto deja de existir por completo
c) Depende del valor de los atributos para mantenerse siempre único
d) Cambia cada vez que el objeto modifica alguno de sus atributos

4. ¿Qué representa el comportamiento de un objeto?
a) La estructura interna que agrupa sus variables privadas y protegidas
b) El conjunto completo de atributos que definen su identidad única
c) El historial completo de todos los estados por los que finalmente pasó el objeto
*d) Lo que agrupa sus competencias, descrito por sus métodos y desencadenado por mensajes

5. Según la distinción entre objetos y clases vista en la clase, ¿cuál de las siguientes afirmaciones es correcta?
*a) Una clase es una entidad abstracta que clasifica cosas, y un objeto es su instancia
b) Una clase se distingue de otras por los valores particulares de sus atributos propios
c) Un objeto agrupa la estructura y el comportamiento de varias clases relacionadas entre sí
d) Un objeto siempre define el comportamiento y los atributos comunes a un grupo de elementos similares

6. Si la clase Automóvil se define a partir de la clase Vehículo, ¿cómo se describe correctamente esta relación?
*a) Automóvil hereda las variables y métodos de Vehículo, y Vehículo es su superclase
b) Automóvil es siempre la superclase directa de la clase Vehículo
c) Automóvil y Vehículo son clases totalmente independientes, sin ninguna relación de herencia entre sí
d) Vehículo es subclase directa y exclusiva de la clase Automóvil

7. ¿Qué representa el polimorfismo en programación orientada a objetos?
a) La capacidad de una clase de heredar variables de más de una superclase
b) La posibilidad de que dos clases compartan el mismo nombre de atributo
c) La restricción que impide modificar el comportamiento heredado en las subclases
*d) La capacidad de procesar objetos de forma distinta, desencadenando operaciones diferentes ante un mismo mensaje

### Tema: Modelos, diagramas y conocimiento

8. Según la definición dada en la clase, ¿qué es un modelo?
a) El conjunto de reglas que definen la sintaxis de un lenguaje de programación específico
b) Una colección de diagramas obligatorios en todo proyecto de desarrollo de software
*c) Conocimiento depurado, es decir una abstracción del sistema con un propósito y nivel de detalle apropiado
d) Un documento formal que reemplaza por completo al código fuente del sistema

9. ¿Qué es un diagrama, según la definición vista en clase?
a) Un documento textual que reemplaza a la comunicación hablada entre el equipo
b) Un conjunto de clases conceptuales del dominio del problema particular
c) El modelo completo y detallado de un sistema de software
*d) Una representación gráfica de una colección de elementos de modelado, dibujada como un grafo

10. Respecto a la relación entre conocimiento explícito e implícito vista en la clase, ¿cuál es correcta?
a) El conocimiento implícito es, en términos generales, siempre el más fácil de formalizar y transmitir a otros
*b) El conocimiento explícito puede expresarse en palabras y números, y el implícito es difícil de verbalizar
c) El conocimiento explícito está íntimamente ligado a la experiencia personal y a los presentimientos
d) Ambos tipos de conocimiento representan aproximadamente la misma proporción del conocimiento total del proyecto

### Tema: UML: origen y características generales

11. ¿Qué significa la sigla UML y qué tipo de lenguaje es?
*a) Unified Modeling Language, un lenguaje de propósito general para el modelado orientado a objetos
b) Unified Modular Layout, un formato de documentación técnica para sistemas distribuidos y componentes
c) Unified Method List, un catálogo de patrones de diseño reutilizables orientados a objetos y componentes
d) Universal Method Language, una metodología completa de desarrollo de software orientado a objetos

12. ¿Qué notaciones combina UML, según lo visto en clase?
*a) Modelado orientado a objetos, de datos, de componentes y de flujos de trabajo
b) Modelado de procesos de negocio y modelado de infraestructura de redes, de forma exclusiva
c) Modelado de componentes y modelado de interfaces gráficas de usuario, solamente
d) Modelado orientado a objetos y modelado de bases de datos relacionales, únicamente

13. ¿Quiénes participaron en el origen histórico de UML, conocido primero como "Método Unificado"?
a) Kent Beck, Martin Fowler, Erich Gamma y otros
b) Alan Kay, Barbara Liskov y Niklaus Wirth
*c) Grady Booch, Jim Rumbaugh e Ivar Jacobson
d) James Gosling, Bjarne Stroustrup y Dennis Ritchie

14. Según los inconvenientes de UML señalados en la clase, ¿cuál de las siguientes afirmaciones es correcta?
*a) UML no es una metodología, y le falta integración con otras técnicas de diseño
b) UML no permite documentar interfaces ni patrones de diseño en ningún caso ni escenario posible
c) UML está limitado solamente a un único lenguaje de programación específico
d) UML define una metodología completa y obligatoria de desarrollo de software

15. ¿Cuáles son los mecanismos de extensión de UML mencionados en la clase?
a) Diagrama de clases, diagrama de objetos y diagrama de componentes de software
b) Herencia múltiple, polimorfismo y encapsulamiento de atributos privados
*c) Estereotipo, restricción de integridad y valores etiquetados con nombre y propiedad
d) Asociación, agregación y composición entre clases directamente relacionadas

16. Según la clasificación de los nueve diagramas de UML en cinco vistas, ¿qué diagramas corresponden a la vista de Implementación?
a) Diagrama de Clases y Diagrama de Objetos solamente
*b) Diagrama de Componentes y Diagrama de Despliegue
c) Diagrama de Secuencia y Diagrama de Colaboración
d) Diagrama de Estados y Diagrama de Actividad

### Tema: Diagrama de Casos de Uso

17. ¿Qué diferencia a un requerimiento funcional de uno no funcional, según lo visto en clase?
*a) El funcional describe un servicio del sistema, mientras que el no funcional restringe el sistema o su desarrollo
b) El funcional depende del lenguaje de programación elegido, y el no funcional no depende de ninguna implementación
c) El funcional se documenta con diagramas de clases, mientras que el no funcional se documenta con casos de uso
d) El funcional es opcional en un proyecto, mientras que el no funcional es siempre obligatorio

18. ¿Desde qué punto de vista describen los Casos de Uso el comportamiento de un sistema?
a) Desde el punto de vista de la base de datos que almacena la información
b) Desde el punto de vista del código fuente que lo implementa
*c) Desde el punto de vista del usuario, mediante acciones y reacciones
d) Desde el punto de vista del proceso de despliegue en producción

19. ¿Qué es un Actor en un diagrama de Casos de Uso?
*a) Una agrupación uniforme de usuarios, sistemas o máquinas que interactúan igual con el sistema
b) Un atributo que describe el estado inicial de un caso de uso
c) Un mensaje que se envía entre dos casos de uso relacionados
d) Una clase concreta que implementa la lógica interna del sistema

20. ¿Cómo se expresa habitualmente el nombre de un caso de uso?
a) Con un sustantivo seguido de un adjetivo calificativo extenso
b) Con el nombre exacto de la clase de software que implementa la funcionalidad
c) Con un número de identificación seguido de una descripción técnica breve
*d) Con un verbo en gerundio, desde el punto de vista del actor

21. En un diagrama de Casos de Uso, ¿dónde se ubican los actores respecto al sistema?
a) Dentro del rectángulo que representa el sistema, junto a los casos de uso
*b) Fuera del alcance del sistema, que se representa mediante un rectángulo
c) En un rectángulo aparte que no tiene relación gráfica con el sistema
d) Dentro de cada caso de uso, como parte de su descripción textual

### Tema: Diagrama de Actividad

22. ¿Qué puede especificar un Diagrama de Actividad, según lo visto en clase?
a) Únicamente la estructura estática de las clases y sus atributos del sistema completo
*b) Un método, un caso de uso, la interacción entre casos de uso o un proceso de negocio
c) Solamente las relaciones de herencia y polimorfismo entre clases del dominio del problema
d) Exclusivamente la topología de despliegue de los componentes físicos de hardware del sistema

23. ¿Qué forma tiene el ícono utilizado para representar una decisión en un Diagrama de Actividad?
*a) Un diamante, con flechas entrantes y dos o más salientes etiquetadas por condición
b) Un óvalo con el texto completo de la condición siempre visible en su interior
c) Un rectángulo con los bordes redondeados en sus cuatro esquinas
d) Un círculo relleno que marca claramente el punto de bifurcación

24. ¿Para qué se usan los operadores fork y join en un Diagrama de Actividad?
a) Para indicar siempre el estado final de una secuencia de actividades
*b) Para representar concurrencia entre actividades que se ejecutan en paralelo
c) Para representar la herencia entre dos actividades relacionadas
d) Para asociar una actividad con el actor que la ejecuta

25. ¿Qué son los andariveles en un Diagrama de Actividad?
a) Estados intermedios que representan una pausa en la ejecución
b) Condiciones booleanas que determinan el camino de ejecución que sigue el flujo
c) Transiciones automáticas que siempre conectan dos actividades sucesivas
*d) Divisiones que organizan las acciones según quién es responsable de ejecutarlas

### Tema: Diagrama de Estados

26. ¿Qué representan los Diagramas de Estados, según lo visto en clase?
a) La composición jerárquica de componentes de un sistema distribuido completo
b) La estructura siempre estática de atributos y operaciones de una clase concreta
*c) Autómatas de estados finitos, vistos desde los estados y las transiciones
d) La secuencia temporal de mensajes intercambiados entre varios objetos distintos

27. ¿De qué formalismo provienen los Diagramas de Estados de UML?
*a) De los Statecharts de Harel
b) De las Máquinas de Turing
c) De los Diagramas de Flujo de Datos
d) De las Redes de Petri

28. En la composición de estados de un Diagrama de Estados, ¿qué heredan los subestados de su superestado?
a) Únicamente el nombre del superestado, sin ninguna otra propiedad adicional heredada
b) La representación gráfica de todos los estados del diagrama
*c) Las variables de estado y las transiciones externas del superestado
d) Los eventos internos de otros subestados no relacionados

29. ¿Para qué se utiliza la marca de Historia (H) en un Diagrama de Estados?
a) Representar la concurrencia entre dos subestados simultáneos
b) Señalar que un estado no puede volver a activarse
*c) Memorizar el último subestado visitado, para recuperarlo luego
d) Indicar el estado inicial obligatorio del autómata

### Tema: Diagrama de Clases y Objetos

30. ¿Cuáles son los tres compartimientos en los que se representa una clase en un Diagrama de Clases?
a) Estereotipo, interfaz y dependencia entre clases
b) Visibilidad, multiplicidad y capacidad de cambio del atributo
c) Constructor, destructor y métodos estáticos de la clase
*d) Nombre, atributos y operaciones de la clase

31. Según los niveles de encapsulamiento de UML, ¿qué visibilidad corresponde a un atributo marcado con el signo "#"?
a) Privado, invisible desde fuera de la clase
*b) Protegido, visible para las clases derivadas de la original
c) Público, visible para cualquier otra clase
d) De paquete, visible solo dentro del mismo package de código

32. Si un atributo tiene multiplicidad "1..*", ¿qué significa esto?
a) El atributo puede tener como máximo un único valor opcional
*b) El atributo puede tener varios valores, pero debe tener al menos uno
c) El atributo no puede tener ningún valor asignado válido en ningún caso posible
d) El atributo debe tener siempre exactamente un único valor definido

33. ¿Cuál es la principal diferencia entre Composición y Agregación en un Diagrama de Clases?
a) La Agregación solo puede darse entre clases abstractas, y la Composición entre clases concretas
b) La Composición permite multiplicidad variable, mientras que la Agregación exige siempre multiplicidad uno
c) La Agregación se representa con un rombo relleno, y la Composición con un rombo vacío
*d) En la Composición, el todo y las partes tienen el mismo ciclo de vida

34. ¿Qué caracteriza a una asociación n-aria en un Diagrama de Clases?
a) Es una relación que solo puede establecerse entre exactamente dos clases del mismo diagrama
b) Es una relación de herencia entre una clase superclase y sus subclases correspondientes
*c) Es una asociación entre más de dos clases, representada con un rombo unido a cada una
d) Es una dependencia en la que una clase crea instancias de otra clase relacionada

35. En una relación de Generalización entre una superclase y una subclase, ¿qué heredan las subclases?
a) Solamente las operaciones privadas de la clase padre
b) Únicamente las relaciones directas de dependencia de la clase padre
c) Únicamente el nombre de la superclase, sin sus propiedades
*d) Los atributos, operaciones y asociaciones de la clase padre

36. ¿Qué caracteriza a una Clase de Asociación en un Diagrama de Clases?
*a) Es una asociación que funciona también como una clase, con atributos propios a ubicar
b) Es una clase que solamente puede heredar de una única interfaz ya definida del sistema
c) Es una relación de dependencia entre dos interfaces requeridas por distintas clases
d) Es una clase que no puede tener atributos propios ni operaciones definidas

37. ¿Qué diferencia existe entre una interfaz suministrada y una interfaz requerida?
a) La suministrada se representa con un rombo, y la requerida con un rectángulo
b) La suministrada solo aplica a clases abstractas, y la requerida solo a clases concretas
c) La suministrada es opcional, mientras que la requerida es siempre obligatoria para toda clase
*d) La suministrada es la que la clase implementa, y la requerida es la que necesita para funcionar

38. ¿Qué representa un Diagrama de Objetos respecto de un Diagrama de Clases?
a) Un diagrama independiente que no guarda relación con las clases del sistema
b) Una versión simplificada que omite todas las relaciones entre clases
c) La documentación textual de los casos de uso del sistema
*d) Una instancia posible del diagrama de clases en tiempo de ejecución

39. ¿Qué diferencia al modelo de dominio del modelo de diseño en un Diagrama de Clases?
a) El modelo de dominio determina siempre los futuros componentes de software, y el de diseño muestra las clases conceptuales
b) El modelo de dominio se aplica solo a sistemas orientados a objetos sin bases de datos
*c) El modelo de dominio muestra las clases conceptuales del problema, y el de diseño define los componentes futuros
d) Ambos modelos se usan exclusivamente durante la etapa final de implementación del sistema ya completo

## Nivel 6: Arquitectura y Agilidad

### Tema: El modelo en cascada: origen y características

1. Según el modelo propuesto por Winston Royce en 1970, ¿qué tipo de evolución sugería el desarrollo de software?
a) Una evolución guiada exclusivamente por pruebas automatizadas continuas de forma constante
b) Una evolución iterativa, con ciclos cortos de retroalimentación constante
c) Una evolución basada en incrementos independientes entregados en paralelo
*d) Una evolución secuencial, con fases que se completan una después de la otra

2. ¿Qué concepto asociado al modelo en cascada implicaba congelar los requerimientos desde el inicio?
*a) El concepto de firma de contrato, que fija el alcance desde el comienzo
b) El concepto de backlog, que prioriza necesidades de forma continua
c) El concepto de sprint, que fija el alcance de cada iteración corta
d) El concepto de historia de usuario, que documenta siempre el alcance de forma flexible

3. ¿En qué ámbito tuvo origen el enfoque secuencial de desarrollo de software, según lo visto en clase?
a) En el diseño gráfico, donde las iteraciones cortas son la norma habitual y constante
b) En el desarrollo de videojuegos, donde los cambios son económicos y frecuentes
*c) En los ámbitos de la construcción, donde los cambios resultan costosos o imposibles
d) En la industria farmacéutica, donde se prioriza la entrega temprana de valor

4. Según la anécdota citada en clase, ¿qué estándar del DoD de EEUU estableció en 1985 un proceso estandarizado en cascada?
*a) El estándar 2167 (DoD-STS-2167), basado en el paper de Royce
b) El Agile Manifesto, publicado por la Agile Alliance
c) La ley 111-84 de autorización de Defensa Nacional
d) La Guía Scrum, publicada por sus creadores originales

5. Según lo citado en clase sobre el propio paper de Royce, ¿qué advertencia hacía el autor sobre su implementación en cascada?
a) Afirmaba que era la única forma correcta y válida de desarrollar software
*b) Advertía que la implementación descrita era arriesgada e invitaba al fracaso
c) Recomendaba eliminar por completo la fase de pruebas del proceso
d) Sugería aplicarla exclusivamente a proyectos de gran escala y duración

6. Según la ley 111-84 del Congreso de EEUU citada en clase, ¿qué debían incluir los contratos de sistemas de información del DoD?
a) Un enfoque cerrado y propietario de sistemas, sin componentes modulares
b) Un único incremento final que entregue todas las funcionalidades pactadas
c) La eliminación completa de prototipos durante todo el proceso completo de desarrollo
*d) La participación temprana y continua del usuario, y múltiples incrementos rápidos

### Tema: RUP y el contexto de cambio hacia metodologías ágiles

7. ¿Con qué objetivo nació RUP como metodología en 1990?
a) Eliminar por completo la necesidad de documentación en los proyectos
*b) Construir software de calidad mitigando los problemas del enfoque tradicional de cascada
c) Reemplazar completamente el uso de UML en los proyectos de software existentes actualmente
d) Estandarizar exclusivamente el lenguaje de programación utilizado por los equipos

8. ¿Qué necesidad se hizo presente a partir de la Globalización e Internet, según lo visto en clase?
a) La necesidad de eliminar por completo los procesos de prueba
b) La necesidad de centralizar todas las decisiones en un único responsable técnico y exclusivo
c) La necesidad de reducir la cantidad de clientes atendidos por proyecto
*d) La necesidad de tolerancia al cambio frente a un negocio en constante evolución

9. Según el Reporte del CHAOS publicado en 1994, ¿qué porcentaje de proyectos fue cancelado en algún punto del desarrollo?
a) 68.9% aproximadamente
*b) 31.1%
c) 16.2%
d) 52.7%

10. Según la conclusión de la investigación del Reporte del CHAOS, ¿qué factores incrementan la tasa de éxito de los proyectos?
*a) El involucramiento del usuario y el empleo de períodos de tiempo más cortos
b) La centralización de decisiones y la extensión de los plazos de entrega
c) La eliminación de las pruebas automatizadas y el uso de un único lenguaje definido
d) La reducción de la documentación y el aumento del tamaño de los equipos

11. Según el CHAOS Manifesto de 2015 citado en clase, ¿qué tendencia mostraban los proyectos ágiles frente a los de cascada?
*a) Una mayor tasa de éxito que los proyectos gestionados bajo cascada
b) Una imposibilidad total de medir el éxito de este tipo de proyectos
c) Una tasa de fracaso mayor que la de los proyectos gestionados en cascada
d) Una tasa de éxito idéntica a la de los proyectos gestionados en cascada

### Tema: Origen y valores del Manifiesto Ágil

12. ¿Dónde y cuándo se reunió el grupo de referentes que dio origen a las metodologías ágiles?
a) En Londres en 1998, un grupo de consultores de gestión de proyectos
*b) En Utah en febrero de 2001, un grupo de 17 referentes de metodologías livianas
c) En Boston en 1995, un grupo de académicos especializados en UML
d) En California en 2005, un grupo de desarrolladores de videojuegos

13. Según el Manifiesto Ágil, ¿qué se valora más que "seguir un plan"?
a) Documentar exhaustivamente cada decisión tomada siempre
b) Negociar contratos de forma detallada y exhaustiva
c) Cumplir estrictamente con los procesos definidos al inicio del proyecto
*d) Responder a los cambios que surjan durante el desarrollo

14. Según el Manifiesto Ágil, ¿qué se valora más que "negociación contractual"?
*a) Colaboración con el cliente durante todo el proyecto
b) Documentación exhaustiva de cada requerimiento
c) Especialización estricta de roles dentro del equipo de trabajo
d) Seguimiento estricto de un plan predefinido

15. Según los principios del Manifiesto Ágil vistos en clase, ¿cuál de las siguientes afirmaciones es correcta?
a) La calidad técnica se evalúa recién en las últimas etapas del desarrollo
b) La prioridad principal es cumplir el cronograma pactado al inicio del proyecto
*c) Se debe aceptar cambios en los requerimientos en todo momento del proyecto
d) La reflexión y el aprendizaje continuos se dejan para el cierre del proyecto

### Tema: Scrum

16. Según la Guía Scrum citada en clase, ¿qué es Scrum?
*a) Un framework para hacer frente a problemas adaptativos complejos entregando valor
b) Un lenguaje de modelado visual para representar procesos de negocio
c) Un proceso completo y detallado que especifica siempre cómo realizar cada tarea
d) Una metodología que reemplaza por completo a los Casos de Uso

17. Según lo visto en clase, ¿qué es lo que Scrum SÍ genera para los equipos?
a) Una descripción completa y detallada de cómo deben realizarse las tareas
*b) Un contexto relacional e iterativo de transparencia, inspección y adaptación constante
c) Un conjunto fijo de roles que no pueden modificarse durante el proyecto
d) Una documentación exhaustiva que reemplaza la comunicación cara a cara

18. En el ciclo de Scrum visto en clase, ¿en qué rango de tiempo se enmarca habitualmente un Sprint?
a) Entre 24 y 48 horas de duración aproximadamente
b) Entre 1 y 2 años de duración
*c) Entre 1 y 4 semanas de duración
d) Entre 6 y 12 meses de duración

19. Dentro del ciclo de Scrum, ¿qué actividad se realiza con una frecuencia de 24 horas?
*a) El Scrum Diario, que sincroniza el avance del equipo
b) La Planificación de Release, que define el alcance general
c) La Demo de Sprint, que muestra el incremento de funcionalidad
d) La Retrospectiva de Sprint, que revisa el proceso del equipo

### Tema: Desarrollo incremental e iterativo

20. Según la diferencia entre desarrollo incremental e iterativo vista en clase, ¿qué caracteriza al enfoque incremental?
a) Avanzar desde una idea vaga hacia la realización progresiva de esa idea por completo
b) Construir un bosquejo, validarlo y luego refinarlo gradualmente y correctamente
c) Descartar por completo el resultado final antes de comenzar a construir
*d) Construir bloque a bloque, a partir de una idea completamente definida del resultado

21. Según la diferencia entre desarrollo incremental e iterativo vista en clase, ¿qué caracteriza al enfoque iterativo?
a) Requiere una idea completamente definida del resultado final desde el inicio del proyecto
b) Exige entregar el producto completo recién en la última etapa
*c) Permite avanzar desde una idea vaga hasta la realización de esa idea
d) Elimina por completo la necesidad de validar el trabajo realizado

22. Según el enfoque ágil visto en clase, ¿qué puede implicar una tarea dentro de una iteración ágil?
a) Únicamente agregar funcionalidad nueva de forma incremental, sin otra posibilidad alguna
b) Solamente documentar funcionalidad ya implementada en iteraciones anteriores
*c) Agregar funcionalidad incrementalmente, o mejorar, cambiar o eliminar funcionalidad existente
d) Exclusivamente eliminar funcionalidad existente sin agregar ninguna funcionalidad nueva

### Tema: TDD (Test-Driven Development)

23. Según la metodología TDD vista en clase, ¿qué ocurre en la fase llamada RED?
a) Se documenta el comportamiento esperado del sistema completo
*b) Se escribe una prueba que inicialmente falla
c) Se mejora y simplifica el código sin alterar su comportamiento
d) Se desarrolla el código mínimo necesario para superar la prueba

24. Según la metodología TDD vista en clase, ¿qué ocurre en la fase llamada GREEN?
*a) Se desarrolla el código mínimo para superar la prueba escrita
b) Se mejora y simplifica el código sin alterar su comportamiento original
c) Se escribe una prueba que inicialmente falla ante el sistema
d) Se define la siguiente funcionalidad a implementar en el ciclo

### Tema: Comparación entre Cascada y Ágil

25. Comparando Cascada y Ágil según lo visto en clase, ¿qué caracteriza al enfoque en Cascada?
a) Actividades superpuestas y equipos multidisciplinarios trabajando en simultáneo
b) Proceso iterativo donde los cambios son bienvenidos en cualquier momento
c) Entregas frecuentes de software funcionando en cada iteración corta
*d) Actividades secuenciales y especialización por roles dentro del equipo

26. Comparando Cascada y Ágil según lo visto en clase, ¿qué caracteriza al enfoque Ágil?
a) Costo del cambio que crece exponencialmente a medida que avanza el proyecto
b) Fases secuenciales que se completan una antes de comenzar la siguiente
*c) Actividades superpuestas, proceso iterativo y equipos multidisciplinarios de trabajo
d) Especialización estricta de roles dentro de un único equipo fijo

### Tema: Comunicación en equipos ágiles

27. Según el principio del Agile Manifesto citado en clase, ¿cuál es el método más eficiente para transmitir información dentro de un equipo?
a) La documentación exhaustiva compartida por escrito entre los integrantes
b) El uso de correos electrónicos formales entre los miembros del equipo de trabajo
*c) La comunicación cara a cara dentro y hacia el equipo de desarrollo
d) Los reportes semanales de estado enviados al cliente final

28. Según los estudios citados en clase, ¿qué porcentaje de la comunicación se compone del tono de voz?
a) 7% aproximadamente
b) 55%
c) 90%
*d) 38%

### Tema: User Stories

29. ¿En qué metodología surgieron originalmente las User Stories, según lo visto en clase?
*a) En eXtreme Programming (XP), como parte de sus prácticas
b) En Scrum, como parte de la planificación de release
c) En RUP, como parte del modelado de casos de uso
d) En el modelo en cascada, como parte del análisis de requerimientos

30. ¿Qué invierten las User Stories respecto al enfoque documental tradicional, según lo visto en clase?
a) Amplían la documentación exhaustiva para reducir la comunicación directa
b) Eliminan por completo la necesidad de cualquier tipo de documentación
c) Reemplazan la comunicación cara a cara por reportes escritos detallados
*d) Documentan la comunicación, en vez de comunicarse a través de la documentación

31. ¿Qué representan las siglas CCC en los componentes de una User Story?
*a) Card, Conversación y Confirmación
b) Contrato, Cliente y Comunicación Constante
c) Código, Compilación y Confirmación
d) Concepto, Criterio y Consenso

32. ¿Cómo se redacta habitualmente una User Story, según la estructura vista en clase?
a) Como [objetivo] quiero siempre [rol del usuario] para poder [beneficio]
b) Como [beneficio] quiero [rol del usuario] para poder [objetivo]
c) Como [rol del usuario] quiero [beneficio] para poder [objetivo]
*d) Como [rol del usuario] quiero [objetivo] para poder [beneficio]

33. Según las características deseables INVEST vistas en clase, ¿qué representa la letra "I"?
a) Interactiva, es decir que involucra activamente al usuario final
b) Iterativa, es decir que siempre se repite en ciclos cortos de trabajo
*c) Independiente, es decir que no depende de otras historias del backlog
d) Incremental, es decir que suma funcionalidad de forma progresiva

34. Según las características deseables INVEST vistas en clase, ¿qué representa la letra "S"?
a) Structured, es decir que sigue una plantilla fija predefinida
b) Specific, es decir que detalla exhaustivamente cada paso a seguir
*c) Small, es decir de tamaño suficientemente pequeño para ser manejable
d) Simple, es decir de fácil comprensión para cualquier integrante del equipo

35. ¿Qué es la Definition of Ready (DoR), según lo visto en clase?
a) Un documento que certifica la entrega final del proyecto completo y aprobado
b) Un registro histórico de las historias ya completadas en sprints anteriores recientes
c) Un conjunto de pruebas automatizadas que debe superar cada funcionalidad nueva agregada
*d) Un acuerdo de trabajo sobre lo que debe cumplir una historia para entrar a un Sprint

36. ¿Qué es la Definition of Done (DoD), según lo visto en clase?
a) Un documento legal que define los alcances contractuales del proyecto firmado y vigente
b) Un registro que documenta únicamente los errores detectados en producción durante el despliegue
*c) Un acuerdo de trabajo sobre lo que debe cumplir una historia para considerarse terminada
d) Un acuerdo de trabajo sobre lo que debe cumplir una historia para ser incluida en un Sprint

### Tema: Estimación ágil y planificación

37. Según lo visto en clase sobre el "cono de la incertidumbre", ¿por qué las estimaciones precisas en etapas tempranas son poco confiables?
a) Porque las metodologías ágiles prohíben estimar antes de comenzar un Sprint
b) Porque los clientes cambian de opinión constantemente durante todo el proyecto
c) Porque el equipo de desarrollo nunca participa en el proceso de estimación
*d) Porque el nivel de incertidumbre es alto al comienzo y disminuye con el tiempo

38. Según lo visto en clase, ¿qué riesgo señala el concepto de "Análisis Parálisis"?
*a) El riesgo de intentar bajar la incertidumbre mediante análisis excesivo
b) El riesgo de comenzar a programar sin haber definido ningún requerimiento
c) El riesgo de entregar releases con una frecuencia demasiado alta
d) El riesgo de estimar utilizando exclusivamente el criterio de un experto externo

39. Según lo visto en clase, ¿qué unidades se utilizan habitualmente para estimar el tamaño de las User Stories?
a) Porcentaje de avance, calculado sobre el total del proyecto
b) Tallas de remera, aplicadas exclusivamente a nivel de tareas individuales
c) Horas hombre exactas, medidas en jornadas completas de trabajo
*d) Story points, siguiendo una secuencia como 1, 2, 3, 5, 8, 13

40. ¿Qué es el Planning Poker, según lo visto en clase?
a) Un documento que certifica el cierre formal de cada Sprint del proyecto completo
*b) Una técnica de estimación colaborativa basada en iteraciones y consenso del equipo
c) Un reporte que documenta los riesgos identificados en el proyecto
d) Una herramienta de seguimiento del presupuesto disponible por sprint

41. Según la técnica de "sabiduría de las multitudes" (Affinity Estimation) vista en clase, ¿qué principios la sustentan?
a) Jerarquía, autoridad y centralización de la decisión final única
b) Especialización, exclusividad y confidencialidad entre los participantes
c) Uniformidad, dependencia y validación por un único experto
*d) Diversidad, independencia y agregación de las estimaciones individuales

42. ¿Qué permite definir y visualizar el User Story Mapping, según lo visto en clase?
a) Un diagrama de clases del sistema a construir durante el proyecto
*b) Un release plan, organizando historias según prioridad y entrega
c) Un diagrama de despliegue de los componentes físicos del sistema
d) Un cronograma detallado de tareas técnicas asignadas a cada desarrollador

43. En el contexto del Inception o Sprint 0 visto en clase, ¿qué pregunta central busca responder esta etapa?
a) Cómo documentar exhaustivamente cada requerimiento no funcional del sistema
*b) Cómo se inicia un proyecto ágil y se llega al backlog inicial
c) Cómo eliminar por completo la necesidad de estimar el proyecto
d) Cómo desplegar el sistema en producción una vez finalizado el proyecto por completo
`;
