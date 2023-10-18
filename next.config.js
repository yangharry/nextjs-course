const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {import('next').NextConfig} */

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'HEEIL',
        mongodb_password: '1234',
        mongodb_database: 'my-site-dev',
      },
    };
  }
  return {
    env: {
      mongodb_username: 'HEEIL',
      mongodb_password: '1234',
      mongodb_database: 'my-site',
    },
  };
};
