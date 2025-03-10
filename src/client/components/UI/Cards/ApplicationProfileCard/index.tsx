import { ProfileImage } from "../../Images";
import styles from "./styles.module.scss";
import { type GetApplicationResponseData } from "@/shared/types";
import { mapAgeToText } from "@/shared/utils";
import { type FC } from "react";

interface Props {
  profile: GetApplicationResponseData;
}

export const ApplicationProfileCard: FC<Props> = ({ profile }) => {
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
    </div>
  );
};
