import React from "react";
import Form from "../components/Form";
import { useTranslation } from "react-i18next";

function Terms() {
  const text = "";
  const { t } = useTranslation();
  const terms_data = t("terms", { returnObjects: true });

  return (
    <>
      <section className=" bg-white w-full pt-[116px] ">
        <article className="max-w-[1296px] w-full mx-auto px-[16px] md:px-auto">
          <h2 className=" py-[32px] lg:py-[62px] pl-[24px] lg:pl-[112px] text-[40px] bg-[#F7F7FF] rounded-[24px]">
            {terms_data.title}
          </h2>
          <div className=" p-[16px] py-[56px] lg:p-[120px] lg:py-[80px]">
            <p>{terms_data.intro}</p>
            <br />
            <ul className=" list-disc pl-5">
              {terms_data.intro_items.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
            <br />
            <p>{terms_data.intro_body}</p>

            <ol className="list-decimal pl-6">
              {terms_data.body_items.map((item) => {
                return <li>{item}</li>;
              })}
            </ol>
            <br />

            <p>{terms_data.body_1}</p>
            <br />
            <p>{terms_data.body_2}</p>
            <br />
            <p>{terms_data.body_3}</p>
            <br />

            <p>{terms_data.conclution}</p>
            <ol className="list-decimal pl-6">
              {terms_data.conclution_items.map((item) => {
                return <li>{item}</li>;
              })}
            </ol>
          </div>
        </article>
      </section>
      <Form />
    </>
  );
}

export default Terms;
