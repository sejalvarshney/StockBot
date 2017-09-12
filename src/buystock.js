const host = 'https://www.alphavantage.co';
const Apikey = W6FZRHLN6JUQWMX7;
const rp = require('request-promise');

const buystock = (company, stock) => {
  return Promise.all( [githubCall(company),githubCall(stock),]).then(repos => {type: 'text', content:currentPrice(company[0],stock[0]) }
 
  })
}

const githubCall = (repo) => {
  var options = {
    url: `https://api.github.com/search/repositories?q=${repo}`,
    headers: {
      'User-Agent': process.env.GITHUB_USERNAME,
      'Authorization': `token ${process.env.GITHUB_TOKEN}`,
    }
  }

  return rp(options).then(result => {
    const body = JSON.parse(result)
    return {
      name: body.items[0].full_name,
      stars: body.items[0].stargazers_count,
      url: body.items[0].html_url,
    }
  })
}

const getPrice = (company, stock) => {
  
	 let path = '/query?function=TIME_SERIES_DAILY&symbol=' + company + '&outputsize=compact&datatype=json&apikey=' +
      Apikey ;
    console.log('API Request: ' + host + path);
    // Make the HTTP request to get the weather
    http.get({host: host, path: path}, (res) => {
      let body = ''; // var to store the response chunks
      res.on('data', (d) => { body += d; }); // store each response chunk
      res.on('end', () => {
        // After all the data has been received parse the JSON for desired data
        let response = JSON.parse(body);
        let currentPrice = response['data']['Time Series (Daily)']["2017-09-12"]["4. close"];
       
  const reply = currentPrice;

  return reply
}

module.exports = buystock