// 命令:npx jest other/jest.test.js --watch
test('test common matcher', () => {
    expect(2+2).toBe(4);
})

test('test common matcher2', () => {
    expect(2+2).not.toBe(5);
})

test('test common matcher3', () => {
    expect(1).toBeTruthy();
    expect(0).toBeFalsy();
})

test('test common matcher4', () => {
    expect(9).toBeGreaterThan(5);
    expect(0).toBeLessThan(6);
})