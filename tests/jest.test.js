// https://jestjs.io/docs/en/getting-started
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3)
})

// Jasmine is built into Jest
// https://jasmine.github.io/index.html
describe('A suite is just a function', function() {
  var a

  it('and so is a spec', function() {
    a = true

    expect(a).toBe(true)
  })
})

describe('A suite is just an anonymous function', () => {
  var a
  it('and so is a spec', () => {
    a = true
    expect(a).toBe(true)
  })
})
