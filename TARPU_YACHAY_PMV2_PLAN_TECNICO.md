# Tarpu Yachay PMV2 - Plan Técnico de Desarrollo

**Fecha:** 1 de julio de 2025  
**Versión:** 1.0  
**Proyecto:** Progressive Web App (PWA) para registro e intercambio de semillas nativas  
**Comunidad objetivo:** Chugchilán, Ecuador  

---

## 📋 Introducción del Proyecto

### Propósito del PMV2
Tarpu Yachay PMV2 es una **Progressive Web App (PWA)** diseñada para facilitar el registro, catalogación e intercambio de semillas nativas entre agricultores de la comunidad rural de Chugchilán, Ecuador. Esta segunda versión del producto mínimo viable se enfoca en crear una aplicación moderna, escalable y completamente funcional que opere eficientemente tanto online como offline.

### Objetivos Principales
- **Preservación cultural**: Documentar y conservar el conocimiento ancestral sobre semillas nativas
- **Intercambio comunitario**: Facilitar el trueque e intercambio de semillas entre agricultores
- **Accesibilidad rural**: Funcionar eficientemente con conectividad limitada o intermitente
- **Escalabilidad**: Base sólida para futuras expansiones a otras comunidades

### Tecnología Base Seleccionada
**Vite + React + Firebase** como stack principal para el desarrollo de la PWA.

---

## 🔧 Justificación Técnica de la Herramienta Base

### Análisis Comparativo de Opciones

| Criterio | Create React App | Next.js | Vite |
|----------|------------------|---------|------|
| **Tamaño del bundle** | ❌ Grande | ⚠️ Medio-Grande | ✅ Pequeño |
| **Velocidad de desarrollo** | ⚠️ Lenta | ✅ Rápida | ✅ Muy rápida |
| **Soporte PWA** | ⚠️ Configuración manual | ⚠️ Plugins externos | ✅ Plugin oficial |
| **Optimización móvil** | ❌ Básica | ✅ Buena | ✅ Excelente |
| **Flexibilidad configuración** | ❌ Limitada | ✅ Alta | ✅ Muy alta |
| **Performance en dispositivos limitados** | ❌ Regular | ⚠️ Buena | ✅ Excelente |
| **Compatibilidad Firebase** | ✅ Completa | ✅ Completa | ✅ Completa |
| **Curva de aprendizaje** | ✅ Fácil | ⚠️ Media | ✅ Fácil |

### Decisión Final: **Vite**

**Razones técnicas principales:**

1. **Performance superior**: Build times hasta 10x más rápidos que CRA
2. **Bundle optimizado**: Genera archivos más pequeños, crucial para usuarios con conectividad limitada
3. **PWA nativa**: Plugin oficial `@vite/plugin-pwa` con configuración simplificada
4. **Hot Module Replacement**: Desarrollo más ágil con actualizaciones instantáneas
5. **Tree shaking avanzado**: Elimina código no utilizado automáticamente
6. **Soporte moderno**: ESM nativo, compatibilidad con las últimas especificaciones web
7. **Configuración flexible**: Fácil personalización para optimizaciones específicas de móviles

**Beneficios específicos para el contexto rural:**
- **Menor consumo de datos**: Bundles más pequeños = menos transferencia de datos
- **Mejor rendimiento**: Aplicación más rápida en dispositivos de gama baja
- **Carga inicial optimizada**: Code splitting automático para cargas progresivas
- **Offline-first optimizado**: Mejor integración con Service Workers

---

## 📦 División de Bloques Funcionales

El desarrollo del PMV2 se organizará en **8 bloques funcionales** secuenciales, cada uno con objetivos específicos y entregables claros.

---

### **Bloque 1: Configuración y Fundamentos**
**Duración estimada:** 3-4 días  
**Prioridad:** Crítica

#### Objetivo
Establecer la base técnica sólida del proyecto con Vite, React y las herramientas esenciales.

#### Contenido del bloque
- Inicialización del proyecto con Vite y React
- Configuración de estructura de carpetas y arquitectura
- Instalación y configuración de dependencias base
- Configuración de ESLint, Prettier y herramientas de desarrollo
- Setup inicial de PWA con `@vite/plugin-pwa`
- Configuración básica de Service Worker
- Creación del manifest.json para la PWA
- Configuración de Firebase (Auth, Firestore, Storage)
- Setup de variables de entorno y configuración de seguridad

