import test from "ava"
import { enlargeGasUsed } from "../src/util"

test("enlargeGasUsed", t => {
  const cases: { gasUsed: bigint, percent: bigint, result: bigint }[] = [
    {
      gasUsed: 21000n,
      percent: 1n,
      result: 21210n,
    },
    {
      gasUsed: 123456n,
      percent: 12n,
      result: 138271n,
    },
    {
      gasUsed: 123456n,
      percent: 11n,
      result: 137037n,
    }
  ]

  cases.forEach(obj => {
    const result = enlargeGasUsed(obj.gasUsed, obj.percent);
    t.is(result, obj.result);
  })
})
