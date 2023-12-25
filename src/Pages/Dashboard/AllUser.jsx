import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaUser } from "react-icons/fa6";
import { MdAdminPanelSettings } from "react-icons/md";
import Swal from "sweetalert2";

const AllUser = () => {
    const [users, setUsers] = useState([])
    const axiosPublic = useAxiosPublic()
    axiosPublic.get('/users')
        .then(res => {
            // console.log(res.data);
            setUsers(res.data)
        })

    const handleAdmin = id => {
        console.log(id);
        axiosPublic.patch(`/user/admin/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
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
                            <th>SL No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <th>{item.name}</th>
                                <th>{item.email}</th>
                                <th>
                                    <button onClick={() => handleAdmin(item._id)} className={`btn shadow btn-circle text-2xl ${item.admin ? 'btn-disabled' : ''}`}>
                                        {
                                            item.admin ? <MdAdminPanelSettings /> : <FaUser ></FaUser>
                                        }

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

export default AllUser;