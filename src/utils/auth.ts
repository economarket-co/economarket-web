import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import axios from "axios";
import { toast } from "react-hot-toast";

export async function handleSignInWithProvider(provider: "google" | "facebook") {
    const supabase = await createClientComponentClient();

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
            redirectTo: window.location.origin + "/api/auth/signin",
            queryParams: {
                access_type: "offline",
                prompt: "consent",
            },
        },
    });

    if (error) throw error;
};

export async function handleSigninWithEmail(email: string, password: string) {
    const supabase = await createClientComponentClient();

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) throw error;

    await axios.get("/api/auth/signin");
    // redirect to home page
    window.location.href = "/";
}

export async function handleSignupWithEmail(email: string, password: string, fullName: string) {
    const supabase = await createClientComponentClient();

    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            emailRedirectTo: window.location.origin + "/api/auth/signin",
        }
    });

    if (error) throw error;

    await axios.get("/api/auth/signin", {
        params: {
            fullName: fullName
        }
    });

    // redirect to home page
    window.location.href = "/";
}