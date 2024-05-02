import {PrismaClient} from '../generate/client/index'
const prisma = new PrismaClient(
    {
        datasources:{
            db: {
                url: process.env.DATABASE_URL,
            }
        }
    }
)
export default prisma