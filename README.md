# 🛒 Shopping List App

Eine moderne **Full-Stack Shopping-List-Anwendung** mit **React + TypeScript** im Frontend und **Express + MongoDB** im Backend.

> 🎯 Fokus auf Clean Architecture, Feature-based Struktur und Type Safety – ohne Overengineering.

---

## 📋 Inhaltsverzeichnis

- [Überblick](#-überblick)
- [Tech Stack](#-tech-stack)
- [Voraussetzungen](#-voraussetzungen)
- [MongoDB Installation](#️-mongodb-installation)
- [Installation](#-installation)
- [Projektstruktur](#-projektstruktur)
- [API Dokumentation](#-api-dokumentation)
- [Architektur](#️-architektur)
- [Development](#️-development)
- [Troubleshooting](#-troubleshooting)
- [Lizenz](#-lizenz)

---

## 🎯 Überblick

Eine einfache, aber sauber strukturierte CRUD-Anwendung für Einkaufslisten.

### ✨ Features

- ✅ Items erstellen, anzeigen, aktualisieren & löschen
- ✅ Items als „gekauft" markieren
- ✅ Feature-basierte Architektur
- ✅ TypeScript End-to-End
- ✅ Saubere Trennung von UI, State & API

---

## 🚀 Tech Stack

### Frontend

- **React 18** + TypeScript
- **Vite** – Build Tool & Dev Server
- **Zustand** – State Management
- **Axios** – HTTP Client
- **Tailwind CSS v4**
- **shadcn/ui**

### Backend

- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB**
- **Mongoose**

---

## 📦 Voraussetzungen

- Node.js v16+
- MongoDB
- npm oder yarn

---

## 🗄️ MongoDB Installation

### Windows

1. [MongoDB Community Server](https://www.mongodb.com/try/download/community) herunterladen
2. Mit Standard-Einstellungen installieren
3. MongoDB als Service starten

### macOS

```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

### Linux (Ubuntu / Debian)

```bash
sudo apt-get install -y mongodb
sudo systemctl start mongodb
sudo systemctl enable mongodb
```

### Verbindung testen

```bash
mongosh
# oder
mongo
```

---

## 🔧 Installation

### 1. Repository klonen

```bash
git clone <repository-url>
cd shopping-list-app
```

### 2. Backend Setup

```bash
cd backend
npm install
```

#### `.env` Datei erstellen

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/shopping-list
```

#### Backend starten

```bash
npm run dev
```

**Erfolgreich, wenn:**

```
✅ MongoDB verbunden
🚀 Server läuft auf http://localhost:5000
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

#### `.env` Datei erstellen

```env
VITE_API_URL=http://localhost:5000
```

#### Frontend starten

```bash
npm run dev
```

**App läuft unter:**

```
http://localhost:5173
```

---

## 📁 Projektstruktur

### Frontend

```
frontend/
├── src/
│   ├── app/
│   ├── features/
│   │   └── shopping/
│   │       ├── pages/
│   │       ├── components/
│   │       ├── store/
│   │       ├── api/
│   │       └── types.ts
│   ├── shared/
│   ├── components/ui/
│   ├── lib/
│   ├── main.tsx
│   └── index.css
├── .env
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

### Backend

```
backend/
├── src/
│   ├── controllers/
│   │   └── itemController.ts
│   ├── models/
│   │   └── ShoppingItem.ts
│   ├── routes/
│   │   └── items.ts
│   └── server.ts
├── .env
├── package.json
└── tsconfig.json
```

---

## 📡 API Dokumentation

### Base URL

```
http://localhost:5000
```

### Endpoints

| Methode | Endpoint       | Beschreibung              |
|---------|----------------|---------------------------|
| GET     | `/items`       | Alle Items abrufen        |
| POST    | `/items`       | Neues Item erstellen      |
| PUT     | `/items/:id`   | Item Status aktualisieren |
| DELETE  | `/items/:id`   | Item löschen              |

### Beispiel Requests

#### Alle Items abrufen

```bash
curl http://localhost:5000/items
```

#### Neues Item erstellen

```bash
curl -X POST http://localhost:5000/items \
  -H "Content-Type: application/json" \
  -d '{"name":"Milch"}'
```

#### Item aktualisieren

```bash
curl -X PUT http://localhost:5000/items/<id> \
  -H "Content-Type: application/json" \
  -d '{"bought": true}'
```

#### Item löschen

```bash
curl -X DELETE http://localhost:5000/items/<id>
```

### Response Format

**Success Response:**

```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Milch",
    "bought": false,
    "createdAt": "2026-01-08T10:30:00.000Z"
  }
]
```

**Error Response:**

```json
{
  "error": "Item nicht gefunden"
}
```

---

## 🏗️ Architektur

### Frontend Prinzipien

**Feature-First Struktur:**

```
api/        → HTTP (GET / POST / PUT / DELETE)
store/      → Zustand + Logik
components/ → UI
pages/      → Feature-Zusammenführung
```

- Keine API-Calls im UI
- Zustand für State & Business-Logik
- Saubere Separation of Concerns

### Backend Prinzipien

- MVC Pattern
- Separation of Concerns
- RESTful API
- TypeScript strict mode
- Try-Catch Error Handling

### Datenmodell

```typescript
interface ShoppingItem {
  _id: ObjectId;
  name: string;
  bought: boolean;
  createdAt: Date;
}
```

---

## 🛠️ Development

### Frontend Scripts

```bash
npm run dev      # Dev Server starten
npm run build    # Production Build
npm run preview  # Build Preview
npm run lint     # Code Linting
```

### Backend Scripts

```bash
npm run dev      # Dev Server starten
npm run build    # TypeScript kompilieren
npm start        # Production Server
```

---

## 🐛 Troubleshooting

### MongoDB Verbindungsfehler

```bash
# Verbindung testen
mongosh

# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongodb
```

### Port bereits belegt

```bash
# Prozess beenden
lsof -ti:5000 | xargs kill
```

**Oder Port ändern:**

```env
PORT=5001
```

### CORS Fehler

In `backend/src/server.ts`:

```typescript
app.use(cors({
  origin: 'http://localhost:5173'
}));
```

---

## 🧪 API testen

- **cURL** (siehe [API Dokumentation](#-api-dokumentation))
- **Postman**
- **VS Code REST Client**

---

## 📄 Lizenz

MIT License

---

**Made with ❤️ using React, TypeScript & MongoDB**
