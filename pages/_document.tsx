import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head />
            <body className="bg-gray-50 font-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
