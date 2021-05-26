const express = require("express");
const router = express.Router();
const DB = require("./clubs");

router.get("/clubs", (req, res) => {
    res.status(200).json(DB.clubs);
});

router.post("/newClub", (req, res) => {
    const {
        name,
        city,
        state,
        division,
        title,
        payrool,
    } = req.body;
    if (name && city && state && title && payrool != undefined){
        if(division == "A" || division == "B" || division == "C" || division == ""){
            const id = DB.clubs.length + 1;
            DB.clubs.push({
                id,
                name,
                city,
                state,
                division,
                title,
                payrool,
            });
            res.status(200).json({ msg: "Time adicionado com sucesso." });
        } else {
            res.status(400).json({ msg: "Insira a divisão corretamente com A, B, C ou deixe vazio." });
        }
    } else {
        res.status(400).json({ msg: "Os dados do time estão incompletos." });
    }
});

module.exports = router;
