import Image from "next/image";
export default function Home() {
  return (
    <main className="flex  items-center justify-center gap-18  p-8 drop-shadow-lg">
      <div>
        <button className="cls-btn">
          <span>Take Attendanc</span>
        </button>
        <button className="cls-btn">
          <span>Visit Dashboard</span>
        </button>
      </div>
    </main>
  );
}
