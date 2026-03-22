import {defineConfig} from "vite"
import react, {reactCompilerPreset} from "@vitejs/plugin-react"
import babel from "@rolldown/plugin-babel"
import path from "path"
import svgr from "vite-plugin-svgr"

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr(),
        babel({presets: [reactCompilerPreset()]})
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})