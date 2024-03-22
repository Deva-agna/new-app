import { AiOutlineUserAdd  } from "react-icons/ai";

const InputUser = () => {
    return (
        <>
            {/* <div className="w-full bg-gray-100 rounded-lg shadow-md">
                <div className="p-4">
                    <label htmlFor="" className="text-gray-400 text-xs">ID Karyawan</label>
                    <input type="text" className="bg-gray-100 outline-none border-[1px] border-gray-400 px-2 text-sm focus:border-[#002D74] h-8 rounded-md w-full mt-1" />
                    <label htmlFor="" className="text-gray-400 text-xs">ID Karyawan</label>
                    <input type="text" className="bg-gray-100 outline-none border-[1px] border-gray-400 px-2 text-sm focus:border-[#002D74] h-8 rounded-md w-full mt-1" />
                </div>
            </div> */}
            <div className="w-full bg-gray-100 rounded-lg shadow-md p-4">
                <div className="flex justify-between items-center mb-4">
                    <h5 className="">Table User</h5>
                    <button className="btn bg-[#002D74] text-white btn-sm"><AiOutlineUserAdd size={20} className="me-2"/>Add</button>
                </div>
                <div className="flex w-full overflow-x-auto">
                    <table className="table-hover table">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Where</th>
                                <th>Description</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default InputUser;