# Word Frequency Counter

## COMPONENTS

* In this Project there are 2 components i have created
## 1.server.js 
    In this Component i haave used for creating Axios instance so that i can used axios function in my main component Content.js 
    server.js contain below code

```javascript
import axios from 'axios';

const instance =axios.create({baseUrl:""});

export default instance;
```    
## 2.Content.js 
    This components contains all the required functions which is used to calculating the frequency.

## Lets look itno the content.js
first of all I used asynchronus function to fetch data from 
URl used in my project :-["https://raw.githubusercontent.com/invictustech/test/main/README.md"]

```javascript
async function fetchContent()
        {
            const request =await server.get("https://raw.githubusercontent.com/invictustech/test/main/README.md");
            WordCounter(request.data)
            return request
        }
```
After that I call fetchContent() in handleSubmit function . When user clicked on the submit button it will fetch content from given URL
also handleSubmit() is used for when user enter any number in input box and hit submit it will update the state of value.                      


```javascript
function handleSubmit(event){
    event.preventDefault();
    setTypedNumber(number);
    fetchContent();
    
}
```
## wordCounter() used for computing frequency of each word.
```JAVASCRIPT
function WordCounter(text) {
    var frequency = {}
    var Count = []
    var wordArray = text.split(/\W+/)
    wordArray.forEach((key) => {
        if (frequency.hasOwnProperty(key)) {
            frequency[key] += 1
        } else {
            frequency[key] = 1
        }
    })
    Count = Object.keys(frequency).map((key) => {
        return {
            word: key,
            count: frequency[key]
        }
    })

    Count.sort((a,b) => b.count - a.count)
    Count.pop()
    setWordCount(Count);
}   
```
    This wordCounter() also divided in 3 part
    1. It is splitting the sentence and push into the object frequency if the word already present in object
    it will increase its count by 1.
    
    2.Then I stored the word and its count in array named Count=[]

    3.Then I sort the Count accorrding to their frequencies

After that i used Count.slice(0,typedNumber) for fetching top N(user input) words and its frequency


## Libraries used 
* I used Axios libraries for fetching content of URL

## ScreenShot
    testCase1 : if we enter 1 in the input box it will show 1 word i.e [and] with count i.e [10]
![Screenshot (128)](https://user-images.githubusercontent.com/61015479/118434069-082a4800-b6fa-11eb-88af-66f8881c1aae.png)

    testcase2: After enter 100 you can see all the top 100 word with their count display in the black box.
    if you scroll in the black box you can see all the word present thier

![Screenshot (129)](https://user-images.githubusercontent.com/61015479/118434510-d5348400-b6fa-11eb-8f26-24a65428f9f7.png)
    
    testcase3: If user enter 0 or not type any number it will not display anything.

![Screenshot (130)](https://user-images.githubusercontent.com/61015479/118434726-2cd2ef80-b6fb-11eb-8b25-122188df6e33.png)



## I also deployed this web app using firebase 
[`https://wordfrequencycounter.web.app/`](https://wordfrequencycounter.web.app/) 


## For More details please go through the source code 



