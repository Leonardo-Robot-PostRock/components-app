export type Theme = 'light' | 'dark' | 'system'

export const isValidTheme = (value: Theme): value is Theme => {
    return value === 'light' || value === 'dark' || value === 'system';
}