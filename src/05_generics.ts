type UserKeys = 'name' | 'password' | 'age'

function pickProperty_two<t extends Record<UserKeys, unknown>>(
  user: t,
  property: keyof t
) {
  return user[property];
}
