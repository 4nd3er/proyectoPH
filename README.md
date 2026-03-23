# SensorDB — Dashboard de Sensores con Astro + Firebase

Panel en tiempo real que lee el nodo `/sensores` de **Firebase Realtime Database**
y genera automáticamente una gráfica de líneas por cada sensor encontrado.

---

## Estructura esperada en Firebase

El dashboard es **genérico**: entiende varias estructuras posibles. Ejemplo típico:

```
sensores/
  sensor_temperatura/
    nombre: "Temperatura Sala"
    unidad: "°C"
    datos/
      -Nxxxxxx1: { timestamp: 1700000000, valor: 23.5, unidad: "°C" }
      -Nxxxxxx2: { timestamp: 1700000060, valor: 24.1, unidad: "°C" }
  sensor_humedad/
    datos/
      -Nxxxxxx3: { timestamp: 1700000000, valor: 65, unidad: "%" }
  sensor_presion/
    1700000000: 1013
    1700000060: 1014
```

También soporta arrays, objetos epoch→número, y valores escalares directos.

---

## Instalación

```bash
# 1. Instala dependencias
npm install

# 2. Copia el archivo de entorno
cp .env.example .env

# 3. Edita .env con tus credenciales de Firebase
#    (Firebase Console → Configuración → Tus apps → SDK de configuración)
nano .env

# 4. Inicia el servidor de desarrollo
npm run dev
```

Luego abre http://localhost:4321

---

## Variables de entorno (.env)

| Variable | Descripción |
|---|---|
| `PUBLIC_FIREBASE_API_KEY` | API Key de Firebase |
| `PUBLIC_FIREBASE_AUTH_DOMAIN` | Auth domain del proyecto |
| `PUBLIC_FIREBASE_DATABASE_URL` | URL de la Realtime Database |
| `PUBLIC_FIREBASE_PROJECT_ID` | ID del proyecto |
| `PUBLIC_FIREBASE_STORAGE_BUCKET` | Storage bucket |
| `PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Sender ID |
| `PUBLIC_FIREBASE_APP_ID` | App ID |
| `PUBLIC_SENSORS_PATH` | Ruta raíz en RTDB (default: `sensores`) |

---

## Build para producción

```bash
npm run build    # genera dist/
npm run preview  # previsualiza el build
```

Para desplegar el contenido de `dist/` en Firebase Hosting, Vercel, Netlify, etc.

---

## Reglas de seguridad recomendadas (Firebase RTDB)

Para desarrollo:
```json
{
  "rules": {
    ".read": true,
    ".write": false
  }
}
```

Para producción, restringe a usuarios autenticados o por IP.

---

## Tecnologías

- **Astro 4** — generación estática
- **Firebase JS SDK v11** — Realtime Database con `onValue` listener
- **Chart.js 4** — gráficas de líneas adaptativas
- **Syne + JetBrains Mono** — tipografía

---

## Funcionalidades

- ✅ Actualización en tiempo real (WebSocket via Firebase)
- ✅ Gráfica de líneas por sensor (últimos 50 puntos)
- ✅ Tabla de lecturas recientes por sensor
- ✅ Valor más reciente prominente en cada tarjeta
- ✅ Paleta de colores automática por sensor
- ✅ Metadatos del sensor (nombre, unidad, tipo, etc.)
- ✅ Contador global de sensores y lecturas
- ✅ Badge de estado de conexión
- ✅ Responsive: móvil y escritorio
