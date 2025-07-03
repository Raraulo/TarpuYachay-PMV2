# Bloque 3: Navegación y Layout Principal

**Objetivo:** Crear la estructura de navegación principal con Bottom Navigation Bar y el layout base de la aplicación PWA moderna y responsive.

---

## 🗂️ Pasos Secuenciales del Bloque 3

### Paso 1. Instalación y configuración de React Router
- Instalar `react-router-dom` si no está instalado (verificar desde Bloque 1).
- Configurar el router principal en `main.jsx` o `App.jsx`.
- Crear estructura base de rutas en archivo de configuración.
- Documentar la estrategia de enrutamiento seleccionada.

### Paso 2. Definición de la arquitectura de navegación
- Diseñar la estructura de 5 secciones del Bottom Navigation Bar:
  - **Inicio/Dashboard** (🏠 Home)
  - **Semillas** (🌱 Catálogo)
  - **Registrar** (➕ Añadir semilla)
  - **Intercambios** (🔄 Trueques)
  - **Perfil** (👤 Usuario)
- Documentar iconografía y nomenclatura de cada sección.
- Definir flujos de navegación entre secciones.

### Paso 3. Creación del layout principal (AppLayout)
- Crear componente `src/components/layout/AppLayout.jsx`.
- Implementar estructura HTML5 semántica (header, main, nav).
- Integrar Bottom Navigation Bar en el layout.
- Configurar área de contenido dinámico para las páginas.
- Implementar responsive design base para móviles.

### Paso 4. Implementación del Bottom Navigation Bar
- Crear componente `src/components/navigation/BottomNavigationBar.jsx`.
- Implementar los 5 botones de navegación con iconos.
- Añadir lógica para destacar la página activa.
- Configurar navegación programática con React Router.
- Optimizar para touch/tap en dispositivos móviles.

### Paso 5. Configuración de rutas principales y páginas base ✅ COMPLETADO
- ✅ Crear páginas base para cada sección de navegación:
  - `src/pages/HomePage.jsx` (Dashboard)
  - `src/pages/CatalogPage.jsx` (Lista de semillas)
  - `src/pages/AddSeedPage.jsx` (Registro de semillas)
  - `src/pages/ExchangesPage.jsx` (Intercambios)
  - `src/pages/ProfilePage.jsx` (ya existe, integrado)
- ✅ Configurar rutas protegidas donde sea necesario.
- ✅ Implementar navegación entre páginas.
- ✅ Actualizar AppRouter.jsx con imports reales.
- ✅ Verificar funcionamiento completo del sistema.

### Paso 6. Creación de componentes UI base
- Crear componente `src/components/ui/Header.jsx`.
- Crear componente `src/components/ui/Loading.jsx`.
- Crear componente `src/components/ui/ErrorBoundary.jsx`.
- Implementar componentes auxiliares (Button, Card, etc.).
- Documentar sistema de componentes base.

### Paso 7. Implementación de responsive design y accesibilidad
- Configurar breakpoints CSS para móviles, tablets y desktop.
- Implementar media queries para adaptación de layout.
- Añadir soporte para navegación por teclado.
- Configurar ARIA labels y roles de accesibilidad.
- Optimizar touch targets para dispositivos móviles.

### Paso 8. Integración con sistema de autenticación existente
- Integrar navegación con `AuthContext` del Bloque 2.
- Configurar redirecciones según estado de autenticación.
- Adaptar `NavigationManager.jsx` para trabajar con el nuevo layout.
- Implementar logout desde el layout principal.
- Verificar flujos de navegación tras login/logout.

### Paso 9. Indicadores de estado y feedback visual
- Implementar indicadores de página activa en navegación.
- Añadir animaciones de transición entre páginas.
- Crear indicadores de carga y estados vacíos.
- Implementar feedback visual para interacciones.
- Optimizar performance de animaciones.

### Paso 10. Pruebas de navegación y optimización final
- Ejecutar pruebas completas de navegación entre todas las páginas.
- Verificar responsive design en diferentes dispositivos.
- Probar accesibilidad con navegación por teclado.
- Optimizar rendimiento de carga de rutas.
- Documentar flujos de navegación y arquitectura final.

---

## ✅ Entregables del Bloque 3
- React Router configurado y funcionando
- AppLayout responsive implementado
- Bottom Navigation Bar con 5 secciones operativo
- Páginas base creadas para cada sección
- Componentes UI base documentados
- Sistema de rutas protegidas integrado
- Navegación accesible y optimizada para móviles
- Integración completa con sistema de autenticación
- Indicadores de estado y feedback visual
- Documentación de arquitectura de navegación

---

## 📋 Estructura de Archivos a Crear

```
src/
├── components/
│   ├── layout/
│   │   └── AppLayout.jsx           # Layout principal de la aplicación
│   ├── navigation/
│   │   └── BottomNavigationBar.jsx # Barra de navegación inferior
│   └── ui/
│       ├── Header.jsx              # Componente de encabezado
│       ├── Loading.jsx             # Indicador de carga
│       ├── ErrorBoundary.jsx       # Manejo de errores
│       ├── Button.jsx              # Botón base reutilizable
│       └── Card.jsx                # Tarjeta base reutilizable
├── pages/
│   ├── HomePage.jsx                # Página principal/dashboard
│   ├── CatalogPage.jsx             # Página de catálogo de semillas
│   ├── AddSeedPage.jsx             # Página de registro de semillas
│   └── ExchangesPage.jsx           # Página de intercambios
├── router/
│   └── AppRouter.jsx               # Configuración de rutas
└── styles/
    ├── layout.css                  # Estilos del layout
    └── navigation.css              # Estilos de navegación
```

---

## 🔗 Dependencias Necesarias

Las siguientes dependencias ya están instaladas desde el Bloque 1:
- `react-router-dom` (para navegación y rutas)
- `react` (hooks para estado de navegación)

Nuevas dependencias opcionales:
- `react-transition-group` (para animaciones de transición)
- `@heroicons/react` o similar (para iconos de navegación)

---

## 🎯 Criterios de Validación

Cada paso debe cumplir con:
- ✅ Funcionalidad implementada correctamente
- ✅ Responsive design funcional en móviles
- ✅ Navegación fluida entre todas las páginas
- ✅ Integración exitosa con sistema de autenticación
- ✅ Accesibilidad básica implementada
- ✅ Performance optimizada para dispositivos móviles
- ✅ Código limpio y bien documentado
- ✅ Pruebas de usuario exitosas

---

## 🔄 Consideraciones de Integración

### Con Bloque 2 (Autenticación)
- Mantener compatibilidad con `AuthContext`
- Preservar funcionamiento de `NavigationManager.jsx`
- Integrar logout en el layout principal
- Respetar rutas protegidas existentes

### Para Bloques Futuros
- Layout preparado para contenido de semillas (Bloque 5)
- Navegación lista para sistema de intercambios (Bloque 7)
- Estructura extensible para nuevas funcionalidades
- Performance optimizada para contenido multimedia

---

**Nota:** Cada paso debe ser validado y documentado antes de avanzar al siguiente. El layout debe ser completamente funcional y responsive antes de proceder con el desarrollo de contenido específico en bloques posteriores.
