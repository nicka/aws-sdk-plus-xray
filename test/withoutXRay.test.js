describe('with XRAY_DISABLED=true', () => {
  beforeEach(() => {
    process.env.XRAY_DISABLED = 'true';
  });

  afterEach(() => {
    delete process.env.XRAY_DISABLED;
  });

  it('exports the default aws-sdk', () => {
    const AWS = require('../'); // eslint-disable-line
    expect(new AWS.S3()).toBeDefined();
  });
});
