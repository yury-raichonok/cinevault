export enum ButtonType {
    ACTION = 'ACTION',
    LINK = 'LINK',
}

export const BUTTON_SIZE = {                                                                    
    sm: { width: '80px',  height: '32px' },                                                       
    md: { width: '120px', height: '40px' },                                                       
    lg: { width: '160px', height: '48px' },                                                       
  } as const;

export type ButtonSize = keyof typeof BUTTON_SIZE;
