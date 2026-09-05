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

5. Según la definición del material, la Ingeniería de Requisitos actúa como:
a) Una fase inicial y aislada dentro del ciclo de vida del software
b) Un conjunto de pruebas de aceptación posteriores a la implementación final del sistema completo
*c) Un puente entre las necesidades reales de los interesados y las tecnologías disponibles
d) Un documento contractual firmado únicamente por el cliente del proyecto

6. Según el gráfico de costo relativo de corrección de errores (Boehm), ¿en qué etapa resulta más costoso corregir un error?
*a) En la etapa de mantenimiento
b) En la etapa de requerimientos
c) En la etapa de test de unidad
d) En la etapa de diseño

7. Según los datos del Standish Group para 1998, ¿cuál era la categoría de mayor porcentaje entre los proyectos relevados?
a) Proyectos exitosos
b) Proyectos cancelados
c) Proyectos sin clasificar
*d) Proyectos con problemas

8. Según el Standish Group, ¿cuál figuraba entre las tres causas principales percibidas de éxito de un proyecto?
a) Tecnología nueva
*b) Involucramiento de usuarios
c) Incompetencia técnica
d) Objetivos poco claros

9. Según el Standish Group, ¿cuál figuraba entre las tres causas principales percibidas de cancelación de un proyecto?
a) Entregas (milestones) más pequeñas
b) Personal competente
*c) Requerimientos incompletos
d) Visión y objetivos claros

10. Según el relevamiento del European Software Institute citado en el material, ¿cuáles fueron señalados como los problemas mayores en el desarrollo de software?
*a) La especificación de requerimientos y la gestión de requerimientos
b) La falta de personal capacitado y el uso de tecnología obsoleta
c) La falta de presupuesto y la falta de apoyo gerencial
d) El diseño detallado y la integración de componentes

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

5. Según la analogía con la ingeniería civil presentada, ¿a qué equivalen los estilos arquitectónicos (colonial, victoriano, griego)?
*a) A los paradigmas de organización de sistemas de software modernos
b) A los lenguajes de programación elegidos para cada proyecto
c) A los estándares de calidad certificados por la industria del software
d) A las metodologías ágiles utilizadas para el desarrollo del sistema

6. Según la analogía con la ingeniería civil, ¿cómo se llaman las arquitecturas pensadas para un dominio específico, como hospitales o cárceles?
a) Patrones de interacción específicos del dominio elegido
*b) Arquitecturas de referencia para ese dominio
c) Estilos arquitectónicos certificados del dominio
d) Estructuras de referencia del sistema completo

7. Según el material, ¿sobre qué trata la arquitectura de un sistema?
a) Sobre el lenguaje de programación empleado para construir el sistema
b) Sobre el presupuesto total asignado para desarrollar el proyecto
*c) Sobre cómo el sistema se descompone en partes y cómo interactúan
d) Sobre el cronograma completo de entregas realizadas en el proyecto

8. Según el material, ¿qué tipos de estructuras pueden ser la base de una vista arquitectónica?
a) Solo la estructura interna del código fuente del sistema
b) Solo las estructuras de datos internas utilizadas por el sistema
c) Solo los diagramas de clases y de secuencia del sistema
*d) Del código, run-time, de deployment y del entorno de desarrollo del sistema

9. Según el material, ¿en qué estuvo el foco históricamente al hablar de vistas arquitectónicas?
*a) En las vistas de código fuente del sistema
b) En las vistas de despliegue realizadas en la nube pública
c) En las vistas de procesos de negocio
d) En las vistas físicas de hardware

10. Según Bass y Clements, ¿cómo se define un estilo o patrón arquitectónico?
a) Solo un conjunto de pruebas automatizadas para el sistema ya completo
*b) Como una descripción de tipos de relaciones y elementos, con restricciones de uso
c) Solo un documento que detalla el presupuesto total del proyecto
d) Solo un diagrama que muestra el cronograma completo de trabajo

