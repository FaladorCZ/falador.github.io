/* texts.js
   All textual content (CZ / EN) stored in one file for easy updates.
   Edit sentences, links, contact details, skills or add new fields here.
*/

const texts = {
  en: {
    meta: {
      name: "Jan Novák",
      title: "Senior SAP SD Consultant",
      footer: "© Jan Novák — SAP Consultant",
      linkedinUrl: "https://www.linkedin.com/in/jan-novak-sap",
      cvUrl: "#" // change to your CV URL or file path, e.g. "assets/Jan-Novak-CV.pdf"
    },

    heroTitle: "Senior SAP SD Consultant",

    // intro supports up to 6 sentences / paragraphs. Each string becomes its own <p>.
    intro: [
      "I help companies optimize order-to-cash processes in SAP S/4HANA.",
      "I focus on practical, results-oriented implementations that simplify daily work.",
      "My approach balances business and IT perspectives to ensure long-term value.",
      "I specialize in pricing, integration, and test automation with measurable outcomes.",
      "Clients appreciate clear communication, pragmatic roadmaps and reliable go-lives.",
      "Based in Prague — available for remote and hybrid cooperation."
    ],

    skills: [
      "S/4HANA Migration",
      "Pricing & Condition Technique",
      "Integration (IDoc/PI/PO)",
      "Test Management"
    ],

    cta: {
      hire: "Hire me",
      viewCV: "View CV",
      linkedin: "LinkedIn Profile",
      message: "Message",
      downloadCV: "Download CV"
    },

    availability: "Location: Prague · Available for remote & on-site",

    contactTitle: "Contact",
    contact: [
      { label: "Email", value: "jan.novak@email.cz", href: "mailto:jan.novak@email.cz" },
      { label: "Phone", value: "+420 123 456 789", href: "tel:+420123456789" },
      { label: "Address", value: "Prague, Czech Republic", href: "#" },
      { label: "VAT ID", value: "CZ12345678", href: "#" }
    ]
  },

  cz: {
    meta: {
      name: "Jan Novák",
      title: "Senior SAP SD Konzultant",
      footer: "© Jan Novák — SAP Konzultant",
      linkedinUrl: "https://www.linkedin.com/in/jan-novak-sap",
      cvUrl: "#" // change to your CZ CV link if needed
    },

    heroTitle: "Senior SAP SD Konzultant",

    intro: [
      "Pomáhám firmám optimalizovat procesy od objednávky až po inkaso v SAP S/4HANA.",
      "Zaměřuji se na praktická, rychlá a efektivní řešení, která zjednodušují každodenní práci.",
      "Mým cílem je propojit byznysový a IT pohled tak, aby vznikla dlouhodobá hodnota.",
      "Specializuji se na oblast cenotvorby, integrací a testovací automatizace se zaměřením na výsledky.",
      "Klienti oceňují strukturovanou komunikaci, pragmatické roadmapy a spolehlivé go-livy.",
      "Působím v Praze — k dispozici pro vzdálenou i kombinovanou spolupráci."
    ],

    skills: [
      "Migrace na S/4HANA",
      "Cenotvorba a Condition Technique",
      "Integrace (IDoc/PI/PO)",
      "Řízení testování"
    ],

    cta: {
      hire: "Najmout mě",
      viewCV: "Zobrazit CV",
      linkedin: "Profil na LinkedIn",
      message: "Zpráva",
      downloadCV: "Stáhnout CV"
    },

    availability: "Místo: Praha · K dispozici na dálku i na místě",

    contactTitle: "Kontakt",
    contact: [
      { label: "Email", value: "jan.novak@email.cz", href: "mailto:jan.novak@email.cz" },
      { label: "Telefon", value: "+420 123 456 789", href: "tel:+420123456789" },
      { label: "Adresa", value: "Praha, Česká republika", href: "#" },
      { label: "IČ DPH", value: "CZ12345678", href: "#" }
    ]
  }
};
