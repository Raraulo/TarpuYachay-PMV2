# BLOQUE 5 - REGISTRO DE SEMILLAS (PMV2)

**Fecha de finalización:** 2 de julio de 2025  
**Proyecto:** Tarpu Yachay PMV2

---

## 📋 Resumen General

Este documento detalla la implementación, validación y entregables del Bloque 5: Registro de Semillas, siguiendo un enfoque MVP funcional, simple y entregable.

---

## 1. Objetivo del Bloque 5

- Permitir a los usuarios registrar nuevas semillas en la plataforma, incluyendo datos básicos, categoría, imagen y disponibilidad para intercambio.
- Integrar el registro con Firebase Storage (imágenes) y Firestore (datos).
- Garantizar validación, feedback visual y experiencia móvil adecuada.

---

## 2. Pasos Implementados y Validación

### ✅ Paso 1-3: Formulario y Categorías
- Formulario completo en `AddSeedPage.jsx`.
- Selector de categorías predefinidas con búsqueda y validación.
- Validación en tiempo real de todos los campos requeridos.

### ✅ Paso 4: Captura de Imagen
- Componente `ImageCapture.jsx` para capturar imagen desde cámara.
- Preview, rehacer foto, optimización (redimensionar y comprimir).
- Integración directa en el formulario.

### ✅ Paso 5: Integración con Firebase Storage
- Servicio `imageService.js` para subida de imágenes con nombres únicos.
- Subida de imagen optimizada y obtención de URL pública.
- Manejo de errores y feedback en la UI.

### ✅ Paso 6: Integración con Firestore
- Servicio `seedService.js` para guardar semillas en Firestore.
- Modelo de datos completo según plan técnico.
- Timestamps automáticos (`createdAt`, `updatedAt`).
- Propietario desde AuthContext.
- Validación de datos y manejo de errores.

### ✅ Paso 7: Soporte Offline Básico (MVP)
- Aviso visible si el usuario no tiene conexión (banner amarillo).
- No se implementó guardado local ni sincronización offline.

### ✅ Paso 8: Feedback Visual y Estados de Carga (MVP)
- Mensajes claros de éxito y error al registrar semilla.
- Spinner de carga simple durante subida y guardado.
- Sin progress bar ni animaciones avanzadas.

### ✅ Paso 9: Componentes UI Reutilizables (MVP)
- No se refactorizó a componentes reutilizables para acelerar entrega.
- Todo el código del formulario se mantiene en `AddSeedPage.jsx`.

### ✅ Paso 10: Testing y Optimización Final (MVP)
- Pruebas manuales en desktop y móvil.
- Validación de subida de imagen, guardado en Firebase y experiencia UX.

---

## 3. Entregables del Bloque 5

- Formulario de registro funcional (`AddSeedPage.jsx`).
- Validación en tiempo real y feedback visual.
- Captura y subida de imagen a Firebase Storage.
- Guardado de datos en Firestore con modelo completo.
- Aviso de estado offline.
- UX optimizada para móvil.
- Documentación técnica y de validación.

---

## 4. Pruebas Manuales Realizadas

- Registro de semilla con todos los campos y foto.
- Prueba de validación de campos obligatorios y errores.
- Prueba de subida de imagen y verificación en Firebase Storage.
- Prueba de guardado en Firestore y verificación de datos.
- Prueba de feedback visual (mensajes y spinner).
- Prueba de aviso offline (desconectando red).
- Prueba en dispositivos móviles y desktop.

---

## 5. Estado Final

**Bloque 5 COMPLETADO.**  
El sistema de registro de semillas cumple con los requisitos funcionales, de validación, integración con Firebase y experiencia mínima de usuario para un MVP.

---

## 6. Recomendaciones Futuras

- Mejorar soporte offline real (guardado local y sincronización).
- Refactorizar a componentes reutilizables si se escala el proyecto.
- Agregar animaciones y feedback avanzado para mejor UX.
- Automatizar pruebas de integración.

---

**Responsable de validación:** Saul Tapia

**Documentación generada por:** GitHub Copilot
