import React from 'react'
import { useTranslation } from "react-i18next";


const HowItWorks = () => {
    const stepsKeys = [
  { title: "step1Title", desc: "step1Desc" },
  { title: "step2Title", desc: "step2Desc" },
  { title: "step3Title", desc: "step3Desc" }
];
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          {t("home.howItWorksTitle")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {stepsKeys.map((step, i) => (
            <div key={i} className="text-center p-6 border rounded">
              <h3 className="font-bold mb-2">{t(`home.${step.title}`)}</h3>
              <p className="text-gray-600">{t(`home.${step.desc}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks