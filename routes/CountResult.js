import express from "express"
import connection from "../database-connection/DatabaseConnection.js"
const router = express.Router()


router.get('/', (req, res) => {
    const sql = `
select 'my_orange_app_download_for_iphone_at_hqshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Headquarter Shop' and appDownloaded = 'My Orange App For Iphone'
union all
select 'my_orange_app_download_for_android_at_hqshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Headquarter Shop' and appDownloaded = 'My Orange App For Android'
union all
select 'orange_money_africa_app_download_for_iphone_at_hqshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Headquarter Shop' and appDownloaded = 'Orange Money Africa Iphone'
union all
select 'orange_money_africa_app_download_for_android_at_hqshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Headquarter Shop' and appDownloaded = 'Orange Money Africa Android'

union all

select 'my_orange_app_download_for_iphone_at_flagshipshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Flagship Shop' and appDownloaded = 'My Orange App For Iphone'
union all
select 'my_orange_app_download_for_android_at_flagshipshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Flagship Shop' and appDownloaded = 'My Orange App For Android'
union all
select 'orange_money_africa_app_download_for_iphone_at_flagshipshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Flagship Shop' and appDownloaded = 'Orange Money Africa Iphone'
union all
select 'orange_money_africa_app_download_for_android_at_flagshipshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Flagship Shop' and appDownloaded = 'Orange Money Africa Android'

union all

select 'my_orange_app_download_for_iphone_at_wellingtonshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wellington Shop' and appDownloaded = 'My Orange App For Iphone'
union all
select 'my_orange_app_download_for_android_at_wellingtonshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wellington Shop' and appDownloaded = 'My Orange App For Android'
union all
select 'orange_money_africa_app_download_for_iphone_at_wellingtonshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wellington Shop' and appDownloaded = 'Orange Money Africa Iphone'
union all
select 'orange_money_africa_app_download_for_android_at_wellingtonshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wellington Shop' and appDownloaded = 'Orange Money Africa Android'

union all

select 'my_orange_app_download_for_iphone_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'My Orange App For Iphone'
union all
select 'my_orange_app_download_for_android_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'My Orange App For Android'
union all
select 'orange_money_africa_app_download_for_iphone_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'Orange Money Africa Iphone'
union all
select 'orange_money_africa_app_download_for_android_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'Orange Money Africa Android'

union all

select 'my_orange_app_download_for_iphone_at_makenishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Makeni Shop' and appDownloaded = 'My Orange App For Iphone'
union all
select 'my_orange_app_download_for_android_at_makenishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Makeni Shop' and appDownloaded = 'My Orange App For Android'
union all
select 'orange_money_africa_app_download_for_iphone_at_makenishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Makeni Shop' and appDownloaded = 'Orange Money Africa Iphone'
union all
select 'orange_money_africa_app_download_for_android_at_makenishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Makeni Shop' and appDownloaded = 'Orange Money Africa Android'

union all

select 'my_orange_app_download_for_iphone_at_konoshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kono Shop' and appDownloaded = 'My Orange App For Iphone'
union all
select 'my_orange_app_download_for_android_at_konoshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kono Shop' and appDownloaded = 'My Orange App For Android'
union all
select 'orange_money_africa_app_download_for_iphone_at_konoshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kono Shop' and appDownloaded = 'Orange Money Africa Iphone'
union all
select 'orange_money_africa_app_download_for_android_at_konoshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kono Shop' and appDownloaded = 'Orange Money Africa Android'

union all

select 'my_orange_app_download_for_iphone_at_boshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Bo Shop' and appDownloaded = 'My Orange App For Iphone'
union all
select 'my_orange_app_download_for_android_at_boshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Bo Shop' and appDownloaded = 'My Orange App For Android'
union all
select 'orange_money_africa_app_download_for_iphone_at_boshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Bo Shop' and appDownloaded = 'Orange Money Africa Iphone'
union all
select 'orange_money_africa_app_download_for_android_at_boshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Bo Shop' and appDownloaded = 'Orange Money Africa Android'

union all

select 'my_orange_app_download_for_iphone_at_kenemashop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema Shop' and appDownloaded = 'My Orange App For Iphone'
union all
select 'my_orange_app_download_for_android_at_kenemashop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema Shop' and appDownloaded = 'My Orange App For Android'
union all
select 'orange_money_africa_app_download_for_iphone_at_kenemashop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema Shop' and appDownloaded = 'Orange Money Africa Iphone'
union all
select 'orange_money_africa_app_download_for_android_at_kenemashop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema Shop' and appDownloaded = 'Orange Money Africa Android'

union all

select 'my_orange_app_download_for_iphone_at_lungishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Lungi Shop' and appDownloaded = 'My Orange App For Iphone'
union all
select 'my_orange_app_download_for_android_at_lungishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Lungi Shop' and appDownloaded = 'My Orange App For Android'
union all
select 'orange_money_africa_app_download_for_iphone_at_lungishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Lungi Shop' and appDownloaded = 'Orange Money Africa Iphone'
union all
select 'orange_money_africa_app_download_for_android_at_lungishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Lungi Shop' and appDownloaded = 'Orange Money Africa Android';

    `;
    connection.query(sql, (error, results) => {
        if (error) {
            throw error;
        }
        // const successfulTotalSum = results[0].total;
        // const unsuccessfulTotalSum = results[1].total;

        const my_orange_app_download_for_iphone_at_hqshop = results[0].total
        const my_orange_app_download_for_android_at_hqshop = results[1].total
        const orange_money_africa_app_download_for_iphone_at_hqshop = results[2].total
        const orange_money_africa_app_download_for_android_at_hqshop = results[3].total

        const my_orange_app_download_for_iphone_at_flagshipshop = results[4].total
        const my_orange_app_download_for_android_at_flagshipshop = results[5].total
        const orange_money_africa_app_download_for_iphone_at_flagshipshop = results[6].total
        const orange_money_africa_app_download_for_android_at_flagshipshop = results[7].total

        const my_orange_app_download_for_iphone_at_wellingtonshop = results[8].total
        const my_orange_app_download_for_android_at_wellingtonshop = results[9].total
        const orange_money_africa_app_download_for_iphone_at_wellingtonshop = results[10].total
        const orange_money_africa_app_download_for_android_at_wellingtonshop = results[11].total


        const my_orange_app_download_for_iphone_at_waterlooshop = results[12].total
        const my_orange_app_download_for_android_at_waterlooshop = results[13].total
        const orange_money_africa_app_download_for_iphone_at_waterlooshop = results[14].total
        const orange_money_africa_app_download_for_android_at_waterlooshop = results[15].total



        const my_orange_app_download_for_iphone_at_makenishop = results[16].total
        const my_orange_app_download_for_android_at_makenishop = results[17].total
        const orange_money_africa_app_download_for_iphone_at_makenishop = results[18].total
        const orange_money_africa_app_download_for_android_at_makenishop = results[19].total

        // TODO


        const my_orange_app_download_for_iphone_at_konoshop = results[20].total
        const my_orange_app_download_for_android_at_konoshop = results[21].total
        const orange_money_africa_app_download_for_iphone_at_konoshop = results[22].total
        const orange_money_africa_app_download_for_android_at_konoshop = results[23].total

        const my_orange_app_download_for_iphone_at_boshop = results[24].total
        const my_orange_app_download_for_android_at_boshop = results[25].total
        const orange_money_africa_app_download_for_iphone_at_boshop = results[26].total
        const orange_money_africa_app_download_for_android_at_boshop = results[27].total

        const my_orange_app_download_for_iphone_at_kenemashop = results[28].total
        const my_orange_app_download_for_android_at_kenemashop = results[29].total
        const orange_money_africa_app_download_for_iphone_at_kenemashop = results[30].total
        const orange_money_africa_app_download_for_android_at_kenemashop = results[31].total


        const my_orange_app_download_for_iphone_at_lungishop = results[32].total
        const my_orange_app_download_for_android_at_lungishop = results[33].total
        const orange_money_africa_app_download_for_iphone_at_lungishop = results[34].total
        const orange_money_africa_app_download_for_android_at_lungishop = results[35].total

        res.json({

            my_orange_app_download_for_iphone_at_hqshop_sum: my_orange_app_download_for_iphone_at_hqshop,
            my_orange_app_download_for_android_at_hqshop_sum: my_orange_app_download_for_android_at_hqshop,
            orange_money_africa_app_download_for_iphone_at_hqshop_sum: orange_money_africa_app_download_for_iphone_at_hqshop,
            orange_money_africa_app_download_for_android_at_hqshop_sum: orange_money_africa_app_download_for_android_at_hqshop,

            my_orange_app_download_for_iphone_at_flagshipshop_sum: my_orange_app_download_for_iphone_at_flagshipshop,
            my_orange_app_download_for_android_at_flagshipshop_sum: my_orange_app_download_for_android_at_flagshipshop,
            orange_money_africa_app_download_for_iphone_at_flagshipshop_sum: orange_money_africa_app_download_for_iphone_at_flagshipshop,
            orange_money_africa_app_download_for_android_at_flagshipshop_sum: orange_money_africa_app_download_for_android_at_flagshipshop,


            my_orange_app_download_for_iphone_at_wellingtonshop_sum: my_orange_app_download_for_iphone_at_wellingtonshop,
            my_orange_app_download_for_android_at_wellingtonshop_sum: my_orange_app_download_for_android_at_wellingtonshop,
            orange_money_africa_app_download_for_iphone_at_wellingtonshop_sum: orange_money_africa_app_download_for_iphone_at_wellingtonshop,
            orange_money_africa_app_download_for_android_at_wellingtonshop_sum: orange_money_africa_app_download_for_android_at_wellingtonshop,


            my_orange_app_download_for_iphone_at_waterlooshop_sum: my_orange_app_download_for_iphone_at_waterlooshop,
            my_orange_app_download_for_android_at_waterlooshop_sum: my_orange_app_download_for_android_at_waterlooshop,
            orange_money_africa_app_download_for_iphone_at_waterlooshop_sum: orange_money_africa_app_download_for_iphone_at_waterlooshop,
            orange_money_africa_app_download_for_android_at_waterlooshop_sum: orange_money_africa_app_download_for_android_at_waterlooshop,

            my_orange_app_download_for_iphone_at_makenishop_sum: my_orange_app_download_for_iphone_at_makenishop,
            my_orange_app_download_for_android_at_makenishop_sum: my_orange_app_download_for_android_at_makenishop,
            orange_money_africa_app_download_for_iphone_at_makenishop_sum: orange_money_africa_app_download_for_iphone_at_makenishop,
            orange_money_africa_app_download_for_android_at_makenishop_sum: orange_money_africa_app_download_for_android_at_makenishop,

            my_orange_app_download_for_iphone_at_konoshop_sum: my_orange_app_download_for_iphone_at_konoshop,
            my_orange_app_download_for_android_at_konoshop_sum: my_orange_app_download_for_android_at_konoshop,
            orange_money_africa_app_download_for_iphone_at_konoshop_sum: orange_money_africa_app_download_for_iphone_at_konoshop,
            orange_money_africa_app_download_for_android_at_konoshop_sum: orange_money_africa_app_download_for_android_at_konoshop,

            my_orange_app_download_for_iphone_at_boshop_sum: my_orange_app_download_for_iphone_at_boshop,
            my_orange_app_download_for_android_at_boshop_sum: my_orange_app_download_for_android_at_boshop,
            orange_money_africa_app_download_for_iphone_at_boshop_sum: orange_money_africa_app_download_for_iphone_at_boshop,
            orange_money_africa_app_download_for_android_at_boshop_sum: orange_money_africa_app_download_for_android_at_boshop,


            my_orange_app_download_for_iphone_at_kenemashop_sum: my_orange_app_download_for_iphone_at_kenemashop,
            my_orange_app_download_for_android_at_kenemashop_sum: my_orange_app_download_for_android_at_kenemashop,
            orange_money_africa_app_download_for_iphone_at_kenemashop_sum: orange_money_africa_app_download_for_iphone_at_kenemashop,
            orange_money_africa_app_download_for_android_at_kenemashop_sum: orange_money_africa_app_download_for_android_at_kenemashop,

            //TODO

            my_orange_app_download_for_iphone_at_lungishop_sum: my_orange_app_download_for_iphone_at_lungishop,
            my_orange_app_download_for_android_at_lungishop_sum: my_orange_app_download_for_android_at_lungishop,
            orange_money_africa_app_download_for_iphone_at_lungishop_sum: orange_money_africa_app_download_for_iphone_at_lungishop,
            orange_money_africa_app_download_for_android_at_lungishop_sum: orange_money_africa_app_download_for_android_at_lungishop,

        });

    });
});


