import express from "express"
import connection from "../database-connection/DatabaseConnection.js"
const router = express.Router()


// my_orange_app_download_for_iphone_at_regent_rd
// my_orange_app_download_for_android_at_regent_rd
// orange_money_africa_app_download_for_iphone_at_regent_rd
// orange_money_africa_app_download_for_android_at_regent_rd

// my_orange_app_download_for_iphone_at_wilkenson_rd
// my_orange_app_download_for_android_at_wilkenson_rd
// orange_money_africa_app_download_for_iphone_at_wilkenson_rd
// orange_money_africa_app_download_for_android_at_wilkenson_rd

// my_orange_app_download_for_iphone_at_kenema
// my_orange_app_download_for_android_at_kenema
// orange_money_africa_app_download_for_iphone_at_kenema
// orange_money_africa_app_download_for_android_at_kenema

// my_orange_app_download_for_iphone_at_kailahun
// my_orange_app_download_for_android_at_kailahun
// orange_money_africa_app_download_for_iphone_at_kailahun
// orange_money_africa_app_download_for_android_at_kailahun



router.get('/', (req, res) => {
    const sql = `
select 'my_orange_app_download_for_iphone_at_regent_rd' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Regent Road' and appDownloaded = 'My Orange App For Iphone'
union all
select 'my_orange_app_download_for_android_at_regent_rd' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Regent Road' and appDownloaded = 'My Orange App For Android'
union all
select 'orange_money_africa_app_download_for_iphone_at_regent_rd' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Regent Road' and appDownloaded = 'Orange Money Africa Iphone'
union all
select 'orange_money_africa_app_download_for_android_at_regent_rd' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Regent Road' and appDownloaded = 'Orange Money Africa Android'

union all

select 'my_orange_app_download_for_iphone_at_kenema' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema' and appDownloaded = 'My Orange App For Iphone'
union all
select 'my_orange_app_download_for_android_at_kenema' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema' and appDownloaded = 'My Orange App For Android'
union all
select 'orange_money_africa_app_download_for_iphone_at_kenema' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema' and appDownloaded = 'Orange Money Africa Iphone'
union all
select 'orange_money_africa_app_download_for_android_at_kenema' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema' and appDownloaded = 'Orange Money Africa Android'

union all

select 'my_orange_app_download_for_iphone_at_kailahun' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kailahun' and appDownloaded = 'My Orange App For Iphone'
union all
select 'my_orange_app_download_for_android_at_kailahun' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kailahun' and appDownloaded = 'My Orange App For Android'
union all
select 'orange_money_africa_app_download_for_iphone_at_kailahun' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kailahun' and appDownloaded = 'Orange Money Africa Iphone'
union all
select 'orange_money_africa_app_download_for_android_at_kailahun' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kailahun' and appDownloaded = 'Orange Money Africa Android'

union all

select 'my_orange_app_download_for_iphone_at_wilkenson_rd' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wilkenson Road' and appDownloaded = 'My Orange App For Iphone'
union all
select 'my_orange_app_download_for_android_at_wilkenson_rd' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wilkenson Road' and appDownloaded = 'My Orange App For Android'
union all
select 'orange_money_africa_app_download_for_iphone_at_wilkenson_rd' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wilkenson Road' and appDownloaded = 'Orange Money Africa Iphone'
union all
select 'orange_money_africa_app_download_for_android_at_wilkenson_rd' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wilkenson Road' and appDownloaded = 'Orange Money Africa Android';

    `;
    connection.query(sql, (error, results) => {
        if (error) {
            throw error;
        }
        // const successfulTotalSum = results[0].total;
        // const unsuccessfulTotalSum = results[1].total;

        const my_orange_app_download_for_iphone_at_regent_rd = results[0].total
        const my_orange_app_download_for_android_at_regent_rd = results[1].total
        const orange_money_africa_app_download_for_iphone_at_regent_rd = results[2].total
        const orange_money_africa_app_download_for_android_at_regent_rd = results[3].total

        const my_orange_app_download_for_iphone_at_kenema = results[4].total
        const my_orange_app_download_for_android_at_kenema = results[5].total
        const orange_money_africa_app_download_for_iphone_at_kenema = results[6].total
        const orange_money_africa_app_download_for_android_at_kenema = results[7].total

        const my_orange_app_download_for_iphone_at_kailahun = results[8].total
        const my_orange_app_download_for_android_at_kailahun = results[9].total
        const orange_money_africa_app_download_for_iphone_at_kailahun = results[10].total
        const orange_money_africa_app_download_for_android_at_kailahun = results[11].total

        const my_orange_app_download_for_iphone_at_wilkenson_rd = results[12].total
        const my_orange_app_download_for_android_at_wilkenson_rd = results[13].total
        const orange_money_africa_app_download_for_iphone_at_wilkenson_rd = results[14].total
        const orange_money_africa_app_download_for_android_at_wilkenson_rd = results[5].total









        res.json({
            // successfulTransactionTotal: successfulTotalSum,
            // unsuccessfulTransactionTotal: unsuccessfulTotalSum,

            my_orange_app_download_for_iphone_at_regent_rd_sum: my_orange_app_download_for_iphone_at_regent_rd,
            my_orange_app_download_for_android_at_regent_rd_sum: my_orange_app_download_for_android_at_regent_rd,
            orange_money_africa_app_download_for_iphone_at_regent_rd_sum: orange_money_africa_app_download_for_iphone_at_regent_rd,
            orange_money_africa_app_download_for_android_at_regent_rd_sum: orange_money_africa_app_download_for_android_at_regent_rd,

            my_orange_app_download_for_iphone_at_wilkenson_rd_sum: my_orange_app_download_for_iphone_at_wilkenson_rd,
            my_orange_app_download_for_android_at_wilkenson_rd_sum: my_orange_app_download_for_android_at_wilkenson_rd,
            orange_money_africa_app_download_for_iphone_at_wilkenson_rd_sum: orange_money_africa_app_download_for_iphone_at_wilkenson_rd,
            orange_money_africa_app_download_for_android_at_wilkenson_rd_sum: orange_money_africa_app_download_for_android_at_wilkenson_rd,

            my_orange_app_download_for_iphone_at_kenema_sum: my_orange_app_download_for_iphone_at_kenema,
            my_orange_app_download_for_android_at_kenema_sum: my_orange_app_download_for_android_at_kenema,
            orange_money_africa_app_download_for_iphone_at_kenema_sum: orange_money_africa_app_download_for_iphone_at_kenema,
            orange_money_africa_app_download_for_android_at_kenema_sum: orange_money_africa_app_download_for_android_at_kenema,

            my_orange_app_download_for_iphone_at_kailahun_sum: my_orange_app_download_for_iphone_at_kailahun,
            my_orange_app_download_for_android_at_kailahun_sum: my_orange_app_download_for_android_at_kailahun,
            orange_money_africa_app_download_for_iphone_at_kailahun_sum: orange_money_africa_app_download_for_iphone_at_kailahun,
            orange_money_africa_app_download_for_android_at_kailahun_sum: orange_money_africa_app_download_for_android_at_kailahun,
        });

        console.log('  \n')

        console.log('my_orange_app_download_for_iphone_at_regent_rd:', my_orange_app_download_for_iphone_at_regent_rd);
        console.log('my_orange_app_download_for_android_at_regent_rd: ', my_orange_app_download_for_android_at_regent_rd);
        console.log('orange_money_africa_app_download_for_iphone_at_regent_rd: ', orange_money_africa_app_download_for_iphone_at_regent_rd);
        console.log('orange_money_africa_app_download_for_android_at_regent_rd: ', orange_money_africa_app_download_for_android_at_regent_rd);
        console.log('  \n')
        console.log('my_orange_app_download_for_iphone_at_kenema:', my_orange_app_download_for_iphone_at_kenema);
        console.log('my_orange_app_download_for_android_at_kenema: ', my_orange_app_download_for_android_at_kenema);
        console.log('orange_money_africa_app_download_for_iphone_at_kenema: ', orange_money_africa_app_download_for_iphone_at_kenema);
        console.log('orange_money_africa_app_download_for_android_at_kenema: ', orange_money_africa_app_download_for_android_at_kenema);

        console.log('  \n')
        console.log('my_orange_app_download_for_iphone_at_kailahun:', my_orange_app_download_for_iphone_at_kailahun);
        console.log('my_orange_app_download_for_android_at_kailahun: ', my_orange_app_download_for_android_at_kailahun);
        console.log('orange_money_africa_app_download_for_iphone_at_kailahun: ', orange_money_africa_app_download_for_iphone_at_kailahun);
        console.log('orange_money_africa_app_download_for_android_at_kailahun: ', orange_money_africa_app_download_for_android_at_kailahun);

        console.log('  \n')
        console.log('my_orange_app_download_for_iphone_at_wilkenson_rd:', my_orange_app_download_for_iphone_at_wilkenson_rd);
        console.log('my_orange_app_download_for_android_at_wilkenson_rd: ', my_orange_app_download_for_android_at_wilkenson_rd);
        console.log('orange_money_africa_app_download_for_iphone_at_wilkenson_rd: ', orange_money_africa_app_download_for_iphone_at_wilkenson_rd);
        console.log('orange_money_africa_app_download_for_android_at_wilkenson_rd: ', orange_money_africa_app_download_for_android_at_wilkenson_rd);

    });
});


export default router











































































router.get('/', (req, res) => {
    const sql = `
    SELECT 'successful' as transaction_type, 
    COUNT(downloadLocation) AS total
    FROM downloadInformation
    where downloadLocation = 'Kenema' and appDownloaded = 'Orange Money Africa Android'
    union
    SELECT 'unsuccessful' as transaction_type, 
    COUNT(downloadLocation) AS total
    FROM downloadInformation
    where downloadLocation = 'Kenema' and appDownloaded = 'Orange Money Africa Android';
    `;
    connection.query(sql, (error, results) => {
        if (error) {
            throw error;
        }
        const successfulTotalSum = results[0].total;
        const unsuccessfulTotalSum = results[1].total;
        res.json({
            successfulTransactionTotal: successfulTotalSum,
            unsuccessfulTransactionTotal: unsuccessfulTotalSum,
        });
        console.log('Successful Transaction Total: ', successfulTotalSum);
        console.log('unSuccessful Transaction Total: ', unsuccessfulTotalSum);
    });
});



module.exports = router