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

## Nivel 3: ¿Cómo tomamos decisiones? (Sesgos e Ilusiones Perceptuales)

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

14. Si un mate y una bombilla cuestan juntos $110, y el mate cuesta $100 más que la bombilla, ¿cuánto cuesta la bombilla?
a) $10
*b) $5
c) $15
d) $12

15. En un lago hay una zona de plantas acuáticas que duplica su tamaño todos los días y tarda 48 días en cubrir todo el lago, ¿cuántos días tarda en cubrir la mitad del lago?
a) 24 días
b) 46 días
*c) 47 días
d) 12 días

16. ¿Qué es el sesgo de confirmación?
*a) La tendencia a buscar e interpretar información de manera que confirme las creencias preexistentes
b) La tendencia a cambiar de opinión con facilidad ante cualquier información nueva recibida
c) La tendencia a olvidar con rapidez la información que resulta incómoda o molesta
d) La tendencia a dar el mismo peso a toda la evidencia, sin importar su origen

17. ¿Qué es el sesgo de disponibilidad?
a) La tendencia a subestimar la probabilidad de eventos que ocurrieron hace poco tiempo
b) La tendencia a recordar con la misma intensidad todos los eventos importantes, memorables o no
*c) La tendencia a sobrestimar la probabilidad de eventos que son más recientes o memorables
d) La tendencia a ignorar por completo los eventos que aparecen en los medios

18. ¿Qué es el descuento hiperbólico?
*a) La tendencia a sobrevalorar las recompensas inmediatas frente a las recompensas futuras
b) La tendencia a valorar por igual una recompensa inmediata y una recompensa futura
c) La tendencia a preferir siempre esperar más tiempo para obtener una recompensa mayor
d) La tendencia a calcular con precisión matemática el valor futuro del dinero

19. ¿Qué es el sesgo del presente?
a) La tendencia a planificar el futuro ignorando por completo las necesidades actuales
b) La tendencia a recordar el pasado con mucha más claridad y detalle que el presente
c) La tendencia a postergar indefinidamente cualquier decisión que resulte importante o compleja
*d) La tendencia a darle demasiado peso al "aquí y ahora" al momento de decidir

20. En el ejemplo de la donación de órganos, ¿qué representa la opción marcada por defecto cuando la persona no elige nada?
a) Un rediseño que elimina por completo la posibilidad de elegir "no donar"
*b) Una opción predeterminada que se aplica si la persona no toma ninguna acción
c) Una recompensa económica que se ofrece a quienes deciden donar sus órganos
d) Una campaña publicitaria que apela al miedo para aumentar las donaciones

21. ¿Qué es el sesgo del status-quo?
a) La tendencia a buscar constantemente el cambio, incluso sin ningún motivo aparente
*b) La tendencia a preferir que las cosas permanezcan igual o mantener una decisión previa
c) La tendencia a modificar las decisiones propias ante cualquier objeción externa recibida
d) La tendencia a comparar cada decisión nueva con la opción más cara que esté disponible

22. ¿Qué encontró el estudio de Johnson y Goldstein sobre las tasas de consentimiento para donar órganos en distintos países?
a) Que los países con opt-in y opt-out presentan tasas de consentimiento casi idénticas
b) Que la edad de las personas es el factor que más influye en la donación
c) Que el consentimiento explícito (opt-in) genera siempre tasas de donación superiores al 90%
*d) Que los países con consentimiento presunto (opt-out) muestran tasas de donación mucho más altas

23. ¿Qué describe el sesgo de norma social?
*a) La tendencia a seguir lo que se cree que es "normal" o aceptado por la mayoría
b) La tendencia a actuar siempre en contra de lo que hace la mayoría del grupo social concreto
c) La tendencia a ignorar por completo las opiniones ajenas al momento de decidir
d) La tendencia a modificar las normas sociales según la conveniencia propia del momento

24. En el ejemplo de la factura de energía que compara el consumo propio con el de los vecinos eficientes, ¿qué mecanismo se está utilizando?
a) Sesgo de anclaje, al mostrar el precio original tachado junto al precio final
b) Efecto de dotación, al hacer que la persona valore más su propio consumo
*c) Norma social, al comparar el consumo propio con el de los vecinos eficientes
d) Sesgo de autoridad, al presentar la información como proveniente de un experto

