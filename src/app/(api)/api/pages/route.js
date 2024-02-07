import { getPages } from '@/app/lib/data.service';
import { NextResponse } from 'next/server';

export default async function get() {
  const pages = getPages();

  return NextResponse.json(pages);
}