#### Entregables
- Proyecto funcional con hot reload
- Estructura de carpetas implementada
- Firebase configurado y conectado
- PWA básica instalable
- Documentación de configuración

---

### **Bloque 2: Sistema de Autenticación**
**Duración estimada:** 4-5 días  
**Prioridad:** Crítica

#### Objetivo
Implementar un sistema completo de autenticación con Firebase Auth, incluyendo registro, login y gestión de sesiones.

#### Contenido del bloque
- Configuración avanzada de Firebase Authentication
- Creación de contexto de autenticación (AuthContext)
- Implementación de formularios de registro y login
- Validación de datos y manejo de errores
- Creación de rutas protegidas (PrivateRoute)
- Implementación de persistencia de sesión
- Pantalla de bienvenida para nuevos usuarios
- Recuperación de contraseña
- Logout y limpieza de sesión

#### Entregables
- Sistema de auth completo y funcional
- Formularios responsive de registro/login
- Protección de rutas implementada
- Manejo de errores y validaciones
- Flujo de usuario documentado

---

### **Bloque 3: Navegación y Layout Principal**
**Duración estimada:** 3-4 días  
**Prioridad:** Alta

#### Objetivo
Crear la estructura de navegación principal con Bottom Navigation Bar y el layout base de la aplicación.

#### Contenido del bloque
- Configuración de React Router para navegación
- Implementación de Bottom Navigation Bar con 5 secciones
- Creación del layout principal (AppLayout)
- Configuración de rutas principales
- Implementación de navegación entre páginas
- Creación de componentes de UI base (Header, Loading, etc.)
- Responsive design básico para móviles
- Indicadores de página activa en navegación

#### Entregables
- Navegación principal funcional
- Layout responsive implementado
- Rutas configuradas y navegables
- Componentes UI base creados
- UX de navegación optimizada

---

### **Bloque 4: Gestión Offline Básica (Simplificado)**
**Duración estimada:** 2-3 días  
**Prioridad:** Alta

#### Objetivo
Implementar funcionalidad offline básica que sirva como base para las funcionalidades core, sin complejidad de sincronización avanzada.

#### Contenido del bloque
- Implementación de contexto de conectividad básico (OfflineContext)
- Detección automática de estado online/offline con hooks
- Configuración de IndexedDB para almacenamiento local simple
- Indicadores visuales de estado de conectividad en el layout
- Almacenamiento local básico para operaciones críticas
- Hook personalizado `useOffline` para acceso al estado
- Preparación de estructura para futuras mejoras de sincronización

#### Funcionalidades implementadas
```jsx
// OfflineContext básico
const OfflineContext = createContext();
export const useOffline = () => useContext(OfflineContext);

// Funcionalidades mínimas:
- isOnline: boolean
- saveLocally(data): función básica
- getLocalData(): función básica
```

#### Entregables
- Contexto de conectividad funcional
- Indicadores visuales de estado online/offline
- Almacenamiento local básico con IndexedDB
- Hook `useOffline` documentado
- Base preparada para sincronización futura

---

### **Bloque 5: Registro de Semillas (Simplificado)**
**Duración estimada:** 3-4 días  
**Prioridad:** Crítica

#### Objetivo
Crear módulo de registro de semillas funcional y simple, aprovechando la página existente `AddSeedPage.jsx`.

#### Contenido del bloque
- Mejora del formulario existente en `AddSeedPage.jsx` con validación
- Implementación de captura de imagen única con la cámara del dispositivo
- Formulario de un solo paso (sin multi-step complejo)
- Integración con Firebase Storage para subida de imágenes
- Almacenamiento de datos en Firestore con estructura optimizada
- Soporte offline básico (guardar localmente si no hay conexión)
- Componentes UI reutilizables para el formulario
- Feedback visual durante la subida de datos

