import Footer from "@/presentationals/Footer/Footer";
import { useState } from "react";

const FooterContainer = () => {
  const [emailBody, setEmailBody] = useState("");

  const handleEmailBodyChange = (value: string) => {
    setEmailBody(value);
  };

  const handleSendMail = () => {
    window.location.href = `mailto:rakotomalalathino@gmail.com?subject=Need you&body=${encodeURIComponent(
      emailBody
    )}`;
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
      <Footer
        handleEmailBodyChange={handleEmailBodyChange}
        handleSendMail={handleSendMail}
        contactMeFromWhatsapp={contactMeFromWhatsapp}
      />
    </>
  );
};

export default FooterContainer;
