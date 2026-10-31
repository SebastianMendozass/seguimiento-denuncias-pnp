# Publicar gratis en GitHub Pages

Esta aplicación usa únicamente HTML, CSS y JavaScript del navegador, por lo que puede alojarse como sitio estático. GitHub Pages está disponible en repositorios públicos con GitHub Free. La publicación hace que el sitio sea público en Internet.

## Antes de publicar
- Prueba el proyecto abriendo `index.html` en tu navegador.
- No agregues datos personales reales, contraseñas ni información sensible.
- Asegúrate de subir la carpeta del proyecto y que `index.html` quede en la raíz del repositorio.

## Pasos
1. Entra a https://github.com e inicia sesión o crea una cuenta.
2. Pulsa **New repository** para crear un repositorio nuevo.
3. Ponle un nombre, por ejemplo `seguimiento-denuncias-pnp`.
4. Selecciona **Public** y crea el repositorio. Ten en cuenta que el código y la página serán públicos.
5. En el repositorio, pulsa **Add file → Upload files**.
6. Descomprime el ZIP en tu computadora y abre la carpeta interior `proyecto_seguimiento_denuncias_pnp`.
7. Sube el contenido de esa carpeta (no el ZIP): `index.html`, `css`, `js`, `docs`, `.nojekyll` y `README.md`. Comprueba que `index.html` quede directamente en la raíz del repositorio, no dentro de otra carpeta.
8. Pulsa **Commit changes** para guardar los archivos.
9. Abre **Settings → Pages**.
10. En **Build and deployment**, en **Source**, elige **Deploy from a branch**.
11. En **Branch**, selecciona `main` y la carpeta `/(root)`, luego pulsa **Save**.
12. Espera a que termine la publicación. Vuelve a **Settings → Pages** y pulsa **Visit site** cuando aparezca. La URL tendrá una forma similar a `https://TU-USUARIO.github.io/seguimiento-denuncias-pnp/`; reemplaza el ejemplo por la dirección que GitHub muestre.
13. Abre el enlace en una ventana incógnita y desde un celular. Prueba consulta válida, código incorrecto, navegación, glosario y controles de accesibilidad.
14. Copia la URL pública real en la ficha de entrega para el docente.

## Si no funciona
- Comprueba que `index.html` esté en la raíz del repositorio.
- Revisa **Settings → Pages** para ver el origen de publicación.
- Espera unos minutos y revisa la pestaña **Actions** por si hay un error de despliegue.
- Revisa que las rutas estén exactamente como aparecen: `css/styles.css` y `js/app.js`.

## Limitaciones
GitHub Pages aloja frontend estático; no ejecuta un backend tradicional ni crea una base de datos. Esta versión funciona con datos locales de demostración. No digas que consulta una base de datos real o sistemas institucionales.

Referencia oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