#### Modelo de datos implementado
```javascript
const seedData = {
  id: "uuid-generado",
  name: "Nombre de la semilla",
  variety: "Variedad específica", 
  category: "Categoría (cereales, legumbres, etc.)",
  description: "Descripción detallada",
  location: "Ubicación general del usuario",
  imageUrl: "url-de-imagen-en-firebase-storage",
  ownerId: "id-del-usuario-autenticado",
  ownerName: "nombre-del-usuario",
  ownerPhone: "numero-whatsapp-opcional", // Para contacto
  createdAt: "timestamp",
  isAvailableForExchange: true/false,
  exchangeNotes: "Notas adicionales para intercambio"
}
```

#### Funcionalidades principales
- Formulario responsive con validación en tiempo real
- Captura de foto con preview antes de guardar
- Selector de categorías predefinidas
- Campo opcional para número de WhatsApp (intercambios)
- Guardado automático local si no hay conexión
- Confirmación visual de registro exitoso

#### Entregables
- Formulario de registro completo y funcional
- Captura de imagen implementada y optimizada
- Integración con Firebase Storage y Firestore
- Soporte offline básico para registros
- Validación de datos robusta
- UX optimizada para dispositivos móviles

---

### **Bloque 6: Catálogo y Búsqueda de Semillas (Simplificado)**
**Duración estimada:** 3-4 días  
**Prioridad:** Alta

#### Objetivo
Desarrollar catálogo de semillas funcional con búsqueda y filtros básicos, aprovechando `CatalogPage.jsx` existente.

#### Contenido del bloque
- Mejora de la página existente `CatalogPage.jsx` con datos reales
- Lista de semillas con paginación simple desde Firestore
- Implementación de búsqueda por texto en nombre y descripción
- Filtros básicos por categoría y disponibilidad para intercambio
- Vista detallada de cada semilla con modal o página dedicada
- Visualización de imagen principal con zoom básico
- Información del propietario sin datos sensibles
- Cache local básico para navegación offline
- Indicadores de disponibilidad para intercambio

#### Funcionalidad de búsqueda implementada
```javascript
// Lógica de filtrado simplificada
const filterSeeds = (seeds, searchTerm, category, showOnlyAvailable) => {
  return seeds.filter(seed => {
    const matchesSearch = searchTerm === '' || 
      seed.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      seed.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = category === 'all' || seed.category === category;
    
    const matchesAvailability = !showOnlyAvailable || seed.isAvailableForExchange;
    
    return matchesSearch && matchesCategory && matchesAvailability;
  });
};
```

#### Componentes principales
- `SeedCard`: Tarjeta compacta para lista
- `SeedDetailModal`: Vista detallada con información completa
- `SearchBar`: Barra de búsqueda con filtros
- `CategoryFilter`: Selector de categorías
- `LoadingSeeds`: Estados de carga optimizados

#### Vista detallada incluye
- Imagen principal con zoom
- Información completa de la semilla
- Datos del propietario (nombre, ubicación general)
- Botón para solicitar intercambio (si está disponible)
- Estado de disponibilidad claramente visible

#### Entregables
- Catálogo completo y navegable con datos reales
- Búsqueda por texto funcional
- Filtros por categoría y disponibilidad
- Vista detallada optimizada para móviles
- Cache local para navegación offline básica
- Performance optimizada con lazy loading

---

### **Bloque 7: Sistema de Intercambios con WhatsApp (Simplificado)**
**Duración estimada:** 3-4 días  
**Prioridad:** Alta

#### Objetivo
Implementar sistema de intercambios usando WhatsApp como canal de comunicación, aprovechando `ExchangesPage.jsx` existente.

#### Contenido del bloque
- Mejora de la página existente `ExchangesPage.jsx` con funcionalidad real
- Sistema de solicitudes de intercambio con estados básicos
- Integración con WhatsApp para comunicación entre usuarios
- Gestión de solicitudes enviadas, recibidas y historial
- Estados de intercambio: pendiente, aceptado, rechazado, completado
- Notificaciones in-app básicas para nuevas solicitudes
- Protección de privacidad: WhatsApp solo visible tras aceptación

