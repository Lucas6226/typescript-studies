import { pickProperty } from './03_keyof-typeof'

type pickPropertyReturnType = ReturnType<typeof pickProperty>;
// ReturnType<typeof FUNCTION> return all 
// possible return types of the function


type UserWithoutAddress = Omit<User, "address" | "age">;
// Omit<MYTYPE, 'porperty-one' | 'porperty-two' > 
// recreate type "MYTYPE" but without propertys '..-one' and '..-two'


type UsarName_and_age = Pick<User, "name" | "age">;
// Pick<MYTYPE, 'property-one' | 'property-two' > 
// recreate type "MYTYPE" but only with porpertys '..-one' and '..-two' 


type FakeUser = Partial<User>;
// Partial<MYTYPE> return a equal type 
// but turn all parameters at optional


type OldUser = Required<FakeUser>;
// return a FakeUser type but all parameters
// are required

type PublickUser = Readonly<OldUser>;
// type of Onlduser but all properties are unmutable 