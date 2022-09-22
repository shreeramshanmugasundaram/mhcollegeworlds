import express from "express";
const router = express();
import path from "path"
import {fileURLToPath} from 'url';

const __filename =fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

router.get("/:dte",(req,res)=>{
    const {dte} = req.params
    res.sendFile(path.join(__dirname,'/cet_cutoff',`${dte}.pdf`))
})

export default router