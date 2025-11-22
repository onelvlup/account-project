import React, { useEffect, useState } from "react";
import Span from "../components/Span";

import BANNER_PNG from "../assets/png/hero.png";
import LOGO_SVG from "../assets/svg/mobile_logo.svg";
import LOGO_WHITE_SVG from "../assets/svg/logo_white.svg";

import CONTACT_PERSON from "../assets/png/contact_person.png";

import CLOSE_BUTTON_SVG from "../assets/svg/christ_svg.svg";
import CLOSE_BUTTON_WHITE_SVG from "../assets/svg/christ_white_svg.svg";
import TELEGRAM_BUTTON_SVG from "../assets/svg/buttons/telegram_svg.svg";
import WHATSAPP_BUTTON_SVG from "../assets/svg/buttons/whatsapp_svg.svg";
import { useTranslation } from "react-i18next";
import { useGlobalState } from "../context/Context";
function Hero() {
  const { formVisible, toggleFormVisible } = useGlobalState();

  const { t } = useTranslation();

  return (
    <section id="main" className=" bg-[#F7F7FF] w-full  mt-[72px]">
      <article className=" max-w-[1296px] w-full mx-auto px-[16px] md:px-auto pb-[48px] md:pb-[104px]">
        <div className="flex pt-[80px] flex-col xl:flex-row">
          <h1 className="  tracking-[0]  line-clamp-3 flex-1 w-full">
            {t("hero", { returnObjects: true })}
          </h1>
          <div className="pl-0 xl:pl-[106px] pt-[16px] md:pt-[0px]">
            <div className="md:ml-auto w-auto max-w-[370px]">
              <p className=" text-[20px] text-[#6C7281]">
                {t("hero_p", { returnObjects: true })}
              </p>
              <button
                onClick={toggleFormVisible}
                className=" font-semibold bg-[#180090] hover:bg-[#091520] text-white p-[13px] px-[34px] rounded-[8px] flex gap-[8px] mt-[32px]"
              >
                {t("hero_button_text", { returnObjects: true })}
              </button>
            </div>
          </div>
        </div>
        <div className=" rounded-[24px] overflow-hidden max-h-[480px] mt-[72px] ">
          <img src={BANNER_PNG} alt="" />
        </div>
      </article>
    </section>
  );
}

