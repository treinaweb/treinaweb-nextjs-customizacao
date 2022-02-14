import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    if (req.nextUrl.pathname === '/api/hello') {
        return NextResponse.next().cookie('a', '123');
    }

    return new Response(
        `
        <strong>Ola</strong>, Web Developers!
    `,
        {
            headers: {
                'Content-Type': 'text/html',
            },
            status: 404,
        }
    );
}
