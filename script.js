// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Language Data
const translations = {
    en: {
        home: "Home",
        services: "Services",
        about: "About Us",
        contact: "Contact",
        welcome: "Welcome to Our Cleaning Service",
        intro: "We make your home sparkle with professional cleaning!",
        our_services: "Our Services",
        house_cleaning: "House Cleaning",
        deep_cleaning: "Deep Cleaning",
        office_cleaning: "Office Cleaning",
        carpet_cleaning: "Carpet & Sofa Cleaning",
        about_us: "About Us",
        about_text: "We are a professional cleaning service dedicated to making homes and offices shine.",
        contact_us: "Contact Us",
        email: "Email: contact@cleanhome.com",
        phone: "Phone: +123 456 7890",
        footer: "© 2025 Home Cleaning Services. All Rights Reserved."
    },
    es: {
        home: "Inicio",
        services: "Servicios",
        about: "Nosotros",
        contact: "Contacto",
        welcome: "Bienvenido a nuestro servicio de limpieza",
        intro: "¡Hacemos que tu hogar brille con limpieza profesional!",
        our_services: "Nuestros Servicios",
        house_cleaning: "Limpieza del Hogar",
        deep_cleaning: "Limpieza Profunda",
        office_cleaning: "Limpieza de Oficina",
        carpet_cleaning: "Limpieza de Alfombras y Sofás",
        about_us: "Sobre Nosotros",
        about_text: "Somos un servicio de limpieza profesional dedicado a hacer que los hogares y oficinas brillen.",
        contact_us: "Contáctanos",
        email: "Correo Electrónico: contact@cleanhome.com",
        phone: "Teléfono: +123 456 7890",
        footer: "© 2025 Servicios de Limpieza del Hogar. Todos los derechos reservados."
    }
};

// Function to switch language
function switchLanguage(lang) {
    document.querySelectorAll(".lang").forEach(element => {
        const key = element.getAttribute("key");
        element.textContent = translations[lang][key];
    });
}
