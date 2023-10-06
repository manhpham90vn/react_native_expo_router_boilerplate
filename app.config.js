module.exports = {
  expo: {
    name: 'react-native-expo-router-boilerplate',
    slug: 'react-native-expo-router-boilerplate',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/1024x1024.png',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/images/1284x2778.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/1024x1024.png',
        backgroundColor: '#ffffff',
      },
      package: 'com.manhpham90vn.reactNativeExpoBoilerplate',
    },
    web: {
      favicon: './assets/images/1024x1024.png',
    },
    plugins: ['expo-router'],
    scheme: 'react-native-expo-router-boilerplate',
    experiments: {
      tsconfigPaths: true,
    },
    extra: {
      eas: {
        projectId: 'c8627f62-08d2-4fa0-9d2d-b821568ead34',
      },
    },
  },
};
