import { isClubMember, getClubMembers } from "./3-club-members";

test("isClubMember - checks if a person is a club member", () => {
    expect(isClubMember({ name: "Esme", member: true})).toBe(true);
    expect(isClubMember({ name: "Richand Ng", member: false})).toBe(false);
    expect(isClubMember({ name: "Neill B", member: false})).toBe(false);
});

test("getClubMembers - takes an array of people and returns only those which are members", () => {
    expect(getClubMembers([{ name: "Esme", member: true}])).toStrictEqual([{ name: "Esme", member: true}]);
    expect(getClubMembers([{ name: "Esme", member: true}, { name: "Richand Ng", member: false}])).toStrictEqual([{ name: "Esme", member: true}]);
    expect(getClubMembers([{ name: "Richand Ng", member: false}, { name: "Neill B", member: false}])).toStrictEqual([]);
});
