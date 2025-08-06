const inputHandle = (e) => {
  const { name, value, type, checked } = e.target;

  if (name === "language") {
    let langs = user.language || [];
    if (checked) langs.push(value);
    else langs = langs.filter((l) => l !== value);
    setUser({ ...user, language: langs });
  } else {
    setUser({ ...user, [name]: value });
  }
};
