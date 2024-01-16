import Hero from "@/presentationals/Hero/Hero";
import { saveAs } from "file-saver";

const HeroContainer = () => {
  const handleDownloadCV = () => {
    saveAs(
      "https://thinoapp.github.io/PORTFOLIO/assets/pdf/CV.pdf",
      "RAKOTOMALALA_THINO.pdf"
    );
  };

  const handleHireMeClick = () => {
    window.location.href = "mailto:rakotomalalathino@gmail.com";
  };

  const contactMeFromWhatsapp = () => {
    // Remplacez 1234567890 par votre numéro de téléphone avec le code pays
    // et encodez le message que vous souhaitez envoyer
    const phoneNumber = "+261341435018";
    const message = encodeURIComponent(
      "Bonjour, je suis intéressé(e) par vos services. Pouvez-vous me contacter ?"
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Ouvre WhatsApp dans une nouvelle fenêtre/onglet ou dans l'app pour les appareils mobiles
    window.open(whatsappUrl, "_blank");
  };
  return (
    <>
      <Hero
        handleDownloadCV={handleDownloadCV}
        handleHireMeClick={handleHireMeClick}
        contactMeFromWhatsapp={contactMeFromWhatsapp}
      />
    </>
  );
};

export default HeroContainer;
