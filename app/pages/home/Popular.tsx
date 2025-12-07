import Card from "~/components/Card";
import Title from "~/components/Title";

function Popular() {
  return (
    <div>
      <Title title="Popular" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <Card
          productID={1}
          name="Golden Ball"
          price={320}
          imageUrl="/goldenBall.png"
          quantity={10}
        />
        <Card
          productID={1}
          name="Golden Ball"
          price={320}
          imageUrl="/goldenBall.png"
          quantity={10}
        />
        <Card
          productID={1}
          name="Golden Ball"
          price={320}
          imageUrl="/goldenBall.png"
          quantity={10}
        />
        <Card
          productID={1}
          name="Golden Ball"
          price={320}
          imageUrl="/goldenBall.png"
          quantity={10}
        />
      </div>
    </div>
  );
}

export default Popular;
