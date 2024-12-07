import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

function getLocaleFromRequest(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language') || '';
  return acceptLanguage.toLowerCase().includes('zh') ? 'zh' : 'en';
}

// 创建 next-intl 中间件
const intlMiddleware = createMiddleware(routing);

// 导出中间件处理函数
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 检查路径是否已经包含语言前缀
  const pathnameHasLocale = routing.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // 如果路径没有语言前缀，根据用户的语言偏好重定向
  if (!pathnameHasLocale) {
    const locale = getLocaleFromRequest(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  // 使用 next-intl 中间件处理请求
  return intlMiddleware(request);
}

// 配置需要处理的路径
export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};