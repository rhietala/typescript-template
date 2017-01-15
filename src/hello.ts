import * as R from "ramda";

type Numero = number;
type Numret = number;

export function helloWorld(): string {
    const a: Numret = 1;
    return "Hello world!" + abc(a);
}

function abc(i: Numero): string {
    return "abc " + i;
}

const greaterThan = R.curry((limit: number, value: number): boolean => {
    return value > limit;
});

export const onlyPositives = R.filter(greaterThan(0));

export default helloWorld;
