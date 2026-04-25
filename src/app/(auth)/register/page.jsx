"use client"
import Navbar from '@/component/Navbar';
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { useForm } from 'react-hook-form';

const page = () => {

    const {register,handleSubmit,watch,formState: {errors}} = useForm()
    
        const onSubmit = async (v) => {
            console.log(v)

            const { data, error } = await authClient.signUp.email({
                name: v.name,
                email: v.email,
                password: v.password,
                image: v.url,
                callbackURL: "/",
            });

            console.log(data,error)

            if(data){
                alert("Data Successfully")
            }
            if(error){
                alert("Undefined")
            }

        }
    
        // console.log(watch("email"))
        // console.log(watch("password"))

    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-center mt-5 mb-10'>
                <form onSubmit={handleSubmit(onSubmit)} className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-8">

                    <h2 className='text-3xl font-semibold text-center mb-5'>Register your account</h2>

                    <label className="label text-black font-semibold text-base">Your Name</label>
                    <input type="text" {...register("name", { required: "name Filed required" })} className="input w-full" placeholder="Enter your name" />
                    {errors.name && <p className='text-red-600 font-semibold'>{errors.name.message} </p>}

                    <label className="label text-black font-semibold text-base">Photo URL</label>
                    <input type="text" {...register("url", { required: "url Filed required" })} className="input w-full" placeholder="Enter your url" />
                    {errors.url && <p className='text-red-600 font-semibold'>{errors.url.message} </p>}

                    <label className="label text-black font-semibold text-base">Email address</label>
                    <input type="email" {...register("email", { required: "email Filed required" })} className="input w-full" placeholder="Enter email address" />
                    {errors.email && <p className='text-red-600 font-semibold'>{errors.email.message} </p>}

                    <label className="label text-black font-semibold text-base">Password</label>
                    <input type="password" {...register("password", { required: "password Filed required" })} className="input w-full" placeholder="Enter your password" />
                    {errors.password && <p className='text-red-600 font-semibold'> {errors.password.message}</p>}

                    <label className="label text-black mt-2 font-semibold"><input type="checkbox" className="checkbox checkbox-info" />Accept Term & Conditions</label>

                    <button className="btn btn-neutral mt-4">Register</button>
                </form>
            </div>
        </div>
    );
};

export default page;