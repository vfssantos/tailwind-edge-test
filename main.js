
// Initialize worker with restricted permissions:
// Do not allow for 
//   - Read FileSystem (read)
//   - Write to FileSystem (write)
//   - Access to Environment Variables (env)
//   - Dynamic Command execution (run)
//   - Foreign Functions (ffi)
//   - System Metrics / Information, except for CPU

const tailwindWorker = new Worker(
    new URL("./tailwindcssWorker.js", import.meta.url).href,
    {
        type: "module",
        deno: {
            permissions: {
                env:false,
                read: false,
                write: false,
                ffi: false,
                run: false,
                sys:['cpu'] 
            }
        }
    }
);
