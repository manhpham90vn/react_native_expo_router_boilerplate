const Configs = {
  BASE_URL: process.env.EXPO_PUBLIC_BASE_URL || 'http://192.168.100.46:3000/',
  TIME_OUT: 30_000,
  DEBUG: Boolean(process.env.EXPO_PUBLIC_DEBUG) || true,
  LOG_STATE: false,
};

export default Configs;