11. Según Bass y Clements, ¿cómo se define una arquitectura de referencia?
a) Como un conjunto de pruebas de aceptación del cliente final
b) Como un documento legal que regula todo el proyecto
*c) Como una división común de funcionalidad mapeada a elementos que la implementan
d) Como un cronograma detallado de las entregas finales del proyecto

12. Según el material, ¿cuál es el primer principio fundamental sobre arquitectura?
a) Solo las aplicaciones grandes tienen una arquitectura definida
b) Ninguna aplicación necesita una arquitectura formal
c) Solo los sistemas críticos requieren una arquitectura
*d) Toda aplicación tiene una arquitectura definida

13. Según el material, ¿cuál es el segundo principio fundamental sobre arquitectura?
*a) Cada aplicación tiene al menos un arquitecto
b) Cada aplicación necesita al menos diez desarrolladores
c) Cada aplicación requiere un presupuesto ilimitado
d) Cada aplicación debe tener un único usuario final

14. Según el material, ¿cuál es el tercer principio fundamental sobre arquitectura?
a) La arquitectura es siempre la última fase del desarrollo
*b) La "arquitectura" no es una fase del desarrollo
c) La arquitectura solo se define al inicio del proyecto
d) La arquitectura se define exclusivamente al finalizar el proyecto

15. Según el material, ¿cómo se define la arquitectura en relación con las decisiones de diseño?
a) Como el conjunto de decisiones menores de implementación técnica tomadas a diario
b) Como el conjunto de decisiones tomadas únicamente por el cliente
*c) Como el conjunto de decisiones principales de diseño de un sistema
d) Como el conjunto de decisiones tomadas después de liberar el sistema

16. Según Clements (1996), ¿cuáles son los temas fundamentales de la arquitectura de software?
a) Elicitación, modelado, análisis y validación de requerimientos
b) Componentes, conectores y propiedades del sistema
c) Vistas lógica, de procesos, física y de despliegue del sistema
*d) Diseño, representación, evaluación, desarrollo y recuperación de la arquitectura

17. Según el material, ¿qué implica la "integridad conceptual" de una buena arquitectura?
*a) Que sea producto de un arquitecto o un grupo pequeño con líder claro
b) Que sea aprobada formalmente por todos los stakeholders del proyecto sin excepción
c) Que sea documentada exclusivamente utilizando diagramas en formato UML estándar
d) Que sea implementada siempre por un equipo grande y distribuido geográficamente

18. Según el material, ¿qué debe tener claro el equipo de arquitectura para lograr una buena arquitectura?
a) El cronograma detallado y el presupuesto total del proyecto
*b) Los requerimientos funcionales y los atributos de calidad que sean claros
c) El organigrama completo de la empresa que contrata el proyecto
d) La lista de tecnologías que prefiere usar cada desarrollador

19. Según el material, ¿qué dos condiciones adicionales debe cumplir una buena arquitectura respecto a su documentación?
a) Debe estar documentada, pero no necesita ser revisada por nadie
b) Debe ser revisada por gerencia, pero no necesita estar documentada
*c) Debe estar documentada y debe ser revisada por los stakeholders
d) Debe estar documentada solo si el cliente lo solicita expresamente

20. Según el material, ¿qué otras características debe tener una buena arquitectura, además de estar documentada?
a) Ser evaluada solo al finalizar el proyecto, sin permitir cambios
b) Ser implementada de una sola vez, sin fases intermedias de desarrollo
c) Ser revisada únicamente por el arquitecto principal del proyecto
*d) Ser evaluada cuantitativamente y permitir una implementación incremental del sistema

21. Según el material, ¿en qué se basan los módulos bien definidos de una buena arquitectura?
*a) En el ocultamiento de la información, con interfaces claramente definidas
b) En la cantidad de líneas de código de cada módulo
c) En la opinión personal de cada desarrollador del equipo de trabajo
d) En la cantidad de pruebas unitarias que posee cada módulo

