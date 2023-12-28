const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://astraproperty.co.id/id/projects/';
    axios(url)
        .then(response =>{
            const html = response.data;
            const $ = cheerio.load(html);
            const accordionCard = $('.hoverlink').text();
            console.log(accordionCard)
            

        })
        .catch(console.error);

function results(accordionCard){
    let result = ''
    for (let i=0; i < accordionCard.length - 1; i++);
    const first = accordionCard[i];
    const second = accordionCard[i + 1];

    result += first;

    if (first !== ' ' && first === first.toLowerCase() && second === second.toUpperCase() ){
        result += '\n';
    }
    result += accordionCard[accordionCard.length-1];
    return result;

}
console.log(results)