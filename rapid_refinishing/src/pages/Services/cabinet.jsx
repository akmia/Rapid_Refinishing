//src/pages/services/cabinet.jsx

import CabinetHero from "../../components/services/cabinet/CabinetHero";
import CabinetBenefits from "../../components/services/cabinet/CabinetBenefits";
import CabinetComparison from "../../components/services/cabinet/CabinetComparison";
import CabinetProcess from "../../components/services/cabinet/CabinetProcess";
import CabinetFAQ from "../../components/services/cabinet/CabinetFAQ";

export default function Cabinet() {
  return (
    <>
      <CabinetHero />
      <CabinetBenefits />
      <CabinetComparison />
      <CabinetProcess />
      <CabinetFAQ />
    </>
  );
}