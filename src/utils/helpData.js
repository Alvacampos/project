const help = {
  title: 'Help',
  text:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti vel sequi molestiae, amet enim soluta magni facere debitis ex ducimus, esse cupiditate quis beatae alias hic. Autem possimus repellat tempora.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti vel sequi molestiae, amet enim soluta magni facere debitis ex ducimus, esse cupiditate quis beatae alias hic. Autem possimus repellat tempora.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti vel sequi molestiae, amet enim soluta magni facere debitis ex ducimus, esse cupiditate quis beatae alias hic. Autem possimus repellat tempora.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti vel sequi molestiae, amet enim soluta magni facere debitis ex ducimus, esse cupiditate quis beatae alias hic. Autem possimus repellat tempora.',
  success: true
}

const helpData = new Promise((resolve) => {
  setTimeout(() => {
    resolve(help);
  }, 3000);
});

export default helpData;
