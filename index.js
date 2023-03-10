const fs = require('fs');
const path= require ('path');
const ytdl = require('ytdl-core');
const arrayofUrl= [
    "https://www.youtube.com/watch?v=X5KNqxtFUT0",
    "https://www.youtube.com/watch?v=QqyuVF1u7_Y",
    "https://www.youtube.com/watch?v=I1nX5EuvwzE",
    "https://www.youtube.com/watch?v=RLhuPD2ASKE",
    "https://www.youtube.com/watch?v=ab-F3lRDqsc",


];
const infoOffile=[];


const dirpath=  path.join(__dirname,"assets/myVideos");
fs.mkdirSync(dirpath,{recursive:true})

arrayofUrl.map((download, index)=>{
    ytdl(download)
    .pipe(fs.createWriteStream(`${dirpath}/video${index}.mp4`));
    
})

const readFile= fs.readdirSync(`${dirpath}`);

    readFile.map((file,index)=>{
    const file_extention= path.extname(file);
    const file_size=  parseInt(fs.statSync(`${dirpath}/${file}`).size * 0.000001)+"mb";
    const file_path= path.join(dirpath, file);
    const file_created_date= fs.statSync(`${dirpath}/${file}`).birthtime.toUTCString();
    console.log(file_created_date);
    infoOffile.push({file_name : file, file_extention, file_size,file_path,file_created_date,file_path})
    
   

});
 console.table(infoOffile);
  
  


//  console.log(arrayofUrl);