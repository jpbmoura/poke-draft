import MyTeam from "@/components/my-team";

interface GameLayoutProps {
  children: React.ReactNode;
}

export default function GameLayout({ children }: GameLayoutProps) {
  return (
    <div className="flex">
      <MyTeam />
      {children}
    </div>
  );
}
