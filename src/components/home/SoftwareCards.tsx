import Card from "./Card";

function SoftwareCards() {
  const mobileIcons = ["assets/apple-logo.png", "assets/android-logo.png"];
  return (
    <>
      <div className="row">
        <Card
          title="Operator"
          description="An original math puzzle game with procedurally generated levels"
          link="/#/operator"
          newTab
          image="assets/operator.png"
          icons={mobileIcons}
        />
      </div>
    </>
  );
}

export default SoftwareCards;
