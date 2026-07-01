/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
  			display: ['Fraunces', 'ui-serif', 'serif'],
  			// Used for the small tracked-out labels (nav, eyebrows, stat captions).
  			// Kept as its own token — despite the name — so that role can be retuned
  			// independently of body copy; currently mapped to Inter, not a monospace face.
  			mono: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			tiffany: {
  				DEFAULT: '#81D8D0',
  				dark: '#6BC0C0',
  				light: '#B5E8E3',
  				50: '#F0FAF9',
  				100: '#D4F1EE',
  				200: '#B5E8E3',
  				300: '#81D8D0',
  				400: '#6BC0C0',
  				500: '#5AADA8',
  				600: '#4A9490',
  				700: '#3B7A77',
  				900: '#17302D',
  			},
  			paper: {
  				DEFAULT: '#FAF8F3',
  				dim: '#F2EEE4',
  			},
  			ink: {
  				DEFAULT: '#14181B',
  				50: '#F3F1EC',
  				100: '#E5E3DC',
  				200: '#CBCBC4',
  				300: '#A3A39C',
  				400: '#7C7C76',
  				500: '#5F6360',
  				600: '#454A48',
  				700: '#2B3134',
  				800: '#1C2124',
  				900: '#14181B',
  				950: '#0D1012',
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    'bg-tiffany',
    'bg-tiffany-dark',
    'bg-tiffany-light',
    'bg-tiffany-50',
    'bg-tiffany-100',
    'text-tiffany',
    'text-tiffany-dark',
    'text-tiffany-700',
    'border-tiffany',
    'hover:bg-tiffany-dark',
    'hover:text-tiffany',
    'hover:border-tiffany',
  ]
}