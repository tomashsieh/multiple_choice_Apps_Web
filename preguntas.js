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

const MATERIA_ID_AAW = "arquitectura-apps-web";
const MATERIA_NOMBRE_AAW = "Arquitectura de Aplicaciones Web";

const PREGUNTAS_RAW_AAW = `
## Nivel 1: Introducción a la Arquitectura de Software

1. ¿Qué describe mejor el concepto de "arquitectura de software"?
a) El código fuente completo de una aplicación
*b) La organización fundamental de un sistema, sus componentes y las relaciones entre ellos
c) El manual de usuario de una aplicación
d) La lista de bugs conocidos de un sistema

2. ¿Cuál de los siguientes es un atributo de calidad (atributo no funcional) típico de un sistema?
a) El nombre de las variables del código
*b) La escalabilidad
c) El color de la interfaz
d) La cantidad de commits en el repositorio

3. En una arquitectura monolítica, ¿cómo se despliega típicamente la aplicación?
*a) Como una única unidad desplegable que contiene todos los módulos
b) Como decenas de servicios independientes desplegados por separado
c) Únicamente como funciones serverless
d) Como un conjunto de contenedores sin ninguna relación entre sí

4. ¿Cuál es una ventaja típica de una arquitectura de microservicios frente a un monolito?
a) Menor complejidad operativa
*b) Poder escalar y desplegar cada servicio de forma independiente
c) Un único punto de despliegue para todo el sistema
d) No requerir comunicación entre componentes

5. En un diagrama C4 a nivel de "Contexto", ¿qué se representa principalmente?
a) Las clases y métodos internos del código
*b) El sistema como una caja negra y sus interacciones con usuarios y otros sistemas
c) Las tablas de la base de datos
d) Los commits recientes del repositorio

## Nivel 2: Patrones de Arquitectura Web

1. En el patrón Modelo-Vista-Controlador (MVC), ¿cuál es la responsabilidad principal del Controlador?
a) Almacenar los datos persistentes
b) Renderizar directamente el HTML final
*c) Recibir la entrada del usuario y coordinar el Modelo y la Vista
d) Definir los estilos visuales de la aplicación

2. ¿Qué caracteriza a una arquitectura cliente-servidor?
a) El cliente y el servidor deben ejecutarse siempre en la misma máquina
*b) El cliente solicita recursos o servicios y el servidor los provee a través de una red
c) No existe ningún tipo de comunicación entre cliente y servidor
d) El servidor nunca puede tener más de un cliente conectado

3. ¿Cuál de las siguientes es una característica de una API REST?
a) Requiere mantener estado de sesión obligatoriamente en el servidor
*b) Utiliza los verbos HTTP (GET, POST, PUT, DELETE) sobre recursos identificados por URLs
c) Solo puede transmitir datos en formato XML
d) No puede utilizarse sobre HTTP

4. En una arquitectura en capas (presentación, negocio, datos), ¿cuál es el principal beneficio de esta separación?
a) Que todas las capas compartan las mismas variables globales
*b) Aislar responsabilidades para que los cambios en una capa afecten lo menos posible a las demás
c) Eliminar la necesidad de una base de datos
d) Que la capa de presentación acceda directamente a la base de datos sin pasar por las otras capas

5. ¿Qué describe mejor el patrón publicador-suscriptor (pub-sub)?
*a) Los publicadores emiten eventos sin conocer a los suscriptores, que se registran para recibirlos
b) Un único componente central que ejecuta todas las tareas de forma secuencial
c) Un patrón exclusivo para el acceso a bases de datos relacionales
d) Una forma de encriptar mensajes entre cliente y servidor

## Nivel 3: Escalabilidad y Despliegue

1. ¿Qué función cumple un balanceador de carga (load balancer)?
a) Comprimir las imágenes de un sitio web
*b) Distribuir las solicitudes entrantes entre varias instancias de un servicio
c) Encriptar la base de datos
d) Generar automáticamente documentación de la API

2. ¿Cuál es el propósito principal de una capa de caché (por ejemplo, con Redis) en una aplicación web?
a) Reemplazar completamente a la base de datos principal
*b) Reducir la latencia y la carga sobre el backend guardando resultados de acceso frecuente
c) Encriptar el tráfico entre cliente y servidor
d) Validar el formato de los formularios del lado del cliente

3. ¿Qué ventaja principal ofrece el uso de contenedores (por ejemplo, Docker) para desplegar una aplicación?
a) Eliminan por completo la necesidad de pruebas automatizadas
*b) Empaquetan la aplicación con sus dependencias para que se ejecute de forma consistente en distintos entornos
c) Solo pueden usarse en un único proveedor de nube
d) Reemplazan la necesidad de tener un sistema operativo

4. ¿Qué objetivo principal tiene un pipeline de integración/despliegue continuo (CI/CD)?
a) Escribir manualmente cada versión del software antes de publicarla
*b) Automatizar la construcción, prueba y despliegue del software de forma frecuente y confiable
c) Reemplazar completamente la necesidad de control de versiones
d) Garantizar que el software nunca tenga bugs

5. ¿Cuál es la diferencia principal entre escalabilidad horizontal y vertical?
*a) La horizontal agrega más instancias/máquinas, mientras que la vertical agrega más recursos a una misma máquina
b) La horizontal solo aplica a bases de datos y la vertical solo a servidores web
c) Ambas requieren siempre detener el sistema por completo
d) No hay ninguna diferencia real entre ambas
`;
