import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <h1 className="text-red-400 text-lg font-bold">Flujos de trabajo</h1>
        <p>Escoge alguno de los flujos de trabajo que tenemos en la bliblioteca:</p>
        <ul className="mt-4 pl-4 list-disc">
          <li className="text-red-300"><Link href="/workflows/flujo-prestamo-libros">Préstamo de libros.</Link></li>
        </ul>
      </main>
      <footer className="row-start-3 flex gap-2 flex-wrap items-center justify-center">
        Para más información visite el <a className="text-red-300" href="https://github.com/lechediaz/poc-workflow-documentation">repositorio de GitHub</a>.
      </footer>
    </div>
  );
}
