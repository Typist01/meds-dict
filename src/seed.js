 fs = require('fs')


const getFileContents = async()=>{
    return fs.readFileSync('./data/drug-data/product.txt', 'utf8');
}


const main = async ()=>{
    const data = await getFileContents()
    const splitLines = data.split('\r\n') 
    console.log(splitLines[0].split('\t'))
    console.log(splitLines[1].split('\t'))
}


main()