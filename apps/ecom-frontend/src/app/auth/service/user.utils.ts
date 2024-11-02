import {ConnectedUser, ShowUser} from "../../shared/model/user.model";

export function convertToShowUser(connectedUser: ConnectedUser): ShowUser {
    return {
        email: connectedUser.email,
        firstName: connectedUser.firstName,
        lastName: connectedUser.lastName,
        dob: connectedUser.dob,
        phoneNumber: connectedUser.phoneNumber,
        createdDate: connectedUser.createdDate,
        roles: connectedUser.roles,
        userAddresses: connectedUser.userAddresses,
    };
}