"use client";

import styles from "./styles.module.scss";
import { useParams, useSearchParams } from "next/navigation";
import TestsService from "@/api/tests";
import RadarChart from "@/components/UI/Charts/RadarChart";
import SimpleBarChart from "@/components/UI/Charts/SimpleBarChart";
import Container from "@/components/UI/Container";
import ListItemWithSwitch from "@/components/UI/Lists/ListItemWithSwitch";
import PageTitle from "@/components/UI/Titles/PageTitle";
import checkAuth from "@/components/hocs/checkAuth";
import StateWrapper from "@/components/wrappers/StateWrapper";
import { ACCESS } from "@/config/access.config";
import { useCheckbox } from "@/hooks/inputHooks";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { useSetDefaultState } from "@/hooks/setDefaultStateHook";
import { testsActions } from "@/redux/features/tests";
import {
  selectGetTestInfoState,
  selectGetTestResultsState,
  selectTestInfo,
  selectTestResults,
} from "@/redux/features/tests/selectors";
import { useEffect } from "react";

function ResultPage() {
  const { id } = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const datesCheckboxes = useCheckbox();
  const dispatch = useAppDispatch();
  const getTestInfoState = useAppSelector(selectGetTestInfoState);
  const getTestResultsState = useAppSelector(selectGetTestResultsState);
  const testInfo = useAppSelector(selectTestInfo);
  const testResults = useAppSelector(selectTestResults);

  useEffect(() => {
    const userId = searchParams.get("userId");
    dispatch(TestsService.getTestInfo(id));
    if (userId) {
      dispatch(TestsService.getTestResults(id, userId));
    } else {
      dispatch(TestsService.getTestResults(id));
    }
  }, [dispatch, id, searchParams]);

  useSetDefaultState(testsActions.getTestInfoSetDefaultState);
  useSetDefaultState(testsActions.getTestResultsSetDefaultState);

  return (
    <Container>
      <StateWrapper state={[getTestInfoState, getTestResultsState]}>
        {testInfo && testResults && (
          <>
            <PageTitle className={styles.title}>
              История теста: {testInfo.title}
            </PageTitle>
            {testResults.length ? (
              <>
                {testInfo.scales.length > 2 ? (
                  <RadarChart
                    results={testResults}
                    scales={testInfo.scales}
                    values={datesCheckboxes.value}
                    className={styles.radarChart}
                  />
                ) : (
                  <SimpleBarChart
                    results={testResults}
                    scales={testInfo.scales}
                    values={datesCheckboxes.value}
                    className={styles.barChart}
                  />
                )}
                <ul>
                  {testResults.map((el) => {
                    return (
                      <ListItemWithSwitch
                        onChange={datesCheckboxes.onChange}
                        className={styles.listItem}
                        value={el.id}
                        key={el.id}
                        label={el.datetime}
                        link={`/results/detail/${el.id}`}
                      />
                    );
                  })}
                </ul>
              </>
            ) : (
              <div className={styles.errorLabel}>
                Отсутствует история прохождения теста
              </div>
            )}
          </>
        )}
      </StateWrapper>
    </Container>
  );
}

export default checkAuth(ResultPage, true, [
  ACCESS.psychologist,
  ACCESS.hr,
  ACCESS.client,
]);
