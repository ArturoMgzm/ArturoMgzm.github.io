module.exports = {
  source: [`tokens/**/*.json`],

  platforms: {
    scss: {
      transformGroup: 'scss',
      prefix: 'sd',
      buildPath: 'build/scss/',
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables',
        },
      ],
      actions: ['copy_assets'],
    },
  },

  android: {
    transforms: ['attribute/cti', 'name/cti/snake', 'color/hex', 'size/remToSp', 'size/remToDp'],
    buildPath: 'build/android/src/main/res/values/',
    files: [
      {
        destination: 'style_dictionary_colors.xml',
        format: 'android/colors',
      },
    ],
  },

  // If you don't want to call the registerTransform method a bunch of times
  // you can override the whole transform object directly. This works because
  // the .extend method copies everything in the config
  // to itself, allowing you to override things. It's also doing a deep merge
  // to protect from accidentally overriding nested attributes.
  transform: {
    // Now we can use the transform 'myTransform' below
    myTransform: {
      type: 'name',
      transformer: token => token.path.join('_').toUpperCase(),
    },
  },
  // Same with formats, you can now write them directly to this config
  // object. The name of the format is the key.
  format: {
    myFormat: ({ dictionary, platform }) => {
      return dictionary.allTokens.map(token => `${token.name}: ${token.value}`).join('\n');
    },
  },
  platforms: {
    // ...
  },
};
