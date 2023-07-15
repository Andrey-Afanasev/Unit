import {life} from '../js/app.js';

test('basic test', () => {
    let indicators = {name: 'Маг', health: 90};

    let result = life(indicators);
    expect(result).toBe(life(indicators))

})