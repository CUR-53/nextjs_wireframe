import { addQandas, getQandas } from '@/app/lib/data.service';
import { NextResponse } from 'next/server';

export async function GET() {
  const qandas = getQandas();

  return NextResponse.json(qandas);
}

export async function POST(request) {
  const newQanda = addQandas();

  console.log('ET POST', newQanda);
  return NextResponse.json({ tak: 'for post' });
}
