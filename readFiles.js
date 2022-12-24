import  fs from 'fs'
import parseMD from 'parse-md';
let contents =[]
async function readFiles() {
    let titles = await fs.readdirSync('./pages/blog/markDown');
    console.log(titles);
    for (let i = 0; i < titles.length; i ++) {

        let pulledData = await fs.readFileSync(`./pages/blog/markDown/${titles[i]}`, 'utf-8');
        const {metadata , content} = parseMD(pulledData)
        contents.push(
             content
        )
    }
    return contents;
}
async function outputJSON(){ 
    let data = await readFiles();
    // console.log(data);
    let jsonConverted = JSON.stringify(data);
    fs.writeFileSync('./pages/blog/test.json',jsonConverted, 'utf-8');
}
outputJSON()
