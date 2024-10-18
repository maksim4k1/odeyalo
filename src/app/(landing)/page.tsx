import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import MainImage from "@/assets/webp/meditaion.webp";
import Cbt from "@/assets/webp/partners/cbt.webp";
import Dialectica from "@/assets/webp/partners/dialectica.webp";
import Fasie from "@/assets/webp/partners/fasie.webp";
import Gazprom from "@/assets/webp/partners/gazprom.webp";
import Mercuria from "@/assets/webp/partners/mercuria.webp";
import Tokp from "@/assets/webp/partners/tokp.webp";
import Tsu from "@/assets/webp/partners/tsu.webp";
import Tusur from "@/assets/webp/partners/tusur.webp";
import AlexanderPak from "@/assets/webp/team/AlexanderPak.webp";
import AlinaTisheva from "@/assets/webp/team/AlinaTishaeva.webp";
import DaniilKostin from "@/assets/webp/team/DaniilKostin.webp";
import DmitryBespalov from "@/assets/webp/team/DmitryBespalov.webp";
import IlyaFomin from "@/assets/webp/team/IlyaFomin.webp";
import IslambekMaratov from "@/assets/webp/team/IslambekMaratov.webp";
import MaksimBazhenov from "@/assets/webp/team/MaksimBazhenov.webp";
import PavelPupenko from "@/assets/webp/team/PavelPupenko.webp";
import PolinaOzerova from "@/assets/webp/team/PolinaOzerova.webp";
import TimofeySimonov from "@/assets/webp/team/TimofeySimonov.webp";
import Container from "@/components/UI/Container";
import PrimarySwiper from "@/components/UI/PrimarySwiper";
import { type FunctionComponent } from "react";

const partners = [
  {
    alt: "Меркурия Благотворительный Фонд",
    image: Mercuria,
    link: "https://mercuriya.ru/about",
  },
  {
    alt: "Томский государственный университет систем управления и радиоэлектроники",
    image: Tusur,
    link: "https://tusur.ru/ru",
  },
  {
    alt: "Газпром Трансгаз Томск",
    image: Gazprom,
    link: "https://tomsk-tr.gazprom.ru/",
  },
  {
    alt: "Dialectica Центр найчно-практической психологии",
    image: Dialectica,
    link: "https://cnpp.ru/",
  },
  {
    alt: "Фонд содействия инновациям",
    image: Fasie,
    link: "https://fasie.ru/",
  },
  {
    alt: "Национальный Исследовательский Томский Государственный Университет",
    image: Tsu,
    link: "https://www.tsu.ru/",
  },
  {
    alt: "ОГАУЗ Томская Клиническая Психиотрическая Больница",
    image: Tokp,
    link: "https://tokpb.ru/main/",
  },
  {
    alt: "Ассоциация когнитивно-бихевиоральных терапевтов",
    image: Cbt,
    link: "https://russian-cbt.ru/",
  },
];

const achievements = [
  {
    title: "Победители конкурса «УМНИК»",
    className: styles.achievementCard1,
  },
  {
    title: "Резиденты межвузовского студенческого бизнес-инкубатора «Дружба»",
    className: styles.achievementCard2,
  },
  {
    title: "Победители акселератора «Стартап-полигон III»",
    className: styles.achievementCard3,
  },
  {
    title: "У нас есть свидетельство о регистрации программы для ЭВМ",
    className: styles.achievementCard4,
  },
  {
    title:
      "Диплом 2 степени на XXI Международной конференции «Перспективы развития фундаментальных наук»",
    className: styles.achievementCard5,
  },
];

const team = [
  {
    image: TimofeySimonov,
    name: "Тимофей Симонов",
    role: "руководитель, android-разработчик",
  },
  {
    image: IlyaFomin,
    name: "Илья Фомин",
    role: "android-разработчик",
  },
  {
    image: AlinaTisheva,
    name: "Алина Тишаева",
    role: "психолог",
  },
  {
    image: DaniilKostin,
    name: "Даниил Костин",
    role: "дизайнер",
  },
  {
    image: PolinaOzerova,
    name: "Полина Озерова",
    role: "дизайнер",
  },
  {
    image: MaksimBazhenov,
    name: "Максим Баженов",
    role: "frontend-разработчик",
  },
  {
    image: DmitryBespalov,
    name: "Дмитрий Беспалов",
    role: "backend-разработчик",
  },
  {
    image: IslambekMaratov,
    name: "Исламбек Маратов",
    role: "backend-разработчик",
  },
  {
    image: PavelPupenko,
    name: "Павел Пупенко",
    role: "backend-разработчик",
  },
  {
    image: AlexanderPak,
    name: "Александр Пак",
    role: "тестировщик",
  },
];

