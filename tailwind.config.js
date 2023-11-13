module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    fontFamily: {
        'sans': ['"Work Sans"']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("tailwindcss"),
    require("daisyui"),
  ]
}
