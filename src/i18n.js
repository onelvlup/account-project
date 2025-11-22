import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { overlay } from "three/tsl";

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en", // Default language to fall back to
    lng: "ru", // Default language to use
    resources: {
      ru: {
        translation: {
          greeting: "Добро пожаловать",
          navigation: [
            { name: "Главная", link: "/#main" },
            { name: "О компании", link: "/#about" },
            { name: "Услуги", link: "/#service" },
            { name: "Команда", link: "/#team" },
            { name: "Отзывы", link: "/#feedback" },
            { name: "Контакты", link: "/#contact" },
          ],
          hero: "Ваш надёжный партнёр на каждом этапе развития бизнеса",
          hero_p:
            "Получите комплексное обслуживание для устойчивого развития вашего  бизнеса в  новых условиях",
          hero_button_text: "Бесплатная консультация",
          about: "О компании",
          about_p_1:
            "KAB group — команда профессиональных бухгалтеров, аудиторов и налоговых консультантов.",
          about_p_2:
            "Предоставляем бухгалтерские и консалтинговые услуги в Бишкек (Кыргызская Республика) для предприятий из различных сфер деятельности.",
          about_p_3:
            "Мы создаём порядок и прозрачность в финансах, чтобы бизнес рос уверенно.",
          about_p_4:
            "Сопровождаем компании на всех этапах — от бухгалтерского учёта и налогов до аудита и консалтинга. Берём на себя отчётность, проверки и взаимодействие с госорганами, освобождая предпринимателей от рутины и лишних рисков.",
          account: {
            title: "Бухгалтерия без лишних переживаний",
            cards: [
              {
                title: "Персональный бухгалтер",
                description:
                  "Закрепляем специалиста, который знает ваш бизнес и всегда на связи.",
              },
              {
                title: "Конфиденциальность и защита",
                description:
                  "Ваши данные под надёжной защитой и в безопасных руках.",
              },
              {
                title: "Во главе компании — Анна Калинина",
                description:
                  "Сертифицированный аудитор и налоговый консультант 1 категории с 25 - летним опытом. Ее профессионализм и внимание к деталям стали основой доверия клиентов по всему Кыргызстану",
              },
              {
                title: "Опытная команда",
                description:
                  "Средний стаж — 10+ лет, всегда в курсе актуальных изменений законодательства.",
              },
              {
                title: "Отчётность без штрафов",
                description:
                  "Сдаём всё вовремя — без ошибок, задержек и лишних рисков.",
              },
            ],
          },
          service: {
            title: "Услуги для всех видов бизнеса и форм собственности",
            description:
              "Поможем оптимизировать бизнес-процессы и повысить их качество без существенных затрат",
            card: [
              {
                title: "Бухгалтерские услуги",
                description_items: [
                  "Ведение бухгалтерского и налогового учёта",
                  "Восстановление учёта прошлых периодов",
                  "Составление финансовой отчётности",
                  "Экспресс-анализ базы",
                ],
                bg_colors: "#EAF2FF",
              },
              {
                title: "Налоговое сопровождение",
                description_items: [
                  "Составление и сдача налоговой отчётности",
                  "Оптимизация налогов и выбор режима",
                  "Обжалование результатов проверок",
                  "Консультации по налоговым вопросам",
                ],
                bg_colors: "#FFF3E9",
              },
              {
                title: "Аудит и внешние проекты",
                description_items: [
                  "Налоговый обзор и предаудит",
                  "Подготовка к налоговой проверке",
                  "Сопровождение налоговых проверок",
                  "Представление интересов в госорганах",
                  "Разработка учётных политик (ФУП и НУП)",
                ],
                bg_colors: "#F3EDFF",
              },
              {
                title: "Кадровый учёт",
                description_items: [
                  "Приказы и табелирование",
                  "Трудовые договоры и ГПХ",
                  "Дополнительные соглашения",
                  "Полное ведение кадрового делопроизводства",
                ],
                bg_colors: "#F4F6FB",
              },
              {
                title: "Консультации по таможенному законодательству и ВЭД",
                description_items: [
                  "Экспертная помощь в вопросах ввоза и вывоза товаров, оформлении документов, выборе таможенных режимов и сопровождении внешнеэкономических сделок.",
                  "Разъясняем правила ввоза и вывоза товаров, таможенные режимы, тарифы и пошлины",
                  "Готовим комплект документов для таможенного оформления",
                  "Оптимизируем внешнеэкономические сделки с учётом законодательства КР и международных норм.",
                  "Консультируем по контрактам, оплате, логистике и транспортировке грузов.",
                ],
                bg_colors: "#E9F7EE",
              },
            ],
          },
          team: {
            title: "Наша команда",
            cards: [
              {
                name: "Анна Калинина",
                description:
                  "Руководитель компании. Стаж более 25 лет. Сертифицированный аудитор, налоговый консультант 1 категории, таможенный брокер. Эксперт во всех сферах бухгалтерского, налогового учета и ВЭД.",
              },
              {
                name: "Рубанова Ирина",
                description:
                  "Ведущий бухгалтер, методист. Более 17 лет опыта, специалист по организации учётных процессов и методологической поддержке.",
              },
              {
                name: "Мирная Виктория",
                description:
                  "Ведущий бухгалтер, аналитик. Более 12 лет опыта, эксперт в финансовом анализе и управленческом учёте.",
              },
              {
                name: "Нестерова Агата",
                description:
                  "Ведущий бухгалтер. Более 10 лет опыта, ответственно контролирует все бухгалтерские процессы.",
              },
              {
                name: "Аюпова Ризвангуль",
                description:
                  "Ведущий бухгалтер. Более 19 лет опыта, специалист по учёту некоммерческих организаций и МСФО.",
              },
              {
                name: "Кебекова Айканыш",
                description:
                  "Ведущий бухгалтер. Более 5 лет опыта, уверенно работает в 1С, обеспечивает точность учёта.",
              },
              {
                name: "Жылдызбекова Малика",
                description:
                  "Ведущий бухгалтер. Более 5 лет опыта, профессионально ведёт бухгалтерский учёт и отчётность.",
              },
              {
                name: "Темирбаева Эльнура",
                description:
                  "Бухгалтер. Более 5 лет опыта, внимательна к деталям и эффективно ведёт учётные процессы.",
              },
              {
                name: "Кубанычбекова Айдай",
                description:
                  "Ведущий бухгалтер. Более 9 лет опыта, мастерски ведёт учёт и сдаёт отчётность своевременно.",
              },
            ],
          },
          feedback: {
            title: "Что клиенты говорят о нас",
            cards: [
              {
                name: "Сарбагишев Кылычбек Карыпбекович",
                title: "Генеральный секретарь НОК КР",
                feedback:
                  "Национальный Олимпийский комитет Кыргызской Республики выражает благодарность бухгалтерской компании ИП Калинина А.В. за профессиональное и добросовестное выполнение своих обязанностей. Работа ведётся качественно, своевременно и в полном соответствии с требованиями законодательства. Отдельно отмечаем высокий уровень компетенции специалистов и оперативность в решении возникающих вопросов. Рекомендуем компанию как надежного партнера в области бухгалтерского и налогового сопровождения.",
              },
              {
                name: "Перфильев Всеволод Юрьевич",
                title: "Генеральный директор ОсОО «ДваГИС-Бишкек»",
                feedback:
                  "Выражаем благодарность за более чем 3 года успешной работы. За это время сопровождение нашей компании велось качественно и оперативно, все вопросы решались, консультации оказывались, куратор всегда был на связи. На протяжении всего периода сотрудничества коммуникация выстраивалась на приятных человеческих отношениях, при этом на высоком уровне сохранялись профессионализм и компетенции в оказываемых услугах. Желаю успехов в развитии и росте, а также рекомендую данную компанию как надежного партнера в бухгалтерском сопровождении.",
              },
              {
                name: "Лим Владимир Алексеевич",
                title: "Директор ООО “Азия Моторс”",
                feedback:
                  "Сотрудничаем с компанией уже не первый год и хотим выразить искреннюю благодарность за надёжное партнёрство, высокий профессионализм и внимательное отношение. За время совместной работы компания неоднократно подтверждала свою компетентность, ответственность и готовность идти навстречу клиенту. Все задачи выполняются качественно и в срок, а общение с командой всегда проходит на позитивной и конструктивной ноте. Ценим наше сотрудничество и уверены, что впереди нас ждёт ещё много лет сотрудничества.",
              },
              {
                name: "Айгюн Халил Ибрахим",
                title: "Директор ОсОО «Кыргыз Бетон»",
                feedback:
                  "ОсОО «КЫРГЫЗ БЕТОН» благодарит Вас за долгосрочное сотрудничество, оказание услуг отличного качества и внимательное отношение со стороны сотрудников компании. Выражаем надежду на продолжение успешного сотрудничества на благо наших общих интересов, а также на дальнейшее увеличение достигнутых показателей совместной работы.",
              },
              {
                name: "Турарбек Улан",
                title: "Директор ОсОО 'Shagyl Tash'",
                feedback:
                  "ОсОО 'Shagyl Tash' (Шагыл Таш) выражает Вам искреннюю благодарность и признательность за длительное плодотворное сотрудничество и добросовестные партнерские отношения. Желаем Вам финансового благополучия и дальнейшего укрепления наших взаимоотношений!",
              },
              {
                name: "Мырзамамытова Аида Мырзамитовна",
                title: "Руководитель ОсОО «Эс Ал Мебель»",
                feedback:
                  "Мы высоко оцениваем профессионализм и компетентность команды КАВ group by Anna Kalinina. Работаем с 2017 года, за этот период сотрудничество было построено на высоком уровне. Выражаем уверенность в том, что наше сотрудничество будет плодотворным и в дальнейшем. Мы с уверенностью рекомендуем КАВ group by Anna Kalinina как надежного партнера, способного обеспечить высокий уровень аудиторских услуг. Желаем процветания и удачи!",
              },
              {
                name: "Арслан Айкан",
                title: "Директор ОсОО 'Шагыл Таш-Токмок'",
                feedback:
                  "ОсОО 'Шагыл Таш-Токмок' выражаем огромную благодарность бухгалтерской компании ИП Калининой А.В. за сотрудничество и рекомендуем ее как надежного и ответственного делового партнера. Желаем вам процветания и успехов, будем рады продолжить сотрудничество!",
              },
            ],
          },
          form: {
            title: "3 шага к порядку в финансах",
            description_items: [
              "Обсудим текущие задачи и проблемы в учёте.",
              "Подберём оптимальное решение для вашего бизнеса.",
              "Начнём работу — чтобы отчётность всегда была под контролем.",
            ],
            form_text: {
              name_input: "Имя*",
              email_input: "E-mail*",
              phone_input: "Телефон*",
              button_text: "Оставить заявку",
              warning_text:
                "Нажимая на кнопку “Оставить заявку”, я даю свое согласие на обработку моих персональных данных в соответствии с Законом КР",
            },
          },
          footer: {
            info_title: "Адрес",
            description:
              "Помогаем бизнесу вести бухучет безупречно с 2006 года",
            terms: "Соглашение о защите персональных данных",
            adress: "г. Бишкек, ул. Малдыбаева, д. 54Б, офис 6",
            work_time: "Пн-Пт 08:00-17:00 (обед 12:00-13:00)",
            map_button_text: "На карте",
            nav_text: "Навигация",
            about_text: "О компании",
            service_text: "Услуги",
            team_text: "Команда",
            feedback_text: "Отзывы",
            contact_text: "Контакты",
            copyright_text:
              "2025 © KAB group by Anna Kalinina. Все права защищены",
            author_text: "Разработка и дизайн сайта:",
          },
          terms: {
            title: "Соглашение о защите персональных данных",
            intro:
              "Я, свободно, осознанно и по своей воле в соответствии с Законом Кыргызской Республики “Об информации персонального характера” от 14 апреля 2008 года №58 даю согласие Обществу с ограниченной ответственностью “__________” (Далее по тексту - “Оператор”) :",
            intro_items: [
              "на обработку (любая операция или набор операций, выполняемых независимо от способов держателем (обладателем) персональных данных либо по его поручению, автоматическими средствами или без таковых, в целях сбора, записи, хранения, актуализации, группировки, блокирования, стирания и разрушения персональных данных), а также на:",
              'передачу персональных данных (предоставление держателем (обладателем) персональных данных третьим лицам в соответствии с Законом Кыргызской Республики "Об информации персонального характера" и международными договорами;',
              "трансграничную передачу персональных данных (передача держателем (обладателем) персональных данных держателям, находящимся под юрисдикцией других государств) следующих персональных данных:",
            ],
            intro_body:
              "1. Согласие дается на обработку всех категорий персональных данных, предоставляемых мною, которые могут включать:",
            body_items: [
              "Фамилия, имя, отчество: ",
              "Персональный идентификационный номер: ",
              "Число, месяц, год рождения: ",
              "Пол: ",
              "Данные удостоверения личности: ",
              "Паспортные данные (серия, номер, дата выдачи, наименование органа, выдавшего документ) и гражданство: ",
              "Адрес места жительства (регистрации и фактический): ",
              "Наименование организации: ",
              "ИНН/ОКПО организации: ",
              "Номер домашнего и мобильного телефона: ",
              "Адрес электронной почты: ",
              "Номер паспорта и срок его действия: ",
              "Иная информация: ",
            ],
            body_1:
              "2. Оператор вправе совершать следующие действия: собирать данные; делать запись; систематизировать ответ; копить данные; хранить данные; уточнять данные (обновлять, изменять); извлекать данные; использовать данные; блокировать данные; удалять данные; уничтожить данные.",
            body_2:
              "3. Способы обработки персональных данных: с использованием средств автоматизации/без использования средств автоматизации.",
            body_3:
              "4. Цель обработки: предоставление услуг/работ, включая, направления уведомлений, касающихся предоставляемых услуг/работ, подготовка и направление ответов на запросы, информации о мероприятиях/товарах/услугах/работах Оператора.",
            conclution: "Я ознакомлен(а) с тем, что:",
            conclution_items: [
              "согласие на обработку персональных данных действует с даты подписания настоящего согласия в течение всего срока предоставления мне государственной (муниципальной) услуги и хранения данных об оказанной услуге в соответствии с законодательством Кыргызской Республики;",
              "согласие на обработку персональных данных может быть отозвано на основании письменного заявления в произвольной форме направленного на электронный адрес :___________@_____.____ с обязательным направлением по адресу фактического местонахождения.",
              'в случае отзыва согласия на обработку персональных данных обработка моих персональных данных полностью или частично может быть продолжена в соответствии со статьями 5 и 15 Закона Кыргызской Республики "Об информации персонального характера" от 14 апреля 2009 года №58',
            ],
          },
          overlay: {
            p: "Помогаем бизнесу вести бухучет безупречно с 2006 года",
            title: "Возьмём бухгалтерию на себя",
            title_p:
              "Закроем отчётность, наладим учёт, подскажем, где можно сэкономить",
            input_1: "Имя*",
            input_2: "E-mail*",
            input_3: "Телефон*",
            input_submit: "Оставить заявку",
            terms_text:
              "Нажимая на кнопку “Оставить заявку”, я даю свое согласие на обработку моих персональных данных в соответствии с Законом КР",
            success_text: "Спасибо за обращение!",
            success_text_p:
              "Мы перезвоним вам на номер, указанный в заявке. Не пропустите звонок.",
            contact: "Если у вас срочный вопрос, позвоните нам:",
            wa_button_text: "Перейти в WhatsApp",
            tel_button_text: "Перейти в WhatsApp",
          },
        },
      },

      en: {
        translation: {
          greeting: "Hello!",
          navigation: [
            { name: "Home", link: "/#main" },
            { name: "About Us", link: "/#about" },
            { name: "Services", link: "/#service" },
            { name: "Team", link: "/#team" },
            { name: "Testimonials", link: "/#feedback" },
            { name: "Contacts", link: "/#contact" },
          ],
          hero: "Your trusted and consistent partner at every stage of your business development",
          hero_p:
            "Receive comprehensive, high-quality support to ensure the sustainable growth of your company in the new business environment",
          hero_button_text: "Free consultation",
          about: "About the Company",
          about_p_1:
            "KAB group is a team of professional accountants, auditors, and tax consultants.",
          about_p_2:
            "We provide accounting and consulting services in Bishkek (Kyrgyz Republic) to companies across various industries.",
          about_p_3:
            "Our mission is to bring order and transparency to your finances, enabling your business to grow with confidence.",
          about_p_4:
            "We support companies at every stage — from accounting and taxation to audit and consulting. We handle reporting, inspections, and communication with government authorities, freeing entrepreneurs from routine tasks and unnecessary risks.",
          account: {
            title: "Stress-free Accounting",
            cards: [
              {
                title: "Personal Accountant",
                description:
                  "We assign a dedicated specialist who knows your business and is always available.",
              },
              {
                title: "Confidentiality & Protection",
                description:
                  "Your data is securely protected and handled with utmost care.",
              },
              {
                title: "The company is led by Anna Kalinina",
                description:
                  "A certified auditor and Category 1 tax consultant with 25 years of experience. Her professionalism and attention to detail have earned the trust of clients across Kyrgyzstan.",
              },
              {
                title: "Experienced Team",
                description:
                  "Our average professional experience is over 10 years, and we stay up to date with all legislative changes.",
              },
              {
                title: "Penalty-free Reporting",
                description:
                  "We submit all reports on time — with no errors, no delays, and no unnecessary risks.",
              },
            ],
          },
          service: {
            title:
              "Services for All Types of Businesses and Forms of Ownership",
            description: "",
            card: [
              {
                title: "Accounting Services",
                description_items: [
                  "We help optimize your business processes and improve their quality without significant costs.",
                  "Bookkeeping and tax accounting",
                  "Restoration of accounting for previous periods",
                  "Preparation of financial statements",
                  "Express analysis of your accounting database",
                ],
                bg_colors: "#EAF2FF",
              },
              {
                title: " Tax Support",
                description_items: [
                  "Preparation and submission of tax reports",
                  "Tax optimization and selection of the appropriate tax regime",
                  "Appealing the results of tax inspections",
                  "Consultations on tax matters",
                ],
                bg_colors: "#FFF3E9",
              },
              {
                title: "Audit and External Projects",
                description_items: [
                  "Tax review and pre-audit",
                  "Preparation for tax inspections",
                  "Support during tax inspections",
                  "Representation of your interests before government authorities",
                  "Development of accounting policies (for financial and tax accounting)",
                ],
                bg_colors: "#F3EDFF",
              },
              {
                title: "HR Administration",
                description_items: [
                  "HR orders and timesheets",
                  "Employment contracts and civil-law agreements",
                  "Additional agreements and amendments",
                  "Full HR documentation management",
                ],
                bg_colors: "#F4F6FB",
              },
              {
                title:
                  "Consulting on Customs Legislation and Foreign Trade (FT)",
                description_items: [
                  "We provide expert support on import and export procedures, document preparation, selection of customs regimes, and assistance with foreign trade transactions.",
                  "We explain import and export rules, customs regimes, tariffs, and duties",
                  "We optimize foreign trade operations in compliance with the legislation of the Kyrgyz Republic and international standards",
                  "We prepare the full set of documents required for customs clearance",
                  "We provide guidance on contracts, payments, logistics, and cargo transportation",
                ],
                bg_colors: "#E9F7EE",
              },
            ],
          },
          team: {
            title: "",
            cards: [
              {
                name: "Anna Kalinina",
                description:
                  "Head of the company. Over 25 years of experience. Certified auditor, Category 1 tax consultant, and customs broker. Expert in all areas of accounting, taxation, and foreign trade.",
              },
              {
                name: "Irina Rubanova",
                description:
                  "Senior Accountant, Methodologist. Over 17 years of experience. Specialist in organizing accounting processes and providing methodological support.",
              },
              {
                name: "Victoria Mirnaya",
                description:
                  "Senior Accountant, Analyst. Over 12 years of experience. Expert in financial analysis and management accounting.",
              },
              {
                name: "Agata Nesterova",
                description:
                  "Senior Accountant. Over 10 years of experience. Ensures precise control of all accounting processes.",
              },
              {
                name: "Rizvangul Ayupova",
                description:
                  "Senior Accountant. Over 19 years of experience. Specialist in accounting for non-profit organizations and IFRS.",
              },
              {
                name: "Aikanish Kebekova",
                description:
                  "Senior Accountant. Over 5 years of experience. Skilled 1C user, ensures accuracy and reliability in accounting.",
              },
              {
                name: "Malika Jyldyzbekova",
                description:
                  "Senior Accountant. Over 5 years of experience. Handles accounting and reporting professionally and efficiently.",
              },
              {
                name: "Elnura Temirbaeva",
                description:
                  "Accountant. Over 5 years of experience. Detail-oriented and effectively manages accounting tasks.",
              },
              {
                name: "Aiday Kubanychbekova",
                description:
                  "Senior Accountant. Over 9 years of experience. Expertly maintains accounting records and submits reports on time.",
              },
            ],
          },
          feedback: {
            title: "What Our Clients Say About Us",
            cards: [
              {
                name: "Kylychbek Karypkbekovich Sarbagyshev",
                title:
                  "Secretary General of the National Olympic Committee of the Kyrgyz Republic",
                feedback:
                  "The National Olympic Committee of the Kyrgyz Republic expresses its gratitude to the accounting firm of Sole Proprietor Kalinina A.V. for the professional and conscientious performance of its duties. All work is carried out with high quality, on time, and in full compliance with legal requirements. We especially note the high level of competence of the specialists and their efficiency in resolving emerging issues. We recommend this company as a reliable partner in accounting and tax support.",
              },
              {
                name: "Vsevolod Yuryevich Perfiliev",
                title: "General Director of LLC “2GIS-Bishkek”",
                feedback:
                  "We express our gratitude for more than three years of successful cooperation. During this time, the support of our company has been provided with high quality and efficiency; all questions were resolved promptly, guidance was provided whenever needed, and the assigned manager was always available. Throughout our cooperation, communication has been pleasant and respectful, while maintaining a high level of professionalism and competence in the services provided. We wish you continued development and growth and recommend this company as a reliable partner in accounting support.",
              },
              {
                name: "Vladimir Alekseevich Lim",
                title: "Director of LLC “Asia Motors”",
                feedback:
                  "We have been working with this company for several years and would like to express our sincere gratitude for their reliable partnership, high professionalism, and attentive attitude. During our collaboration, the company has repeatedly demonstrated its competence, responsibility, and willingness to meet the needs of its clients. All tasks are completed with high quality and on time, and communication with the team is always positive and constructive. We greatly value our cooperation and are confident that many more productive years lie ahead.",
              },
              {
                name: "Aygun Khalil Ibrahim",
                title: "Director of LLC “Kyrgyz Beton”",
                feedback:
                  "LLC “Kyrgyz Beton” expresses its gratitude for long-term cooperation, excellent quality of services, and the attentive attitude of the company’s staff. We hope for continued successful cooperation for the benefit of our mutual interests, as well as further growth in the results we have achieved together.",
              },
              {
                name: "Turarbek Ulan",
                title: "Director of LLC “Shagyl Tash”",
                feedback:
                  "LLC “Shagyl Tash” expresses its sincere gratitude and appreciation for long-term fruitful cooperation and trustworthy business relations. We wish you financial prosperity and further strengthening of our partnership!",
              },
              {
                name: "Aida Myrzamamytova",
                title: "Head of LLC “Es Al Mebel”",
                feedback:
                  "We highly value the professionalism and competence of the KAB group by Anna Kalinina team. We have been working together since 2017, and throughout this time, our cooperation has been conducted at a high level. We are confident that our partnership will continue to be productive in the future. We confidently recommend KAB group by Anna Kalinina as a reliable partner capable of providing high-quality audit services. We wish you prosperity and success!",
              },
              {
                name: "Arslan Aykan",
                title: "Director of LLC “Shagyl Tash-Tokmok”",
                feedback:
                  "LLC “Shagyl Tash-Tokmok” expresses its deep gratitude to the accounting company of Sole Proprietor Kalinina A.V. for the cooperation and recommends it as a reliable and responsible business partner. We wish you prosperity and success and look forward to continuing our cooperation!",
              },
            ],
          },
          form: {
            title: "3 Steps to Financial Clarity",
            description_items: [
              "We review your current accounting tasks and challenges",
              "We select the best solution tailored to your business",
              "We start working — keeping your reporting accurate and under control",
            ],

            form_text: {
              name_input: "Name*",
              email_input: "E-mail*",
              phone_input: "Phone*",
              button_text: "Submit Request",
              warning_text:
                "By clicking “Submit Request,” I consent to the processing of my personal data in accordance with the legislation of the Kyrgyz Republic.",
            },
          },
          footer: {
            info_title: "Address",
            description:
              "Helping businesses maintain flawless accounting since 2006",
            terms: "Personal Data Protection Agreement",
            adress: "Bishkek, Maldybaeva St., 54B, Office 6",
            work_time: "Mon–Fri 08:00–17:00 (lunch break 12:00–13:00)",
            map_button_text: "View on map",
            nav_text: "Navigation",
            about_text: "audit.buhuchet@mail.ru",
            service_text: "Navigation",
            team_text: "About",
            feedback_text: "Services",
            contact_text: "Team",
            copyright_text: "Website development and design by:",
            author_text:
              "2025 © KAB group by Anna Kalinina. All rights reserved.",
          },
          terms: {
            title: "Agreement on the protection of personal data",
            intro:
              "I, freely, consciously and voluntarily, in accordance with the Law No. 58 of the Kyrgyz Republic “On Personal Information” dated April 14, 2008, do give my consent to IP Kalinina Anna Vladimirovna (hereinafter referred to as the “Operator”):",

            intro_items: [
              "processing (any operation or set of operations performed independently of the methods by the holder (owner) of personal data or on its behalf, by automatic means or without them, for the purpose of collecting, recording, storing, updating, grouping, blocking, erasing and destroying personal data), as well as:",

              "transfer of personal data (provision “on by the holder(s) of personal data to third parties in accordance with the Law of the Kyrgyz Republic “On Personal Information” and international agreements;",

              "cross-border transfer of personal data (transfer by the holder(s) of personal data to holders under the jurisdiction of other States) of the following personal data:",
            ],
            intro_body:
              "Consent is given to the processing of all categories of personal data provided by me, which may include:",
            body_items: [
              "Last name, first name, patronymic",
              "Personal identification number",
              "Date, month, and year of birth",
              "Gender",
              "Personal identification data",
              "Passport data (series, number, date of issue, name of the issuing authority) and nationality",
              "Address of the place of residence (registration and actual)",
              "Name of the organization",
              "INN/OKPO of the organization",
              "Home and mobile phone number",
              "Email address",
              "Passport number and validity period",
              "Other information",
            ],
            body_1:
              "1.   The Operator has the right to perform the following actions: collect data; make a record; organize the response; accumulate data; store data; refine data (update, modify); extract data; use data; block data; delete data; destroy data.",
            body_2:
              "2.   Methods of personal data processing: with or without automation tools.",
            body_3:
              "3.   Purpose of processing: provision of services/works, including sending notifications regarding the services/works provided, preparing and sending responses to requests, information about the activities/goods/services/ works of the Operator.",
            conclution: "I am familiar with the fact that:",
            conclution_items: [
              "consent to the processing of personal data is valid from the date of signing this agreement for the entire period of providing me with state (municipal) services and storing data on the service provided in accordance with the legislation of the Kyrgyz Republic;",
              "consent to the processing of personal data may be revoked on the basis of a written application in any form sent to the email address: audit.buhuchet@mail.ru with mandatory referral to the address of the actual location.",
              "in case of withdrawal of consent to the processing of personal data, the processing of my personal data in whole or in part may be continued in accordance with Articles 5 and 15 of the Law No. 58 of the Kyrgyz Republic “On Personal Information” dated April 14, 2009.",
            ],
          },
          overlay: {
            p: "Helping businesses maintain flawless accounting since 2006",
            title: "We’ll Handle Your Accounting",
            title_p:
              "We will submit your reports, organize your accounting system, and show you where you can reduce costs.",
            input_1: "Name*",
            input_2: "E-mail*",
            input_3: "Phone*",
            input_submit: "Submit Request",
            terms_text:
              "By clicking “Submit Request,” I consent to the processing of my personal data in accordance with the legislation of the Kyrgyz Republic.",
            success_text: "Thank You for Your Request!",
            success_text_p:
              "We will call you back at the number you provided. Please do not miss the call.",
            contact: "If your question is urgent, call us at:",
            wa_button_text: "Open in WhatsApp",
            tel_button_text: "Open in Telegram",
          },
        },
      },
    },
  });
