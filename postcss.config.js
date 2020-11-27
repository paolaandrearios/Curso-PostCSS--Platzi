module.exports= {
  plugins: [
    // require('autoprefixer')({
    //   grid:true
    // }),
    require('postcss-import')({
      plugins: [
    require('stylelint'),
      ]
    }),
    require('postcss-font-magician')({
      variants: {
        'lato': {
          '300': ['woff'],
          '400': [],
        }
      }
    }),
    require('postcss-apply'),
    require('postcss-preset-env')({
      features:{
        preserve:false,
        stage: 1,
        autoprefixer: {
          grid:true,
          flexbox:false,
        },
        customProperties:false,
        calc:false,
      }
    }),
    require('postcss-color-gray'),
    require('postcss-color-function'),
    require('postcss-custom-selectors'),
    require('postcss-nesting'),
    require('postcss-custom-media')({
      preserve:false,
    }),
    // require('cssnano')
  ]
}