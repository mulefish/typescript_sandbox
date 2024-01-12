export const PASS = "PASS"
export const FAIL = "FAIL"
export type Receipt = {
    millisec?:number,
    verdict: boolean;
    receipt: { [key: string]: Rollup };
};

export type Rollup = {
    verdict: boolean, 
    seen: number
}