router.get('/oneWeek', (req, res) => {
    const sql = `
select 'my_orange_app_download_for_iphone_at_hqshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Headquarter Shop' and appDownloaded = 'My Orange App For Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all
select 'my_orange_app_download_for_android_at_hqshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Headquarter Shop' and appDownloaded = 'My Orange App For Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all
select 'orange_money_africa_app_download_for_iphone_at_hqshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Headquarter Shop' and appDownloaded = 'Orange Money Africa Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all
select 'orange_money_africa_app_download_for_android_at_hqshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Headquarter Shop' and appDownloaded = 'Orange Money Africa Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)

union all

select 'my_orange_app_download_for_iphone_at_flagshipshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Flagship Shop' and appDownloaded = 'My Orange App For Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all
select 'my_orange_app_download_for_android_at_flagshipshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Flagship Shop' and appDownloaded = 'My Orange App For Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all
select 'orange_money_africa_app_download_for_iphone_at_flagshipshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Flagship Shop' and appDownloaded = 'Orange Money Africa Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all
select 'orange_money_africa_app_download_for_android_at_flagshipshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Flagship Shop' and appDownloaded = 'Orange Money Africa Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)

union all

select 'my_orange_app_download_for_iphone_at_wellingtonshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wellington Shop' and appDownloaded = 'My Orange App For Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all
select 'my_orange_app_download_for_android_at_wellingtonshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wellington Shop' and appDownloaded = 'My Orange App For Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all
select 'orange_money_africa_app_download_for_iphone_at_wellingtonshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wellington Shop' and appDownloaded = 'Orange Money Africa Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all
select 'orange_money_africa_app_download_for_android_at_wellingtonshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wellington Shop' and appDownloaded = 'Orange Money Africa Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)

union all

select 'my_orange_app_download_for_iphone_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'My Orange App For Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all
select 'my_orange_app_download_for_android_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'My Orange App For Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all
select 'orange_money_africa_app_download_for_iphone_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'Orange Money Africa Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all
select 'orange_money_africa_app_download_for_android_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'Orange Money Africa Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)

union all

select 'my_orange_app_download_for_iphone_at_makenishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Makeni Shop' and appDownloaded = 'My Orange App For Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all
select 'my_orange_app_download_for_android_at_makenishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Makeni Shop' and appDownloaded = 'My Orange App For Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all
select 'orange_money_africa_app_download_for_iphone_at_makenishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Makeni Shop' and appDownloaded = 'Orange Money Africa Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all
select 'orange_money_africa_app_download_for_android_at_makenishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Makeni Shop' and appDownloaded = 'Orange Money Africa Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)

union all

select 'my_orange_app_download_for_iphone_at_konoshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kono Shop' and appDownloaded = 'My Orange App For Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all
select 'my_orange_app_download_for_android_at_konoshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kono Shop' and appDownloaded = 'My Orange App For Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all
select 'orange_money_africa_app_download_for_iphone_at_konoshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kono Shop' and appDownloaded = 'Orange Money Africa Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all
select 'orange_money_africa_app_download_for_android_at_konoshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kono Shop' and appDownloaded = 'Orange Money Africa Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)

union all

select 'my_orange_app_download_for_iphone_at_boshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Bo Shop' and appDownloaded = 'My Orange App For Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all
select 'my_orange_app_download_for_android_at_boshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Bo Shop' and appDownloaded = 'My Orange App For Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all
select 'orange_money_africa_app_download_for_iphone_at_boshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Bo Shop' and appDownloaded = 'Orange Money Africa Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all
select 'orange_money_africa_app_download_for_android_at_boshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Bo Shop' and appDownloaded = 'Orange Money Africa Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)

union all

select 'my_orange_app_download_for_iphone_at_kenemashop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema Shop' and appDownloaded = 'My Orange App For Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all
select 'my_orange_app_download_for_android_at_kenemashop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema Shop' and appDownloaded = 'My Orange App For Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all 
select 'orange_money_africa_app_download_for_iphone_at_kenemashop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema Shop' and appDownloaded = 'Orange Money Africa Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all
select 'orange_money_africa_app_download_for_android_at_kenemashop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema Shop' and appDownloaded = 'Orange Money Africa Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)

union all

select 'my_orange_app_download_for_iphone_at_lungishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Lungi Shop' and appDownloaded = 'My Orange App For Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all
select 'my_orange_app_download_for_android_at_lungishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Lungi Shop' and appDownloaded = 'My Orange App For Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all
select 'orange_money_africa_app_download_for_iphone_at_lungishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Lungi Shop' and appDownloaded = 'Orange Money Africa Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
union all
select 'orange_money_africa_app_download_for_android_at_lungishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Lungi Shop' and appDownloaded = 'Orange Money Africa Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 WEEK);

    `;
    connection.query(sql, (error, results) => {
        if (error) {
            throw error;
        }
        // const successfulTotalSum = results[0].total;
        // const unsuccessfulTotalSum = results[1].total;

        const my_orange_app_download_for_iphone_at_hqshop = results[0].total
        const my_orange_app_download_for_android_at_hqshop = results[1].total
        const orange_money_africa_app_download_for_iphone_at_hqshop = results[2].total
        const orange_money_africa_app_download_for_android_at_hqshop = results[3].total

        const my_orange_app_download_for_iphone_at_flagshipshop = results[4].total
        const my_orange_app_download_for_android_at_flagshipshop = results[5].total
        const orange_money_africa_app_download_for_iphone_at_flagshipshop = results[6].total
        const orange_money_africa_app_download_for_android_at_flagshipshop = results[7].total

        const my_orange_app_download_for_iphone_at_wellingtonshop = results[8].total
        const my_orange_app_download_for_android_at_wellingtonshop = results[9].total
        const orange_money_africa_app_download_for_iphone_at_wellingtonshop = results[10].total
        const orange_money_africa_app_download_for_android_at_wellingtonshop = results[11].total


        const my_orange_app_download_for_iphone_at_waterlooshop = results[12].total
        const my_orange_app_download_for_android_at_waterlooshop = results[13].total
        const orange_money_africa_app_download_for_iphone_at_waterlooshop = results[14].total
        const orange_money_africa_app_download_for_android_at_waterlooshop = results[15].total



        const my_orange_app_download_for_iphone_at_makenishop = results[16].total
        const my_orange_app_download_for_android_at_makenishop = results[17].total
        const orange_money_africa_app_download_for_iphone_at_makenishop = results[18].total
        const orange_money_africa_app_download_for_android_at_makenishop = results[19].total

        // TODO


        const my_orange_app_download_for_iphone_at_konoshop = results[20].total
        const my_orange_app_download_for_android_at_konoshop = results[21].total
        const orange_money_africa_app_download_for_iphone_at_konoshop = results[22].total
        const orange_money_africa_app_download_for_android_at_konoshop = results[23].total

        const my_orange_app_download_for_iphone_at_boshop = results[24].total
        const my_orange_app_download_for_android_at_boshop = results[25].total
        const orange_money_africa_app_download_for_iphone_at_boshop = results[26].total
        const orange_money_africa_app_download_for_android_at_boshop = results[27].total

        const my_orange_app_download_for_iphone_at_kenemashop = results[28].total
        const my_orange_app_download_for_android_at_kenemashop = results[29].total
        const orange_money_africa_app_download_for_iphone_at_kenemashop = results[30].total
        const orange_money_africa_app_download_for_android_at_kenemashop = results[31].total


        const my_orange_app_download_for_iphone_at_lungishop = results[32].total
        const my_orange_app_download_for_android_at_lungishop = results[33].total
        const orange_money_africa_app_download_for_iphone_at_lungishop = results[34].total
        const orange_money_africa_app_download_for_android_at_lungishop = results[35].total

        res.json({

            my_orange_app_download_for_iphone_at_hqshop_sum: my_orange_app_download_for_iphone_at_hqshop,
            my_orange_app_download_for_android_at_hqshop_sum: my_orange_app_download_for_android_at_hqshop,
            orange_money_africa_app_download_for_iphone_at_hqshop_sum: orange_money_africa_app_download_for_iphone_at_hqshop,
            orange_money_africa_app_download_for_android_at_hqshop_sum: orange_money_africa_app_download_for_android_at_hqshop,

            my_orange_app_download_for_iphone_at_flagshipshop_sum: my_orange_app_download_for_iphone_at_flagshipshop,
            my_orange_app_download_for_android_at_flagshipshop_sum: my_orange_app_download_for_android_at_flagshipshop,
            orange_money_africa_app_download_for_iphone_at_flagshipshop_sum: orange_money_africa_app_download_for_iphone_at_flagshipshop,
            orange_money_africa_app_download_for_android_at_flagshipshop_sum: orange_money_africa_app_download_for_android_at_flagshipshop,


            my_orange_app_download_for_iphone_at_wellingtonshop_sum: my_orange_app_download_for_iphone_at_wellingtonshop,
            my_orange_app_download_for_android_at_wellingtonshop_sum: my_orange_app_download_for_android_at_wellingtonshop,
            orange_money_africa_app_download_for_iphone_at_wellingtonshop_sum: orange_money_africa_app_download_for_iphone_at_wellingtonshop,
            orange_money_africa_app_download_for_android_at_wellingtonshop_sum: orange_money_africa_app_download_for_android_at_wellingtonshop,


            my_orange_app_download_for_iphone_at_waterlooshop_sum: my_orange_app_download_for_iphone_at_waterlooshop,
            my_orange_app_download_for_android_at_waterlooshop_sum: my_orange_app_download_for_android_at_waterlooshop,
            orange_money_africa_app_download_for_iphone_at_waterlooshop_sum: orange_money_africa_app_download_for_iphone_at_waterlooshop,
            orange_money_africa_app_download_for_android_at_waterlooshop_sum: orange_money_africa_app_download_for_android_at_waterlooshop,

            my_orange_app_download_for_iphone_at_makenishop_sum: my_orange_app_download_for_iphone_at_makenishop,
            my_orange_app_download_for_android_at_makenishop_sum: my_orange_app_download_for_android_at_makenishop,
            orange_money_africa_app_download_for_iphone_at_makenishop_sum: orange_money_africa_app_download_for_iphone_at_makenishop,
            orange_money_africa_app_download_for_android_at_makenishop_sum: orange_money_africa_app_download_for_android_at_makenishop,

            my_orange_app_download_for_iphone_at_konoshop_sum: my_orange_app_download_for_iphone_at_konoshop,
            my_orange_app_download_for_android_at_konoshop_sum: my_orange_app_download_for_android_at_konoshop,
            orange_money_africa_app_download_for_iphone_at_konoshop_sum: orange_money_africa_app_download_for_iphone_at_konoshop,
            orange_money_africa_app_download_for_android_at_konoshop_sum: orange_money_africa_app_download_for_android_at_konoshop,

            my_orange_app_download_for_iphone_at_boshop_sum: my_orange_app_download_for_iphone_at_boshop,
            my_orange_app_download_for_android_at_boshop_sum: my_orange_app_download_for_android_at_boshop,
            orange_money_africa_app_download_for_iphone_at_boshop_sum: orange_money_africa_app_download_for_iphone_at_boshop,
            orange_money_africa_app_download_for_android_at_boshop_sum: orange_money_africa_app_download_for_android_at_boshop,


            my_orange_app_download_for_iphone_at_kenemashop_sum: my_orange_app_download_for_iphone_at_kenemashop,
            my_orange_app_download_for_android_at_kenemashop_sum: my_orange_app_download_for_android_at_kenemashop,
            orange_money_africa_app_download_for_iphone_at_kenemashop_sum: orange_money_africa_app_download_for_iphone_at_kenemashop,
            orange_money_africa_app_download_for_android_at_kenemashop_sum: orange_money_africa_app_download_for_android_at_kenemashop,

            //TODO

            my_orange_app_download_for_iphone_at_lungishop_sum: my_orange_app_download_for_iphone_at_lungishop,
            my_orange_app_download_for_android_at_lungishop_sum: my_orange_app_download_for_android_at_lungishop,
            orange_money_africa_app_download_for_iphone_at_lungishop_sum: orange_money_africa_app_download_for_iphone_at_lungishop,
            orange_money_africa_app_download_for_android_at_lungishop_sum: orange_money_africa_app_download_for_android_at_lungishop,

        });

    });
});


