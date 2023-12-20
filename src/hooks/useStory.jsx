
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useStory = () => {
    const axiosPublic = useAxiosPublic()
    
    const { refetch, data: story = [] } = useQuery({
        queryKey: ['story'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/story`)
            return res.data.data
        }
    })
    return [ refetch, story]

};

export default useStory;