import postcss from "npm:postcss";
import tailwindcss from "npm:tailwindcss";

// Simulated TailwindCSS run in a restricted environment
const runTailwindInRestrictedEnv = async () => {
    try {
        const result = await postcss([tailwindcss({
            // minimal tailwind.config.js configuration
            content: [{
                raw: '<div class="text-red-500">Hello World</div>',
                extension: 'html',
            }],
            theme: {
                extend: {},
            },
            plugins: [],

        })]).process('@tailwind utilities;', {
            from: undefined,
        });

        // print the result
        console.log(result.css);

        // close the worker
        return self.close();

    } catch (error) {
        console.error('Error running TailwindCSS:', error.message);
    }
};

runTailwindInRestrictedEnv();


