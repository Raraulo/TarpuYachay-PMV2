# Bloque 5: Registro de Semillas (Simplificado)

**Objetivo:** Crear módulo de registro de semillas funcional y simple, aprovechando la página existente `AddSeedPage.jsx` con integración completa a Firebase y soporte offline.

---

## 🗂️ Pasos Secuenciales del Bloque 5

### Paso 1. Análisis y mejora del formulario existente
- Revisar el formulario actual en `src/pages/AddSeedPage.jsx`.
- Identificar campos necesarios según el modelo de datos definido.
- Agregar campos faltantes: `variety`, `ownerPhone`, `isAvailableForExchange`, `exchangeNotes`.
- Mejorar la estructura y organización visual del formulario.
- Documentar cambios realizados y estructura final.

### Paso 2. Implementación de validación en tiempo real
- Crear hook personalizado `useFormValidation.js` para validación.
- Implementar validación para todos los campos obligatorios.
- Agregar mensajes de error claros y útiles.
- Validar formatos específicos (nombre, descripción mínima, etc.).
- Mostrar indicadores visuales de campos válidos/inválidos.

### Paso 3. Configuración de categorías predefinidas
- Crear archivo `src/data/seedCategories.js` con categorías estándar.
- Implementar selector dropdown para categorías.
- Agregar categorías: cereales, legumbres, hortalizas, frutales, aromáticas, otros.
- Permitir búsqueda/filtro en el selector de categorías.
- Documentar sistema de categorías para futuras expansiones.

### Paso 4. Implementación de captura de imagen
- Crear componente `src/components/ui/ImageCapture.jsx`.
- Implementar acceso a cámara del dispositivo con `navigator.mediaDevices`.
- Agregar preview de imagen antes de confirmar.
- Implementar opción de rehacer foto si no gusta el resultado.
- Optimizar imagen (redimensionar, comprimir) antes de subir.

### Paso 5. Integración con Firebase Storage
- Configurar Firebase Storage en el proyecto.
- Crear servicio `src/services/imageService.js` para subida de imágenes.
- Implementar subida de imagen con progress indicator.
- Generar nombres únicos para archivos (timestamp + uuid).
- Manejar errores de subida y mostrar feedback apropiado.

### Paso 6. Integración con Firestore para guardar semillas
- Crear servicio `src/services/seedService.js` para operaciones CRUD.
- Implementar función para guardar semilla en Firestore.
- Usar el modelo de datos definido en el plan técnico.
- Agregar timestamps automáticos (`createdAt`, `updatedAt`).
- Incluir información del usuario propietario desde AuthContext.

### Paso 7. Soporte offline básico (MVP simplificado)
- Mostrar un aviso visible si el usuario no tiene conexión a internet (por ejemplo, un banner o mensaje en el formulario).
- No es necesario implementar guardado local ni sincronización offline en esta versión MVP.

### Paso 8. Feedback visual y estados de carga (MVP simplificado)
- Mostrar mensajes claros de éxito y error al registrar una semilla.
- Agregar un spinner de carga simple durante la subida de imagen y el guardado en Firebase.
- No es necesario implementar progress bar ni animaciones avanzadas.

### Paso 9. Componentes UI reutilizables (MVP simplificado)
- No es necesario refactorizar a componentes reutilizables en esta versión.
- Mantener el código del formulario en `AddSeedPage.jsx` para simplicidad y entrega rápida.

### Paso 10. Testing y optimización final (MVP simplificado)
- Realizar pruebas manuales básicas del formulario en desktop y móvil.
- Verificar que la validación, subida de imagen y guardado en Firebase funcionen correctamente.
- Revisar la experiencia de usuario (UX) en dispositivos móviles.

---

## 📋 Modelo de Datos Implementado

