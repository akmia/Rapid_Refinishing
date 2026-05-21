// src/pages/Services/bathtub.jsx
import BathtubHero from "../../components/services/bathtub/BathtubHero";
import BathtubBenefits from "../../components/services/bathtub/BathtubBenefits";
import BathtubProcess from "../../components/services/bathtub/BathtubProcess";
import BathtubComparison from "../../components/services/bathtub/BathtubComparison";
import BathtubFAQ from "../../components/services/bathtub/BathtubFAQ";


export default function Bathtub() {
  return (
    <>
      <BathtubHero />
      <BathtubBenefits />
      <BathtubProcess />
      <BathtubComparison />
      <BathtubFAQ />
    </>
  );
}

