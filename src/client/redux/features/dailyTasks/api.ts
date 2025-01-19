import { api } from "../../api";
import { type GetDailyTasksResponse } from "@/shared/types";

const dailyTasksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDailyTasks: builder.query<GetDailyTasksResponse, void>({
      query: () => "/daily/tasks",
    }),
  }),
});

export const { useGetDailyTasksQuery } = dailyTasksApi;
