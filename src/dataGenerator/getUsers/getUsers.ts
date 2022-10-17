export function getUsers() {
  let users = [];
  for (let i = 1; i <= 100; i++) {
    users.push({ id: i, name: `User ${i}`, numberOfClicks: 0 });
  }
  return users;
}