#### Modelo de datos de intercambio
```javascript
const exchangeData = {
  id: "uuid-generado",
  seedOfferedId: "id-semilla-ofrecida",
  seedOfferedName: "nombre-semilla-ofrecida",
  seedRequestedId: "id-semilla-solicitada", 
  seedRequestedName: "nombre-semilla-solicitada",
  requesterId: "id-usuario-solicitante",
  requesterName: "nombre-solicitante",
  requesterPhone: "whatsapp-solicitante",
  ownerId: "id-propietario-semilla",
  ownerName: "nombre-propietario",
  ownerPhone: "whatsapp-propietario",
  status: "pending", // pending, accepted, rejected, completed
  message: "Mensaje opcional del solicitante",
  createdAt: "timestamp",
  updatedAt: "timestamp"
}
```

#### Flujo de intercambio implementado
1. **Solicitud inicial**: Usuario A selecciona semilla de Usuario B
2. **Formulario de solicitud**: A ofrece su semilla + mensaje opcional
3. **Notificación**: B recibe notificación de solicitud nueva
4. **Revisión**: B puede aceptar/rechazar desde `ExchangesPage`
5. **Contacto WhatsApp**: Si acepta, ambos ven botón de WhatsApp
6. **Coordinación externa**: Usuarios se contactan por WhatsApp
7. **Finalización**: Cualquiera marca intercambio como completado

#### Componentes principales
- `ExchangeRequestForm`: Formulario para solicitar intercambio
- `ExchangeCard`: Tarjeta de intercambio con estados
- `WhatsAppContactButton`: Botón para abrir WhatsApp
- `ExchangeFilters`: Filtros por estado (pendientes, aceptados, etc.)

#### Integración WhatsApp
```javascript
// Función para generar enlace de WhatsApp
const createWhatsAppLink = (phone, seedName, userName) => {
  const message = encodeURIComponent(
    `Hola! Te contacto por la semilla "${seedName}" que ofreciste en Tarpu Yachay. 
    Soy ${userName} y me interesa intercambiar. ¿Podemos coordinar?`
  );
  return `https://wa.me/593${phone}?text=${message}`;
};

// Componente de contacto
<button onClick={() => window.open(whatsappLink)}>
  📱 Contactar por WhatsApp
