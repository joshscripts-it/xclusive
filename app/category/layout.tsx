import React from "react";

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  );
}
