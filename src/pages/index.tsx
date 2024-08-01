import Link from "next/link";
import Flag from "react-world-flags";

export default function Home() {
	return (
    <div className="w-screen h-screen items-center justify-center flex flex-col">
      <h1 className="text-center font-bold font-mono text-3xl">
        Pela Saude
      </h1>
      <p className="text-center">
        A vida precisa ser a prioridade de todos
      </p>
      <p>De onde você está acessando?</p>
      <div>
        <Link href={"/doencas?filter=55"}><Flag code="BR" alt="Bandeira do Brasil" className="w-10"/></Link>
      </div>
    </div>
	);
}
