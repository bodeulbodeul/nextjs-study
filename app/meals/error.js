"use client";
export default function Error({ error, reset }) {
  return (
    <main className="error">
      <h1>에러가 발생하였습니다.</h1>
      <h2>{error.message}</h2>
      <p>잠시 후 다시 시도해주시기 바랍니다.</p>
      <button onClick={() => reset()}>재시도</button>
    </main>
  );
}
