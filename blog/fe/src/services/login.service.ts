
export const loginService = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<{ token: string }> => {
  const response = await fetch("http://localhost:3000/api/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  }).then((res) => res.json());
  return response;
};
