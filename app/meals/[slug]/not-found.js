import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>페이지를 찾을 수 없습니다</h1>
      <p>요청하신 화면이 존재하지 않거나 메뉴 정보를 가져오는데 실패하였습니다.</p>
    </main>
  );
}
