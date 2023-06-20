module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      [
        require('@babel/plugin-proposal-decorators').default,
        {
          legacy: true,
        },
      ],
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          '.png',
        ],
        alias: {
          '@assets': './src/assets',
          '@ui': './src/ui',
          '@hooks': './src/hooks',
          '@domain': './src/domain',
          '@navigation': './src/navigation',
          '@features': './src/features',
          '@providers': './src/providers',
          '@store': './src/store',
          '@styles': './src/styles',
        },
      },
    ],
  ],
};
