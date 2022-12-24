import  fs from 'fs'
import parseMD from 'parse-md';
import {marked} from 'marked';
let contents =[]
async function readFiles() {
    let files = await fs.readdirSync('./pages/blog/markDown');
    // for (let i = 0; i < titles.length; i ++) {

    //     let pulledData = await fs.readFileSync(`./pages/blog/markDown/${titles[i]}`, 'utf-8');
    //     const {metadata , content} = parseMD(pulledData)
    //     contents.push(
    //          content
    //     )
    // }
    // return contents;
    const metadata = await Promise.all(
        files.map(async (file)=>{
            const markdown = await fs.readFileSync(`./pages/blog/markDown/${file}`, {encoding: 'utf8'});
            const {metadata, content} = parseMD(markdown);
            const published = file.slice(0, 10);
            const updated = metadata.updated ?? published;
            const slug = file.slice(11, -4);
            const body = marked.parse(content);
            return {
                slug,
                published,
                updated,
                body,
                ...metadata,
              };
        })
    );
    return JSON.stringify(metadata.reverse());
};
async function outputJSON(){ 
    const data = await readFiles();

    // let jsonConverted = JSON.stringify(data);
    fs.writeFileSync('./pages/blog/test.json',data, 'utf-8');
};
outputJSON()
