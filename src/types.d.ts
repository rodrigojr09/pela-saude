export interface Doenca {
	id: string;
	nome: string;
	apelidos: string[];
	descoberta: Doenca.Descoberta;
	regioes: Doenca.Pais[];
}

namespace Doenca {
	export interface Descoberta {
		ano: number;
		local: Pais;
		descobridor: string;
	}
	export interface Pais {
		nome: string;
		codigo: number;
		regiao: string;
	}
}
