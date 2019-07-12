export function sum(...vals: number[]): number {
    return vals.reduce((total, val) => total += val);
}
