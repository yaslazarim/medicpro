import "dontenv/config";
import { PrismaClient } from "../generated/prisma/client";
import  { PrismaPg } from '@prisma/adapter-pg';
import { Prisma } from "@prisma/client/extension";

const connectionString = `${process.env.DATABASE_URL}`;

let prisma : PrismaClient;
const adapter = new PrismaPg({ connectionString });

if(process.env.NODE_ENV === 'production'){
    prisma = new PrismaClient({ adapter })
} else{
    let globalWithPrisma = global as typeof globalThis & {
        prisma: PrismaClient;
    }

    if(!globalWithPrisma.prisma){
        globalWithPrisma.prisma = new PrismaClient({ adapter });
    }
    prisma = globalWithPrisma.prisma;
}

export default prisma;