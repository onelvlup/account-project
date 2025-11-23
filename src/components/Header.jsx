import React, { useEffect, useRef, useState } from "react";
import LOGO_PNG from "../assets/png/logo.png";
import LOGO_SVG from "../assets/svg/logo.svg";
import PHONE_SVG from "../assets/svg/phone_svg.svg";
import PHONE_SVG_WHITE from "../assets/svg/phone_svg_white.svg";

import RU_LANG_SVG from "../assets/svg/language/ru_svg.svg";
import EN_LANG_SVG from "../assets/svg/language/en_svg.svg";
import KG_LANG_SVG from "../assets/svg/language/kg_svg.svg";
import { Link } from "react-router-dom";

import BUGER_BUTTON_SVG from "../assets/svg/header_buttons/burger.svg";
import CLOSE_BUTTON_SVG from "../assets/svg/header_buttons/close.svg";

import { useTranslation } from "react-i18next";

function Header() {
  const { i18n } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered_phone, setIsHovered_phone] = useState(false);
  const toggleMenu = () => {
    setVisible((p) => !p);
  };
  const handleChangeLanguage = (lang) => {
    setLanguage(lang); // Update the state for language
    i18n.changeLanguage(lang); // Change language in i18n
  };
  const { formVisible, toggleFormVisible, language, setLanguage } =
    useGlobalState();

  const { t } = useTranslation();
  const navigationLinks = t("navigation", { returnObjects: true });

  const [timeoutId, setTimeoutId] = useState(null); // To store the timeout ID
  const menuRef = useRef(null); // Reference for the language menu to detect mouse enter/leave

  // Handle mouse leave event with delay
  const handleMouseLeave = () => {
    const id = setTimeout(() => setIsHovered(false), 300); // Delay 300ms before hiding menu
    setTimeoutId(id);
  };

  // Clear timeout if mouse re-enters the button or menu
  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Clear any existing timeout
    setIsHovered(true); // Show menu immediately
  };

  return (
    <>
      {visible && (
        <NavigationMenu
          language={language}
          handleChangeLanguage={handleChangeLanguage}
          toggleFormVisible={toggleFormVisible}
          links={navigationLinks}
          setVisible={setVisible}
        />
      )}

      <header className=" bg-white w-full  px-[16px] md: px-auto fixed left-0 top-0 z-[9999]">
        <div className="flex mx-auto justify-between items-center h-[72px] max-w-[1322px] w-full ">
          <div>
            <Link to="/">
              <div className="w-full">
                <img
                  className=" object-cover  h-full max-h-[48px]"
                  src={LOGO_SVG}
                  alt=""
                />
              </div>
            </Link>
          </div>

          <nav className="hidden xl:block ">
            <ul className="flex gap-[24px] text-[16px] font-semibold">
              {navigationLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className=" hidden md:flex gap-[24px]">
            <button
              className=" font-semibold outline outline-[#EBEBEB] outline-[1px] p-[16px] rounded-[8px] flex gap-[8px] hover:bg-[#180090] hover:text-white"
              onMouseEnter={() => setIsHovered_phone(true)} // When mouse enters, set hovered to true
              onMouseLeave={() => setIsHovered_phone(false)} // When mouse leaves, set hovered to false
              onClick={toggleFormVisible}
            >
              {/* Show first image when not hovered, and second image when hovered */}
              <img
                src={isHovered_phone ? PHONE_SVG_WHITE : PHONE_SVG}
                alt="Phone"
              />
              <span className={` ${isHovered_phone ? "text-white" : ""}`}>
                0312 988 301
              </span>
            </button>
            <div className="relative">
              {/* Language Toggle Button */}
              <LanguageDropdown
                language={language}
                handleChangeLanguage={handleChangeLanguage}
              />
            </div>
          </div>
          <div className=" xl:hidden">
            <button onClick={toggleMenu}>
              {visible ? (
                <img src={CLOSE_BUTTON_SVG} alt="" />
              ) : (
                <img src={BUGER_BUTTON_SVG} alt="" />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
import SIGH_PNG from "../assets/png/sign_png.png";
import i18next from "i18next";
import { useGlobalState } from "../context/Context";

const NavigationMenu = ({
  links,
  setVisible,
  handleChangeLanguage,
  toggleFormVisible,
  language,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered_phone, setIsHovered_phone] = useState(false);
  const { t } = useTranslation();
  const navigationLinks = t("navigation", { returnObjects: true });
  const footer_data = t("footer", { returnObjects: true });

  return (
    <div className="fixed top-0 left-0 bg-white h-full w-full flex flex-col w-full z-[9999] xl:hidden">
      <nav className=" flex-1">
        <ul className="flex flex-col gap-[32px] text-[16px] font-semibold justify-center items-center pt-[174px]">
          {links.map((item, index) => (
            <li key={index}>
              <a
                onClick={() => {
                  setVisible((p) => !p);
                }}
                href={item.link}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className=" flex gap-[24px] mx-auto ">
        <button
          className=" font-semibold outline outline-[#EBEBEB] outline-[1px] p-[16px] rounded-[8px] flex gap-[8px] hover:bg-[#180090] hover:text-white"
          onMouseEnter={() => setIsHovered_phone(true)} // When mouse enters, set hovered to true
          onMouseLeave={() => setIsHovered_phone(false)} // When mouse leaves, set hovered to false
          onClick={toggleFormVisible}
        >
          <img
            src={isHovered_phone ? PHONE_SVG_WHITE : PHONE_SVG}
            alt="Phone"
          />
          <span className={` ${isHovered_phone ? "text-white" : ""}`}>
            +996 312 988 301
          </span>
        </button>
        <div className="relative">
          <LanguageDropdown
            language={language}
            handleChangeLanguage={handleChangeLanguage}
            directionDown={false}
          />
        </div>
      </div>
      <div className=" max-w-[1296px] w-full mx-auto flex flex-col items-center justify-between ">
        <small className=" items-center flex">
          {footer_data.author_text}
          <a target="_blank" href="https://onelvlup.kg">
            <img className=" pl-[10px]" src={SIGH_PNG} alt="" />
          </a>
        </small>
        <br />
        <hr className="bg-[#180090] opacity-10 w-full " />

        <small className="mt-[8px]">{footer_data.copyright_text}</small>
      </div>
    </div>
  );
};

export default Header;

const LanguageDropdown = ({
  language,
  handleChangeLanguage,
  directionDown = true,
}) => {
  const [isOpen, setIsOpen] = useState(false); // Track dropdown visibility
  const dropdownRef = useRef(null); // Reference for the dropdown
  const { t } = useTranslation();

  const dropdownPosition = directionDown ? "top-[100%]" : "bottom-[100%]";
  const dropdownMargin = directionDown ? "mt-2" : "mb-2"; // Add margin accordingly

  // Toggle dropdown visibility on button click
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close dropdown if clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup on unmount
    };
  }, []);

  const languageFlags = {
    ru: RU_LANG_SVG,
    en: EN_LANG_SVG,
    kg: KG_LANG_SVG,
  };

  const languageNames = {
    ru: "Русский",
    en: "English",
    kg: "Кыргызча",
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Language toggle button */}
      <button
        onClick={toggleDropdown}
        className="font-semibold outline outline-[#EBEBEB] outline-[1px] p-[16px] rounded-[8px] flex gap-[8px] hover:bg-[#180090] hover:text-white"
      >
        <img
          src={languageFlags[language]}
          alt="language"
          className="w-6 h-6" // Size of flag image
        />
        <span className="ml-2">{languageNames[language]}</span>
      </button>

      {/* Language options dropdown (visible when `isOpen` is true) */}
      {isOpen && (
        <div
          className={`absolute ${dropdownPosition} left-0 ${dropdownMargin} w-full bg-[#180090] text-white  rounded-[8px] shadow-lg z-10`}
        >
          {" "}
          <ul className="py-2">
            {Object.keys(languageFlags).map((lang) => (
              <li
                key={lang}
                onClick={() => {
                  handleChangeLanguage(lang); // Change language
                  setIsOpen(false); // Close dropdown after selecting language
                }}
                className="px-4 py-2 flex  cursor-pointer hover:bg-[#091520] hover:text-white"
              >
                <img
                  src={languageFlags[lang]}
                  alt={lang}
                  className="w-6 h-6 inline-block mr-2"
                />
                {languageNames[lang]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
