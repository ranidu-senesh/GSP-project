export const COLORS={
    darkGray:'darkgray',
    red:'green',
    blue:'blue',
    light:'#fff',
    green:'#16C47F',
    Lgreen:'#075B5E',
    orange:'#FF7601',
    black:'#000000',
    primary:'darkgreen'

}as const;

export type colorTypes = keyof typeof COLORS;