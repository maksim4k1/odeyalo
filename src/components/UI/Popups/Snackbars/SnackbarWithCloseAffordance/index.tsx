"use client";

import styles from "./styles.module.scss";
import CloseIcon from "@/assets/svg/Icons/CloseIcon";
import Container from "@/components/UI/Container";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { PopupsService } from "@/redux/services/popups";
import { type FunctionComponent } from "react";

interface Props {
  isOpen: boolean;
  label: string;
}

const SnackbarWithCloseAffordance: FunctionComponent<Props> = ({
  isOpen,
  label,
}) => {
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(PopupsService.closeSnackbar());
  };

  return (
    <Container className={styles.snackbarContainer}>
      <div className={`${styles.snackbar} ${isOpen ? styles.opened : ""}`}>
        <div className={styles.label}>{label}</div>
        <div className={styles.closeButtonContainer}>
          <button
            onClick={onClickHandler}
            className={styles.closeButton}
          >
            <CloseIcon />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default SnackbarWithCloseAffordance;
