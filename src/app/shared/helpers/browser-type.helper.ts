export function getCurrentBrowser(): string {
  const userAgent: string = navigator.userAgent;

  if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) {
    return 'Chrome';
  }

  if (userAgent.includes('Firefox')) {
    return 'Firefox';
  }

  if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
    return 'Safari';
  }

  if (userAgent.includes('Edg')) {
    return 'Edge';
  }

  if (userAgent.includes('OPR') || userAgent.includes('Opera')) {
    return 'Opera';
  }

  return 'Unknown';
}