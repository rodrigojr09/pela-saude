import { doencas, paises } from "@/api";
import { useRouter } from "next/router";

export default function Doencas() {
	const router = useRouter();
	const filter = router.query.filter;
	const pais = paises.find(
		(pais) => typeof filter === "string" && pais.codigo === parseInt(filter)
	);
	const f_doencas = doencas.filter(
		(doenca) => pais && doenca.regioes.includes(pais)
	);
	return (
		<div>
			Doenças da Região do {pais?.nome}
			{f_doencas.map((a) => a.nome)}
		</div>
	);
}
