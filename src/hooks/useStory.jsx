
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useStory = () => {
    const axiosPublic = useAxiosPublic()
    
    const {refetch, data: succStory = [] } = useQuery({
        queryKey: ['news'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/story`)
            return res.data
        }
    })
    return [succStory, refetch]

};

export default useStory;