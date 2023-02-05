  let store="";
        const t="";
       
        const quotes = document.getElementById("quotes");
        const author = document.getElementById("author");
        const NewQ=document.getElementById("NewQ");
        const Tweet=document.getElementById("Tweet");

        const getNewquotes =(realdata) => {
            let len=realdata.length;
                let num = Math.floor(Math.random() * len);
                store=realdata[num];
                quotes.innerText = `${realdata[num].text}`;
                 realdata[num].author==null?(author.innerText="Unknown"):(author.innerText=`${realdata[num].author}`);

            };
     
        const getQuotes = async () => {
            const api = "https://type.fit/api/quotes";
            try {
                let data = await fetch(api);
                let realdata = await data.json();
               getNewquotes(realdata);
         
            }
            catch (error) { }
        };
        
            const TweetMe = () => {
                let tweetpost = `https://twitter.com/intent/tweet?text=${store.text} :${store.author}`;
                window.open(tweetpost);
            };
       
        NewQ.addEventListener("click",getQuotes);
        Tweet.addEventListener("click",TweetMe);
        getQuotes();