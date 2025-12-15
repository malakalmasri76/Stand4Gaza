import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logowhite from "../../assets/logowhite.png";


export default function Navbar() {
  const { i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-red-800 shadow-sm relative">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center text-white">
        <Link to="/" className="flex items-center">
          <img
            src={logowhite}
            alt="Stand 4 Gaza"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          <li><Link to="/">{i18n.language === "ar" ? "الرئيسية" : "Home"}</Link></li>
          <li><Link to="/about">{i18n.language === "ar" ? "نبذة عن المبادرة" : "About the Initiative"}</Link></li>
          <li><Link to="/pricing">{i18n.language === "ar" ? "تصنفيات المواهب" : "Talent Categories"}</Link></li>
          <li><Link to="/login">{i18n.language === "ar" ? "التخصصات" : "Specializations"}</Link></li>
          <li><Link to="/login">{i18n.language === "ar" ? "طور نفسك" : "Improve yourself"}</Link></li>
          <li><Link to="/login">{i18n.language === "ar" ? "قصص النجاح" : "Success Stories"}</Link></li>
          <li><Link to="/login">{i18n.language === "ar" ? "انضم إلينا" : "Join Us"}</Link></li>
          <li><Link to="/login">{i18n.language === "ar" ? "أصحاب العمل" : "Employers Page"}</Link></li>
        </ul>

        {/* Language Button */}
        <button onClick={toggleLanguage} className="border px-3 py-1 rounded md:ml-4">
          {i18n.language === "ar" ? "EN" : "AR"}
        </button>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden ml-4 p-2 border rounded"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu with slide animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-red-800`}
      >
        <ul className="flex flex-col gap-4 px-6 py-4 text-white">
          <li><Link to="/" onClick={toggleMobileMenu}>{i18n.language === "ar" ? "الرئيسية" : "Home"}</Link></li>
          <li><Link to="/about" onClick={toggleMobileMenu}>{i18n.language === "ar" ? "نبذة عن المبادرة" : "About the Initiative"}</Link></li>
          <li><Link to="/pricing" onClick={toggleMobileMenu}>{i18n.language === "ar" ? "تصنفيات المواهب" : "Talent Categories"}</Link></li>
          <li><Link to="/login" onClick={toggleMobileMenu}>{i18n.language === "ar" ? "التخصصات" : "Specializations"}</Link></li>
          <li><Link to="/login" onClick={toggleMobileMenu}>{i18n.language === "ar" ? "طور نفسك" : "Improve yourself"}</Link></li>
          <li><Link to="/login" onClick={toggleMobileMenu}>{i18n.language === "ar" ? "قصص النجاح" : "Success Stories"}</Link></li>
          <li><Link to="/login" onClick={toggleMobileMenu}>{i18n.language === "ar" ? "انضم إلينا" : "Join Us"}</Link></li>
          <li><Link to="/login" onClick={toggleMobileMenu}>{i18n.language === "ar" ? "أصحاب العمل" : "Employers Page"}</Link></li>
        </ul>
      </div>
    </nav>
  );
}