22. Según el material, ¿cómo se describe la representación de las arquitecturas de software?
a) Como una representación de bajo nivel centrada en el código fuente
*b) Como una representación de alto nivel de la estructura del sistema
c) Como una representación exclusiva de la base de datos del sistema
d) Como una representación centrada solo en la interfaz de usuario final del sistema

23. Según el material, ¿qué tipo de aspectos trata la arquitectura que no pueden tratarse dentro de los módulos?
a) Aspectos exclusivamente relacionados con el presupuesto del proyecto
b) Aspectos exclusivamente relacionados con la interfaz gráfica de usuario final
*c) Aspectos del diseño y desarrollo que exceden a los módulos individuales
d) Aspectos exclusivamente relacionados con la documentación del usuario

24. Según el material, ¿cuál es uno de los objetivos de las arquitecturas de software respecto a la comprensión del sistema?
a) Ocultar la estructura de las aplicaciones para simplificar su uso
b) Eliminar la necesidad de documentar las aplicaciones complejas
c) Reemplazar el diseño detallado por diagramas automáticos
*d) Comprender y mejorar la estructura de las aplicaciones complejas

25. Según el material, ¿qué objetivo cumple la arquitectura respecto a la reutilización?
*a) Reutilizar la estructura, o partes de ella, para resolver problemas similares
b) Reutilizar el mismo código fuente en todos los proyectos futuros
c) Reutilizar la documentación de proyectos anteriores sin modificarla bajo ninguna circunstancia particular
d) Reutilizar las pruebas unitarias de otros sistemas ya liberados

26. Según el material, ¿qué objetivo cumple la arquitectura respecto a la corrección de la aplicación?
a) Analizar exclusivamente el rendimiento de la base de datos del sistema
*b) Analizar la corrección de la aplicación y su cumplimiento de los requisitos
c) Analizar exclusivamente el costo total estimado para el proyecto
d) Analizar exclusivamente la satisfacción declarada por el cliente final

27. Según el material, ¿qué objetivo cumple la arquitectura respecto a la evolución de la aplicación?
a) Impedir cualquier cambio futuro sobre la aplicación ya liberada
b) Eliminar las partes inmutables de la aplicación en cada versión del sistema
*c) Planificar la evolución identificando partes mutables e inmutables y sus costos
d) Delegar la evolución completa al equipo de testing del proyecto

28. Según el material, ¿qué aspectos incluye la adaptación al cambio que facilita la arquitectura?
a) Solo la reconfiguración y nada más del sistema
b) Solo la escalabilidad y la mantenibilidad del sistema completo
c) Solo la composición y la reutilización exclusivamente
*d) Composición, reconfiguración, reutilización, escalabilidad y mantenibilidad del sistema

29. Según el material, ¿de qué no se ocupa la arquitectura de software?
*a) Del diseño detallado, de algoritmos y de estructuras de datos
b) De la definición de los requerimientos funcionales del sistema completo y validado
c) De la identificación de los atributos de calidad del sistema
d) De la definición de las restricciones impuestas por el cliente

30. Según Garlan y Shaw (1993), ¿cómo se define la arquitectura de software?
a) Como un conjunto de pruebas y casos de uso del sistema completo
*b) Como una colección de componentes junto con una descripción de sus interacciones
c) Como un documento que detalla los requerimientos del cliente final
d) Como un cronograma de tareas asignadas a todo el equipo

31. Según Garlan y Shaw, ¿qué representan los "componentes" de una arquitectura de software?
a) Los protocolos de comunicación entre los distintos módulos del sistema
b) Las restricciones no negociables impuestas por el cliente
*c) Los lugares de almacenamiento o cómputo, como filtros o bases de datos
d) Los diagramas que documentan la arquitectura del sistema

32. Según Garlan y Shaw, ¿qué representan los "conectores" de una arquitectura de software?
a) Los lugares de almacenamiento de datos del sistema
b) Las propiedades utilizadas para la construcción y el análisis del sistema
c) Los atributos de calidad requeridos por los stakeholders
*d) Los mediadores entre componentes, como llamadas a procedimientos o pipes

