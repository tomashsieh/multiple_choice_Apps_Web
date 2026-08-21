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
 * Ejemplo mínimo de una pregunta bien formada:
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
 * de la materia correspondiente. Cada nivel = un tema o clase distinta.
 * Recordarle que no omita el asterisco en la opción correcta y que
 * verifique que cada pregunta tenga una única opción marcada como tal.
 * ============================================================================
 */

const MATERIA_ID_CCA = "ciencia-comportamiento-aplicada";
const MATERIA_NOMBRE_CCA = "Ciencia del Comportamiento Aplicada";

const PREGUNTAS_RAW_CCA = `
## Nivel 1: Esther Dufló y la Ciencia de las Ideas

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

7. ¿Cuál fue el resultado del incentivo con lentejas sobre la tasa de inmunización?
a) Se duplicó, llegando apenas a un 20% en el grupo que recibió el tratamiento
b) Se mantuvo casi igual, aunque mejoró la satisfacción de las familias
*c) Se multiplicó por seis, llegando a un 38% en el grupo tratado
d) Se triplicó, llegando a un 50% en el grupo tratado

8. Según Duflo, ¿por qué el costo por inmunización lograda terminó siendo más bajo con el incentivo de lentejas?
a) Porque las lentejas resultaron mucho más baratas que otros insumos médicos habituales
b) Porque las familias terminaron pagando parte del costo del incentivo
c) Porque se redujo la cantidad de campamentos de vacunación necesarios
*d) Porque con el mismo personal pagado se lograron muchas más vacunaciones

9. En el caso de los mosquiteros contra la malaria, ¿qué mostró el ensayo aleatorizado en Kenia?
*a) Que incluso un precio bajo por mosquitero reducía fuertemente la cobertura
b) Que regalar los mosquiteros hacía que se usaran menos que si se pagaban
c) Que la gente prefería comprar redes de pesca en vez de mosquiteros
d) Que el precio cobrado no tenía ningún efecto sobre el uso final

10. ¿Qué encontró Duflo respecto al uso de los mosquiteros entregados gratis frente a los pagados?
a) Los que pagaron por su propio mosquitero lo usaron con mucha más frecuencia
*b) Se usaron con la misma frecuencia, sin importar si fueron gratis o pagos
c) Los mosquiteros gratis se usaron mayormente como redes de pesca
d) Los mosquiteros gratis terminaron revendiéndose muy rápido en el mercado informal de la región

11. En el largo plazo, quienes habían recibido el mosquitero gratis...
a) mostraron menor disposición a comprar mosquiteros adicionales por su propia cuenta después
b) dejaron de usar cualquier mosquitero por completo al año siguiente
*c) mostraron mayor probabilidad de comprar mosquiteros adicionales por su cuenta
d) exigieron que el gobierno les siguiera regalando mosquiteros cada año

12. Entre las intervenciones para aumentar la asistencia escolar que compara Duflo, ¿cuál resultó de las más costo-efectivas?
a) Construir muchas más escuelas cerca de las comunidades rurales más alejadas
b) Entregar uniformes escolares gratuitos a cada estudiante inscripto
c) Contratar más docentes para cada escuela de la zona
*d) Desparasitar a los chicos para combatir los parásitos intestinales

13. Según las cifras que menciona Duflo, ¿qué se estima que generan cada 100 dólares invertidos en desparasitación?
*a) Entre 30 y 40 años adicionales de escolarización acumulados en la población
b) Entre 5 y 10 vacunas infantiles adicionales aplicadas en la misma comunidad rural
c) Un aumento cercano al 10% en la matrícula de una escuela
d) La construcción de un aula adicional cada dos años aproximadamente

14. ¿Cuál es el mensaje general que Duflo busca transmitir con los tres casos que presenta?
a) Que la ayuda internacional siempre resulta ser la solución más efectiva posible
*b) Que las soluciones efectivas no siempre son las intuitivas, hay que testearlas
c) Que los gobiernos locales deben decidir sin ninguna injerencia extranjera
d) Que las ONG resultan siempre mucho más eficientes que los programas estatales locales

15. El artículo "Prospect Theory" de Kahneman y Tversky se destaca principalmente por...
a) proponer que la ayuda gratuita reduce el valor percibido de los bienes
b) introducir el concepto de ensayo aleatorizado controlado en la economía
*c) mostrar con experimentos que se violan axiomas de la utilidad esperada
d) demostrar que los incentivos monetarios no modifican el comportamiento humano

16. El libro de Richard Thaler llamado "Misbehaving" ("Portarse mal") se refiere a...
a) las conductas antiéticas de algunas empresas multinacionales conocidas
b) las fallas habituales que tienen los gobiernos al diseñar sus políticas públicas
c) el comportamiento imprevisible que suelen tener los mercados financieros
*d) los errores típicos de percepción y decisión del Homo Sapiens

17. La predicción de Thaler sobre la evolución del "Homo Economicus" plantea que...
*a) el Homo Economicus va a evolucionar hacia el Homo Sapiens en los modelos
b) los modelos económicos van a dejar por completo de usar la racionalidad
c) los seres humanos se van a volver cada vez más racionales
d) la economía del comportamiento va a reemplazar por completo a la microeconomía en el futuro

18. Según el texto, un sesgo (en el sentido de la economía del comportamiento) se define como...
a) un error aleatorio que no sigue ningún patrón reconocible
*b) una desviación sistemática y predecible en la forma de decidir
c) una preferencia personal sin relación alguna con la racionalidad
d) una falla que afecta exclusivamente a las poblaciones de bajos ingresos

19. Las "nudge units" mencionadas en la introducción son...
a) laboratorios académicos dedicados exclusivamente a publicar papers científicos especializados
b) empresas privadas de consultoría en marketing y publicidad
*c) organizaciones que aplican la economía del comportamiento a políticas
d) organismos internacionales que financian programas globales de vacunación en distintos países

20. En el caso de El Salvador sobre anemia infantil, ¿qué proporción de los hogares que recibieron micronutrientes no los consumió en tiempo y forma?
a) Alrededor de un 18% de los hogares que los recibieron
b) Menos de un 10% de los hogares que los recibieron
c) Exactamente la mitad de todos los hogares que efectivamente los recibieron
*d) Más de las tres cuartas partes de los hogares que los recibieron

21. El experimento con docentes ecuatorianos sobre el "efecto orden" consistió en...
*a) cambiar el orden en que se listaban las escuelas en la plataforma
b) ofrecer un bono económico a quienes eligieran escuelas vulnerables
c) obligar a un grupo de docentes a trabajar en zonas vulnerables
d) comparar el desempeño de los docentes según su año de egreso universitario reciente

22. En el ejemplo hipotético del comité de salud, ¿qué resultado tuvo la política de duplicar hospitales y centros de atención primaria?
a) Redujo las muertes cardiovasculares exactamente en el 20% previsto
*b) Tuvo un impacto modesto, casi imperceptible, sobre las muertes cardiovasculares
c) Aumentó de forma notable la cantidad de consultas preventivas
d) Fracasó por falta de financiamiento suficiente para poder completarla a tiempo

23. En el ejemplo de Luis, ¿por qué la política de más infraestructura funcionó bien con él?
a) Porque Luis tenía sesgo de sobreconfianza, lo cual lo hizo actuar rápido
b) Porque Luis tenía un ingreso más alto que el resto de la población
*c) Porque Luis no tenía las anomalías de decisión que sí tienen otras personas
d) Porque Luis ya conocía personalmente al médico del nuevo centro

24. En la "ciudad de gente normal", ¿qué anomalía hace que unas 30 de las 100 personas ni siquiera consideren estar en riesgo?
a) La inconsistencia temporal de las preferencias de cada persona
b) La procrastinación habitual en la toma de decisiones cotidianas
c) La falta de atención limitada frente a otros problemas urgentes
*d) El sesgo de sobreconfianza o sobreoptimismo respecto al propio riesgo

25. Los "factores aparentemente irrelevantes" que menciona Thaler, ilustrados con los 15 minutos de espera telefónica, muestran que...
*a) pequeñas trabas administrativas pueden tener un impacto desproporcionado sobre la acción
b) las personas siempre priorizan lo urgente por encima de lo importante
c) los llamados telefónicos son el método menos efectivo para pedir turnos
d) el tiempo de espera no afecta a quienes evaluaron bien su riesgo

26. El trabajo de Eric Bettinger sobre formularios de becas universitarias mostró que...
a) simplificar el trámite no tuvo ningún efecto sobre la cantidad de postulantes
*b) reducir la carga administrativa aumentó fuertemente la cantidad de postulantes
c) los formularios más largos filtraban mejor a los candidatos calificados
d) el monto de la beca era el único factor relevante para postularse

27. El sesgo del presente (preferencias temporalmente inconsistentes), ilustrado con el ejemplo de la panadería, hace que las personas...
a) sean igual de pacientes en el presente que en el futuro
b) eviten de forma sistemática cualquier tipo de tentación cotidiana
*c) sean impacientes en el presente pero se crean pacientes a futuro
d) prioricen siempre las recomendaciones médicas que acaban de recibir

28. En el estudio de Sara Banks sobre campañas de mamografías, el mensaje con encuadre de "pérdida" resultó...
a) contraproducente, porque generaba un fuerte rechazo entre las mujeres
b) igual de efectivo que no enviar ningún mensaje a las mujeres
c) menos efectivo que el encuadre de "ganancia" para motivar el chequeo
*d) más efectivo que el encuadre de "ganancia" para motivar el chequeo

29. El experimento de Altmann y Traxler con pacientes odontológicos alemanes evaluó el efecto de...
*a) enviar recordatorios por SMS antes de la fecha del turno
b) ofrecer descuentos económicos a quienes asistieran al chequeo dental
c) reducir el tiempo de espera dentro de la sala de espera
d) cambiar el horario habitual de atención del consultorio odontológico

30. Una "herramienta de planificación" (planning prompt), como la usada en el experimento de Milkman sobre colonoscopías, consiste en...
a) enviar un recordatorio genérico sin pedir ninguna acción adicional
*b) invitar a completar día, hora y médico a cargo de la cita
c) ofrecer un incentivo monetario a quien asista a la cita
d) programar automáticamente la cita sin consultar antes a la persona

31. El producto CARES, diseñado por Gine, Karlan y Zinman, es un dispositivo de compromiso que ayuda a...
a) ahorrar dinero pensando en gastos médicos futuros imprevistos
b) recordar los turnos médicos programados mediante mensajes de texto
*c) dejar de fumar depositando dinero en una cuenta bloqueada
d) financiar micronutrientes para niños con riesgo de anemia

32. En el experimento de Charness y Gneezy sobre asistencia al gimnasio, ¿qué se observó respecto al incentivo monetario?
a) El efecto desapareció apenas terminó el período de incentivos
b) Solo funcionó en estudiantes que ya iban regularmente al gimnasio
c) El incentivo tuvo efecto únicamente durante la primera semana
*d) El aumento en la asistencia se mantuvo tras terminar los incentivos

33. Un "paquete de tentación", como el experimento de Milkman con audiolibros disponibles solo en el gimnasio, busca...
*a) asociar una actividad deseable pero poco tentadora con algo placentero
b) reemplazar por completo los incentivos monetarios tradicionales usados antes
c) reducir el tiempo total que la persona pasa haciendo ejercicio
d) medir el nivel de autocontrol de cada participante antes de empezar

## Nivel 2: Ciencias del Comportamiento y el Origen del Diseño

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

4. ¿Cuál de las siguientes se menciona como parte de la revolución cognitiva?
a) El desarrollo de la escritura cuneiforme en tablas de arcilla mesopotámicas antiguas
b) La invención de la imprenta de tipos móviles en Alemania renacentista
c) La domesticación de plantas y animales para el consumo alimenticio diario
*d) La aparición de la ficción a través de mitos y leyendas

5. ¿Qué ilustra el sitio de Göbekli Tepe, mencionado en el material?
*a) La cooperación a gran escala entre personas hace unos 12000 años
b) El origen de la escritura pictográfica en Mesopotamia
c) El comienzo de la revolución industrial en Europa
d) La primera aparición documentada de la agricultura sedentaria estable y bien organizada

6. Según la línea temporal presentada, ¿qué hito se ubica alrededor del 10000 AC?
a) La producción controlada del fuego por parte de los homínidos
*b) El comienzo de la agricultura como forma de vida
c) La invención del arco y la flecha para la caza
d) La cooperación a gran escala en asentamientos religiosos

7. ¿Dónde y con qué finalidad surgió el primer código de escritura según el material?
a) En Egipto, para registrar diversas transacciones comerciales sobre papiro antiguo
b) En China, para documentar decisiones políticas sobre tablillas de bambú
*c) En el sur de Mesopotamia, para registrar información en tablas
d) En Grecia, para transcribir extensos textos filosóficos sobre antiguos pergaminos originales

8. ¿Qué necesidad impulsó el desarrollo de la imprenta de tipos móviles según el material?
a) La necesidad de estandarizar las unidades de medida comerciales
b) La necesidad de acelerar el transporte de mercancías por barco
c) La necesidad de registrar el clima local con mayor precisión posible
*d) La necesidad de difundir y replicar información a gran escala

9. ¿Qué caracterizó a la revolución científica de los siglos XVI y XVII según el material?
*a) La observación sistemática y la experimentación para poner a prueba ideas
b) La producción en serie de bienes de consumo masivo
c) La masificación del acceso a la información mediante internet
d) La estandarización progresiva de la escritura sobre tablas de arcilla antiguas y duraderas

10. ¿Qué permitió específicamente la máquina de vapor durante la revolución industrial?
a) Acortar de manera notable los tiempos de comunicación entre continentes lejanos
*b) Canalizar energía de forma continua a gran escala productiva
c) Reemplazar por completo el trabajo intelectual y manual humano
d) Digitalizar por completo los procesos de fabricación artesanal tradicional

11. ¿Qué efecto tuvo la cámara Kodak de 1888 sobre el arte según el material?
a) Obligó a los artistas a representar la realidad con mayor exactitud
b) Eliminó casi por completo la pintura como forma de expresión artística tradicional
*c) Liberó a los artistas de capturar la realidad, impulsando nuevas vanguardias
d) Redujo notablemente el interés del público por el arte visual

12. ¿Qué buscaba lograr la escuela de la Bauhaus fundada en 1919?
a) Separar por completo el arte de toda la producción industrial moderna
b) Promover el retorno a técnicas artesanales previas a la industria
c) Desarrollar mobiliario destinado exclusivamente a la nobleza europea
*d) Reconciliar diseño, tecnología e industria en un lenguaje formal reproducible

13. Según el material, ¿qué cambio produjo el desarrollo de los antibióticos entre 1920 y 1940?
*a) Un cambio en la expectativa de vida y en la capacidad médica
b) La eliminación total de todas las enfermedades genéticas conocidas hasta ese momento preciso
c) La creación de las primeras vacunas eficaces contra virus respiratorios
d) El fin de la necesidad de higiene en los procedimientos médicos

14. Según el material, ¿cuál es una característica que distingue el diseño humano del de otras especies?
a) Sigue siempre un programa instintivo heredado genéticamente sin cambios
*b) Se comunica a través de abstracciones como planos, diagramas o modelos
c) Solo puede aplicarse a la construcción de refugios físicos
d) Depende exclusivamente de la imitación de comportamientos previos ya observados con frecuencia

15. ¿Qué idea transmite la frase "todo está diseñado, pero no todo está bien diseñado"?
a) Que solo los objetos de uso cotidiano fueron diseñados intencionalmente
b) Que el mal diseño ocurre únicamente en algunos contextos digitales actuales
*c) Que los entornos son resultado de intervenciones humanas, no siempre efectivas
d) Que la mayoría de los entornos actuales carece de intervención humana directa

16. ¿Qué combinación describe el enfoque de las ciencias del comportamiento según el material?
a) Intuición personal combinada con las opiniones de varios expertos reconocidos públicamente
b) Normativa legal combinada con encuestas de opinión pública
c) Tradición cultural combinada con reglas de convivencia social
*d) Método científico y evidencia empírica para poner a prueba hipótesis

17. ¿Cuál de las siguientes disciplinas se menciona como una de las que nutren a las ciencias del comportamiento?
*a) La antropología
b) La lingüística computacional
c) La ingeniería civil
d) La astronomía observacional

18. ¿Qué diferencia plantea el material entre el Homo Economicus y el Homo Heuristicus?
a) El primero toma decisiones grupales y el segundo decisiones individuales
*b) El primero supone racionalidad plena y el segundo racionalidad limitada
c) El primero es un concepto biológico y el segundo un concepto legal
d) El primero prioriza el largo plazo y el segundo el corto plazo

19. ¿Cómo se define la economía del comportamiento en el material?
a) Como la rama de la economía que estudia únicamente los grandes mercados financieros internacionales
b) Como una teoría que rechaza por completo los aportes de la economía clásica
*c) Como la rama de la economía que incorpora psicología para entender las decisiones
d) Como el estudio matemático de la oferta y la demanda sin variables humanas

20. ¿Qué plantea el material respecto a la relación entre creencias, conocimientos y comportamiento?
a) Que las creencias determinan siempre el comportamiento de manera directa
b) Que el comportamiento humano depende únicamente de factores genéticos heredados y prácticamente fijos
c) Que los conocimientos técnicos siempre garantizan decisiones plenamente racionales y correctas
*d) Que las creencias, conocimientos y gustos no siempre coinciden con el comportamiento

21. ¿Cuáles son las tres etapas que propone el material para trabajar con las ciencias del comportamiento?
*a) Identificar, entender y acortar las brechas
b) Diseñar, prototipar y testear soluciones concretas rápidamente
c) Observar, medir y publicar resultados
d) Planificar, ejecutar y evaluar acciones

22. ¿Cuáles son los tres elementos del proceso de selección natural presentados en el material?
a) Mutación, herencia y extinción total de las especies
*b) Variación, competencia y selección de los individuos
c) Adaptación, migración y aislamiento geográfico
d) Reproducción, dispersión y especiación gradual

23. Según el material, ¿en qué escala temporal opera la selección natural para consolidar adaptaciones complejas en humanos?
a) En cuestión de meses dentro de una misma generación
b) En ciclos de exactamente cien años por generación
*c) En escalas de miles a millones de años
d) En periodos que no superan una década completa

24. ¿Por qué la preferencia adaptativa por alimentos dulces y grasos puede resultar perjudicial hoy en día?
a) Porque esos alimentos ya no aportan ningún tipo de energía al cuerpo
b) Porque el cuerpo humano dejó de digerir azúcares y grasas
c) Porque esa preferencia desapareció por completo en la evolución reciente
*d) Porque hoy esos alimentos abundan y el gasto energético es bajo

25. Según el material, ¿en respuesta a qué ocurrieron los cambios evolutivos en el cerebro humano?
*a) A problemas de supervivencia y reproducción de nuestros ancestros
b) A necesidades exclusivamente estéticas de nuestros ancestros
c) A la aparición temprana de la escritura y la imprenta
d) A cambios climáticos ocurridos durante el último siglo

26. ¿Qué plantea el material sobre el contexto en el que tomamos decisiones?
a) Que las decisiones se toman siempre de manera aislada del entorno
*b) Que tomamos decisiones en entornos complejos con estímulos que compiten
c) Que el entorno no influye en absoluto en las decisiones humanas
d) Que solo los entornos digitales afectan la toma de decisiones

27. Según el material, ¿por qué no siempre realizamos análisis profundos antes de decidir?
a) Porque los análisis profundos no aportan ningún beneficio a las decisiones
b) Porque el cerebro humano carece de capacidad de razonamiento complejo
*c) Porque los análisis detenidos y profundos requieren mucha energía cognitiva
d) Porque las decisiones importantes se toman siempre de forma colectiva

28. ¿Qué concepto ilustran el experimento y el libro "El gorila invisible" mencionados en el material?
a) La memoria a largo plazo humana es prácticamente ilimitada casi siempre
b) Las personas siempre notan cualquier cambio en su entorno visual
c) La atención mejora notablemente bajo presión de tiempo
*d) Nuestra atención es limitada y podemos no percibir estímulos evidentes

29. ¿Qué buscaba lograr la imagen de una mosca grabada en los urinarios del aeropuerto de Schiphol?
*a) Orientar la puntería de los usuarios para reducir la suciedad
b) Decorar el espacio con un diseño artístico llamativo
c) Medir el caudal de agua utilizado en cada urinario
d) Advertir sobre un posible riesgo sanitario mediante una señal de alerta visible

30. Según el material, además de físicos, ¿qué otro tipo de entornos pueden influir en nuestras decisiones?
a) Únicamente entornos climáticos y geográficos
*b) Entornos digitales, sociales, económicos, temporales y comunicacionales
c) Solamente entornos relacionados con la temperatura ambiente exterior
d) Exclusivamente entornos vinculados a la legislación vigente

31. Según el material, ¿qué relación se plantea entre diseño, ciencias del comportamiento y behavioral design?
a) Son tres disciplinas completamente independientes sin relación entre sí
b) El behavioral design reemplaza por completo al diseño tradicional
*c) El behavioral design mejora una situación modificando el contexto de las decisiones
d) El behavioral design se limita únicamente al ámbito de la publicidad comercial actual
`;