const ContactOverlay = ({ toggle }) => {
  const { t } = useTranslation();
  const overlay_data = t("overlay", { returnObjects: true });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [final, setFinal] = useState(false);

  // Токен твоего бота
  // const BOT_TOKEN = "8539096714:AAHmXEQZRXC1RJftrLzorBfwcwneP7S_lwk";
  const BOT_TOKEN = "8565983119:AAGrly5k4wBE5a2zHSNr20McuX9Zdn4rY4s";

  // ID канала, куда нужно отправить сообщение
  // const CHANNEL_ID = "-1003177719615";
  const CHANNEL_ID = "-1003370400232";

  // Функция для отправки сообщения в канал
  async function sendMessageToChannel(formData) {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    // Данные, которые отправляются в запросе (POST)
    const data = {
      chat_id: CHANNEL_ID,
      text: `Новое сообщение с сайта:\n\nИмя: ${formData.name}\nE-mail: ${formData.email}\nТелефон: ${formData.phone}`,
    };

    try {
      // Отправляем POST-запрос с использованием fetch
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Преобразуем объект в строку JSON
      });

      // Проверка, что запрос прошел успешно
      if (response.ok) {
        const result = await response.json(); // Преобразуем ответ в формат JSON
        console.log("Message sent successfully:", result);
        setFinal(true);
      } else {
        console.error("Error sending message:", response.statusText);
        alert("Произошла ошибка при отправке заявки.");
      }
    } catch (error) {
      console.error("Request failed", error);
      alert("Произошла ошибка. Попробуйте снова.");
    }
  }

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault(); // Останавливаем перезагрузку страницы при отправке формы
    // Проверяем, что все поля заполнены
    if (name && email && phone) {
      const formData = { name, email, phone };
      sendMessageToChannel(formData); // Отправляем данные в Telegram
    } else {
      alert("Пожалуйста, заполните все поля!");
    }
  };

  useEffect(() => {
    // Function to toggle visibility when ESC is pressed
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        toggle(); // Toggle the visibility
      }
    };

    // Add event listener when component mounts
    window.addEventListener("keydown", handleEscape);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const WHATSAPP_LINK = "https://wa.me/996990988301";
  const TELEGRAM_LINK = "https://t.me/kabgroupkg";

  function openInNewTab(link) {
    window.open(link, "_blank");
  }

  return (
    <div className=" fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] z-[99999] flex justify-center items-center">
      <div className="p-[16px]">
        <div className="text-white bg-white rounded-[24px] flex relative flex-col  md:flex-row  ">
          <button
            onClick={toggle}
            className=" absolute right-[30px] top-[30px] z-[9999] "
          >
            <img className="hidden md:block" src={CLOSE_BUTTON_SVG} alt="" />
            <img className="md:hidden" src={CLOSE_BUTTON_WHITE_SVG} alt="" />
          </button>
          {/* Left Blue Section */}
          <div
            className="bg-[#180090]  md:w-[280px] overflow-hidden md:overflow-auto w-full
             max-h-[240px] md:max-h-full
            rounded-t-[24px] md:rounded-t-[0px] md:rounded-l-[24px] flex  flex-row md:flex-col  justify-between "
          >
            <div
              className="flex flex-col justify-between pb-[24px] p-[32px] 
            pb-0 py-[40px] "
            >
              <img className=" md:hidden" src={LOGO_SVG} alt="" />
              <img className="hidden md:block" src={LOGO_WHITE_SVG} alt="" />
              <small className="13px pt-[16px] text-white  opacity-70">
                {overlay_data.p}
              </small>
            </div>

            <div className="mt-auto">
              <img
                src={CONTACT_PERSON}
                className="h-full ml-auto object-cover md:scale-[1.0] "
                alt=""
              />
            </div>
          </div>
          {/* Right Form Section */}
          <div className=" p-[24px] pb-[31px] md:p-[76px] md:px-[72px] max-w-[561px] w-full">
            <h3 className="font-semibold text-[28px] text-[#091520]">
              {final ? overlay_data.success_text : overlay_data.title}
            </h3>
            <p className="text-[#747480] font-medium">
              {final ? overlay_data.succes_text : overlay_data.title_p}
            </p>
            {final && (
              <p className=" text-[#091520] pt-[40px]">
                {overlay_data.success_text_p} <br /> <b>+996 312 988 301</b>
              </p>
            )}

            {final ? (
              <>
                <button
                  onClick={() => {
                    openInNewTab(WHATSAPP_LINK);
                  }}
                  className="bg-[#25D366] p-[13px] px-[24px] flex gap-[12px] rounded-[12px] mt-[32px]"
                >
                  <img src={WHATSAPP_BUTTON_SVG} alt="" />
                  {overlay_data.wa_button_text}
                </button>
                <br />
                <button
                  onClick={() => {
                    openInNewTab(TELEGRAM_LINK);
                  }}
                  className="bg-telegram p-[13px] px-[24px] flex gap-[12px] rounded-[12px] mb-[115px]"
                >
                  <img src={TELEGRAM_BUTTON_SVG} alt="" />
                  {overlay_data.tel_button_text}
                </button>
              </>
            ) : (
              <form
                onSubmit={handleSubmit} // Обработчик отправки формы
                className="h-full text-black pt-[32px] rounded-[16px] flex flex-col gap-[12px]"
              >
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="font-semibold outline outline-[#EBEBEB] outline-[1px] p-[16px] rounded-[8px]"
                  placeholder={overlay_data.input_1}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="font-semibold outline outline-[#EBEBEB] outline-[1px] p-[16px] rounded-[8px]"
                  placeholder={overlay_data.input_2}
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="font-semibold outline outline-[#EBEBEB] outline-[1px] p-[16px] rounded-[8px]"
                  placeholder={overlay_data.input_3}
                />
                <input
                  type="submit"
                  value={overlay_data.input_submit}
                  className="py-[13px] w-full text-white bg-[#091520] rounded-[8px] mt-[24px]"
                />
                <small className="text-[12px] text-[#888E94] font-semibold">
                  {overlay_data.terms_text}
                </small>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ContactOverlay };

export default Hero;
