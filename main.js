const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ["Dexter", "John", "Ann", "Marry", "Tom", "Susan", "Jane"];
const prefixs = ["cool", "interesting", "nice", "fascinating", "good"]

const nameGenerator = () => {
  const randomName = Math.floor(Math.random() * names.length);  
  // const randomPrefix = Math.floor(Math.random() * prefixs.length);  
  // div.textContent = `Name ${names[randomName]} is really ${prefixs[randomPrefix]}`
  div.textContent = `Name ${names[randomName]} is really ${prefixs[Math.floor(Math.random() * prefixs.length)]}`
}

btn.addEventListener('click', nameGenerator)