33. Según Garlan y Shaw, ¿qué representan las "propiedades" de una arquitectura de software?
*a) La información para construcción, como pre y post condiciones del sistema
b) Los lugares de almacenamiento o cómputo utilizados por el sistema completo y actual
c) Los mediadores entre los distintos componentes del sistema completo
d) Los protocolos de sincronización utilizados por todo el sistema

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

4. ¿Qué son los "Viewtypes" según el material?
a) Los diagramas de casos de uso que documentan los requerimientos del sistema
b) Los patrones de diseño que se aplican a nivel de código fuente
c) Las plataformas de mensajería utilizadas para la comunicación entre distintos sistemas externos del proyecto
*d) Las vistas de arquitectura orientadas a estructuras de módulos, C&C y alocación

5. Según el material, ¿qué es un módulo dentro del Module Viewtype?
*a) Una unidad de código que implementa un conjunto de responsabilidades
b) Una entidad con manifestación runtime que consume recursos de ejecución
c) Un mecanismo de comunicación utilizado entre distintos componentes independientes del sistema
d) Una estructura de datos central compartida por varios componentes

6. En el Module Viewtype, ¿qué relación describe el diagrama de Descomposición?
a) La relación de herencia entre las clases del sistema
*b) La relación "es un submódulo de" entre los módulos
c) La relación de comunicación entre procesos en tiempo de ejecución
d) La relación entre elementos de software y su entorno de despliegue

7. Según el material, ¿cuándo se dice que un módulo A "usa a" un módulo B?
a) Cuando A invoca directamente una función definida dentro de B
b) Cuando B hereda directamente todas las responsabilidades y atributos definidos en A
*c) Cuando la correcta ejecución de B resulta necesaria para la ejecución de A
d) Cuando A y B pertenecen exactamente al mismo paquete de código fuente del sistema

8. En el Module Viewtype, ¿a qué corresponde el diagrama de Clases?
a) A módulos que representan estructuras de datos persistentes del sistema completo
b) A módulos vinculados por relaciones de despliegue en distintos entornos
c) A módulos organizados exclusivamente según su visibilidad de interfaces
*d) A módulos que son clases, relacionadas entre sí mediante herencia

9. Según el material, ¿para qué sirve el Module Viewtype en el ámbito del análisis?
*a) Para la trazabilidad de requerimientos y el análisis de impacto
b) Para asignar la responsabilidad del desarrollo a distintos equipos
c) Para mapear el software a estructuras de archivos en repositorios
d) Para mostrar cómo el software se asigna a hardware y comunicación

10. ¿En qué están centradas las estructuras del C&C Viewtype?
a) En los módulos de código fuente y sus relaciones de dependencia
*b) En los procesos que se comunican entre sí
c) En la estructura de archivos de los repositorios de control de versiones
d) En la asignación de trabajo entre distintos equipos de programadores

11. Según el material, ¿cómo se conforma la configuración del sistema en el C&C Viewtype?
a) Como una jerarquía de módulos organizados por capas
b) Como una tabla de asignación de trabajo entre distintos equipos de desarrollo
*c) Como un grafo conformado por la asociación entre componentes y conectores
d) Como una secuencia lineal de pasos ejecutados hasta completarse

12. Según el material, ¿cómo se relacionan e interactúan los componentes en el C&C Viewtype?
a) Se relacionan directamente entre sí, sin necesidad de conectores
b) Se relacionan únicamente mediante relaciones de herencia entre las clases del sistema
c) Se relacionan a través de una estructura de datos compartida central
*d) Son entidades independientes que solo se relacionan a través de conectores

13. En el C&C Viewtype, ¿qué indica la relación de "attachment"?
*a) Qué componentes están vinculados con qué conectores
b) Qué módulos son submódulos de otros módulos del sistema
c) A qué hardware se asigna cada elemento de software
d) Qué equipo de programadores es responsable de cada componente

14. Dentro del Allocation Viewtype, ¿qué muestra la estructura de Deployment?
a) Cómo se mapean los elementos de software a estructuras de archivos
*b) Cómo el software se asigna a hardware y elementos de comunicación
c) Cómo se asigna la responsabilidad del desarrollo a equipos de programadores
d) Cómo se relacionan los componentes con los conectores dentro del sistema completo

