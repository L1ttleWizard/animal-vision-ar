import { ScreenBackground } from "@/components/ScreenBackground";
import { TabBar } from "@/components/TabBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute inset-0">
      <ScreenBackground />
      <div className="relative z-10 h-full">{children}</div>
      <TabBar />
    </div>
  );
}
