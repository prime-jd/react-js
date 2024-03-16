// jsx is the extended  vesion javascript providing it markup language property
// we can say it as js + XML
// in jsx we can create desired html element by describing there functionalities


function Custom(){                    // this function helps to generate methods and return the html elements to main.jsx

    const Age = 21;                     // if we not use this tag(<>) it shows error because return can send only single component of tags at once
    return(
        <>                           
        <h1>Ravi Shankar Tripathi</h1>
        <p>Age :{Age}</p>
        </>
    )
}
export default Custom; // we use export default to export single value from module as default export 