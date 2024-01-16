import Header from "@/presentationals/Header/Header";

const HeaderContainer = () => {
  const handleSendMail = () => {
    window.location.href = "mailto:rakotomalalathino@gmail.com";
  };
  return (
    <>
      <Header handleSendMail={handleSendMail} />
    </>
  );
};

export default HeaderContainer;
