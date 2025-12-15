import React from 'react'
import { useTranslation } from "react-i18next";


const CTA = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-blue-600 py-16 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">{t("home.ctaTitle")}</h2>
        <p className="mb-8">{t("home.ctaDesc")}</p>

        <div className="flex justify-center gap-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded font-semibold">
            {t("home.choosePlan")}
          </button>

          <button className="border border-white px-6 py-3 rounded">
            {t("home.postProject")}
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA