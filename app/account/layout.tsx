import { SideNavScreen } from "./SideNav";

export default function LeafLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto w-full h-auto space-y-4 p-4">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h4 className="text-xs md:text-sm font-medium text-gray-400">
          Home / <span className="text-gray-500">My Account</span>
        </h4>
        <h4 className="text-base font-semibold text-gray-700 lg:text-lg">
          Welcome Back <span className="text-red-500">John!</span>
        </h4>
      </header>

      <div className="flex space-x-4 items-stretch justify-between">
        <div className="block">
          <SideNavScreen />
        </div>
        <div className="basis-full shadow-sm p-2 md:basis-10/12">
          {children}
        </div>
      </div>
    </div>
  );
}
