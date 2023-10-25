import prisma from "@/db/clien";
import { User } from "@prisma/client";
import { Session } from "@supabase/auth-helpers-nextjs";

export async function createUser(session: Session) {
    // check if user exists
    const userData: User = {
        id: session.user.id,
        email: session.user.email || null,
        fullName: session.user.user_metadata.full_name  || '',
        phone: session.user.phone || null,
    }

    const userExist = await prisma.user.findUnique({ where: { id: userData.id } });

    if (userExist) {
        return userExist;
    }

    const user = await prisma.user.create({
        data: {
            ...userData
        }
    });

    return user;
}