const { expect } = require('chai');

describe('parse-version module', () => {
  let parse = null;

  beforeEach('import module', () => {
    parse = require('.');
  });

  it('can parse semver string', () => {
    expect(parse('1.0.5')).to.eql({
      major: 1,
      minor: 0,
      patch: 5
    });
  });

  // Generate some failing cases:
  const inputs = {
    number: [0, 10, 20.3, -1, Infinity],
    null: [null],
    undefined: [undefined],
    symbol: [Symbol('1.0.0')],
    function: [
      () => {
        return '1.0.0';
      }
    ],
    array: [[1, 0, 0], ['1.0.0']],
    'invalid string': [
      'latest',
      '2.0',
      '',
      'next',
      'beta',
      '-1.0.0',
      '1.0.0b',
      '1.0.0.b',
      '1.0.0-beta3'
    ]
  };

  Object.keys(inputs).forEach(type => {
    it(`throws on ${type} input`, () => {
      inputs[type].forEach(input => {
        const wrong = () => {
          return parse(input);
        };

        expect(wrong).to
          .throw(
            Error,
            'Unable to parse version',
            `Doesn't throw for input ${String(input)}`
          )
          .that.has.property('details')
          .that.is.an('object')
          .that.has.all.keys(['input', 'error'])
          .with.property('input', input);
      });
    });
  });
});