</button>
```

#### Secciones en ExchangesPage
- **Solicitudes Recibidas**: Intercambios que otros usuarios solicitan
- **Solicitudes Enviadas**: Intercambios que el usuario ha solicitado
- **Historial**: Intercambios completados o rechazados
- **Contador de notificaciones**: Nuevas solicitudes pendientes

#### Entregables
- Sistema de intercambios funcional con WhatsApp
- Interfaz completa de gestión de solicitudes
- Estados de intercambio claros y funcionales
- Protección de privacidad implementada
- Notificaciones in-app básicas
- Flujo de usuario documentado y testeado

---

### **Bloque 8: Perfil de Usuario y Finalización**
**Duración estimada:** 3-4 días  
**Prioridad:** Media

#### Objetivo
Completar el perfil de usuario con estadísticas básicas, configuraciones esenciales y optimizaciones finales.

#### Contenido del bloque
- Mejora de la página existente `ProfilePage.jsx` con funcionalidad completa
- Estadísticas de actividad del usuario (semillas registradas, intercambios)
- Edición de información personal básica (nombre, ubicación, WhatsApp)
- Configuraciones de privacidad simples
- Panel de gestión de semillas propias
- Historial completo de actividad del usuario
- Optimizaciones finales de performance
- Testing exhaustivo en dispositivos móviles
- Preparación para build de producción

#### Componentes del perfil implementados
- **Información Personal**: 
  - Nombre de usuario (editable)
  - Ubicación general (editable)
  - Número de WhatsApp (opcional, para intercambios)
  - Fecha de registro
  
- **Estadísticas de Actividad**:
  - Total de semillas registradas
  - Intercambios completados
  - Intercambios pendientes
  - Semillas más intercambiadas
  
- **Gestión de Semillas**:
  - Lista de semillas propias
  - Editar disponibilidad para intercambio
  - Eliminar semillas registradas
  - Estadísticas por semilla

#### Configuraciones implementadas
```javascript
const userSettings = {
  privacy: {
    showPhoneNumber: false, // Solo en intercambios aceptados
    showExactLocation: false, // Solo ubicación general
    allowExchangeRequests: true
  },
  notifications: {
    newExchangeRequests: true,
    exchangeStatusUpdates: true
  },
  preferences: {
    language: 'es', // Preparado para futuro multiidioma
    theme: 'light' // Preparado para modo oscuro futuro
  }
}
```

#### Panel de gestión de datos
- **Mis Semillas**: Lista editable de semillas registradas
- **Mis Intercambios**: Historial completo con filtros
- **Configuración de Cuenta**: Edición de datos personales
- **Privacidad**: Configuraciones de visibilidad de datos
- **Exportar Datos**: Funcionalidad básica de descarga de datos

#### Optimizaciones finales
- Optimización de imágenes y assets
- Minimización del bundle de producción
- Testing de performance en dispositivos de gama media
- Validación de funcionalidad offline en todas las páginas
- Corrección de bugs identificados en testing
- Documentación de usuario básica

#### Preparación para producción
- Configuración de variables de entorno para producción
- Optimización de Service Worker para cache eficiente
- Configuración de Firebase para ambiente de producción
- Build optimizado con Vite
- Testing final en múltiples dispositivos

#### Entregables
- Perfil de usuario completo y funcional
- Panel de estadísticas implementado
- Configuraciones de usuario operativas
- Gestión de semillas desde perfil
- App completamente optimizada y testeada
- Build de producción listo para distribución
- Documentación básica de usuario
- PMV2 completamente funcional

---

## 🔄 Metodología de Desarrollo

### Enfoque Iterativo
- **Desarrollo bloque por bloque**: Cada bloque debe estar completamente funcional antes de pasar al siguiente
- **Testing continuo**: Pruebas en cada bloque con dispositivos reales
- **Feedback temprano**: Validación de funcionalidades con usuarios potenciales

### Criterios de Finalización por Bloque
1. **Funcionalidad completa**: Todas las características del bloque implementadas
2. **Testing aprobado**: Funcionalidad probada en dispositivos objetivo
3. **Documentación actualizada**: Código documentado y cambios registrados
4. **Performance verificada**: Rendimiento aceptable en dispositivos de gama baja

### Herramientas de Seguimiento
- **Control de versiones**: Git con commits descriptivos por funcionalidad
- **Testing**: Pruebas manuales sistemáticas en cada bloque
- **Performance**: Monitoring de métricas de carga y uso de memoria

---

## 🎯 Consideraciones Especiales

### Contexto Rural y Técnico
- **Conectividad limitada**: Diseño offline-first obligatorio
- **Dispositivos variados**: Compatibilidad con gama media-baja
- **Usabilidad simple**: Interfaz intuitiva para usuarios no técnicos
- **Multilenguaje**: Preparación para español y quichua

### Escalabilidad Futura
- **Arquitectura modular**: Fácil extensión a nuevas funcionalidades
- **Base de datos flexible**: Estructura preparada para crecimiento
- **API ready**: Preparación para futuras integraciones
- **Multi-comunidad**: Base para expansión geográfica

---

## 📈 Métricas de Éxito

### Técnicas
- **Tiempo de carga inicial**: < 3 segundos en conexión lenta
- **Tamaño de bundle**: < 2MB total
- **Funcionalidad offline**: 100% de características básicas disponibles
- **Compatibilidad**: 95% de dispositivos Android 8+

### Funcionales
- **Facilidad de registro**: Máximo 5 pasos para registrar una semilla
- **Tiempo de búsqueda**: Resultados en menos de 2 segundos
- **Éxito de sincronización**: 99% de datos sincronizados correctamente
- **Usabilidad**: Navegación intuitiva sin tutorial

---

## 🚀 Próximos Pasos

Una vez aprobado este plan técnico, el desarrollo comenzará con el **Bloque 1: Configuración y Fundamentos**. Cada bloque será desarrollado secuencialmente, con validación y testing antes de proceder al siguiente.

La duración total estimada del proyecto es de **15-19 días de desarrollo efectivo** (reducido de 36-42 días originales), distribuidos en 8 bloques funcionales optimizados que culminarán en una PWA completa, funcional y lista para distribución con todas las características core implementadas.

---

*Este documento servirá como guía técnica principal durante todo el desarrollo del PMV2 de Tarpu Yachay.*
