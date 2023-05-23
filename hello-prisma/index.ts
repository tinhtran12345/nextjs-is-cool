import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // ... you will write your Prisma Client queries here
    // Create User
    // const user = await prisma.user.create({
    //     data: {
    //         name: "Alice",
    //         email: "alice@prisma.io1",
    //     },
    // });
    // console.log(user);
    // const user = await prisma.user.create({
    //     data: {
    //         name: "Bob",
    //         email: "bob@prisma.io2",
    //         posts: {
    //             create: {
    //                 title: "Hello World",
    //             },
    //         },
    //     },
    // });
    // Retrieve all User records
    // const users = await prisma.user.findMany();
    // console.log(users);
    const usersWithPosts = await prisma.user.findMany({
        include: {
            posts: true,
        },
    });
    console.dir(usersWithPosts, { depth: null });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
