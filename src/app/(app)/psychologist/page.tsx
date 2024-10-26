"use client";

import styles from "./styles.module.scss";
import PsychologistsService from "@/client/api/psychologists";
import MyPsychologistCard from "@/client/components/UI/Cards/MyPsychologistCard";
import PsychologistCard from "@/client/components/UI/Cards/PsychologistCard";
import Container from "@/client/components/UI/Container";
import PageTitle from "@/client/components/UI/Titles/PageTitle";
import checkAuth from "@/client/components/hocs/checkAuth";
import StateWrapper from "@/client/components/wrappers/StateWrapper";
import { useAppDispatch, useAppSelector } from "@/client/hooks/reduxHooks";
import { useSetDefaultState } from "@/client/hooks/setDefaultStateHook";
import { selectSendApplicationState } from "@/client/redux/features/applications/selectors";
import { selectProfile } from "@/client/redux/features/auth/selectors";
import { psychologistsActions } from "@/client/redux/features/psychologists";
import {
  selectGetMyPsychologistsState,
  selectGetPsychologistsState,
  selectMyPsychologists,
  selectPsychologists,
} from "@/client/redux/features/psychologists/selectors";
import { ACCESS } from "@/shared/config/access.config";
import { type FC, useEffect } from "react";

const PsychologistPage: FC = () => {
  const dispatch = useAppDispatch();
  const psychologists = useAppSelector(selectPsychologists);
  const myPsychologists = useAppSelector(selectMyPsychologists);
  const getPsychologistsState = useAppSelector(selectGetPsychologistsState);
  const getMyPsychologistsState = useAppSelector(selectGetMyPsychologistsState);
  const sendApplicationState = useAppSelector(selectSendApplicationState);
  const profile = useAppSelector(selectProfile);

  useEffect(() => {
    dispatch(PsychologistsService.getMyPsychologists());
    dispatch(PsychologistsService.getPsychologists());
  }, [dispatch, sendApplicationState.isSuccess]);

  const filteredPsychologists = psychologists.filter(
    (el) =>
      myPsychologists.findIndex((val) => el.userId === val.userId) === -1 &&
      el.userId !== profile.id,
  );

  useSetDefaultState(psychologistsActions.getPsychologistsSetDefaultState);
  useSetDefaultState(psychologistsActions.getMyPsychologistsSetDefaultState);

  return (
    <Container>
      <PageTitle>Психологи</PageTitle>
      <StateWrapper state={[getPsychologistsState, getMyPsychologistsState]}>
        <h2 className={styles.subtitle}>
          {myPsychologists.length
            ? "Мои психологи"
            : "У вас пока нет психологов"}
        </h2>
        {myPsychologists.map((psychologist) => (
          <MyPsychologistCard
            key={psychologist.userId}
            psychologist={psychologist}
          />
        ))}
        <h2 className={styles.subtitle}>
          {filteredPsychologists.length ? "Все психологи" : ""}
        </h2>
        <div className={styles.psychologistList}>
          {filteredPsychologists.map((psychologist) => (
            <PsychologistCard
              key={psychologist.userId}
              psychologist={psychologist}
            />
          ))}
        </div>
      </StateWrapper>
    </Container>
  );
};

export default checkAuth(PsychologistPage, true, [ACCESS.public]);
