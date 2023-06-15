declare module 'react-native-config' {
  export interface NativeConfig {
    AMPLITUDE_API_KEY: string;
  }

  const Config: NativeConfig;
  export default Config;
}
