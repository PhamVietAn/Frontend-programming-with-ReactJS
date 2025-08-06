let str: string = "hello world";

function removeDuplicateChars(s: string): string {
    return Array.from(new Set(s.split(''))).join('');
}

console.log(removeDuplicateChars(str));
