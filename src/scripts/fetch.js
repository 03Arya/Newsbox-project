export default (function () {
    if (!window.location.pathname.includes("index.html")) return // guard clause

  const data =  fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=R6JswxR2AtoZ4AIEMyGPr0Z4oGATvNsL   
  `
    )
    console.log(data)
    
   

})()