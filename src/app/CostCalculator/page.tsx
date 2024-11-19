import CostCalculator from "@/components/CostCalculator/CostCalculator";

export const metadata = {
  title: "SaintCLD | Cost Calculator",
  description: "Estimate the cost of your project with our cost calculator.",
};

const CostCalculatorPage = () => {
  return (
    <div className="container mx-auto">
      <CostCalculator />
    </div>
  );
};

export default CostCalculatorPage;
