import  fs from 'fs'
import parseMD from 'parse-md';
import {marked} from 'marked';
async function readFiles(path) {
    const calculateReadingTime = (text) => {
        const wpm = 225;
        const words = text.match(/(\w)+/g).length;
        return Math.ceil(words / wpm);
      };
    let files = await fs.readdirSync(path);
    const metadata = await Promise.all(
        files.map(async (file)=>{
            const markdown = await fs.readFileSync(`${path}/${file}`, {encoding: 'utf8'});
            const {metadata, content} = parseMD(markdown);
            const published = file.slice(0, 10);
            const updated = metadata.updated ?? published;
            const slug = file.slice(11, -3);
            const body = marked.parse(content);
            const readingTime = calculateReadingTime(body);
            return {
                slug,
                published,
                updated,
                body,
                readingTime,
                ...metadata,
              };
        })
    );
    return JSON.stringify(metadata.reverse());
};
async function outputJSON(){ 
    const dataBlog = await readFiles('./pages/blog/markDown');
    const DataStuctureStudies = await readFiles('./pages/data_structure/markDown');
    fs.writeFileSync('./pages/blog/contents.json',dataBlog, 'utf-8');
    fs.writeFileSync('./pages/data_structure/contents.json',DataStuctureStudies, 'utf-8' );
};
outputJSON()
