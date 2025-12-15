import React from 'react'
import { useTranslation } from "react-i18next";


const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold mb-4">Ureed</h3>
          <p className="text-sm">
            {i18n.language === "ar"
              ? "منصة العمل الحر الرائدة في الشرق الأوسط"
              : "The leading freelance platform in the Middle East"}
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">
            {i18n.language === "ar" ? "المنصة" : "Platform"}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>{i18n.language === "ar" ? "من نحن" : "About"}</li>
            <li>{i18n.language === "ar" ? "كيف تعمل" : "How it works"}</li>
            <li>{i18n.language === "ar" ? "الأسعار" : "Pricing"}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">
            {i18n.language === "ar" ? "الدعم" : "Support"}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>{i18n.language === "ar" ? "الأسئلة الشائعة" : "FAQ"}</li>
            <li>{i18n.language === "ar" ? "تواصل معنا" : "Contact Us"}</li>
            <li>{i18n.language === "ar" ? "مركز المساعدة" : "Help Center"}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">
            {i18n.language === "ar" ? "قانوني" : "Legal"}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>{i18n.language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}</li>
            <li>{i18n.language === "ar" ? "الشروط والأحكام" : "Terms & Conditions"}</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm mt-10 text-gray-500">
        © {new Date().getFullYear()} Ureed Clone.{" "}
        {i18n.language === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
      </div>
    </footer>
  )
}

export default Footer