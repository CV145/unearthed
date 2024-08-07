import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        outDir: '../server/public',
        emptyOutDir: true
    },
    server: {
        proxy: {
            '/gifts': {
                target: 'http://localhost:3001'
            }
        }
    }
})

/*
In this code segment, we are specifying that when we run the command npm run build, the resources in the public directory will be output to the server/public directory. We are also specifying that when we try to access the /gifts endpoint from the client, we want the server to access this route at http://localhost:3001 while we are in development.
*/