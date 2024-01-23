import { person_two } from "./02_consts";

// type UserProperties = keyof User;   <-- UserProperties == keyof User == all possible properties of user
export const pickProperty = (user: User, property: keyof User): any => user[property]
console.log(pickProperty(person_two, "name"));


const video = {
  name: "my video",
  duration: 3000,
};
type Video = typeof video; // create a type "Video" with properties of const "video", like a mold 
type videosList = keyof typeof video; // videosList == type for all possible properties of const "video"