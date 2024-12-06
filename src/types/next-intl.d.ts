declare module 'next-intl/server' {
  export function getMessages(): Promise<Record<string, string | Record<string, string>>>;
}
