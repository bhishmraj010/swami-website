# Swami Foundation Website

A professional 3-page website (Home, About, Contact) built with **React** and integrated with **Firebase Firestore** for the contact form.

---

## 🗂️ Project Structure

```
swami-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        ← Sticky responsive navbar
│   │   ├── Navbar.css
│   │   ├── Footer.jsx        ← Site-wide footer
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx          ← Hero, Stats, Services, About Preview, CTA
│   │   ├── Home.css
│   │   ├── About.jsx         ← Mission, Story, Timeline, Values, Team
│   │   ├── About.css
│   │   ├── Contact.jsx       ← Firebase-connected contact form
│   │   └── Contact.css
│   ├── firebase/
│   │   ├── firebaseConfig.js ← Firebase initialization
│   │   └── services.js       ← Firestore write functions
│   ├── styles/
│   │   └── global.css        ← Design tokens, typography, utilities
│   ├── App.js                ← Router setup
│   └── index.js              ← React entry point
├── .env.example              ← Firebase env template
├── .env.local                ← Your actual credentials (DO NOT COMMIT)
└── package.json
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (or use existing)
3. Click **Add App → Web App**
4. Copy your config object

### 3. Configure Environment Variables
```bash
cp .env.example .env.local
```
Fill in your Firebase credentials in `.env.local`.

**Then update `src/firebase/firebaseConfig.js`** with your actual values (or switch it to use `process.env.REACT_APP_*` variables).

### 4. Enable Firestore
- In Firebase Console → Firestore Database → Create database
- Start in **Test mode** (for development)
- Set rules for production later

### 5. Run the Project
```bash
npm start
```

---

## 🔥 Firebase Integration

Contact form submissions are saved to Firestore under the **`contacts`** collection with this structure:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "subject": "volunteer",
  "message": "I'd love to help...",
  "createdAt": "<server timestamp>",
  "status": "unread"
}
```

You can view submissions in Firebase Console → Firestore → contacts.

---

## 🚢 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Build & Deploy
vercel --prod
```

Add your Firebase environment variables in Vercel Dashboard → Project Settings → Environment Variables.

---

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | Frontend framework |
| React Router v6 | Client-side routing |
| Firebase 10 | Firestore backend |
| CSS (custom) | Styling (no Tailwind/Bootstrap) |

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Color | `#1A3C5E` (Deep Navy) |
| Accent Color | `#D4A853` (Warm Gold) |
| Background | `#F8F6F1` (Warm Off-white) |
| Display Font | Playfair Display |
| Body Font | Inter |