25. ¿Con qué experimento clásico se relaciona el sesgo de conformidad?
*a) Se relaciona con el experimento de Asch sobre el juicio de la longitud de líneas
b) Se relaciona con el experimento de Milgram sobre la obediencia ciega a figuras de autoridad establecidas
c) Se relaciona con el experimento de Zimbardo sobre roles sociales asignados completamente al azar
d) Se relaciona con el experimento de Pavlov sobre las respuestas condicionadas al estímulo

26. ¿Qué es el sesgo de anclaje?
a) La tendencia a ignorar cualquier información numérica al momento de tomar una decisión
b) La tendencia a comparar siempre el precio de un producto con el de la competencia
*c) La tendencia a depender demasiado de la primera información recibida al tomar decisiones
d) La tendencia a rechazar ofertas que parecen demasiado buenas para ser verdad

27. ¿Qué es el efecto anzuelo (decoy effect)?
a) Ocurre cuando se elimina una opción intermedia para simplificar la decisión final
*b) Ocurre cuando una tercera opción, menos atractiva, hace que otra opción parezca más atractiva
c) Ocurre cuando se ofrece una única opción para evitar que se comparen precios distintos entre sí
d) Ocurre cuando todas las opciones disponibles tienen exactamente el mismo precio final

28. ¿Qué es el sesgo del superviviente?
a) La tendencia a analizar solo los casos que fracasaron, ignorando los que tuvieron éxito
b) La tendencia a atribuir todos los fracasos a la mala suerte y nunca a las decisiones
c) La tendencia a considerar que el éxito y el fracaso tienen siempre la misma probabilidad
*d) La tendencia a analizar solo los casos de éxito, ignorando los que fracasaron o desaparecieron

29. En el ejemplo de los aviones de la Segunda Guerra Mundial con impactos de bala, ¿qué decisión se derivó de corregir el sesgo del superviviente?
a) Reforzar únicamente las zonas donde se habían observado más impactos de bala recibidos
b) Reforzar el fuselaje completo del avión sin distinguir ninguna zona específica
c) No reforzar ninguna zona, ya que los impactos eran completamente aleatorios
*d) Reforzar las zonas sin impactos, porque los aviones alcanzados ahí no regresaban

30. ¿Qué es el sesgo de atribución?
a) La tendencia a atribuir tanto los propios éxitos como los ajenos a causas externas
*b) La tendencia a atribuir las acciones ajenas a rasgos personales y las propias a circunstancias externas
c) La tendencia a no atribuir ninguna causa a las acciones observadas en otras personas
d) La tendencia a atribuir siempre las acciones ajenas a la casualidad y no al carácter

31. ¿Qué es el sesgo del egocentrismo?
a) La tendencia a considerar que el propio esfuerzo nunca influye en los resultados obtenidos
b) La tendencia a subestimar sistemáticamente las propias capacidades frente a las de las demás personas
*c) La tendencia a sobrestimar el propio mérito en los resultados exitosos, minimizando otros factores
d) La tendencia a atribuir todos los logros propios exclusivamente a un golpe de suerte

32. ¿Cómo se resolvió el problema de "la fricción" con las premezclas para hacer tortas?
*a) Se resolvió agregando un paso, como sumar un huevo, que devolvió sensación de esfuerzo
b) Se resolvió eliminando cualquier paso adicional del proceso completo de horneado
c) Se resolvió bajando el precio del producto para compensar el esfuerzo percibido
d) Se resolvió cambiando el empaque del producto sin modificar en nada la receta

33. ¿Qué es el efecto Ikea?
a) Nos suele satisfacer más un objeto cuanto menos esfuerzo hayamos invertido en obtenerlo
b) Nos suele resultar bastante indiferente el esfuerzo personal invertido en la creación de un objeto
*c) Nos suelen satisfacer más las cosas si estamos involucrados y nos esforzamos en crearlas
d) Nos suele importar más el precio de un mueble que el proceso de armarlo

34. ¿Qué es el efecto de dotación (endowment effect)?
*a) La tendencia a valorar más un objeto simplemente porque uno mismo lo posee
b) La tendencia a valorar más un objeto cuanto más económico resulta en el mercado
c) La tendencia a valorar menos los objetos propios frente a los objetos ajenos
d) La tendencia a valorar únicamente los objetos que fueron un regalo de otra persona

35. ¿Qué es la aversión a la pérdida?
a) La tendencia a sentir el placer de ganar con mayor intensidad que el dolor de perder
b) La tendencia a evaluar ganancias y pérdidas exactamente con la misma intensidad emocional
c) La tendencia a ignorar por completo las pérdidas pequeñas al tomar una decisión
*d) La tendencia a sentir el dolor de perder más que el placer de ganar

