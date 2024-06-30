import { checkUsernameApi } from "@/api/user/api";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import { FailureResponse } from "types/api";

interface CheckUsernameResponse {
  taken: string;
}

export const useCheckUsernameMutation = (
  options?: UseMutationOptions<CheckUsernameResponse, FailureResponse, string>
): UseMutationResult<CheckUsernameResponse, FailureResponse, string> => {
  return useMutation({
    mutationFn: (username: string) => {
      return checkUsernameApi(username);
    },
    ...options,
  });
};
