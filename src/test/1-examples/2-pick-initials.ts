interface Person {
  firstName: string;
  lastName: string;
}

function pickInitials(people: Person[]): string[] {
  return people.map((person) => {
    const firstInitial = person.firstName[0];
    const secondInitial = person.lastName[0];
    return `${firstInitial}.${secondInitial}.`;
  });
}

export { pickInitials };