36. ¿Qué es el efecto Forer?
a) La tendencia a rechazar cualquier descripción de personalidad que suene general o vaga
*b) La tendencia a aceptar como válidas descripciones vagas y generales como si fueran específicas
c) La tendencia a memorizar con precisión las descripciones de personalidad que se leen
d) La tendencia a comparar la propia personalidad únicamente con la de personas cercanas

37. ¿Qué es el sesgo de autoridad?
a) La tendencia a desconfiar sistemáticamente de cualquier figura con poder o prestigio
*b) La tendencia a confiar más en una información cuando proviene de una figura de autoridad
c) La tendencia a evaluar críticamente cualquier información antes de aceptarla como válida
d) La tendencia a dar el mismo valor a una opinión, sin importar quién la exprese realmente

38. ¿Qué es el efecto halo?
a) La tendencia a formar una primera impresión negativa que nunca cambia con el tiempo
b) La tendencia a evaluar cada característica de una persona de forma completamente independiente
c) La tendencia a ignorar la primera impresión y basarse solo en el análisis posterior
*d) La tendencia a extender una cualidad positiva percibida inicialmente a otras características

39. ¿Qué es el sesgo de afinidad?
*a) La tendencia a favorecer a personas similares a uno mismo en intereses o antecedentes
b) La tendencia a favorecer a personas completamente distintas a uno mismo en todo
c) La tendencia a evaluar a todas las personas exactamente con los mismos criterios
d) La tendencia a desconfiar de las personas que comparten los propios intereses o gustos personales

40. ¿Qué es el efecto encuadre (framing)?
a) La tendencia a reaccionar siempre de la misma manera sin importar cómo se presente algo
b) La tendencia a ignorar por completo la forma en que se presentan los datos
*c) La tendencia a reaccionar de manera distinta ante una misma información según cómo se presente
d) La tendencia a preferir siempre los datos que se presentan en formato de porcentaje

41. ¿Qué es el sesgo de saliencia?
*a) La tendencia a prestar más atención a la información más destacada o llamativa
b) La tendencia a prestar más atención a la información menos visible pero más relevante
c) La tendencia a ignorar por completo cualquier estímulo que resulte visualmente llamativo
d) La tendencia a recordar con igual intensidad toda la información, sin importar su formato

42. ¿Cómo se define un sesgo cognitivo?
a) Un error aleatorio y poco frecuente que ocurre solo en decisiones muy complejas
b) Una falla que se relaciona exclusivamente con los procesos de memoria a largo plazo
*c) Un error sistemático o tendencia en el juicio y la toma de decisiones rápidas
d) Una estrategia consciente que se usa de forma deliberada para engañar a otros

43. Según Kahneman y Tversky, ¿cómo opera el Sistema 1?
a) Opera con mucho esfuerzo consciente y se utiliza en decisiones complejas
*b) Opera sin esfuerzo, de forma automática e intuitiva, con poca energía mental
c) Opera exclusivamente cuando la persona dispone de mucho tiempo para decidir
d) Opera analizando cada opción de forma matemática antes de tomar una decisión

44. Según Kahneman y Tversky, ¿cómo opera el Sistema 2?
a) Es intuitivo, automático y opera consumiendo muy poca energía mental
b) Es el sistema responsable de todas las decisiones diarias, sin ninguna excepción
c) Es un sistema que actúa exclusivamente mientras la persona está durmiendo
*d) Requiere esfuerzo consciente y se usa en decisiones complejas y reflexivas

45. ¿Qué son las heurísticas?
a) Reglas exactas y matemáticas que garantizan siempre llegar a la decisión correcta
b) Procesos que solo se activan cuando el Sistema 2 falla por completo
c) Mecanismos que eliminan por completo la posibilidad de cometer errores de juicio
*d) Atajos mentales usados para simplificar y agilizar la toma de decisiones

46. ¿Qué describe la brecha entre intenciones y acciones?
a) Ocurre únicamente cuando la persona desconoce los beneficios reales de actuar
*b) Es la distancia entre lo que planeamos hacer y lo que realmente terminamos haciendo
c) Es la diferencia entre las creencias de una persona y sus conocimientos previos
d) Es un fenómeno que solo afecta a las decisiones que involucran dinero
`;
