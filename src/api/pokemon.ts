const fetchPokemon = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20"
  );
  if (!res.ok) throw new Error("Failed to fetch pokemon");
  return res.json() as Promise<{
    count: number;
    next: string;
    previous: string;
    results: Array<{ name: string; url: string }>;
  }>;
};

export { fetchPokemon };
