const apiKey = process.env.NEWS_API_KEY;

const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
const container = document.querySelector('.main-container')
async function fetchNews(){
    try{
        const response = await fetch(url);
        const data =  await response.json();
        displayNews(data.articles)
    } catch (error){
        console.log(`There was an error! ${error}`)
    }
}


function displayNews(articles){
    // const newsDiv = document.querySelector('#news')
    
    for (const article of articles){
        const articleDiv = document.createElement('section');
        articleDiv.classList = "section-container"

        //create and append a headline to the articleDiv
        const title = document.createElement('h2');
        // const a = document.createElement('a')
        title.classList = "title"
        title.textContent = article.title;
        // a.href = article.url
        articleDiv.appendChild(title);
        // articleDiv.appendChild(a)
        const p = document.createElement('p'
        )
        p.classList = "headline"
        p.textContent = article.description
        articleDiv.appendChild(p)

        articleDiv.addEventListener('click', function(event){
            event.preventDefault();

            window.open(article.url, "_blank");
        })


        container.appendChild(articleDiv);
    }

    console.log()
}

fetchNews()