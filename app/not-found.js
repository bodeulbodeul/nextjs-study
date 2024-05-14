import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>페이지를 찾을 수 없습니다</h1>
      <Link href="/">Home</Link>
    </main>
  );
}
