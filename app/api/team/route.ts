import { NextResponse } from 'next/server';
import { getMembersCollection } from '@/lib/mongodb';

export async function GET() {
  try {
    const collection = await getMembersCollection();

    // Fetch all members
    const allMembers = await collection.find({}).toArray();

    return NextResponse.json(allMembers);

  } catch (error) {
    console.error('Error fetching team data:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch team data' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, ...memberData } = body;

    const collection = await getMembersCollection();

    const newMember = {
      ...memberData,
      type,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await collection.insertOne(newMember);

    return NextResponse.json({
      success: true,
      data: { ...newMember, _id: result.insertedId }
    });

  } catch (error) {
    console.error('Error adding team member:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to add team member' },
      { status: 500 }
    );
  }
}
