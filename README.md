# 🦸 Heroes App

Una aplicación web moderna y completa para explorar, gestionar y descubrir superhéroes y villanos. Desarrollada con React, TypeScript y las mejores prácticas de desarrollo frontend.

## ✨ Características

### 🎯 Funcionalidades Principales
- **Exploración de Personajes**: Navega por una extensa base de datos de superhéroes y villanos
- **Sistema de Favoritos**: Marca tus personajes favoritos y accede a ellos fácilmente
- **Búsqueda Avanzada**: Busca personajes por nombre, poderes, equipos y más
- **Filtros Inteligentes**: Filtra por categoría (héroes/villanos), fuerza, equipo, universo y estado
- **Estadísticas Detalladas**: Visualiza las estadísticas de poder de cada personaje
- **Paginación Optimizada**: Navega eficientemente por grandes colecciones de personajes
- **Interfaz Responsiva**: Diseño adaptativo que funciona en todos los dispositivos

### 🎨 Experiencia de Usuario
- **Interfaz Moderna**: Diseño limpio y atractivo con componentes UI profesionales
- **Navegación Intuitiva**: Sistema de pestañas y breadcrumbs para fácil navegación
- **Estados de Carga**: Indicadores de carga y manejo de errores elegantes
- **Persistencia Local**: Los favoritos se guardan automáticamente en el navegador

## 🚀 Tecnologías Utilizadas

### Frontend Core
- **React 19.1.1** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Herramienta de desarrollo rápida
- **React Router** - Enrutamiento del lado del cliente

### UI y Estilos
- **Tailwind CSS** - Framework de utilidades CSS
- **Radix UI** - Componentes primitivos accesibles
- **Lucide React** - Iconos modernos y consistentes
- **Class Variance Authority** - Gestión de variantes de componentes

### Estado y Datos
- **TanStack Query** - Gestión de estado del servidor y caché
- **Axios** - Cliente HTTP para comunicación con APIs
- **React Context** - Gestión de estado global (favoritos)

### Herramientas de Desarrollo
- **ESLint** - Linter para código JavaScript/TypeScript
- **TypeScript ESLint** - Reglas específicas para TypeScript
- **Vite SWC Plugin** - Compilación rápida con SWC

## 📁 Estructura del Proyecto

```
src/
├── admin/                    # Panel de administración
│   ├── layouts/
│   └── pages/
├── components/               # Componentes reutilizables
│   ├── custom/              # Componentes personalizados
│   └── ui/                  # Componentes base de UI
├── heroes/                  # Módulo principal de héroes
│   ├── actions/             # Acciones y lógica de negocio
│   ├── api/                 # Configuración de API
│   ├── components/          # Componentes específicos de héroes
│   ├── context/             # Contextos React
│   ├── hooks/               # Hooks personalizados
│   ├── layouts/             # Layouts específicos
│   ├── pages/               # Páginas de la aplicación
│   └── types/               # Definiciones de tipos TypeScript
├── lib/                     # Utilidades y helpers
├── router/                  # Configuración de rutas
└── main.tsx                 # Punto de entrada de la aplicación
```

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd heroes-app
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   # Crear archivo .env basado en .env.template
   cp .env.template .env
   
   # Editar .env con tu configuración
   VITE_API_URL=http://localhost:3000
   ```

4. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 📋 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Construcción
npm run build        # Construye para producción
npm run preview      # Vista previa de la build de producción

# Calidad de código
npm run lint         # Ejecuta ESLint
```

## 🎮 Uso de la Aplicación

### Navegación Principal
- **Inicio**: Página principal con estadísticas y lista de personajes
- **Búsqueda**: Página dedicada con filtros avanzados
- **Administración**: Panel de administración (ruta `/admin`)

### Funcionalidades de Usuario
1. **Explorar Personajes**: Navega por las pestañas (Todos, Favoritos, Héroes, Villanos)
2. **Marcar Favoritos**: Haz clic en el ícono de corazón en cualquier personaje
3. **Buscar**: Usa la barra de búsqueda para encontrar personajes específicos
4. **Filtrar**: Aplica filtros avanzados por fuerza, equipo, categoría, etc.
5. **Ver Detalles**: Haz clic en cualquier personaje para ver su información completa

### Sistema de Favoritos
- Los favoritos se guardan automáticamente en localStorage
- Persisten entre sesiones del navegador
- Acceso rápido desde la pestaña "Favoritos"

## 🔧 Configuración Avanzada

### Variables de Entorno
```env
VITE_API_URL=http://localhost:3000  # URL base de la API
```

### Personalización de Estilos
- Modifica `src/index.css` para estilos globales
- Usa las utilidades de Tailwind CSS para estilos específicos
- Personaliza componentes en `src/components/ui/`

## 🧪 Testing

La aplicación incluye una suite de pruebas completa:

```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas en modo watch
npm run test:watch

# Generar reporte de cobertura
npm run test:coverage
```

## 🚀 Despliegue

### Build de Producción
```bash
npm run build
```

### Despliegue en Vercel/Netlify
1. Conecta tu repositorio al servicio de hosting
2. Configura las variables de entorno
3. El build se ejecutará automáticamente

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

Desarrollado con ❤️ por [Tu Nombre]

## 🙏 Agradecimientos

- [React](https://reactjs.org/) - Biblioteca de interfaz de usuario
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Radix UI](https://www.radix-ui.com/) - Componentes primitivos
- [TanStack Query](https://tanstack.com/query) - Gestión de estado del servidor
- [Lucide](https://lucide.dev/) - Iconos

---

⭐ ¡Si te gusta este proyecto, no olvides darle una estrella!