import { MainLayoutProps } from "./types";

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="w-screen min-h-screen bg-gray-100 flex flex-col items-center gap-8">
      {children}
    </div>
  );
};

export default MainLayout;
