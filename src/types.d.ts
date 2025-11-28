import { Row } from 'react-table';
import { SxProps } from '@mui/system';
import { AxiosError } from 'axios';
import DCStartOptions from '@shared/types';

class ApplePaySession {
  static canMakePayments() {
    return false;
  }
}
declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  type BackendError = AxiosError<{
    code: number;
    message: string;
    error: string;
    response?: {
      data: {
        code: number;
        error: string;
        errorId: string;
        messages: string | string[];
      };
    };
  }>;

  type ServerError = {
    messages: string | string[];
    key?: string;
  };

  type ColorButton = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';

  type RowFunc = (row: Row) => void;

  type SelectOption<V = string> = {
    label: string;
    value: V;
    imageUrl?: string | null;
    tooltipTitle?: string;
  };
  interface Window {
    ApplePaySession: ApplePaySession | undefined;
    dontchurn?: DontChurn;
  }
  const Paddle: any;
}

declare module 'react-table' {
  import { TableCellProps } from '@mui/material';
  export interface UseTableColumnOptions {
    cellProps?: Partial<TableCellProps>;
    hide?: boolean;
    mobileProps?: {
      hideHeaderCell?: boolean;
      withHeader?: boolean;
      styles?: SxProps;
    };
  }
}

// "window.dontchurn.config" object
interface DCConfig {
  appId: string;
}

// "window.dontchurn" object
interface DontChurn {
  config?: DCConfig;
  start?: (options?: DCStartOptions) => Promise<void>;
}

// CSS Module Declarations - Allow importing CSS files
declare module '*.module.css' {
  const content: { [className: string]: string };
  export default content;
}

// Global CSS - Allow side-effect imports
declare module '*.css';

// Allow Swiper CSS imports
declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination';
declare module 'swiper/css/scrollbar';
declare module 'swiper/css/autoplay';
declare module 'swiper/css/effect-fade';
declare module 'swiper/css/effect-coverflow';
declare module 'swiper/css/effect-flip';
declare module 'swiper/css/effect-cube';
declare module 'swiper/css/effect-cards';
declare module 'swiper/css/thumbs';
declare module 'swiper/css/zoom';
declare module 'swiper/css/free-mode';
declare module 'swiper/css/grid';
declare module 'swiper/css/manipulation';
declare module 'swiper/css/mousewheel';
declare module 'swiper/css/parallax';
declare module 'swiper/css/controller';
declare module 'swiper/css/a11y';
declare module 'swiper/css/history';
declare module 'swiper/css/hash-navigation';
declare module 'swiper/css/keyboard';
declare module 'swiper/css/lazy';
declare module 'swiper/css/virtual';
