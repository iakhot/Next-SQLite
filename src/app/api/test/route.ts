import prisma from "@/db";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const testData = await prisma.test.findMany();
        return NextResponse.json({
            testData
        });
    } catch (error) {
        return NextResponse.json({
            msg: 'Failed to retrieve data',
            error: (error as Error).message
        }, { status: 500 });
    }
};

export const POST = async (req: Request) => {
    try {
        const { key, value } = await req.json();
        if (!key || typeof key !== 'string') {
            return NextResponse.json({
                msg: 'Invalid or missing key'
            }, { status: 400 });
        }
        const existingKey = await prisma.test.findFirst({
            where: { key }
        });
        if (existingKey) {
            return NextResponse.json({
                msg: 'Record with this key already exists'
            }, { status: 409 });
        }
        const newRecord = await prisma.test.create({
            data: { key, value }
        });
        return NextResponse.json({
            msg: 'Record created successfully',
            author: newRecord
        });
    } catch (error) {
        return NextResponse.json({
            msg: 'Failed to create the author',
            error: (error as Error).message
        }, { status: 500 });
    }
};