15. Dentro del Allocation Viewtype, ¿qué muestra la estructura de Implementación?
a) Cómo el software se asigna a hardware y elementos de comunicación
b) Cómo se comunican los componentes entre sí a través de sus distintos conectores del sistema
*c) Cómo los elementos de software se mapean a estructuras de archivos en repositorios
d) Cómo se organiza el código fuente según su visibilidad de interfaces

16. Dentro del Allocation Viewtype, ¿a qué se refiere la "asignación de trabajo" (work assignment)?
a) A la asociación entre componentes y sus puertos de conexión
b) A la relación de herencia entre las clases del sistema
c) A la correspondencia directa entre el software y el hardware de ejecución
*d) A la responsabilidad del desarrollo y la implementación asignada a equipos

17. Según el cuadro de estilos de viewtypes, ¿cuáles corresponden al Module?
*a) Descomposición, Usos, Generalización y Capas (Layers)
b) Pipe & Filter, Publish & Subscribe y Client-Server
c) Deployment, Implementation y Work Assignment
d) Blackboard, Shared-data y Point to point messaging

18. Según el cuadro de estilos de viewtypes, ¿cuáles corresponden al C&C?
a) Los estilos de Descomposición, Usos y Generalización del módulo
*b) Pipe & Filter, Publish & Subscribe, Shared Data y Client-Server
c) Deployment, Implementation y Work Assignment del entorno de alocación
d) Batch sequential, Pipeline y UNIX Pipe & Filter del estilo Data-Flow

19. ¿Qué determina un estilo arquitectónico según el material?
a) Los requerimientos funcionales que debe cumplir el sistema completo
b) El cronograma de desarrollo, las entregas y el presupuesto total asignado al proyecto
*c) El vocabulario de componentes y conectores y las restricciones de cómo combinarlos
d) Los atributos de calidad exigidos por los stakeholders del sistema

20. Según las propiedades de un estilo arquitectónico, ¿qué aporta el "vocabulario para los elementos de diseño"?
a) Las restricciones topológicas sobre cómo se combinan los elementos
b) Los criterios utilizados para evaluar cuantitativamente una arquitectura de software ya construida
c) La asignación de responsabilidades a los equipos de desarrollo
*d) Los tipos de componentes y conectores utilizables, como clases o pipes

21. Según el material, ¿qué ejemplo se da de una regla de composición de un estilo?
*a) Que los elementos de un layer se comuniquen solo con el layer inferior
b) Que los componentes solo puedan comunicarse mediante llamadas a procedimiento
c) Que todo componente deba tener asociado siempre un módulo propio de memoria persistente exclusiva
d) Que los conectores solo puedan transferir datos de forma síncrona

22. Según el material, ¿qué es importante tener en cuenta sobre un estilo arquitectónico?
a) Que siempre determina de forma concreta la funcionalidad completa del sistema construido
*b) Que no define la funcionalidad de un sistema, es algo "abstracto"
c) Que reemplaza la necesidad de definir componentes y conectores
d) Que solo puede aplicarse a sistemas pequeños o medianos

23. ¿De qué resultan las arquitecturas heterogéneas según el material?
a) De la combinación de distintos entornos de despliegue físico
b) De la combinación de distintos equipos de desarrollo
*c) De la combinación de distintos estilos arquitectónicos
d) De la combinación de distintas bases de datos compartidas

24. Según el material, ¿qué estilos probablemente combine una arquitectura heterogénea hecha con JEE?
a) Batch sequential, Pipeline y UNIX Pipe & Filter
b) Blackboard, Shared-data y Point to point messaging
c) Deployment, Implementation y Work Assignment
*d) Layered, Repository, Independent components e Information hiding

