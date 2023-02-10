import fs from 'fs/promises';
import path from 'path';

export const dbRead = async (params: any) => {
    try {
        const data = await fs.readFile(path.join(__dirname, '../../db.json'), { encoding: 'utf8' });
        if (params.index == "") {
            return JSON.parse(data);
        } else {
            return JSON.parse(data)[params.index];
        }
    } catch (err) {
        console.log(err);
        return { error: true };
    }
}

export const dbWrite = async (params: any) => {

    if (params.index == "" || params.content == "") {
        return { error: true, msg: "Sem index ou content não dá..." };
    }

    try {
        let data = await dbRead({ index: "" });
        data[params.index] = params.content;

        await fs.writeFile(path.join(__dirname, '../../db.json'), JSON.stringify(data));

        return await dbRead({ index: params.index });
    } catch (err) {
        console.log(err);
        return { error: true };
    }
}

