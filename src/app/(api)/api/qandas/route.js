import { addQandas, getQandas } from '@/app/lib/data.service';
import { NextResponse } from 'next/server';

export async function GET() {
  const qandas = getQandas();

  return NextResponse.json(qandas);
}

export async function POST(request) {
  const body = await request.json();
  console.log('Body POST', body);

  const newQanda = addQandas(body);
  console.log('ET POST', newQanda);

  return NextResponse.json(newQanda);
}
