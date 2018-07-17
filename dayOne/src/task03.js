//@flow

type Student = {
  name: string;
  id: string;
};

let students: Array<Student> = [
  {name: 'Johan', id: '1'},
  {name: 'Deandra', id: '2'},
];

let extract: Array<string> = students.map((a) => a.name);

console.log(extract);
