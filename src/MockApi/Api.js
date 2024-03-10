//Script that should have been found at <script src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"></script>
const seededRandom = (seed) => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;

    return () => (s = (s * a) % m) / m;
  };

  const fetchAPI = (date) => {
    let result = [];
    let random = seededRandom((new Date(date)).getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) result.push(i + ":00");
      if (random() < 0.5) result.push(i + ":30");
    }

    return JSON.stringify(result);
  };

  const submitAPI = (formData) => true;

  export { fetchAPI, submitAPI };