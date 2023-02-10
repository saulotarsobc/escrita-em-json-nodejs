import { dbRead, dbWrite } from "./database";

function debugar(title: any, data: any) {
    console.log(`======\n${title}\n`, data, "\n=======================\n");
}

async function reads() {
    let dadosCompletos = await dbRead({ index: "" });
    debugar("Sem index", dadosCompletos);

    let cidade = await dbRead({ index: 'cidade' });
    debugar("Com index", cidade);
};

async function writes() {
    const escrita1 = await dbWrite({ index: "", content: "bla bla bla" });
    debugar("Escrevendo sem index", escrita1);

    const escrita2 = await dbWrite({ index: "nome", content: "" });
    debugar("Escrevendo sem content", escrita2);

    const escrita3 = await dbWrite({ index: "nome", content: "costa" });
    debugar("Escrevendo com index", escrita3);
    
    const escrita4 = await dbWrite({ index: "idade", content: 30 });
    debugar("Escrevendo com index", escrita4);
};

reads();
// writes();


