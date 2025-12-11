import NavigationLinks from "./NavigationLinks";

function Footer() {
  const year: number = new Date().getFullYear();
  return (
    <>
      <hr />
      <NavigationLinks />
      <footer>
        Copyright &copy; {year} Retrograde Interactive. All Rights Reserved.
      </footer>
    </>
  );
}

export default Footer;
