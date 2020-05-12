const axios  = require('axios');
const seed   = require('../../../utils/save-seed.js');


// Once a googel sheet is "published to the web" we can access its JSON
// via a URL of this form. We just need to pass in the ID of the sheet
// which we can find in the URL of the document.
const sheetID = "1-rdzDOXdzMi9whPxKAKZxo-vaytH8tMtbL1f1zhrNEk";
const googleSheetUrl = `https://spreadsheets.google.com/feeds/list/1-rdzDOXdzMi9whPxKAKZxo-vaytH8tMtbL1f1zhrNEk/od6/public/values?alt=json`;

module.exports = () => {
  return new Promise((resolve, reject) => {

    console.log(`Requesting data from ${googleSheetUrl}`);

    axios.get(googleSheetUrl)
      .then(response => {
        // massage the data from the Google Sheets API into
        // a shape that will more convenient for us in our SSG.
        var data = {
          "content": []
        };
        response.data.feed.entry.forEach(item => {
          data.content.push({
            "header": item.gsx$header.$t,
            "header2": item.gsx$header2.$t,
            "body": item.gsx$body.$t,
            "body2": item.gsx$body2.$t,
            "body3":  item.gsx$body3.$t,
            "body4": item.gsx$body4.$t,
            "body5": item.gsx$body5.$t,
            "body6":  item.gsx$body6.$t,
            "immagine":  item.gsx$immagine.$t,
          })
        });

        // stash the data locally for developing without
        // needing to hit the API each time.
        seed(JSON.stringify(data), `${__dirname}/../dev/sheet.json`);

        // resolve the promise and return the data
        resolve(data);

      })

      // uh-oh. Handle any errrors we might encounter
      .catch(error => {
        console.log('Error :', error);
        reject(error);
      });
  })
}
