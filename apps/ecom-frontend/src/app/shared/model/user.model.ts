
export interface BaseUser {
  id?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  dob?: string;
  phoneNumber?: string;
  imageUrl?: string;
  createdDate?: string;
  dbId?: number;
}

export interface ConnectedUser extends BaseUser {
  roles?: string[];
  userAddresses?: UserAddress[];
}


export interface UserAddress {
  street?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
}