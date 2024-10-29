import ProfileImage from "../../Images/ProfileImage";
import styles from "./styles.module.scss";
import { type ApplicationProfileData } from "@/client/redux/features/applications/types";
import { mapAgeToText } from "@/client/utils";
import { type FunctionComponent } from "react";

interface Props {
  profile: ApplicationProfileData;
}

const ApplicationProfileCard: FunctionComponent<Props> = ({ profile }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.profileInfo}>
          <div className={styles.username}>{profile.username}</div>
          <div
            className={`${styles.status} ${
              profile.isOnline ? styles.isOnline : ""
            }`}
          >
            {profile.isOnline ? "Онлайн" : "Был(а) недавно"}
          </div>
        </div>
        {/* <button className={styles.moreButton}>
          <MoreVerticalIcon />
        </button> */}
      </div>
      <ProfileImage
        className={styles.profileImage}
        size={188}
        src={profile.profileImage}
        alt={profile.username}
      />
      <div className={styles.info}>
        Возраст: {profile.age === 0 ? "не указан" : mapAgeToText(profile.age)}
      </div>
      {!!profile.problem && (
        <>
          <div className={styles.info}>Запрос:</div>
          <div className={styles.problems}>{profile.problem}</div>
        </>
      )}
      {/* <PrimaryButton className={styles.cardButton}>Чат</PrimaryButton> */}
    </div>
  );
};

export default ApplicationProfileCard;
