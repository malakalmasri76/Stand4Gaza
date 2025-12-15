import React from 'react'
import { useTranslation } from "react-i18next";

const Features = () => {
    const { t } = useTranslation();


  const features = [
    { title: t("home.featuresTitle"), desc: t("home.featuresDesc") },
    { title: t("home.featuresTitle"), desc: t("home.featuresDesc") },
    { title: t("home.featuresTitle"), desc: t("home.featuresDesc") }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          {t("home.featuresTitle")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="border rounded p-6 text-center hover:shadow"
            >
              <h3 className="font-bold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features