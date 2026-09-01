export function cssVar(name: string): string {
    return getComputedStyle(document.documentElement)
        .getPropertyValue(name)
        .trim();
}

export function cssColor(name: string, alpha?: number): string {
    const value = cssVar(name);
    return alpha === undefined
        ? `rgb(${value})`
        : `rgb(${value} / ${alpha})`;
}