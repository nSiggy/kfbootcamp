// @flow

type ContactList = {
  id: string,
  name: string,
  phoneNumber: string,
  imgPath: string | null,
};

export type State = {
  contactList: Array<ContactList>,
  selectedIndex: number,
};
