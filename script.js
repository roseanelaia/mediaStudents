const students = [
  {
    name: "Bruno",
    firstAva: 8,
    secondAva: 9,
  },
  {
    name: "Camila",
  firstAva: 10,
  secondAva: 10,
  },
  {
    name: "Gabriel",
    firstAva: 4,
    secondAva: 3,
  },
]

function calcMedia(firstAva, secondAva) {
 return ((firstAva + secondAva) / 2).toFixed(2)
}

function result(student) {
  return `
  A média do(a) aluno(a) ${student.name} é: ${calcMedia(student.firstAva, student.secondAva)}
  `
}

for (let student of students) {
  let resultFinale = result(student)

  let mediaFinal = calcMedia(student.firstAva, student.secondAva);

  if (mediaFinal >= 7) {
    alert(`${resultFinale} Parabens, ${student.name} você foi aprovado(a) no concurso!`)
  } else {
  alert(`${resultFinale} Não foi dessa vez, ${student.name}! Tente novamente!`)
  }

}