25. Según el material, ¿cuál es la diferencia entre módulos y componentes?
*a) Los módulos son entidades de diseño, mientras que los componentes tienen entidad en ejecución
b) Los módulos tienen entidad en tiempo de ejecución, mientras que los componentes son entidades de diseño
c) Los módulos y los componentes son sinónimos dentro de una arquitectura de software
d) Los módulos definen conectores, mientras que los componentes definen los atributos de calidad

26. Según el material, ¿cómo se describe una arquitectura en términos de Componentes y Conectores?
a) Como un conjunto de módulos organizados exclusivamente por capas
*b) Como una colección de módulos de software interactuando mediante conectores
c) Como una secuencia de pasos que se ejecutan uno a uno hasta completarse
d) Como un documento que detalla los requerimientos del sistema

27. Según los tipos de componentes presentados, ¿qué caracteriza a un componente "Computacional"?
a) Mantiene una colección de datos persistentes, como una base de datos
b) Contiene estado y operaciones asociadas mantenidas entre invocaciones sucesivas
*c) Realiza el procesamiento en algún orden, como una función matemática
d) Gobierna la secuencia de tiempo de otros eventos dentro del sistema

28. ¿Qué caracteriza a un componente de tipo "Memoria"?
a) Realiza el procesamiento de los datos en algún orden determinado
b) Contiene un estado y un conjunto de operaciones asociadas entre invocaciones sucesivas del componente
c) Gobierna la secuencia de tiempo de otros eventos del sistema
*d) Mantiene una colección de datos persistentes, como bases de datos o archivos

29. ¿Qué caracteriza a un componente de tipo "Manejador"?
*a) Contiene estado y operaciones asociadas, mantenido entre invocaciones
b) Realiza el procesamiento de datos, como una función matemática
c) Mantiene una colección de datos persistentes del sistema
d) Gobierna la secuencia de tiempo de otros eventos, como un scheduler

30. ¿Qué caracteriza a un componente de tipo "Controlador"?
a) Mantiene una colección de datos persistentes, como tablas de símbolos
*b) Gobierna la secuencia de tiempo de otros eventos, como un scheduler
c) Contiene un estado interno y operaciones asociadas entre distintas invocaciones sucesivas del componente
d) Realiza el procesamiento en algún orden, como un filtro

31. Entre los tipos de conectores, ¿qué caracteriza al "Procedure call"?
a) La interacción de procesos a través de flujos de datos, como pipes
b) Que el proceso se inicia recién cuando ocurre un evento determinado
*c) Un simple thread de control entre el invocado y el invocador, como RPC
d) El acceso concurrente a datos, utilizando un esquema definido de bloqueo entre distintos procesos

32. ¿Qué caracteriza al conector de tipo "Data flow"?
a) Un simple thread de control entre invocado e invocador
b) La transferencia explícita de datos discretos entre distintos componentes del sistema, como TCP/IP
c) El acceso concurrente a datos, como una pizarra compartida
*d) La interacción de procesos a través de flujos de datos, como pipes

33. ¿Qué caracteriza al conector de tipo "Implicit invocation"?
*a) Que el proceso se inicia recién cuando ocurre un evento, como listas de correo
b) La transferencia explícita de datos discretos entre distintos componentes del sistema
c) Un thread de control simple entre el componente invocado y el invocador del sistema completo
d) El acceso concurrente a datos con un esquema de bloqueo definido

34. ¿Qué caracteriza al conector de tipo "Message passing"?
a) El acceso concurrente a datos con algún esquema de bloqueo
*b) La interacción mediante transferencia explícita de datos discretos, como TCP/IP
c) Que el proceso se inicia recién cuando ocurre un evento
d) La interacción de procesos a través de flujos de datos continuos

35. ¿Qué caracteriza al conector de tipo "Shared data"?
a) La interacción de procesos a través de flujos de datos continuos
b) Un simple thread de control entre el invocado y el invocador
*c) El acceso concurrente a datos, con un esquema de bloqueo, como una pizarra
d) El inicio del proceso recién cuando ocurre un evento externo predefinido del sistema completo

