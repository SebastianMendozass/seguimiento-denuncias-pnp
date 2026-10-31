# Consulta y seguimiento de denuncias — prototipo académico

## Descripción
Aplicación web estática para demostrar un flujo ciudadano de consulta y seguimiento de denuncias. Está construida con HTML5, CSS3 y JavaScript sin dependencias ni backend. **Todos los datos y respuestas son ficticios**; no consulta sistemas de la Policía Nacional del Perú ni contacta a funcionarios reales.

## Estructura del proyecto
```text
proyecto_seguimiento_denuncias_pnp/
├── index.html
├── css/styles.css
├── js/app.js
├── docs/
│   ├── INFORME_TECNICO.pdf
│   ├── INFORME_TECNICO_EDITABLE.md
│   ├── PRUEBAS_FUNCIONALES.md
│   ├── GUIA_PUBLICACION_GRATIS.md
│   └── GUIA_VIDEO_DEMOSTRATIVO.md
├── .nojekyll
└── README.md
```

## Ejecutar localmente
1. Descomprime el ZIP.
2. Abre `index.html` en Chrome, Edge o Firefox. No requiere instalación.
3. Para consulta válida prueba `DEN-2026-001284` o `D2024-0005678`.
4. Prueba el campo vacío y un código inexistente.

## Funciones disponibles
- Navegación entre Inicio, Seguimiento, Notificaciones y Ayuda/Glosario.
- Validación de código y resultados ficticios.
- Pestañas de evidencias, pericias e historial.
- Vista ilustrativa y descarga de archivo de demostración.
- Formulario de contacto y chat simulados.
- Búsqueda en glosario.
- Ajuste de tamaño de texto, modos de color y lectura en voz alta si el navegador lo soporta.
- Diseño adaptable y foco visible para teclado.
- Impresión del resumen.

## Publicar gratis
Sigue paso a paso `docs/GUIA_PUBLICACION_GRATIS.md`. Para esta versión frontend estático, GitHub Pages es una opción gratuita. La URL pública solo existirá después de que la publiques desde tu propia cuenta.

## Importante sobre el alcance
Esta versión no tiene backend, base de datos ni almacenamiento compartido. Los datos no se guardan como denuncias reales. Si el docente exige un proceso que persista información entre dispositivos, habrá que implementar y desplegar un backend separado. No ingreses datos personales reales.

## Entrega académica
El ZIP incluye un informe técnico base y matrices de prueba. Completa los campos marcados, ejecuta cada prueba y registra el resultado observado y capturas propias antes de entregar. No declares pruebas, publicación ni integraciones que no hayas realizado.
