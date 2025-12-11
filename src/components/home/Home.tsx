import Footer from "../Footer";
import SoftwareCards from "./SoftwareCards";

function Home() {
  const bannerImage = "assets/retrograde-banner.png";
  document.title = "Retrograde Interactive";
  var isDarkMode =
    window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  var logoImgSrc = isDarkMode
    ? "assets/retrograde-logo-dark.png"
    : "assets/retrograde-logo-light.png";

  document
    .querySelectorAll("meta[property=og\\:image]")[0]
    .setAttribute("content", bannerImage);
  document
    .querySelectorAll("meta[property=og\\:title]")[0]
    .setAttribute("content", document.title);

  return (
    <>
      <h1>{document.title}</h1>
      <h2 className="subtitle">Software Company</h2>
      <img src={logoImgSrc} width={250} className="centered-image" />
      <p>
        Retrograde Interactive is a video game and entertainment company founded
        in 2025. We aim to provide the best in digital entertainment to our
        users, because we like to create games that we want to play. For more
        information on our games, see the Games section below.
      </p>
      <h2 style={{ marginLeft: 10 }}>Games</h2>
      <SoftwareCards />
      <Footer />
    </>
  );
}

export default Home;
