const users = [
  {
    name: "John Doe",
    age: 20,
  },
  {
    name: "Alex Cef",
    age: 30,
  },
];
users.sort((a, b) => a.age - b.age);
console.log(users);

const users2 = [
  {
    name: "John Doe",
    age: 20,
  },
  {
    name: "Alex Cef",
    age: 30,
  },
  {
    name: "Elena Cef",
    age: 30,
  },
  {
    name: "Graf Cef",
    age: 30,
  },
  {
    name: "bob Cef",
    age: 30,
  },
];
users2.sort((a, b) => {
  const A = a.name.toUpperCase();
  const B = b.name.toUpperCase();

  if (A > B) {
    return -1;
  }

  if (A < B) {
    return 1;
  }
  return 0;
});

console.log(users2);
