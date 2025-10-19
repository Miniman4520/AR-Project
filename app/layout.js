export const metadata = {
  title: "AR Object Detection",
  description: "AR app with object detection",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}