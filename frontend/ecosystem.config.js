require('dotenv').config({ path: '.env.deploy' });

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_PATH,
  DEPLOY_REPO,
  DEPLOY_SSH_KEY,
  DEPLOY_REF = 'origin/master',
  DEPLOY_SSH_CONF,
  PORT = 3000,
  DB_ADDRESS = 'mongodb://localhost:27017/mestodb',
} = process.env;

module.exports = {
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH,
      ssh_options: `StrictHostKeyChecking=no -i ${DEPLOY_SSH_KEY || '~/.ssh/practikum'}`,
      'post-deploy': `cd frontend && (export NODE_OPTIONS=--openssl-legacy-provider && npm install && npm run build)`,
    },
  },
};