36. Según la taxonomía de estilos arquitectónicos, ¿qué subestilos se desprenden de "Data-Flow"?
a) Publish-subscribe y Point to point messaging
b) Client-Server y Peer to Peer
c) Blackboard y Shared-data como estilos del Repository
*d) Batch sequential y Pipe & Filter

37. Según la taxonomía de estilos arquitectónicos, ¿qué subestilos se desprenden de "Call-Return"?
*a) Client-Server y Peer to Peer
b) Batch sequential y Pipeline
c) Blackboard y Shared-data
d) Publish-subscribe y Point to point messaging

38. Según la taxonomía de estilos arquitectónicos, ¿qué subestilos se desprenden de "Event-Based"?
a) Client-Server y Peer to Peer, del estilo Call-Return
*b) Publish-subscribe y Point to point messaging
c) Batch sequential y Pipe & Filter
d) Blackboard y Shared-data del Repository

39. Según la taxonomía de estilos arquitectónicos, ¿qué subestilos se desprenden de "Repository"?
a) Client-Server y Peer to Peer
b) Publish-subscribe y Point to point messaging
*c) Blackboard y Shared-data
d) Pipeline y UNIX Pipe & Filter

40. Según el material, ¿en qué se basa la estructura del estilo Data Flow?
a) En la asignación de trabajo a distintos equipos de desarrollo
b) En el acceso concurrente a una estructura de datos central
c) En la comunicación directa que se establece entre nodos autónomos e iguales del sistema
*d) En transformaciones sucesivas a los datos de input, que fluyen hasta su destino

41. ¿Qué caracteriza al estilo "Batch Sequential" dentro de Data Flow?
*a) Cada paso se ejecuta hasta completarse, recién después comienza el siguiente
b) Cada componente lee y produce streams de datos de forma continua
c) Los componentes se suscriben a un canal para recibir mensajes
d) Los datos se almacenan en una única estructura central compartida por todos

42. ¿Qué caracteriza al estilo "Pipes & Filters" dentro de Data Flow?
a) Cada paso debe completarse antes de que comience el siguiente
*b) Los filtros ejecutan transformaciones y los pipes pasan streams entre ellos
c) Los componentes se comunican exclusivamente mediante datos compartidos entre sí en todo momento
d) Un componente de control asigna trabajo a los demás componentes

43. Según el material, ¿cómo funciona el estilo "Call Return"?
a) Los componentes se suscriben a un canal para recibir eventos del sistema
b) Los datos fluyen de forma continua entre los distintos filtros del sistema
*c) Un componente llama o invoca a otro y se queda esperando la respuesta
d) Varios componentes acceden de forma concurrente a una misma estructura de datos compartida entre todos

44. Según el material, ¿qué caracteriza al estilo Layered o Multi-tier?
a) Cada nivel accede libremente a cualquier otro nivel del sistema
b) Los niveles se comunican exclusivamente mediante una estructura de datos compartida entre todos
c) Todos los niveles se ejecutan en un único proceso sin distinción
*d) Cada nivel oculta al siguiente y provee servicios al nivel anterior

45. Según el material, ¿cuál se menciona como una desventaja del estilo Layered?
*a) La dificultad para encontrar la abstracción correcta y posibles pérdidas de performance
b) La imposibilidad de reutilizar el código entre distintos niveles
c) La imposibilidad de aplicar portabilidad entre distintas plataformas de hardware y de software
d) La necesidad obligatoria de usar una base de datos compartida

46. Según el material, ¿cuál es la diferencia entre "Layer" y "Tier"?
a) Layer es una capa física y Tier es una capa lógica del sistema
*b) Layer es una capa lógica, mientras que Tier es la capa física de ejecución
c) Layer y Tier son sinónimos exactos dentro de toda la arquitectura del sistema
d) Layer se aplica solo a los componentes, mientras que Tier se aplica a los conectores

47. Según el material, ¿qué característica tiene el estilo Client/Server respecto al conocimiento entre sus partes?
a) Los servidores conocen la identidad de todos sus clientes
b) Ni los clientes ni los servidores conocen identidades entre sí
*c) Los clientes conocen la identidad del servidor, pero no al revés
d) Tanto clientes como servidores conocen la identidad de la otra parte del sistema

