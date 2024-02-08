import { addSubs, getSubs } from '@/app/lib/data.service';
import { NextResponse } from 'next/server';

export async function GET() {
  const Subs = getSubs();

  return NextResponse.json(Subs);
}

export async function POST(request) {
  const body = await request.json();
  console.log('Body POST', body);

  const newSub = addSubs(body);
  console.log('ET POST', newSub);

  return NextResponse.json(newSub);
}
