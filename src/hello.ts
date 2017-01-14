type Numero = number;
type Numret = number;

export function helloWorld(): string {
    const a: Numret = 1;
    return "Hello world!" + abc(a);
}

function abc(i: Numero): string {
    return "abc " + i;
}

export default helloWorld;
