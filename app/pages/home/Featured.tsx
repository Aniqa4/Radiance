import Card from "~/components/Card";
import Title from "~/components/Title";

function Featured() {
  return (
    <div>
      <Title title="Featured" />
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

export default Featured;