```javascript
const seedData = {
  id: "uuid-generado",                    // Generado automáticamente
  name: "Nombre de la semilla",           // Campo obligatorio
  variety: "Variedad específica",         // Campo opcional
  category: "cereales",                   // Selección obligatoria
  description: "Descripción detallada",   // Campo obligatorio
  location: "Ubicación general",          // Campo opcional
  imageUrl: "url-firebase-storage",       // Generado por upload
  ownerId: "firebase-user-uid",           // Desde AuthContext
  ownerName: "Nombre del usuario",        // Desde AuthContext
  ownerPhone: "numero-whatsapp",          // Campo opcional
  createdAt: "2025-07-02T...",           // Timestamp automático
  updatedAt: "2025-07-02T...",           // Timestamp automático
  isAvailableForExchange: true,           // Boolean, default true
  exchangeNotes: "Notas adicionales",     // Campo opcional
  syncStatus: "pending"                   // Para soporte offline
}
```

---

## ✅ Entregables del Bloque 5

- Formulario de registro completo y funcional en `AddSeedPage.jsx`
- Sistema de validación en tiempo real implementado
- Captura de imagen con preview funcional
- Integración completa con Firebase Storage y Firestore
- Soporte offline básico para registros
- Componentes UI reutilizables documentados
- Feedback visual y estados de carga optimizados
- Sistema de categorías predefinidas
- Testing completo de funcionalidad
- UX optimizada para dispositivos móviles

---

## 📋 Estructura de Archivos a Crear

```
src/
├── pages/
│   └── AddSeedPage.jsx              # Página principal (mejorada)
├── components/
│   ├── ui/
│   │   └── ImageCapture.jsx         # Captura de imagen
│   └── forms/
│       ├── FormField.jsx            # Campo de formulario reutilizable
│       ├── CategorySelector.jsx     # Selector de categorías
│       └── ToggleSwitch.jsx         # Switch para booleans
├── services/
│   ├── imageService.js              # Servicio para imágenes
│   └── seedService.js               # CRUD de semillas
├── hooks/
│   └── useFormValidation.js         # Hook de validación
├── data/
│   └── seedCategories.js            # Categorías predefinidas
└── utils/
    └── imageUtils.js                # Utilidades para imágenes
```

---

## 🔗 Dependencias Requeridas

**Del proyecto base:**
- `firebase` (Storage y Firestore)
- React hooks (useState, useEffect, useCallback)

**Nuevas dependencias a instalar:**
```bash
npm install uuid                     # Para generar IDs únicos
npm install react-image-crop         # Para crop de imágenes (opcional)
```

---

## 🎯 Criterios de Validación

Cada paso debe cumplir con:
- ✅ Funcionalidad implementada correctamente
- ✅ Integración exitosa con Firebase
- ✅ Soporte offline funcionando
- ✅ Validación de datos robusta
- ✅ UX optimizada para móviles
- ✅ Manejo de errores apropiado
- ✅ Feedback visual claro para el usuario
- ✅ Código limpio y documentado

---

## ⚠️ Consideraciones Importantes

- **Simplicidad primero**: Evitar multi-step forms complejos
- **Performance**: Optimizar imágenes antes de subir a Firebase
- **UX móvil**: Priorizar experiencia en dispositivos móviles
- **Offline-first**: Usar sistema del Bloque 4 para funcionalidad offline
- **Validación**: Asegurar datos consistentes antes de guardar
- **Accesibilidad**: Formulario accesible con labels apropiados

---

## 🔄 Integración con Bloques Anteriores

### Con Bloque 2 (Autenticación)
- Usar `AuthContext` para obtener datos del usuario
- Verificar autenticación antes de permitir registro
- Incluir `ownerId` y `ownerName` automáticamente

### Con Bloque 4 (Offline)
- Usar `useOffline` hook para detectar conectividad
- Implementar guardado offline con `saveOffline`
- Mostrar indicadores de estado de conexión

### Para Bloques Futuros
- Datos preparados para catálogo (Bloque 6)
- Estructura lista para intercambios (Bloque 7)
- Integración con perfil de usuario (Bloque 8)

---

**Nota:** Priorizar funcionalidad sobre diseño complejo. Cada paso debe ser probado antes de continuar al siguiente. Mantener el formulario simple pero completo.

---

🟢 **RECOMENDACIÓN OBJETIVA**
Para un MVP funcional y entregable rápido:
- Prioriza la validación de datos, el guardado en Firebase y la subida de imágenes (ya implementado).
- Asegura un feedback visual mínimo para que el usuario sepa si el registro fue exitoso o falló.
- Puedes posponer el soporte offline real y la refactorización a componentes reutilizables para futuras versiones.