48. ¿Cómo se describe el estilo Peer to Peer según el material?
a) Un componente central controla la comunicación de todos los nodos
b) Los nodos se organizan jerárquicamente en niveles o capas del sistema
c) Los nodos comparten exclusivamente una única estructura de datos central compartida entre todos
*d) Nodos autónomos e iguales se comunican entre sí a través de la red

49. Según el material, ¿cómo se describe el flujo del estilo Event Based (EDA)?
*a) Event Producer, Event Processor y luego Event Consumer
b) Event Consumer, Event Processor y luego Event Producer
c) Event Processor, Event Producer y luego Event Consumer
d) Event Consumer y Event Producer, sin intervención de un procesador

50. Según el material, ¿cómo funciona el estilo Publish & Subscribe?
a) Un componente central asigna tareas específicas a los demás componentes
*b) Los componentes se suscriben a un canal para recibir mensajes de otros
c) Los componentes acceden concurrentemente a una base de datos central
d) Un componente invoca a otro y espera su respuesta directa

51. Según el material, ¿en qué se basa el estilo "Centradas en datos"?
a) En la comunicación directa entre pares del sistema, sin intermediarios
b) En transformaciones sucesivas aplicadas a los datos de entrada del sistema
*c) En una estructura de datos central a la que acceden los componentes
d) En la asignación jerárquica de responsabilidades entre los distintos módulos del sistema completo

52. Según el material, ¿qué elementos incluye la documentación de una arquitectura?
a) Solo el código fuente comentado y las pruebas unitarias
b) Solo el cronograma de entregas y el presupuesto del proyecto
c) Solo los diagramas de despliegue en el entorno de producción
*d) Descripción de requerimientos, contexto, diagramas y restricciones de implementación

53. En el modelo Pub/Sub, ¿qué función cumple el Message Broker?
*a) Recibe los mensajes y los distribuye a los suscriptores adecuados
b) Envía mensajes o eventos directamente a otros publicadores del sistema completo
c) Se suscribe a ciertos tipos de mensajes para recibirlos
d) Almacena de forma permanente todos los mensajes publicados

54. Según el material, ¿qué caracteriza a Apache Kafka?
a) Un broker de mensajes basado en el protocolo AMQP
*b) Un sistema de mensajería distribuida y streaming en tiempo real
c) Un servicio de mensajería exclusivo de Google Cloud
d) Una cola de mensajes utilizada junto con un servicio de notificación

55. Según el material, ¿qué caracteriza a RabbitMQ?
a) Un sistema de streaming en tiempo real usado por Netflix
b) Una alternativa a Kafka diseñada para alta escalabilidad
*c) Un broker de mensajes basado en el protocolo AMQP
d) Un servicio de mensajería de Google Cloud para eventos

56. Según el material, ¿qué relación tienen SNS y SQS dentro de AWS?
a) SNS es la cola de mensajes y SQS permite la publicación
b) Ambos cumplen exactamente la misma función de mensajería dentro de todo AWS
c) SNS y SQS son alternativas de Kafka usadas por Yahoo y Tencent en la nube
*d) SNS permite la publicación de mensajes, y SQS es la cola de mensajes

57. Según el material, ¿dónde se utiliza especialmente Google Cloud Pub/Sub?
*a) En Google Analytics, Firebase y aplicaciones IoT
b) En sistemas de mensajería usados por Slack e Instagram
c) En plataformas de streaming usadas por LinkedIn y Uber
d) En sistemas de cola de mensajes usados por Amazon y Airbnb

58. Según el material, ¿qué caracteriza a Apache Pulsar?
a) Un broker basado en el protocolo AMQP usado por MercadoLibre
*b) Una alternativa a Kafka diseñada para alta escalabilidad
c) Un servicio de mensajería exclusivo de Google Cloud
d) Una cola de mensajes utilizada junto con un servicio de notificación

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
`;
