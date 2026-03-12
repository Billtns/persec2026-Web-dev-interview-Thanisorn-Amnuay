export function isValidBrackets(input: string): boolean {

    const stack: string[] = []

    const pairs: Record<string, string> = {
        ")": "(",
        "]": "[",
        "}": "{"
    }

    for (const c of input) {

        if (c === "(" || c === "[" || c === "{") {
            stack.push(c)
        } else {
            const last = stack.pop()
            if (last !== pairs[c]) return false
        }

    }

    return stack.length === 0
}


export function sortCodes(arr: string[]): string[] {

    return arr.sort((a, b) => {

        const prefixA = a.match(/[A-Za-z]+/)?.[0] ?? ""
        const prefixB = b.match(/[A-Za-z]+/)?.[0] ?? ""

        if (prefixA !== prefixB) {
            return prefixA.localeCompare(prefixB)
        }

        const numA = parseInt(a.match(/\d+/)?.[0] ?? "0")
        const numB = parseInt(b.match(/\d+/)?.[0] ?? "0")

        return numA - numB
    })
}


export function autocomplete(search: string, items: string[], maxResult: number): string[] {

    const s = search.toLowerCase()

    const filtered = items.filter(i =>
        i.toLowerCase().includes(s)
    )

    const sorted = filtered.sort((a, b) => {

        const aIndex = a.toLowerCase().indexOf(s)
        const bIndex = b.toLowerCase().indexOf(s)

        return aIndex - bIndex
    })

    return sorted.slice(0, maxResult)
}


export function intToRoman(num: number): string {

    const map: [number, string][] = [
        [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
        [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
        [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
    ]

    let result = ""

    for (const [value, symbol] of map) {

        while (num >= value) {
            result += symbol
            num -= value
        }

    }

    return result
}


export function romanToInt(str: string): number {

    const map: Record<string, number> = {
        I: 1, V: 5, X: 10,
        L: 50, C: 100,
        D: 500, M: 1000
    }

    let total = 0

    for (let i = 0; i < str.length; i++) {

        const current = map[str[i]]
        const next = map[str[i + 1]]

        if (next && current < next) {
            total -= current
        } else {
            total += current
        }

    }

    return total
}

export function sortDigits(num: number): number {
    const intToString = num.toString();
    const stringToArr = intToString.split("");
    const sortNum = stringToArr.sort((a, b) => Number(b) - Number(a));
    const joinArr = sortNum.join("");
    const result = parseInt(joinArr)

    return result
}


export function tribonacci(seed: number[], n: number): number[] {

    if (n === 0) return []

    const result = [...seed]

    while (result.length < n) {

        const last3 = result.slice(-3)

        const sum = last3.reduce((a, b) => a + b, 0)

        result.push(sum)

    }

    return result.slice(0, n)
}