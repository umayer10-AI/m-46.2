"use client"
import Navbar from '@/component/Navbar';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const page = () => {

    const {register,handleSubmit,watch,formState: {errors}} = useForm()

    const [show, setShow] = useState(false)

    const onSubmit = async (v) => {
        console.log(v)

        const { data, error } = await authClient.signIn.email({
            email: v.email,
            password: v.password,
            rememberMe: true,
            callbackURL: "/",
        });

        console.log(data)

    }

    // console.log(watch("email"))
    // console.log(watch("password"))
    

    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-center mt-5 mb-10'>
                <form onSubmit={handleSubmit(onSubmit)} className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-8">

                    <h2 className='text-3xl font-semibold text-center mb-5'>Register your account</h2>

                    <label className="label text-black font-semibold text-base">Email address</label>
                    <input type="email" {...register("email", { required: "email Filed required" })} className="input w-full" placeholder="Enter email address" />
                    {errors.email && <p className='text-red-600 font-semibold'>{errors.email.message} </p>}

                    <label className="label text-black font-semibold text-base">Password</label>
                    <input type={show ? "text":"password"} {...register("password", { required: "password Filed required" })} className="input w-full" placeholder="Enter your password" /> <span onClick={() => setShow(!show)}>{show?<FaEye/>:<FaEyeSlash/>}</span>
                    {errors.password && <p className='text-red-600 font-semibold'> {errors.password.message}</p>}

                    <button type='submit' className="btn btn-neutral my-4">Login</button>

                    <p className='text-center font-semibold text-base'>Dont’t Have An Account ? <Link href={'/register'} className='
                    text-red-600'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default page;