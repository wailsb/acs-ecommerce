'use client';

import { useState } from "react";

export default function Search() {
  async function HandTxt(e){
    let elem=document.querySelector("#CntSrc");
    let Current=e.target.value;
    if(Current==""){
      if(elem!=null){
        if(!elem.classList.contains("invisible")){
          elem.classList.add("invisible");
        }
      }
    }else{
      if(elem!=null){
        elem.classList.remove("invisible");
        let NewSLI=[];
        ReqRet.forEach(SE => {
          if(SE.Title.toLocaleLowerCase().includes(Current.toLocaleLowerCase()) || SE.Description.toLocaleLowerCase().includes(Current.toLocaleLowerCase())){
            NewSLI.push(SE);
          }
        UpdateSearchList(NewSLI);
        });
      }
    }
  }
  let ReqRet=[
    {
      Id: 1,
      Title: "React Documentation",
      Url: "https://reactjs.org/docs/getting-started.html",
      Description: "Official React documentation to get started with React development."
    },
    {
      Id: 2,
      Title: "TypeScript Handbook",
      Url: "https://www.typescriptlang.org/docs/handbook/intro.html",
      Description: "A comprehensive guide to learning and using TypeScript."
    },
    {
      Id: 3,
      Title: "MDN Web Docs",
      Url: "https://developer.mozilla.org/en-US/",
      Description: "MDN Web Docs is a resource for developers, containing extensive documentation on web technologies."
    },
    {
      Id: 4,
      Title: "JavaScript Info",
      Url: "https://javascript.info/",
      Description: "A detailed tutorial about JavaScript, from basics to advanced topics."
    }

  ];
  const [SearchOut,UpdateSearchList]=useState([]);
    return (
    <div className="flex flex-col items-center justify-center w-full">
      <input onChange={HandTxt} className="SearchElement rounded-3xl w-4/5 mt-5" placeholder="Search" />
      <div id="CntSrc" className="ContainSrc flex flex-col list-none items-center justify-center w-4/5 invisible">
        {SearchOut.map((litem)=>(
          <li className="w-full text-center p-5 border-b border-black" key={litem.Id}>{litem.Title}</li>
        ))}
      </div>
    </div>
    );
  }
  