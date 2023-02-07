function oddEven() {
  const odd = [];
  const even = [];
  for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
      even.push(i);
    } else {
      odd.push(i);
    }
  }
  return { odd, even };
}

const { odd, even } = oddEven();

odd.map((o) => console.log(o));
even.map((e) => console.log(e));
