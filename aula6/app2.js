const loadData = async () => {
  const req = await fetch("data.json");
  const res = await req.json();

  const sortedData = res.sort((a, b) => a.type.localeCompare(b.type));

  return sortedData;
};

window.onload = async () => {

  const data = await loadData();

  console.log(data);
};
