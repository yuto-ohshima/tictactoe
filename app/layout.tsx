import { FC, PropsWithChildren } from "react";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;