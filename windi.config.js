import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  extract: {
    include: ['src/**/*.tsx'],
  },
  shortcuts: {
    'with-animation': 'transition-all ease-in duration-75',
    'h-stack': 'flex justify-between items-center',
    btn: 'px-4 py-2 bg-gray-200 rounded-lg hover:(text-white bg-gray-500)',
    'btn-primary': 'px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900',
    // https://daisyui.com/components/alert/
    // btn-secondary
    // alert-error

    heading: 'text-2xl font-bold text-black',
    'fab-primary':
      'flex items-center justify-center fixed right-4 bottom-18 text-white bg-blue-600 rounded-full w-13 h-13',
  },
});
