import { describe, it, expect } from "vitest"
import { autocomplete, intToRoman, isValidBrackets, romanToInt, sortCodes, sortDigits, tribonacci } from "../src/utility"

describe("Bracket Validator", () => {

    it("() should be true", () => {
        expect(isValidBrackets("()")).toBe(true)
    })

    it("([]] should be false", () => {
        expect(isValidBrackets("([]]")).toBe(false)
    })

    it("([{}]) should be true", () => {
        expect(isValidBrackets("([{}])")).toBe(true)
    })

    it("([[{}]]] should be false", () => {
        expect(isValidBrackets("[[{}]]]")).toBe(false)
    })

     it(") should be false", () => {
        expect(isValidBrackets(")")).toBe(false)
    })

    it("(]}]) should be false", () => {
        expect(isValidBrackets("(]}])")).toBe(false)
    })

    it("([)] should be false", () => {
        expect(isValidBrackets("([)]")).toBe(false)
    })

    it("} should be false", () => {
        expect(isValidBrackets("([)]")).toBe(false)
    })

    it("empty string should be true", () => {
        expect(isValidBrackets("")).toBe(true)
    })

})


describe("Sort Codes", () => {

    it(`["TH19", "SG20", "TH2"] should be ["SG20", "TH2", "TH19"]`, () => {
        expect(sortCodes(["TH19", "SG20", "TH2"])).toStrictEqual(["SG20", "TH2", "TH19"])
    })

    it(`["TH10", "TH3Netflix", "TH1", "TH7"] should be ["TH1", "TH3Netflix", "TH7", "TH10"]`, () => {
        expect(sortCodes(["TH10", "TH3Netflix", "TH1", "TH7"])).toStrictEqual(["TH1", "TH3Netflix", "TH7", "TH10"])
    })

})

describe("Auto Complete", () => {

    it(`autocomplete("th", ["Mother","Think","Worthy","Apple","Android"], 2) should be ["Think","Mother"]`, () => {
        expect(autocomplete("th", ["Mother", "Think", "Worthy", "Apple", "Android"], 2)).toStrictEqual(["Think", "Mother"])
    })

})


describe("Int To Roman", () => {

    it(`1989 should be MCMLXXXIX`, () => {
        expect(intToRoman(1989)).toStrictEqual("MCMLXXXIX")
    })

    it(`2000 should be MM`, () => {
        expect(intToRoman(2000)).toStrictEqual("MM")
    })

    it(`68 should be LXVIII`, () => {
        expect(intToRoman(68)).toStrictEqual("LXVIII")
    })

    it(`109 should be CIX`, () => {
        expect(intToRoman(109)).toStrictEqual("CIX")
    })
})


describe("Roman To Int", () => {

    it(`MCMLXXXIX should be 1989`, () => {
        expect(romanToInt("MCMLXXXIX")).toStrictEqual(1989)
    })

    it(`MM should be 2000`, () => {
        expect(romanToInt("MM")).toStrictEqual(2000)
    })

    it(`LXVIII should be 68`, () => {
        expect(romanToInt("LXVIII")).toStrictEqual(68)
    })

    it(`CIX should be 109`, () => {
        expect(romanToInt("CIX")).toStrictEqual(109)
    })
})

describe("Sort Digits", () => {

    it(`3008 should be 8300`, () => {
        expect(sortDigits(3008)).toStrictEqual(8300)
    })

    it(`1989 should be 9981`, () => {
        expect(sortDigits(1989)).toStrictEqual(9981)
    })

    it(`2679 should be 9762`, () => {
        expect(sortDigits(2679)).toStrictEqual(9762)
    })

    it(`9163 should be 9631`, () => {
        expect(sortDigits(9163)).toStrictEqual(9631)
    })
})


describe("Tribonacci", () => {

    it(`[1, 3, 5],5 should be [1, 3, 5, 9, 17]`, () => {
        expect(tribonacci([1, 3, 5], 5)).toStrictEqual([1, 3, 5, 9, 17])
    })

    it(`[],0 should be []`, () => {
        expect(tribonacci([], 0)).toStrictEqual([])
    })

    it(`[5, 2, 0],5 should be [5,2,0,7,9]`, () => {
        expect(tribonacci([5, 2, 0], 5)).toStrictEqual([5, 2, 0, 7, 9])
    })

    it(`[2, 2, 2], 3 should be [2, 2, 2]`, () => {
        expect(tribonacci([2, 2, 2], 3)).toStrictEqual([2, 2, 2])
    })

    it(`[10, 10, 10], 4 should be [10, 10, 10, 30]`, () => {
        expect(tribonacci([10, 10, 10], 4)).toStrictEqual([10, 10, 10, 30])
    })

})