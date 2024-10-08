import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ChakraProvider } from "@chakra-ui/react"; // Import ChakraProvider

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ), // Perbaikan sintaksis pada backtick
    setup({ el, App, props }) {
        const root = createRoot(el);

        // Wrap the App component with ChakraProvider
        root.render(
            <ChakraProvider>
                <App {...props} />
            </ChakraProvider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
