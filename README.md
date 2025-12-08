# Advitya 2026

Official Website for **Advitya 2026**, the annual techno-cultural fest of **VIT Bhopal University**.

## Tech Stack

- **React 19** 
- **Tailwind CSS**

## Project Structure

```
src/
├── components/          # Global components
│   ├── Header.jsx      # Site-wide header/navigation
│   ├── Footer.jsx      # Site-wide footer
│   ├── Home/           # Home page specific components
│   ├── Events/         # Events page specific components
│   ├── Dashboard/      # Dashboard page specific components
│   ├── SignupLogin/    # Login/Signup page specific components
│   ├── Team/           # Team page specific components
│   └── Sponsor/        # Sponsor page specific components
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── Events.jsx      # Events listing page
│   ├── Dashboard.jsx   # User dashboard
│   ├── SignupLogin.jsx # Authentication page
│   ├── Team.jsx        # Team members page
│   └── Sponsor.jsx     # Sponsors page
├── App.jsx             # Main app component with routing
├── main.jsx            # Application entry point
└── index.css           # Global styles & custom CSS
```

## Component Organization

### Global Components (`components/`)
Place components that are used across multiple pages directly in the `components/` directory:
- Header
- Footer
- Shared UI components (buttons, modals, etc.)

### Page-Specific Components (`components/[PageName]/`)
Place components specific to a particular page in their respective subdirectories:
- `components/Home/` - Hero sections, feature cards, etc.
- `components/Events/` - Event cards, filters, etc.
- `components/Dashboard/` - Stats widgets, user info, etc.
- `components/SignupLogin/` - Forms, auth components, etc.
- `components/Team/` - Team member cards, etc.
- `components/Sponsor/` - Sponsor logos, tiers, etc.

## Styling Guidelines

### Tailwind CSS
This project uses Tailwind CSS for styling. Use utility classes directly in your JSX:

```jsx
<div className="flex items-center justify-center bg-gray-500 p-4">
  <h1 className="text-2xl font-bold">Advitya 2026</h1>
</div>
```

### Custom CSS (`index.css`)
For custom styles that can't be achieved with Tailwind utilities, add them to `index.css` under the appropriate section:

```css
/* ============================================
   HOME PAGE STYLES
   ============================================ */

/* ============================================
   EVENTS PAGE STYLES
   ============================================ */

/* ... and so on */
```

**Important**: Always organize custom CSS by page section in `index.css`. Do not create separate CSS files.

## Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Landing page |
| `/events` | Events | Events listing |
| `/dashboard` | Dashboard | User dashboard |
| `/login` | SignupLogin | Authentication |
| `/team` | Team | Team members |
| `/sponsor` | Sponsor | Sponsors |

## Development

### Install Dependencies
```bash
npm install
```

### Start Dev Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm preview
```

### Lint Code
```bash
npm run lint
```

## Contributing

1. Create page-specific components in their respective `components/[PageName]/` directories
2. Use Tailwind utility classes for styling
3. Add custom CSS only when necessary in `index.css` under the appropriate page section
4. Follow the existing component structure and naming conventions
5. Test your changes locally before committing

---

**Advitya 2026** 
