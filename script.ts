import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
    // prisma queries
    const user = await prisma.user.create({ data: { name: "jose" } })
    console.log(user)
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })