import express, { json, Request, Response } from "express";
import cors from "cors";
import { dbRead, dbWrite } from "./database";

const server = express()
    // .use(json())
    .use(cors());

/* read dada */
server.get("/read", async (req: Request, res: Response) => {
    const data = await dbRead({ index: "" })
    res.status(200).json(data);
});

server.get("/read/:index", async (req: Request, res: Response) => {
    const { index } = req.params;
    const data = await dbRead({ index });
    if (data) {
        res.status(200).json(data);
    } else {
        res.status(200).json({});
    };
});

/* write dada */
server.post("/write/:index/:content", async (req: Request, res: Response) => {
    const { index, content } = req.params;
    const data = await dbWrite({ index, content });
    if (data) {
        res.status(200).json(data);
    } else {
        res.status(200).json({});
    };
});

server.listen(3000, () => { console.log(`Sever up!`) });