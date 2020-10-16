import { PrismaClient, PrismaClientOptions, User, Comment, Post } from "@prisma/client";
const prismaConfig: PrismaClientOptions = {
  log: ["info", "warn"],
};

const prisma = new PrismaClient(prismaConfig);

async function main(): Promise<void> {
    await prisma.comment.create({
        data: {
            content: "A comment!",
            author: {
                connect: {
                    id: 9000 // not a real id
                },
            },
            authorId: 9000, // not a real id
            post: {
                connect: {
                    id: 9000 // not a real id
                }
            }
        }
    });
}

// Make node return a non-zero error code if the promise is rejected.
process.on("unhandledRejection", (ex) => {
  throw ex;
});

void main().finally(() => {
  void prisma.$disconnect();
});
