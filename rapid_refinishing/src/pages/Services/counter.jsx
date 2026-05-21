//src/pages/Services/counter.jsx
import CounterHero from "../../components/services/counter/CounterHero";
import CounterBenefits from "../../components/services/counter/CounterBenefits";
import CounterComparison from "../../components/services/counter/CounterComparison";
import CounterFAQ from "../../components/services/counter/CounterFAQ";

export default function Counter() {
  return (
    <>
      <CounterHero />
      <CounterBenefits />
      <CounterComparison />
      <CounterFAQ />
    </>
  );
}