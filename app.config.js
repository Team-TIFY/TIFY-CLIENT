module.exports = ({ config }) => ({
  name: config.name,
  slug: 'tify-client',
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.webforprofessionals.rate-repository-app',
    buildNumber: '1.0.0',
  },
  android: {
    package: 'com.webforprofessionals.raterepositoryapp',
    versionCode: 1,
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
  },
  extra: {
    eas: {
      projectId: '5cb8fe04-f2ac-4ffa-aecc-78ce14de4260',
    },
  },
})
