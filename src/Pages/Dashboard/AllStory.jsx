import { FaDeleteLeft } from "react-icons/fa6";
import useStory from "../../hooks/useStory";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AllStory = () => {
    const [story, refetch] = useStory()
    const axiosPublic = useAxiosPublic()
    const handleDelete = id =>{
        console.log(id);
        axiosPublic.delete(`/story/${id}`)
         .then(res => {
            console.log(res.data);
            if(res.data.deletedCount>0){
                Swal.fire({
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch()
            }
         })
    }
    return (
        <div>
            <p className="text-center font-titleText text-3xl">All user</p>
            <hr />
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="p-0">SL No</th>
                            <th>Image</th>
                            <th>Story</th>
                            <th>Description</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            story.map((item, index) => <tr key={item._id}>
                                <th className=" ">{index + 1}</th>
                                <th><img className="w-16" src={item.image} alt="" /></th>
                                <th>{item.title}</th>
                                <th><p className="font-thin text-xs">{item.content}</p></th>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn shadow btn-circle text-2xl bg-red-50 text-red-400 hover:text-white hover:bg-red-400">
                                        <FaDeleteLeft />
                                    </button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllStory;