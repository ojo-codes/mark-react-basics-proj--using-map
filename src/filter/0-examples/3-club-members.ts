interface Person {
    name: string;
    member: boolean;
  }

function getClubMembers(people: Person[]): Person[] {
    return people.filter(isClubMember);
}

function isClubMember(person: Person): boolean {
    return person.member;
}

// const isClubMember = (person: Person): boolean => person.member;

// function getClubMembers(people: Person[]): Person[] {
//     return people.filter((person: Person) => person.member);
//     // return people.filter((person) => person.member);
// }

export { getClubMembers, isClubMember};