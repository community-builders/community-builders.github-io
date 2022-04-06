module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    screens: {
      small: '320px',
      medium: '630px',
      large: '890px'
    },
    colors: {
      'dp-white': {
        200: 'var(--hs-theme-dp-white-200)',
        300: 'var(--hs-theme-dp-white-300)',
        400: 'var(--hs-theme-dp-white-400)',
        600: 'var(--hs-theme-dp-white-600)',
        'ink': 'var(--hs-theme-dp-white-ink)'
      },
      'dp-black': {
        200: 'var(--hs-theme-dp-black-200)',
        300: 'var(--hs-theme-dp-black-300)',
        400: 'var(--hs-theme-dp-black-400)',
        600: 'var(--hs-theme-dp-black-600)',
        'ink': 'var(--hs-theme-dp-black-ink)'
      },
      'dp-blue-grey': {
        200: 'var(--hs-theme-dp-blue-grey-200)',
        300: 'var(--hs-theme-dp-blue-grey-300)',
        400: 'var(--hs-theme-dp-blue-grey-400)',
        600: 'var(--hs-theme-dp-blue-grey-600)',
        'ink': 'var(--hs-theme-dp-blue-grey-ink)'
      },
      'dp-black-alpha': {
        DEFAULT: 'var(--hs-theme-dp-black-alpha)',
        'ink': 'var(--hs-theme-dp-black-alpha-ink)'
      },
      'dp-white-alpha': {
        DEFAULT: 'var(--hs-theme-dp-white-alpha)',
        'ink': 'var(--hs-theme-dp-white-alpha-ink)'
      },
      scarlet: {
        200: 'var(--hs-theme-scarlet-200)',
        300: 'var(--hs-theme-scarlet-300)',
        400: 'var(--hs-theme-scarlet-400)',
        600: 'var(--hs-theme-scarlet-600)',
        'ink': 'var(--hs-theme-scarlet-ink)'
      },
      plox: {
        200: 'var(--hs-theme-plox-200)',
        300: 'var(--hs-theme-plox-300)',
        400: 'var(--hs-theme-plox-400)',
        600: 'var(--hs-theme-plox-600)',
        'ink': 'var(--hs-theme-plox-ink)'
      },
      'native-blue': {
        200: 'var(--hs-theme-native-blue-200)',
        300: 'var(--hs-theme-native-blue-300)',
        400: 'var(--hs-theme-native-blue-400)',
        600: 'var(--hs-theme-native-blue-600)',
        'ink': 'var(--hs-theme-native-blue-ink)'
      },
      'bright-cyan': {
        200: 'var(--hs-theme-bright-cyan-200)',
        300: 'var(--hs-theme-bright-cyan-300)',
        400: 'var(--hs-theme-bright-cyan-400)',
        600: 'var(--hs-theme-bright-cyan-600)',
        'ink': 'var(--hs-theme-bright-cyan-ink)'
      },
      success: {
        200: 'var(--hs-theme-success-200)',
        300: 'var(--hs-theme-success-300)',
        400: 'var(--hs-theme-success-400)',
        600: 'var(--hs-theme-success-600)',
        'ink': 'var(--hs-theme-success-ink)'
      },
      warning: {
        200: 'var(--hs-theme-warning-200)',
        300: 'var(--hs-theme-warning-300)',
        400: 'var(--hs-theme-warning-400)',
        600: 'var(--hs-theme-warning-600)',
        'ink': 'var(--hs-theme-warning-ink)'
      },
      danger: {
        200: 'var(--hs-theme-danger-200)',
        300: 'var(--hs-theme-danger-300)',
        400: 'var(--hs-theme-danger-400)',
        600: 'var(--hs-theme-danger-600)',
        'ink': 'var(--hs-theme-danger-ink)'
      },
      primary: {
        200: 'var(--hs-theme-primary-200)',
        300: 'var(--hs-theme-primary-300)',
        400: 'var(--hs-theme-primary-400)',
        600: 'var(--hs-theme-primary-600)',
        'ink': 'var(--hs-theme-primary-ink)'
      },
      accent: {
        200: 'var(--hs-theme-accent-200)',
        300: 'var(--hs-theme-accent-300)',
        400: 'var(--hs-theme-accent-400)',
        600: 'var(--hs-theme-accent-600)',
        'ink': 'var(--hs-theme-accent-ink)'
      },
      surface: {
        200: 'var(--hs-theme-surface-200)',
        300: 'var(--hs-theme-surface-300)',
        400: 'var(--hs-theme-surface-400)',
        600: 'var(--hs-theme-surface-600)',
        'ink': 'var(--hs-theme-surface-ink)'
      },
    },
    // rounded-[]
    borderRadius: {
      'none': 'var(--hs-theme-radius-none)',
      'xs': 'var(--hs-theme-radius-xs)',
      'sm': 'var(--hs-theme-radius-sm)',
      'md': 'var(--hs-theme-radius-md)',
      'lg': 'var(--hs-theme-radius-lg)',
      'xl': 'var(--hs-theme-radius-xl)',
      'pill': 'var(--hs-theme-radius-pill)',
      'small': 'var(--hs-theme-radius-small)',
      'medium': 'var(--hs-theme-radius-medium)',
      'large': 'var(--hs-theme-radius-large)',
    },
    // border-[]
    borderWidth: {
      DEFAULT: '1px',
      'none': 'none',
      'xs': '1px',
      'sm': '2px',
      'md': '4px',
      'lg': '6px',
      'xl': '8px'
    },
    // gap-[]
    gap: {
      'none': 'var(--hs-theme-space-none)',
      'xs': 'var(--hs-theme-space-xs)',
      'sm': 'var(--hs-theme-space-sm)',
      'md': 'var(--hs-theme-space-md)',
      'lg': 'var(--hs-theme-space-lg)',
      'xl': 'var(--hs-theme-space-xl)',
      'pill': 'var(--hs-theme-space-pill)',
    },
    // m[]-[]
    margin: {
      'none': 'var(--hs-theme-margin-none)',
      'xs': 'var(--hs-theme-margin-xs)',
      'sm': 'var(--hs-theme-margin-sm)',
      'md': 'var(--hs-theme-margin-md)',
      'lg': 'var(--hs-theme-margin-lg)',
      'xl': 'var(--hs-theme-margin-xl)',
      'pill': 'var(--hs-theme-margin-pill)',
    },
    // p[]-[]
    padding: {
      'none': 'var(--hs-theme-padding-none)',
      'xs': 'var(--hs-theme-padding-xs)',
      'sm': 'var(--hs-theme-padding-sm)',
      'md': 'var(--hs-theme-padding-md)',
      'lg': 'var(--hs-theme-padding-lg)',
      'xl': 'var(--hs-theme-padding-xl)',
      'pill': 'var(--hs-theme-padding-pill)',
    },
    // outline-[]
    outlineWidth: {
      DEFAULT: '1px',
      'none': 'none',
      'xs': '1px',
      'sm': '2px',
      'md': '4px',
      'lg': '6px',
      'xl': '8px'
    },
    // ring-[]
    ringWidth: {
      DEFAULT: '1px',
      'none': 'none',
      'xs': '1px',
      'sm': '2px',
      'md': '4px',
      'lg': '6px',
      'xl': '8px'
    },
    // space-[]-[]
    spacing: {
      'none': 'var(--hs-theme-space-none)',
      'xs': 'var(--hs-theme-space-xs)',
      'sm': 'var(--hs-theme-space-sm)',
      'md': 'var(--hs-theme-space-md)',
      'lg': 'var(--hs-theme-space-lg)',
      'xl': 'var(--hs-theme-space-xl)',
      'pill': 'var(--hs-theme-space-pill)',
    },
    // font
    fontFamily: {
      'supertitle': 'var(--hs-theme-family-supertitle)',
      'title': 'var(--hs-theme-family-title)',
      'subtitle': 'var(--hs-theme-family-subtitle)',
      'body': 'var(--hs-theme-family-body)',
      'mono': 'var(--hs-theme-family-mono)',
      'small': 'var(--hs-theme-family-small)',
    },
    // text-[]
    fontSize: {
      'supertitle': 'var(--hs-theme-size-supertitle)',
      'title': 'var(--hs-theme-size-title)',
      'subtitle': 'var(--hs-theme-size-subtitle)',
      'body': 'var(--hs-theme-size-body)',
      'mono': 'var(--hs-theme-size-mono)',
      'small': 'var(--hs-theme-size-small)',
    },
    // font-[]
    fontWeight: {
      'black': 800,
      'bold': 700,
      'normal': 400,
      'light': 300,
    },
    // leading-[]
    lineHeight: {
      'broad': 'var(--hs-theme-line-height-broad)',
      'normal': 'var(--hs-theme-line-height-normal)',
      'condensed': 'var(--hs-theme-line-height-condensed)',
    },
  },
}