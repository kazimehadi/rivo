import type {Config} from 'tailwindcss'
export default {content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],theme:{extend:{colors:{navy:'#0B2A4A',teal:'#1FB5B0',deep:'#14627A',ink:'#222B33',mint:'#DDF3F1'},fontFamily:{display:['var(--display)','var(--bn)','system-ui','sans-serif'],sans:['var(--sans)','var(--bn)','system-ui','sans-serif']}}},plugins:[]} satisfies Config
