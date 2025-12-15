import React from 'react'
import { useTranslation } from "react-i18next";


const Hero = () => {
   const { t } = useTranslation();
  return (
    <section className="bg-gray-50 py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        {t("home.heroTitle")}
      </h1>

      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        {t("home.heroDesc")}
      </p>

      <div className="flex justify-center gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded">
          {t("home.searchFreelancer")}
        </button>
        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded">
          {t("home.postProject")}
        </button>
      </div>
    </section>
  )
}

export default Hero