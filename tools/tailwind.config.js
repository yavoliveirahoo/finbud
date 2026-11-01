// Usado só para gerar tailwind.css (veja tools/build-css.sh). O app não precisa disso para rodar.
const v = n => `rgb(var(--${n}) / <alpha-value>)`;
module.exports = {
  content: ['./index.html'],
  theme: { extend: { colors: {
    ink: v('ink'),
    slate: { 100: v('s100'), 200: v('s200'), 300: v('s300'), 400: v('s400'), 500: v('s500'), 600: v('s600'), 700: v('s700'), 800: v('s800'), 900: v('s900') }
  } } }
};
