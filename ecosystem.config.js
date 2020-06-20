module.exports = {
  apps: [
    {
      name: 'cs_com',
      script: 'yarn',
      args: 'start',
      interpreter: '/bin/bash',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
