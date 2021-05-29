const express = require("express");
const router = express.Router();
const DB = require("./clubs");

router.get("/clubs", (req, res) => {
    res.status(200).json(DB.clubs);
});

router.get("/searchClubs/:term", (req, res) => {
    var clubs = DB.clubs.filter(c => c.name.toLowerCase().includes(req.params.term.toLowerCase()));
    res.status(200).json(clubs);
});

router.put("/club/:id", (req, res) => {

    var club = DB.clubs.find(c => c.id == req.params.id)

    if (!club) {
        res.status(400).json({ msg: "Nenhum time foi encontrado para esse ID" });
        return;
    }

    const {
        name,
        city,
        state,
        division,
        title,
        payrool,
    } = req.body;

    if (division != undefined && division != "A" && division != "B" && division != "C" && division != "") {
        res.status(400).json({ msg: "Insira a divisão corretamente com A, B, C ou deixe vazio." });
        return;
    }

    if (name != undefined) club.name = name;
    if (city != undefined) club.city = city;
    if (state != undefined) club.state = state;
    if (division != undefined) club.division = division;
    if (title != undefined) club.title = title;
    if (payrool != undefined) club.payrool = payrool;

    res.status(200).json(club);


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
    if (name && city && state && title && payrool != undefined) {
        if (division == "A" || division == "B" || division == "C" || division == "") {
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

router.delete("/delete/:id", (req, res) => {
    var club = DB.clubs.find(c => c.id == req.params.id);
    var isValid = false;
    if (club != undefined) {
        var index = DB.clubs.indexOf(club);
        if (index > -1) {
            DB.clubs.splice(index, 1);
            isValid = true;
        }
    }
    if (isValid) {
        res.status(200).json({ msg: "Time excluido com sucesso." });
    } else {
        res.status(400).json({ msg: "Time de id '" + req.params.id + "' não encontrado" });
    }
});

module.exports = router;
