import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const user = await currentUser();

        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        //If user already exist?
        const users = await db.select().from(usersTable)
            //@ts-ignore
            .where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress))

        //If Not& the Create New user Record
        if (users?.length <= 0) {
            const newUser = {
                name: user?.fullName ?? '',
                email: user?.primaryEmailAddress?.emailAddress ?? '',
                age: 0,
                points: 0
            }
            
            const result = await db.insert(usersTable)
                .values(newUser)
            return NextResponse.json(newUser)
        }
        return NextResponse.json(users[0])
    } catch (error) {
        console.error('Error in user API:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

