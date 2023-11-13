---
layout: default
title: "Spencer Renfro"
subTitle: "front-end developer"
titleDescription: "I am a motivated and capable front-end developer who brings a strong foundation in React, HTML, CSS, and JavaScript to any team."
secondaryTitle: "My Projects"
projectOne: "Polytopia Calculator"
projectTwo: "Guest House Counseling Website"
projectThree: "Digital Business Card"
projects:
  -
    title: "Polytopia Calculator"
    link: "http://mypolytopia.s3-website.us-east-2.amazonaws.com/"
    gitHubLink: "https://github.com/SpencerwRenfro/React-Polytopia"
    img: "./images/polytopia.svg"
  -
    title: "Guest House Counseling"
    link: "http://mypolytopia.s3-website.us-east-2.amazonaws.com/"
    gitHubLink: "https://github.com/SpencerwRenfro/React-Polytopia"
    img: "./images/guesthouse.svg"
  -
    title: "Digital Business Card"
    link: "http://mypolytopia.s3-website.us-east-2.amazonaws.com/"
    gitHubLink: "https://github.com/SpencerwRenfro/React-Polytopia"
    img: "./images/businesscard.svg"

---

<!-- <div class="my-8">
  <div class="grid justify-items-center my-4">
    <img class="rounded-full w-36" src="https://i.pravatar.cc/"/>
  </div> 
  <div class="grid grid-cols-12"> 
    <div class="col-span-12 lg:col-start-5 lg:col-span-4 text-center">
        <h1 class="text-5xl mb-3 font-bold">{{ page.title }}</h1>
    </div>
    <div class="col-span-12 lg:col-start-5 lg:col-span-4 text-center">
        <h2 class="mb-5 text-2xl tracking-wide font-light">{{ page.subTitle }}</h2>
    </div>
    <div class="col-span-12 lg:col-span-8 lg:col-start-3 px-10 lg:px-20">
      <p class="text-center text-xl">{{ page.titleDescription }}</p>
    </div> 
  </div> 
</div> -->

<div class="grid grid-cols-12 px-10 pt-20 mb-20"> 
  <div class="col-span-12 lg:col-start-3 lg:col-span-8 text-center">
      <img class="rounded-full w-36 mx-auto mb-5 mt-5" src="https://i.pravatar.cc/"/>
      <h1 class="text-5xl mb-3 font-extrabold">{{ page.title }}</h1>
      <h2 class="mb-8 text-3xl uppercase tracking-widest font-light">{{ page.subTitle }}</h2>
      <p class="text-center text-xl mb-8 leading-8">{{ page.titleDescription }}</p>
      <div class="flex justify-center items-center gap-8">
        <a href="https://www.linkedin.com/in/spencer-renfro-854b22174/" target="_blank"><img src="./images/linkedin.svg"/></a>  
        <a href="https://github.com/SpencerwRenfro" target="_blank"><img src="./images/github.svg"/></a>
        <a><img src="./images/email.svg"/></a>
      </div>
  </div>  
</div> 

<div class="grid grid-cols-12 mx-auto py-2 mb-20">
  <div class="col-start-3 col-span-8">
    <h3 class="uppercase text-lg tracking-widest font-medium mb-8">{{ page.secondaryTitle }}</h3>  
    {% for projects in page.projects %}
      <div class="card bg-base-100 shadow-lg border border-slate-700 rounded-sm mb-5">
        <div class="card-body flex flex-row items-center gap-8 p-4">
          <img class="w-12" src="{{ projects.img }}">
          <p class="basis-full text-xl font-medium">{{ projects.title }}</p>
          <a class="btn btn-primary text-xs" href="{{ proects.link }}" target="_blank">View Projeect</a>
          <a class="btn btn-outline text-xs" href="{{ projects.gitHubLink }}" target="_blank">View on Github</a>
        </div>
      </div>
    {% endfor %}
  </div>
</div>

<div class="max-w-full mx-auto text-center  border-t border-slate-700 py-5">
    <p class="text-slate-500">&copy;{{ site.time | date: '%Y' }} Spencer Renfro</p>
</div>
