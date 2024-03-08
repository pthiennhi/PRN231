
export const registerService = async ({
    username,
    email,
    fullname,
    password,
  }: {
    username: string;
    email: string | null;
    fullname: string;
    password: string;
  }): Promise<{ token: string }> => {
    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, fullname, password}),
    }).then((res) => res.json());
    return response;
  };
  