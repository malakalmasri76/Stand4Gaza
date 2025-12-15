import React from 'react'
import { useTranslation } from "react-i18next";

const PricingPreview = () => {
   const { t, i18n } = useTranslation();

  const plans = [
    {
      name: i18n.language === "ar" ? "أساسي" : "Basic",
      price: i18n.language === "ar" ? "مجاني" : "Free",
      features: i18n.language === "ar"
        ? ["تصفح المشاريع", "التواصل مع العملاء", "عمولة قياسية"]
        : ["Browse projects", "Communicate with clients", "Standard fee"]
    },
    {
      name: i18n.language === "ar" ? "احترافي" : "Pro",
      price: "$29 / month",
      features: i18n.language === "ar"
        ? ["ظهور مميز", "عمولة أقل", "دعم أولوية"]
        : ["Featured visibility", "Lower fee", "Priority support"],
      popular: true
    },
    {
      name: i18n.language === "ar" ? "شركات" : "Enterprise",
      price: "$99 / month",
      features: i18n.language === "ar"
        ? ["إدارة فرق", "تقارير متقدمة", "دعم مخصص"]
        : ["Team management", "Advanced reports", "Dedicated support"]
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          {t("home.pricingTitle")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`border rounded p-6 text-center bg-white ${
                plan.popular ? "border-blue-600 shadow-lg" : ""
              }`}
            >
              {plan.popular && (
                <span className="text-sm text-blue-600 font-bold">
                  {t("home.mostPopular")}
                </span>
              )}
              <h3 className="text-xl font-bold mt-2">{plan.name}</h3>
              <p className="text-2xl font-semibold my-4">{plan.price}</p>

              <ul className="text-gray-600 space-y-2 mb-6">
                {plan.features.map((f, idx) => (
                  <li key={idx}>✓ {f}</li>
                ))}
              </ul>

              <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
                {t("home.choosePlan")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingPreview