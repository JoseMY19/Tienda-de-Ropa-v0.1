# Tienda-Ropa - Fullstack (Frontend + Backend)

Proyecto completo de una tienda de ropa (HTML/CSS/JS frontend + Node.js + Express backend).
Listo para subir a GitHub.

## Estructura
```
tienda-ropa/
├─ backend/
│  ├─ server.js
│  ├─ package.json
│  ├─ routes/
│  │  ├─ productos.js
│  │  └─ contacto.js
│  └─ data/
│     └─ productos.json
├─ frontend/
│  ├─ index.html
│  ├─ style.css
│  ├─ script.js
│  └─ img/
│     ├─ logo.svg
│     ├─ portada.svg
│     ├─ ropa1.svg
│     ├─ ropa2.svg
│     └─ ropa3.svg
└─ .gitignore
```

## Cómo ejecutar (local)

### Backend
1. Abrir terminal y entrar en la carpeta backend:
```bash
cd backend
npm install
npm run dev
```
El servidor correrá en `http://localhost:4000`.

### Frontend
Abrir `frontend/index.html` en tu navegador (doble clic o `Live Server`).

> Nota: El frontend solicita los productos desde `http://localhost:4000/api/productos`.  
> Asegúrate de iniciar el backend primero.

## Deploy / GitHub
Sube todo el contenido a un repositorio en GitHub. Si quieres desplegar el backend, servicios como Railway, Render o Heroku pueden usarse. El frontend puede subirse a GitHub Pages si solo necesitas una versión estática (sin backend), o desplegarse en Vercel/Netlify y configurar el backend URL.