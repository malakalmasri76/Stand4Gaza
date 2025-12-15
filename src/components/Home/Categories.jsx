import React from 'react'
import { useTranslation } from "react-i18next";


const Categories = () => {
  const categoriesKeys = [
  "Programming",
  "Design",
  "Translation",
  "Writing",
  "Marketing",
  "DataEntry"
];

 const { t, i18n } = useTranslation();

  const categories = i18n.language === "ar" 
    ? ["البرمجة", "التصميم", "الترجمة", "الكتابة", "التسويق", "إدخال البيانات"]
    : ["Programming", "Design", "Translation", "Writing", "Marketing", "Data Entry"];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          {t("home.categoriesTitle")}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white p-6 text-center rounded shadow hover:shadow-md cursor-pointer"
            >
              <p className="font-semibold">{cat}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories