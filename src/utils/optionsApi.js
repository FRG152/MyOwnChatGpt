const API_KEY = "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";

export const chatOptions = async (value) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `${value}` }],
      stop: "\n",
    }),
  };
  let response = await fetch(
    "https://api.openai.com/v1/chat/completions",
    options
  );
  let result = await response.json();
  return result;
};

export const imgGenerator = async (value) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: `${value}`,
      n: 2,
      size: "256x256",
    }),
  };
  let response = await fetch(
    "https://api.openai.com/v1/images/generations",
    options
  );
  let result = await response.json();
  return result;
};
