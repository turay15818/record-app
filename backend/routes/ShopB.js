const express = require("express")
const router = require('express').Router();
const connection = require("../database-connection/DatabaseConnection")



router.post("/api/orangeMoneyAfrica-for-shop-B/Android", (req, res) => {
    const { downloadLocation, appDownloaded } = req.body;
    const sql = "INSERT INTO downloadInformation (downloadLocation, appDownloaded) VALUES (?, ?) ON DUPLICATE KEY UPDATE timestamp=CURRENT_TIMESTAMP";
    const values = [downloadLocation, appDownloaded];
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

router.post("/api/orangeMoneyAfrica-for-shop-B/Iphone", (req, res) => {
    const { downloadLocation, appDownloaded } = req.body;
    const sql = "INSERT INTO downloadInformation (downloadLocation, appDownloaded) VALUES (?, ?) ON DUPLICATE KEY UPDATE timestamp=CURRENT_TIMESTAMP";
    const values = [downloadLocation, appDownloaded];
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

router.post("/api/myOrange-for-shop-B/Android", (req, res) => {
    const { downloadLocation, appDownloaded } = req.body;
    const sql = "INSERT INTO downloadInformation (downloadLocation, appDownloaded) VALUES (?, ?) ON DUPLICATE KEY UPDATE timestamp=CURRENT_TIMESTAMP";
    const values = [downloadLocation, appDownloaded];
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

router.post("/api/myOrange-for-shop-B/Iphone", (req, res) => {
    const { downloadLocation, appDownloaded } = req.body;
    const sql = "INSERT INTO downloadInformation (downloadLocation, appDownloaded) VALUES (?, ?) ON DUPLICATE KEY UPDATE timestamp=CURRENT_TIMESTAMP";
    const values = [downloadLocation, appDownloaded];
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


module.exports = router