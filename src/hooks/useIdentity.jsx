import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useIdentity = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { refetch, data: identity = [] } = useQuery({
        queryKey: ['news', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/user?email=${user.email}`)
            return res.data
        }
    })
    return [identity, refetch]
};

export default useIdentity;