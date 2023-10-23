import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export async function handleSignInWithProvider  (provider:  "google" | "facebook")  {
    const supabase = await createClientComponentClient();

    try {
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
    } catch (error) {
        console.log(error);
    }
};

export async function handleSigninWithEmail(email: string, password: string) {
    const supabase = await createClientComponentClient();

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) throw error;

    } catch (error) {
        console.log(error);
    }
}

export async function handleSignupWithEmail(email: string, password: string) {
    const supabase = await createClientComponentClient();

    try {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                emailRedirectTo: window.location.origin + "/api/auth/signin",
            }
        });

        if (error) throw error;
    } catch (error) {
        console.log(error);
    }

}