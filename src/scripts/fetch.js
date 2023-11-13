export default (function () {
  if (!window.location.pathname.includes("index.html")) return // guard clause

  const data = fetch(`https://api.nytimes.com/svc/topstories/v2/{movies}.json`
  )
  console.log(data)



})()