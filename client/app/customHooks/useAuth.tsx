import { checkAuthenticated } from "@/helpers/auth";
import { useAppDispatch } from "@/redux/hooks"

export const useAuth = () => {
    const dispatch = useAppDispatch();
    checkAuthenticated(dispatch);
}