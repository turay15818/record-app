import express from "express"
import connection from "../database-connection/DatabaseConnection.js"
const router = express.Router()



router.post("/api/orangeMoneyAfrica-for-flagshipshop/Android", (req, res) => {
    const { downloadLocation, appDownloaded, coordinate, timestamp } = req.body;
    const sql = "INSERT INTO downloadInformation (downloadLocation, appDownloaded, coordinate) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE timestamp=CURRENT_TIMESTAMP";
    const values = [downloadLocation, appDownloaded, coordinate, timestamp];
    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            console.log(results.affectedRows);
            res.sendStatus(200);
        }
    });
});

router.post("/api/orangeMoneyAfrica-for-flagshipshop/Iphone", (req, res) => {
    const { downloadLocation, appDownloaded, coordinate, timestamp } = req.body;
    const sql = "INSERT INTO downloadInformation (downloadLocation, appDownloaded, coordinate) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE timestamp=CURRENT_TIMESTAMP";
    const values = [downloadLocation, appDownloaded, coordinate, timestamp];
    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            console.log(results.affectedRows);
            res.sendStatus(200);
        }
    });
});

router.post("/api/myOrange-for-flagshipshop/Android", (req, res) => {
    const { downloadLocation, appDownloaded, coordinate, timestamp } = req.body;
    const sql = "INSERT INTO downloadInformation (downloadLocation, appDownloaded, coordinate) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE timestamp=CURRENT_TIMESTAMP";
    const values = [downloadLocation, appDownloaded, coordinate, timestamp];

    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            console.log(results.affectedRows);
            res.sendStatus(200);
        }
    });
});

router.post("/api/myOrange-for-flagshipshop/Iphone", (req, res) => {
    const { downloadLocation, appDownloaded, coordinate, timestamp } = req.body;
    const sql = "INSERT INTO downloadInformation (downloadLocation, appDownloaded, coordinate) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE timestamp=CURRENT_TIMESTAMP";
    const values = [downloadLocation, appDownloaded, coordinate, timestamp];
    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            console.log(results.affectedRows);
            res.sendStatus(200);
        }
    });
});


export default router