

export const AllData = async () => {
  const res = await fetch("http://localhost:3020/getAlldata");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
