import expect from 'expect'
globalThis.expect = expect
await import('jest-extended')

describe('expect-extend (unit)', function () {
  it('should be able to load (you can delete this test once you have others)', async () => {
    expect(4).toBe(4)
    expect([]).toBeArray()
  })
})

