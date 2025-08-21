// Fallback local si le JSON distant n'est pas accessible
const siteConfig = {
  profile: {
    fullName: "Assanvo Brou Antoine",
    role: "Ingénieur Logiciel",
    birthdate: "1999-03-18",
    avatar: "/images/Assanvo.png",           // place une copie dans public/images si tu veux
    cover: "/images/couverture.jpg"          // idem
  },
  contact: {
    phone: "+225 07 88 33 98 82",
    email: "brouantoineassanvo@gmail.com",
    formEmail: "brouantoineassanvo@gmail.com" // utilisé pour formsubmit
  },
  copy: {
    heroBubbleTitle: ["Ingénieur Logiciel", "Développeur Fullstack"],
    heroBubbleSubtitle: "Passion pour l'innovation et détermination sans faille"
  },
  experiences: [
    { title: "Consultant", date: "2024 - Présent", description: "Consultant du logiciel DPI chez Winlogic." },
    { title: "Développeur Fullstack", date: "2022 - 2023", description: "Sites & apps web avec Django REST et React (freelance)." }
  ],
  services: [
    { emoji: "📝", title: "Création de blog perso", short: "Mettez en avant votre activité.", points: ["Stratégie contenu & SEO", "CMS léger, ultra-rapide", "Newsletter & analytics"] },
    { emoji: "💻", title: "Création de sites web", short: "Sites vitrines modernes et rapides.", points: ["Next.js / React", "SEO & accessibilité", "Design 100% responsive"] },
    { emoji: "🧩", title: "Applications web", short: "Apps sur mesure connectées à vos données.", points: ["API REST/GraphQL", "Auth & rôles", "Dashboards dynamiques"] },
    { emoji: "🛒", title: "Logiciels e-commerce", short: "Boutiques performantes et scalables.", points: ["Marketplace", "Paiements (Wave, OM, Moov)", "Suivi commandes & stocks"] },
    { emoji: "⚙️", title: "Logiciels de gestion", short: "Gagnez en productivité.", points: ["CRM/ERP léger", "Automatisations WhatsApp", "Reporting & exports"] }
  ],
  socials: {
    facebook: "https://facebook.com/zen4tech",
    whatsapp: "https://wa.me/2250788339882",
    email: "mailto:brouantoineassanvo@gmail.com"
  },
  projects: [
    {
      id: 1, title: "Marketplace E-commerce",
      description: "Plateforme permettant aux e-commerçants de créer leurs boutiques.",
      technologies: ["React","Node.js","PostgreSQL"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1470&auto=format",
      link: "https://www.yatou.ci", isExternal: true, status: "completed"
    },
    {
      id: 2, title: "Plateforme Educative",
      description: "Réunit enseignants et étudiants avec recherche avancée.",
      technologies: ["React","DRF","Django","PostgreSQL"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format",
      link: "#", isExternal: false, status: "in-progress"
    }
  ],
  cv: {
    url: "/docs/cv.pdf",   // place une copie dans public/docs/cv.pdf OU mets une URL GitHub raw
    fileName: "CV-Assanvo-Brou-Antoine.pdf"
  }
};

export default siteConfig;
