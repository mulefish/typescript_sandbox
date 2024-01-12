export const PASS = "PASS"
export const FAIL = "FAIL"
export type Receipt = {
    verdict: boolean;
    receipt: { [key: string]: Rollup };
};

export type Rollup = {
    verdict: boolean, 
    seen: number
}
