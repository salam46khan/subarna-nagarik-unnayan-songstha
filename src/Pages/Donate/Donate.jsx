import Pageheader from "../../Shared/Pageheader/Pageheader";
import bkash from '../../assets/bikash.png'
import nogod from '../../assets/nogod.png'
const Donate = () => {
    return (
        <div>
            <Pageheader title={'Donate'}></Pageheader>
            <div className="container mx-auto py-10 px-3">
                <h2 className="text-2xl font-mainText text-center">Donation for disable citizen</h2>
                <hr/>
                <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-5 ">
                    <div className="border p-3 rounded">
                        <img className="w-full rounded" src={bkash} alt="" />
                    </div>
                    <div className="border p-3 rounded">
                        <img className="w-full rounded" src={nogod} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;