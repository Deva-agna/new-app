import React, { useState } from 'react';
import loginimg from '../assets/image/loginimge.jpg'
import { BiShowAlt, BiSolidLowVision } from "react-icons/bi";
import Master from '../component/Layout/Master';
import { useNavigate  } from 'react-router-dom';


const LoginPage = () => {
    
    const [showPassword, setShowPassword] = useState(true);
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/user')
        console.log('test');
    }

    return (
        <section className="bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                <div className="md:w-1/2 px-8 md:px-16">
                    <h2 className="font-bold text-2xl text-[#002D74] underline">Login</h2>
                    <h2 className="font-bold text-lg text-[#002D74]">BPR Lingga Sejahtera</h2>
                    <p className="text-xs mt-4 text-[#002D74]">Silakan masuk ke akun anda.</p>
                    <form action="" className="flex flex-col gap-4">
                        <input className="p-2 mt-4 border-t-0 border-x-0 border-b-2 bg-gray-100 focus:outline-none focus:border-blue-300" type="text" name="user-id" placeholder="User ID"/>
                        <div className="relative">
                        <input className="p-2 border-t-0 border-x-0 border-b-2 bg-gray-100 w-full focus:outline-none focus:border-blue-300" type={showPassword ? 'password' : 'text'} name="password" placeholder="Password"/>
                            <button type='button' onClick={togglePasswordVisibility}>
                                {showPassword ? (
                                    <BiShowAlt className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"/>
                                ) : (
                                    <BiSolidLowVision className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"/>
                                )}
                            </button>
                        </div>
                        <button type='button' onClick={handleLogin} className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
                    </form>
                </div>
                <div className="md:block hidden w-1/2">
                    <img className="rounded-2xl object-cover" src={loginimg} alt="ilustrasi" />
                </div>
            </div>
        </section>
    );
}

export default LoginPage;