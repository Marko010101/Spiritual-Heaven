import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { logout as logoutApi } from "../../services/apiAuth.js";
import { useInfoUser } from "../../context/userContext.jsx";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { dispatch } = useInfoUser(); // Extract dispatch from context

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
      dispatch({ type: "userLogout" }); // Dispatch userLogout action
    },
  });

  return { logout, isLoading };
}
