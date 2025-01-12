"use client";
import { Provider } from "react-redux";
import store from "../redux/store";
import "./styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className="overflow-y-scroll ">{children}</body>
      </html>
    </Provider>
  );
}
