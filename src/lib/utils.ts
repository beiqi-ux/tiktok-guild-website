import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 智能跳转功能
export const smartRedirect = (url: string) => {
  // 检测用户设备
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    typeof window !== 'undefined' ? window.navigator.userAgent : ''
  );

  // 检测操作系统
  const isIOS = /iPad|iPhone|iPod/.test(
    typeof window !== 'undefined' ? window.navigator.userAgent : ''
  );

  const isAndroid = /Android/.test(
    typeof window !== 'undefined' ? window.navigator.userAgent : ''
  );

  if (typeof window !== 'undefined') {
    if (isMobile) {
      // 移动端 - 强制打开网页版以确保能访问到具体的招募页面
      // 创作者招募页面在app内可能无法正确显示，所以直接用网页版
      window.open(url, '_blank');
    } else {
      // 桌面端 - 直接在新标签页打开网页版
      window.open(url, '_blank');
    }
  }
};

// 检测是否为特殊TikTok链接
const isSpecialTikTokURL = (url: string): boolean => {
  const specialPatterns = [
    /tiktok\.com\/tcn\//,
    /scout_creators/,
    /creator/,
    /business/,
    /agency_scout_source/,
    /ShareLinkID=/
  ];

  return specialPatterns.some(pattern => pattern.test(url));
};

// 从TikTok URL提取用户名
const extractUsername = (url: string): string => {
  // 支持各种TikTok URL格式
  const patterns = [
    /tiktok\.com\/@([^/?]+)/,
    /tiktok\.com\/([^/@?]+)/,
    /vm\.tiktok\.com\/([^/?]+)/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }

  // 如果无法提取用户名，返回默认值
  return 'broadguild';
};

// 检测设备类型
export const getDeviceInfo = () => {
  if (typeof window === 'undefined') return { isMobile: false, isIOS: false, isAndroid: false };

  const userAgent = window.navigator.userAgent;

  return {
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent),
    isIOS: /iPad|iPhone|iPod/.test(userAgent),
    isAndroid: /Android/.test(userAgent),
    isDesktop: !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
  };
};
