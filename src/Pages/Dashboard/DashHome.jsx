import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const DashHome = () => {
    const axiosPublic = useAxiosPublic()
    const handleSubmitStory = e =>{
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const image = form.image.value;
        const content = form.content.value
        const date = new Date()
        const ourStory = {title, image, content, date}
        console.log(ourStory);
        axiosPublic.post('/story', ourStory)
            .then(res => {
                console.log(res.data);
                if(res.data.acknowledged){
                    Swal.fire({
                        icon: "success",
                        title: "Your Story Post",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      form.reset()
                }
            })
    }
    return (
        <div>
            <p className="text-center font-titleText text-3xl">Create Story</p>
            <hr />
            <div className="mt-10 flex justify-center">
                <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmitStory} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Title</span>
                            </label>
                            <input type="text" placeholder="Story Title" name="title" className="input focus:border-none focus:outline-none" required />
                            <hr />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Image Link</span>
                            </label>
                            <input type="text" placeholder="Image Link Only" name="image" className="input focus:border-none focus:outline-none" required />
                            <hr />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Description</span>
                            </label>
                            <textarea type="text" placeholder="Text..." name="content" className="textarea focus:border-none focus:outline-none" required />
                            <hr />
                        </div>
                        
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Post" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DashHome;