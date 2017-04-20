'use strict';

const AWSXRay = require('aws-xray-sdk');
const AWS = process.env.XRAY_DISABLED === 'true'
  ? require('aws-sdk')
  : AWSXRay.captureAWS(require('aws-sdk'));

module.exports = AWS;
