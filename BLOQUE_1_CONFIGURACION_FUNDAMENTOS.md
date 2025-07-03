# Bloque 1: Configuración y Fundamentos

**Objetivo:** Establecer la base técnica sólida del proyecto Tarpu Yachay PMV2 como PWA moderna, escalable y lista para desarrollo funcional.

---

## 🗂️ Pasos Secuenciales del Bloque 1

### Paso 1. Creación del repositorio y carpeta base
- Crear un nuevo repositorio Git (local o remoto) para el PMV2.
- Crear la carpeta raíz del proyecto (ejemplo: `tarpu-yachay-pmv2`).
- Inicializar el repositorio con un archivo `README.md` y un `.gitignore` adecuado para Node/React.

### Paso 2. Inicialización del proyecto con Vite + React
- Ejecutar el comando para crear un nuevo proyecto con Vite y plantilla React.
- Elegir configuración JavaScript o TypeScript según preferencia del equipo.
- Verificar que el proyecto arranque correctamente en modo desarrollo (`npm run dev`).

### Paso 3. Estructura de carpetas y organización inicial
- Crear la estructura de carpetas base recomendada (src, public, assets, components, pages, etc.).
- Documentar la estructura en el `README.md` o en un archivo `ESTRUCTURA.md`.

### Paso 4. Instalación de dependencias esenciales
- Instalar las dependencias principales:
  - `react-router-dom` (navegación)
  - `firebase` (backend)
  - `@vitejs/plugin-pwa` (PWA)
- Instalar dependencias de desarrollo:
  - `eslint`, `prettier`, y sus plugins para React

### Paso 5. Configuración de ESLint y Prettier
- Configurar ESLint para mantener calidad de código.
- Configurar Prettier para formateo automático.
- Añadir scripts en `package.json` para lint y format.

### Paso 6. Configuración inicial de PWA
- Instalar y configurar el plugin `@vitejs/plugin-pwa`.
- Crear y documentar el archivo `manifest.json`.
- Añadir íconos mínimos requeridos para la PWA.
- Verificar que la app sea instalable en navegador.

### Paso 7. Configuración básica de Service Worker
- Generar el Service Worker básico con el plugin PWA.
- Documentar su función y cómo se actualiza.
- Probar el funcionamiento offline básico (caché de recursos).

### Paso 8. Configuración de Firebase
- Crear o reutilizar el proyecto en Firebase Console.
- Obtener y documentar las credenciales de configuración.
- Añadir archivo de configuración (`firebase-config.js` o `.ts`).
- Documentar buenas prácticas para no exponer claves sensibles.

### Paso 9. Variables de entorno y seguridad
- Crear archivo `.env` para variables sensibles (API keys, etc.).
- Documentar el uso de variables de entorno en el proyecto.
- Añadir `.env` al `.gitignore`.

### Paso 10. Prueba de integración y validación ✅ COMPLETADO
- ✅ Ejecutar la app en modo desarrollo y producción.
- ✅ Verificar que la PWA es instalable y funciona offline.
- ✅ Verificar que la conexión a Firebase es exitosa.
- ✅ Documentar problemas encontrados y cómo resolverlos.

**Resultados:** Ver archivo `docs/PASO_10_RESULTADOS.md` para detalles completos de las pruebas.

---

## ✅ Entregables del Bloque 1
- Proyecto base funcional con Vite + React
- Estructura de carpetas implementada y documentada
- ESLint y Prettier configurados
- PWA básica instalable
- Service Worker y manifest configurados
- Firebase conectado y listo para uso
- Variables de entorno seguras
- Documentación clara de cada paso
- **Documentación organizada en carpeta `docs/`** ✨

---

**Nota:** Cada paso debe ser validado y documentado antes de avanzar al siguiente. Si surge algún inconveniente, documentar el problema y su solución para referencia futura.
