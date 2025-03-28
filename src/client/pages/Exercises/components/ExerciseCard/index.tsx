"use client";

import styles from "./styles.module.scss";
import { Modal, PrimaryButton, SecondaryButton } from "@/client/components";
import { pages } from "@/shared/data";
import { type GetTestsResponseData } from "@/shared/types";
import { type FC, useState } from "react";

interface Props {
  exercise: GetTestsResponseData[number];
}

export const ExerciseCard: FC<Props> = ({ exercise }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const renderModalContent = () => {
    return (
      <div>
        <p className={styles.modalDescription}>{exercise.description}</p>
        <div className={styles.modalButtons}>
          <SecondaryButton
            href={pages.result.getLink({ params: { id: exercise.id } })}
          >
            История
          </SecondaryButton>
          <PrimaryButton
            href={pages.exercise.getLink({ params: { id: exercise.id } })}
          >
            Пройти
          </PrimaryButton>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className={styles.card}
        onClick={handleOpen}
      >
        <img
          src={exercise.image}
          alt={exercise.title}
          className={styles.image}
        />
        <h5 className={styles.title}>{exercise.title}</h5>
      </div>
      <Modal
        isOpen={isOpen}
        title={exercise.title}
        onClose={handleClose}
        content={renderModalContent()}
      />
    </>
  );
};
