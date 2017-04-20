const AWS = require('../');

describe('without XRAY_DISABLED', () => {
  it('exports aws-sdk wrapped with the aws-xray-sdk', () => {
    expect(new AWS.S3()).toBeDefined();
  });
});
