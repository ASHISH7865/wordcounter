import React ,{useState} from 'react';
import server from './server'
function Content() {
const [number,setNumber] =useState();  //user enter this number in input box and setNumber will update state
const [wordCount,setWordCount] =useState([]); //word and thier frequency store in list named wordCount
const [typedNumber,setTypedNumber] =useState(); //



// function for fetching data from url("https://raw.githubusercontent.com/invictustech/test/main/README.md")
async function fetchContent()
        {
            const request =await server.get("https://raw.githubusercontent.com/invictustech/test/main/README.md");
            WordCounter(request.data)
            return request
        }

// function for handling submit button when user press submit it will update input number and call wordCounter() used for calculating frequency 
function handleSubmit(event){
    event.preventDefault();
    setTypedNumber(number);
    fetchContent();
    
}

// function used for computing frequency of each word present in the url()
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

//here we provide all aur UI to render on html
    return (
        <div className="main">
                <h2>Word Frequency Counter</h2>
            <div className="glass_box">
                <div className="form">
                    <input className="input" type="number"  id="" placeholder="Enter Number" value={number} onChange={(e) => (setNumber(e.target.value))}/><br />
                    <button  className="button"type="submit" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
            <div className="glass_box_table">
                <h3>Top {typedNumber} most frequently occuring words.</h3>
                <div className="line"></div>
                <div className="container">
                    <table className="table">
                        <tr>
                        <td className="words">Index</td>
                                <td className="words">Word</td>
                                <td className="count">Count</td>
                        </tr>
                        {wordCount.slice(0, typedNumber).map((item, index) =>
                            <tr>
                                <td className="words">{index+1}</td>
                                <td className="words">{item.word}</td>
                                <td className="count">{item.count}</td>
                            </tr>
                        )}
                    </table>
                </div>
            </div>
            </div>
    )
}

export default Content
