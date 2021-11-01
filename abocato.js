const url = "https://platzi-avo.vercel.app/api/avo"

async function fetchData() {
    const response = await fetch(url),
    data = await response.json(),
    allItems = [];
  
    data.data.forEach((item) => {
      // create image
      const image = document.createElement("img");
      // create title
      const title = document.createElement("h2");
      // create price
      const price = document.createElement("div");
  
      const container = document.createElement("div");
      container.append(image, title, price);
  
      allItems.push(container);
    });
  
    document.body.append(...allItems)
    console.log(data)
  }
  
fetchData();