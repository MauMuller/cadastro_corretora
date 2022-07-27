/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
            './*.html',
            './js/*.js',
            './js/models/*.js'
          ],
  theme: {
    extend: {
      colors: {
        'first_yellow_color':'#FFE990',
        'second_yellow_color':'#FFD466',
        'thirty_yellow_color':'#FFB800',
        'fourty_yellow_color':'#dd8500a1',
        
        'first_red_color':'#C90000',
        'second_red_color':'#DB0B0B',
        
        'first_green_color':'#00C92C',
        'second_green_color':'#0BDB5E',

        'first_black_color':'#000000d4'
      },

      width: {
        '35rem':'35rem',
        '55rem':'55rem',
        '70rem':'70rem',
        '35%':'35%',
        '50%':'50%',
        '25%':'25%',
        '80%':'80%',
        '90%':'90%'
      },

      height: {
        '25rem':'25rem',
        '30rem':'30rem',
        '45rem':'45rem'
      },

      boxShadow: {
        'shadow_alugado':'2px 2px 6px #DB0B0B',
        'shadow_disponivel':'2px 2px 6px #0BDB5E',
        'shadow_default':'4px 4px 6px',
        'shadow_actived':'-4px -4px 6px'
      }
    },
  },
  plugins: [],
}
