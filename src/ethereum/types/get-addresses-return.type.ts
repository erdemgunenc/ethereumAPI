import { AddressType } from './address.type';

export type GetAddressesReturnType = {
  wrongAddresses: string[];
  sortedAddresses: AddressType[];
};
