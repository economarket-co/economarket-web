'use client';

import SocialNetWorkButton from "@/components/buttons/SocialNetworkButton";
import PasswordField from "@/components/fields/PasswordField";
import { TextField } from "@/components/fields/TextField";
import { handleSigninWithEmail, handleSignupWithEmail } from "@/utils/auth";
import { Button } from "@nextui-org/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function Signin() {
    const [fullName, setName] = useState('');
    const [email, setEmail] = useState(''); // [value, setValue
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSignup(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        try {
            await handleSignupWithEmail(email, password);
        } catch (error) {
            toast.error('Error iniciando sesión');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex w-full justify-end relative">
            <img src='/images/login-bg.jpeg' className="absolute w-full max-h-[100vh] z-[-10] object-fit" />
            <form onSubmit={handleSignup} className="flex w-full lg:w-1/2 flex-col justify-center items-center gap-5 border rounded-md py-8 bg-white">
                <h1 className="font-size-[26px] font-semibold">Crea una cuenta para ti</h1>

                <TextField
                    label="Nombre"
                    placeholder="Ingresa tu nombre aquí"
                    value={fullName}
                    onChange={setName}
                    isRequired
                />

                <TextField
                    label="Correo"
                    placeholder="Ingresa tu correo aquí"
                    value={email}
                    onChange={setEmail}
                    type="email"
                    isRequired
                />

                <PasswordField
                    label="Contraseña"
                    value={password}
                    setValue={setPassword}
                />

                <Button type="submit" color="success" className="text-white py-[10px] px-[70px]">Iniciar Sesión</Button>

                <div className="flex flex-col items-center gap-2 text-lg">
                    <span>¿Ya tienes una cuenta?</span>
                    <a href="/auth/signin" className="text-green-600">Inicia Sesión</a>
                </div>

                <div className="flex flex-col gap-4 justify-center items-center lg:flex-row">
                    <SocialNetWorkButton provider="google" />
                    <span className="text-[#B0BAC3] text-lg">
                        - O -
                    </span>
                    <SocialNetWorkButton provider="facebook" />
                </div>
            </form>
        </div>
    )
}