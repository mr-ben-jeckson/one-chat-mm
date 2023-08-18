import prisma from "@/app/helpers/prismadb";

import getSession from "./getSession";

const getUsers = async () => {
    const session = await getSession();

    if(!session?.user?.email) {
        return [];
    }

    try {
        const user = await prisma.user.findMany({
            orderBy: {
                createAt: 'desc',
            },
            where: {
                NOT: {
                    email: session.user.email,
                }
            }
        });

        return user;
    } catch (error) {
        return [];
    }
};

export default getUsers;
 