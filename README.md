# Rostisseria MARFA - Website

[![GitHub](https://img.shields.io/badge/GitHub-IvanReyesLeon/rostisseriamarfa-blue)](https://github.com/IvanReyesLeon/rostisseriamarfa)

Una web completa para la Rostisseria MARFA construida con React, Vite y TailwindCSS.

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. Clona o descarga el proyecto
2. Navega al directorio del proyecto
3. Instala las dependencias:

```bash
npm install
```

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

5. Abre [http://localhost:5173](http://localhost:5173) en tu navegador

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.jsx      # Barra de navegación
│   ├── Footer.jsx      # Pie de página
│   ├── Hero.jsx        # Sección hero de inicio
│   ├── Gallery.jsx     # Galería de platos
│   ├── DeliveryGrid.jsx # Servicios de delivery
│   ├── MenuList.jsx    # Lista de menú
│   ├── ContactCard.jsx # Formulario de contacto
│   └── ScrollToTop.jsx # Botón volver arriba
├── pages/              # Páginas principales
│   ├── Home.jsx        # Página de inicio
│   ├── Pedido.jsx      # Página de pedidos
│   ├── Menus.jsx       # Página de menús
│   ├── Ofertas.jsx     # Página de ofertas
│   ├── Carta.jsx       # Página de la carta
│   ├── Especialidades.jsx # Página de especialidades
│   └── Contacto.jsx    # Página de contacto
├── data/               # Datos de la aplicación
│   └── menu.json       # Carta de platos
└── main.jsx           # Punto de entrada
```

## 🎨 Personalización

### Cambiar horarios de apertura

Edita el archivo `src/components/Header.jsx`:

```jsx
// Línea 13-14
<p>Jueves y Viernes: 10:00 a 15:00 | Sábados, Domingos y Festivos: 09:00 a 15:00</p>
```

### Actualizar datos de contacto

Edita el archivo `src/components/Footer.jsx`:

```jsx
// Dirección (líneas 20-24)
<p>Dirección: 79, Rambla De Sant Jordi, 08291, Ripollet (Barcelona) · 02 km</p>

// Teléfono (líneas 27-30)
<a href="tel:935940131" className="block text-gray-300 hover:text-white transition-colors font-medium">
  📞 935 94 01 31
</a>
```

### Modificar enlaces de delivery

Edita el archivo `src/components/DeliveryGrid.jsx`:

```jsx
// Cambia los enlaces # por las URLs reales
const deliveryServices = [
  {
    name: 'Glovo',
    logo: '🛵',
    link: 'https://glovoapp.com', // Cambia aquí
    // ...
  },
  // ...
]
```

### Actualizar la carta de platos

Edita el archivo `src/data/menu.json` para modificar:
- Categorías de platos
- Nombres, precios y descripciones
- URLs de imágenes (actualmente usa placeholders de Picsum)

### Cambiar colores del tema

El sitio usa una paleta de colores roja. Para cambiarla, modifica las clases TailwindCSS en los componentes:

- Rojo principal: `bg-red-600`, `text-red-600`, `hover:bg-red-700`
- Reemplaza con tu color preferido (ej: `bg-blue-600`)

### Actualizar textos e información

- **Hero**: `src/components/Hero.jsx`
- **Grupo Marfa**: `src/pages/Home.jsx`
- **Especialidades**: `src/pages/Especialidades.jsx`
- **Ofertas**: `src/pages/Ofertas.jsx`

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework principal
- **Vite** - Build tool y dev server
- **TailwindCSS** - Framework CSS
- **React Router** - Enrutamiento
- **Picsum Photos** - Imágenes placeholder

## 📱 Características

- ✅ Diseño responsivo (móvil, tablet, desktop)
- ✅ Navegación con menú hamburguesa en móvil
- ✅ SEO básico (meta tags, títulos)
- ✅ Accesibilidad (alt en imágenes, navegación por teclado)
- ✅ Scroll suave y botón "volver arriba"
- ✅ Formulario de contacto funcional
- ✅ Integración con servicios de delivery
- ✅ Mapa embebido de ubicación

## 🚀 Despliegue

### Build para producción

```bash
npm run build
```

Los archivos listos para producción estarán en la carpeta `dist/`.

### Despliegue en Netlify/Vercel

1. Sube el contenido de la carpeta `dist/` a tu hosting
2. Configura el dominio si es necesario

## 📝 Notas

- Las imágenes usan actualmente placeholders de Picsum Photos
- Reemplaza las URLs de imágenes con las reales antes del despliegue
- El formulario de contacto hace console.log (implementa tu backend)
- Los enlaces de delivery apuntan a # (cambia por URLs reales)

## 📞 Soporte

Para soporte técnico o preguntas sobre personalización, contacta con el desarrollador.

---

**Rostisseria MARFA** - Comida para llevar de calidad con materia prima de primera