const Home: FunctionComponent = () => {
  return (
    <Container
      isLarge={true}
      className={styles.container}
    >
      <section className={styles.mainSection}>
        <h1 className={styles.title}>
          Найди путь к{" "}
          <strong className={styles.strong}>душевному спокойствию</strong> и{" "}
          <strong className={styles.strong}>эмоциональной стабильности</strong>{" "}
          с нами!
        </h1>
        <Image
          width={MainImage.width}
          height={MainImage.height}
          src={MainImage.src}
          alt="Найди путь к душевному спокойствию"
          className={styles.mainSectionImage}
        />
      </section>
      <section
        id="landing-advantages"
        className={styles.infoSection}
      >
        <div className={`${styles.info} ${styles.info1}`}>
          <h2 className={`${styles.title} ${styles.infoTitle}`}>
            Как работает сервис?
          </h2>
          <ul className={styles.infoList}>
            <li className={`${styles.infoListItem} ${styles.infoListItem1}`}>
              1 шаг. Знакомство с основами самопомощи и принципами
              когнитивно-поведенческой терапии (КПТ)
            </li>
            <li className={`${styles.infoListItem} ${styles.infoListItem2}`}>
              2 шаг. Уточнение своего запроса: прохождение тестов, получение
              рекомендаций, определение целей работы
            </li>
            <li className={`${styles.infoListItem} ${styles.infoListItem3}`}>
              3 шаг. Работа с иррациональными мыслями, формирование и
              закрепление альтернативных убеждений
            </li>
          </ul>
        </div>
        <div className={`${styles.info} ${styles.info2}`}>
          <h2 className={`${styles.title} ${styles.infoTitle}`}>
            Специалисты всегда будут рядом!
          </h2>
          <p className={styles.infoDescription}>
            Предоставление психологической поддержки от профессионала при
            необходимости
          </p>
        </div>
        <div className={`${styles.info} ${styles.info3}`}>
          <h2 className={`${styles.title} ${styles.infoTitle}`}>
            Научно-доказанный подход
          </h2>
          <p className={styles.infoDescription}>
            Мы основываемся на научных данных и сами проводим исследования
            эффективности нашего приложения
          </p>
        </div>
      </section>
      <section
        id="landing-partners"
        className={styles.partnersSection}
      >
        <h3 className={`${styles.title} ${styles.partnersTitle}`}>
          Наши партнёры
        </h3>
        <PrimarySwiper
          gap={20}
          slides={6}
        >
          {partners.map((el) => {
            return (
              <Link
                className={styles.partnerLink}
                target="_blank"
                href={el.link}
                key={el.alt}
              >
                <Image
                  width={el.image.width}
                  height={el.image.height}
                  src={el.image.src}
                  alt={el.alt}
                  className={styles.partnerImage}
                />
              </Link>
            );
          })}
        </PrimarySwiper>
      </section>
      <section
        id="landing-achievements"
        className={styles.achievementsSection}
      >
        <h3 className={styles.title}>Достижения</h3>
        <div className={styles.achievements}>
          <PrimarySwiper gap={15}>
            {achievements.map((el, i) => {
              return (
                <div
                  className={`${styles.achievementCard} ${el.className}`}
                  key={i}
                >
                  <h4 className={styles.achievementTitle}>{el.title}</h4>
                </div>
              );
            })}
          </PrimarySwiper>
        </div>
      </section>
      <section
        id="landing-team"
        className={styles.teamSection}
      >
        <h3 className={styles.title}>Команда</h3>
        <div className={styles.team}>
          {team.map((el) => {
            return (
              <div
                className={styles.teamMember}
                key={el.name}
              >
                <div className={styles.teamMemberPhotoContainer}>
                  <Image
                    width={el.image.width}
                    height={el.image.height}
                    src={el.image.src}
                    alt={el.name}
                    className={styles.teamMemberPhoto}
                  />
                </div>
                <div className={styles.teamMemberInfo}>
                  <div className={styles.teamMemberName}>{el.name}</div>
                  <div className={styles.teamMemberRole}>{el.role}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Container>
  );
};

export default Home;
