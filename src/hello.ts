export function helloWorld(): string {
    return "Hello world!" + abc(1);
}

function abc(i: number): string {
    return "abc " + i;
}

export default helloWorld;
