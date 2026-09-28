/**
 * PORTFOLIO CONFIGURATION - YOGITHA CHALLA
 * 
 * Centralized configuration file for personal details, social links,
 * resume file path, and external certificate URLs.
 * Edit this file to update contact details or replace certificate links easily.
 */

const PORTFOLIO_CONFIG = {
  personal: {
    name: "Yogitha Challa",
    role: "Computer Science Engineering Student | Web Developer | Software Development Intern | UI/UX Enthusiast",
    headline: "Building Clean, Responsive & User-Friendly Digital Experiences",
    subheadline: "Computer Science Engineering student and Software Development Intern passionate about web development, UI/UX, and building user-friendly digital solutions.",
    email: "challayogitha8@gmail.com",
    linkedin: "https://www.linkedin.com/in/yogitha-challa",
    github: "https://github.com/challayogitha8-debug",
    location: "Andhra Pradesh, India",
    resumePath: "assets/resume/Yogitha_Challa_Resume.pdf",
    college: "Annamacharya Institute of Science and Technology, Tirupati",
    degree: "Bachelor of Technology – Computer Science Engineering",
    batch: "2024–2028",
    cgpa: "8.0 / 10 till 2-2"
  },

  // Certificate URLs extracted from your verified resume.
  // You can replace these with your own preferred URLs at any time:
  certificateUrls: {
    CERTIFICATE_URL_1: "https://1drv.ms/b/c/52f2047f67d2270e/IQDlzlUjxDcXRaVX_gDUvlw-AYpA8bosEfJpn7ojsgprBHQ?e=VIcORz",
    CERTIFICATE_URL_2: "https://1drv.ms/b/c/52f2047f67d2270e/IQCpgJsiAqdkSYldi56Bz1X-ASuOEhla92WTNcemq7gNr4Y?e=twxISN",
    CERTIFICATE_URL_3: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6a4676d1af220e4c45a50538_1783160586091_completion_certificate.pdf"
  }
};

// Export for module systems if used, or bind to global window
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_CONFIG;
}