router.get('/oneMonth', (req, res) => {
    const sql = `
select 'my_orange_app_download_for_iphone_at_hqshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Headquarter Shop' and appDownloaded = 'My Orange App For Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all
select 'my_orange_app_download_for_android_at_hqshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Headquarter Shop' and appDownloaded = 'My Orange App For Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all
select 'orange_money_africa_app_download_for_iphone_at_hqshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Headquarter Shop' and appDownloaded = 'Orange Money Africa Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all
select 'orange_money_africa_app_download_for_android_at_hqshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Headquarter Shop' and appDownloaded = 'Orange Money Africa Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)

union all

select 'my_orange_app_download_for_iphone_at_flagshipshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Flagship Shop' and appDownloaded = 'My Orange App For Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all
select 'my_orange_app_download_for_android_at_flagshipshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Flagship Shop' and appDownloaded = 'My Orange App For Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all
select 'orange_money_africa_app_download_for_iphone_at_flagshipshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Flagship Shop' and appDownloaded = 'Orange Money Africa Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all
select 'orange_money_africa_app_download_for_android_at_flagshipshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Flagship Shop' and appDownloaded = 'Orange Money Africa Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)

union all

select 'my_orange_app_download_for_iphone_at_wellingtonshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wellington Shop' and appDownloaded = 'My Orange App For Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all
select 'my_orange_app_download_for_android_at_wellingtonshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wellington Shop' and appDownloaded = 'My Orange App For Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all
select 'orange_money_africa_app_download_for_iphone_at_wellingtonshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wellington Shop' and appDownloaded = 'Orange Money Africa Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all
select 'orange_money_africa_app_download_for_android_at_wellingtonshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wellington Shop' and appDownloaded = 'Orange Money Africa Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)

union all

select 'my_orange_app_download_for_iphone_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'My Orange App For Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all
select 'my_orange_app_download_for_android_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'My Orange App For Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all
select 'orange_money_africa_app_download_for_iphone_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'Orange Money Africa Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all
select 'orange_money_africa_app_download_for_android_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'Orange Money Africa Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)

union all

select 'my_orange_app_download_for_iphone_at_makenishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Makeni Shop' and appDownloaded = 'My Orange App For Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all
select 'my_orange_app_download_for_android_at_makenishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Makeni Shop' and appDownloaded = 'My Orange App For Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all
select 'orange_money_africa_app_download_for_iphone_at_makenishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Makeni Shop' and appDownloaded = 'Orange Money Africa Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all
select 'orange_money_africa_app_download_for_android_at_makenishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Makeni Shop' and appDownloaded = 'Orange Money Africa Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)

union all

select 'my_orange_app_download_for_iphone_at_konoshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kono Shop' and appDownloaded = 'My Orange App For Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all
select 'my_orange_app_download_for_android_at_konoshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kono Shop' and appDownloaded = 'My Orange App For Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all
select 'orange_money_africa_app_download_for_iphone_at_konoshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kono Shop' and appDownloaded = 'Orange Money Africa Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all
select 'orange_money_africa_app_download_for_android_at_konoshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kono Shop' and appDownloaded = 'Orange Money Africa Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)

union all

select 'my_orange_app_download_for_iphone_at_boshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Bo Shop' and appDownloaded = 'My Orange App For Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all
select 'my_orange_app_download_for_android_at_boshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Bo Shop' and appDownloaded = 'My Orange App For Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all
select 'orange_money_africa_app_download_for_iphone_at_boshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Bo Shop' and appDownloaded = 'Orange Money Africa Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all
select 'orange_money_africa_app_download_for_android_at_boshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Bo Shop' and appDownloaded = 'Orange Money Africa Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)

union all

select 'my_orange_app_download_for_iphone_at_kenemashop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema Shop' and appDownloaded = 'My Orange App For Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all
select 'my_orange_app_download_for_android_at_kenemashop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema Shop' and appDownloaded = 'My Orange App For Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all 
select 'orange_money_africa_app_download_for_iphone_at_kenemashop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema Shop' and appDownloaded = 'Orange Money Africa Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all
select 'orange_money_africa_app_download_for_android_at_kenemashop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema Shop' and appDownloaded = 'Orange Money Africa Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)

union all

select 'my_orange_app_download_for_iphone_at_lungishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Lungi Shop' and appDownloaded = 'My Orange App For Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all
select 'my_orange_app_download_for_android_at_lungishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Lungi Shop' and appDownloaded = 'My Orange App For Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all
select 'orange_money_africa_app_download_for_iphone_at_lungishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Lungi Shop' and appDownloaded = 'Orange Money Africa Iphone' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
union all
select 'orange_money_africa_app_download_for_android_at_lungishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Lungi Shop' and appDownloaded = 'Orange Money Africa Android' AND timestamp >= DATE_SUB(NOW(), INTERVAL 1 MONTH);

    `;
    connection.query(sql, (error, results) => {
        if (error) {
            throw error;
        }
        // const successfulTotalSum = results[0].total;
        // const unsuccessfulTotalSum = results[1].total;

        const my_orange_app_download_for_iphone_at_hqshop = results[0].total
        const my_orange_app_download_for_android_at_hqshop = results[1].total
        const orange_money_africa_app_download_for_iphone_at_hqshop = results[2].total
        const orange_money_africa_app_download_for_android_at_hqshop = results[3].total

        const my_orange_app_download_for_iphone_at_flagshipshop = results[4].total
        const my_orange_app_download_for_android_at_flagshipshop = results[5].total
        const orange_money_africa_app_download_for_iphone_at_flagshipshop = results[6].total
        const orange_money_africa_app_download_for_android_at_flagshipshop = results[7].total

        const my_orange_app_download_for_iphone_at_wellingtonshop = results[8].total
        const my_orange_app_download_for_android_at_wellingtonshop = results[9].total
        const orange_money_africa_app_download_for_iphone_at_wellingtonshop = results[10].total
        const orange_money_africa_app_download_for_android_at_wellingtonshop = results[11].total


        const my_orange_app_download_for_iphone_at_waterlooshop = results[12].total
        const my_orange_app_download_for_android_at_waterlooshop = results[13].total
        const orange_money_africa_app_download_for_iphone_at_waterlooshop = results[14].total
        const orange_money_africa_app_download_for_android_at_waterlooshop = results[15].total



        const my_orange_app_download_for_iphone_at_makenishop = results[16].total
        const my_orange_app_download_for_android_at_makenishop = results[17].total
        const orange_money_africa_app_download_for_iphone_at_makenishop = results[18].total
        const orange_money_africa_app_download_for_android_at_makenishop = results[19].total

        // TODO


        const my_orange_app_download_for_iphone_at_konoshop = results[20].total
        const my_orange_app_download_for_android_at_konoshop = results[21].total
        const orange_money_africa_app_download_for_iphone_at_konoshop = results[22].total
        const orange_money_africa_app_download_for_android_at_konoshop = results[23].total

        const my_orange_app_download_for_iphone_at_boshop = results[24].total
        const my_orange_app_download_for_android_at_boshop = results[25].total
        const orange_money_africa_app_download_for_iphone_at_boshop = results[26].total
        const orange_money_africa_app_download_for_android_at_boshop = results[27].total

        const my_orange_app_download_for_iphone_at_kenemashop = results[28].total
        const my_orange_app_download_for_android_at_kenemashop = results[29].total
        const orange_money_africa_app_download_for_iphone_at_kenemashop = results[30].total
        const orange_money_africa_app_download_for_android_at_kenemashop = results[31].total


        const my_orange_app_download_for_iphone_at_lungishop = results[32].total
        const my_orange_app_download_for_android_at_lungishop = results[33].total
        const orange_money_africa_app_download_for_iphone_at_lungishop = results[34].total
        const orange_money_africa_app_download_for_android_at_lungishop = results[35].total

        res.json({

            my_orange_app_download_for_iphone_at_hqshop_sum: my_orange_app_download_for_iphone_at_hqshop,
            my_orange_app_download_for_android_at_hqshop_sum: my_orange_app_download_for_android_at_hqshop,
            orange_money_africa_app_download_for_iphone_at_hqshop_sum: orange_money_africa_app_download_for_iphone_at_hqshop,
            orange_money_africa_app_download_for_android_at_hqshop_sum: orange_money_africa_app_download_for_android_at_hqshop,

            my_orange_app_download_for_iphone_at_flagshipshop_sum: my_orange_app_download_for_iphone_at_flagshipshop,
            my_orange_app_download_for_android_at_flagshipshop_sum: my_orange_app_download_for_android_at_flagshipshop,
            orange_money_africa_app_download_for_iphone_at_flagshipshop_sum: orange_money_africa_app_download_for_iphone_at_flagshipshop,
            orange_money_africa_app_download_for_android_at_flagshipshop_sum: orange_money_africa_app_download_for_android_at_flagshipshop,


            my_orange_app_download_for_iphone_at_wellingtonshop_sum: my_orange_app_download_for_iphone_at_wellingtonshop,
            my_orange_app_download_for_android_at_wellingtonshop_sum: my_orange_app_download_for_android_at_wellingtonshop,
            orange_money_africa_app_download_for_iphone_at_wellingtonshop_sum: orange_money_africa_app_download_for_iphone_at_wellingtonshop,
            orange_money_africa_app_download_for_android_at_wellingtonshop_sum: orange_money_africa_app_download_for_android_at_wellingtonshop,


            my_orange_app_download_for_iphone_at_waterlooshop_sum: my_orange_app_download_for_iphone_at_waterlooshop,
            my_orange_app_download_for_android_at_waterlooshop_sum: my_orange_app_download_for_android_at_waterlooshop,
            orange_money_africa_app_download_for_iphone_at_waterlooshop_sum: orange_money_africa_app_download_for_iphone_at_waterlooshop,
            orange_money_africa_app_download_for_android_at_waterlooshop_sum: orange_money_africa_app_download_for_android_at_waterlooshop,

            my_orange_app_download_for_iphone_at_makenishop_sum: my_orange_app_download_for_iphone_at_makenishop,
            my_orange_app_download_for_android_at_makenishop_sum: my_orange_app_download_for_android_at_makenishop,
            orange_money_africa_app_download_for_iphone_at_makenishop_sum: orange_money_africa_app_download_for_iphone_at_makenishop,
            orange_money_africa_app_download_for_android_at_makenishop_sum: orange_money_africa_app_download_for_android_at_makenishop,

            my_orange_app_download_for_iphone_at_konoshop_sum: my_orange_app_download_for_iphone_at_konoshop,
            my_orange_app_download_for_android_at_konoshop_sum: my_orange_app_download_for_android_at_konoshop,
            orange_money_africa_app_download_for_iphone_at_konoshop_sum: orange_money_africa_app_download_for_iphone_at_konoshop,
            orange_money_africa_app_download_for_android_at_konoshop_sum: orange_money_africa_app_download_for_android_at_konoshop,

            my_orange_app_download_for_iphone_at_boshop_sum: my_orange_app_download_for_iphone_at_boshop,
            my_orange_app_download_for_android_at_boshop_sum: my_orange_app_download_for_android_at_boshop,
            orange_money_africa_app_download_for_iphone_at_boshop_sum: orange_money_africa_app_download_for_iphone_at_boshop,
            orange_money_africa_app_download_for_android_at_boshop_sum: orange_money_africa_app_download_for_android_at_boshop,


            my_orange_app_download_for_iphone_at_kenemashop_sum: my_orange_app_download_for_iphone_at_kenemashop,
            my_orange_app_download_for_android_at_kenemashop_sum: my_orange_app_download_for_android_at_kenemashop,
            orange_money_africa_app_download_for_iphone_at_kenemashop_sum: orange_money_africa_app_download_for_iphone_at_kenemashop,
            orange_money_africa_app_download_for_android_at_kenemashop_sum: orange_money_africa_app_download_for_android_at_kenemashop,

            //TODO

            my_orange_app_download_for_iphone_at_lungishop_sum: my_orange_app_download_for_iphone_at_lungishop,
            my_orange_app_download_for_android_at_lungishop_sum: my_orange_app_download_for_android_at_lungishop,
            orange_money_africa_app_download_for_iphone_at_lungishop_sum: orange_money_africa_app_download_for_iphone_at_lungishop,
            orange_money_africa_app_download_for_android_at_lungishop_sum: orange_money_africa_app_download_for_android_at_lungishop,

        });

    });
});




export default router


