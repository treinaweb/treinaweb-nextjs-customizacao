import type { NextFetchEvent, NextRequest } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
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
