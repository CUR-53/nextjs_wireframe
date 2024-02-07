import { getQandas } from '@/app/lib/data.service';
import { NextResponse } from 'next/server';

export async function GET() {
  const qandas = getQandas();

  return NextResponse.json(qandas);
}
