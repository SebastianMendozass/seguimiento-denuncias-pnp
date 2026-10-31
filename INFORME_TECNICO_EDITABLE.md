# Informe técnico — Consulta y seguimiento de denuncias

> Completar los campos entre corchetes y actualizarlo con los resultados reales antes de entregar. Este archivo es una base editable; el PDF adjunto también es una versión base.

## I. Información general
- Proyecto: Consulta y seguimiento de denuncias — prototipo ciudadano
- Curso: Interacción Humano-Computador
- Universidad: Universidad Privada del Norte
- Integrantes y roles: [completar]
- Docente: [completar]
- Fecha: [completar]

## II. Objetivo y alcance
Implementar una interfaz web de demostración para que una persona pueda consultar un código ficticio de denuncia, revisar un estado ilustrativo y acceder a información de orientación. Incluye validación, navegación, historial, notificaciones, glosario y controles básicos de accesibilidad. No consulta sistemas institucionales ni almacena expedientes reales.

## III. Requerimientos seleccionados
- RF-01: ingresar y validar código de consulta.
- RF-02: mostrar un resultado ilustrativo para códigos de demostración aceptados.
- RF-03: navegar por evidencias, pericias e historial.
- RF-04: consultar notificaciones y definiciones del glosario.
- RNF-01: diseño legible y adaptable.
- RNF-02: controles de teclado, foco visible y mensajes comprensibles.

## IV. Diseño y arquitectura
Frontend estático: `index.html` (estructura), `css/styles.css` (presentación) y `js/app.js` (interacciones). El navegador ejecuta el proceso y presenta datos de demostración. No existe backend ni base de datos en esta versión.

## V. Implementación técnica
CSS define jerarquía visual, colores, componentes, estados, diseño adaptable y estilos de foco. JavaScript gestiona navegación, validación del código, pestañas, glosario, controles de accesibilidad, impresión y respuestas simuladas.

## VI. Evidencias de funcionamiento
Insertar capturas propias de: inicio, error por campo vacío, código válido, código inexistente, pestañas, glosario, accesibilidad y URL publicada.

## VII. Pruebas funcionales
Completar `PRUEBAS_FUNCIONALES.md` con fecha, datos, resultado esperado y observado, estado y captura.

## VIII. Accesibilidad y usabilidad
Revisar foco visible, navegación con teclado, etiquetas, contraste, tamaño de texto, mensajes de error y diseño en móvil. Anotar las comprobaciones realmente ejecutadas y sus limitaciones.

## IX. Limitaciones y pendientes
Todos los registros, responsables, notificaciones y respuestas son ficticios. El contacto y chat no transmiten mensajes. No hay autenticación, persistencia, API ni conexión con la PNP. La lectura por voz depende del navegador.

## X. Conclusiones y anexos
[Completar según las pruebas reales]. Enlaces: aplicación publicada [pegar URL]; repositorio [pegar URL]. Adjuntar la matriz de pruebas y capturas.
