import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { execSync } from 'child_process';

const getBuildInfo = () => {
  try {
    const hash = execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim().slice(0, 7);
    const date = new Date().toISOString();
    
    return { hash, date };
  } catch (error) {
    return { 
      hash: 'unknown', 
      date: new Date().toISOString(),
    };
  }
};

const buildInfo = getBuildInfo();

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  define: {
    __BUILD_CONST_BUILD_HASH__: JSON.stringify(buildInfo.hash),
    __BUILD_CONST_BUILD_DATE__: JSON.stringify(buildInfo.date),
  }
});