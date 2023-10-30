import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { v4 as uuidv4, v4 } from 'uuid';

export async function uploadFilesFromClient(path: string, file: File) {
    const supabase = await createClientComponentClient();

    const {data, error} = await supabase.storage.from("images").upload(`${path}/` + v4(), file);

    if (error) throw error;

    return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${data.path}`
}