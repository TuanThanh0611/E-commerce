
export interface BaseUser {
  id: string; // Đặt id là bắt buộc nếu tất cả người dùng đều có id duy nhất
  email: string; // Đặt email là bắt buộc vì hầu hết người dùng đều yêu cầu email
  firstName?: string;
  lastName?: string;
  dob?: Date; // Chuyển thành kiểu Date để xử lý ngày tháng tốt hơn
  phoneNumber?: string;
  imageUrl?: string;
  createdDate?: Date; // Chuyển thành kiểu Date để dễ dàng sử dụng và định dạng
  dbId?: number;
}

export interface ConnectedUser extends BaseUser {
  roles: string[]; // Đặt roles là bắt buộc nếu tất cả người dùng kết nối cần có vai trò
  userAddresses?: UserAddress[];
}

export interface UserAddress {
  street?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
}
export interface ShowUser{
  email: string; // Đặt email là bắt buộc vì hầu hết người dùng đều yêu cầu email
  firstName?: string;
  lastName?: string;
  dob?: Date; // Chuyển thành kiểu Date để xử lý ngày tháng tốt hơn
  phoneNumber?: string;
  createdDate?: Date; // Chuyển thành kiểu Date để dễ dàng sử dụng và định dạng
  roles: string[]; // Đặt roles là bắt buộc nếu tất cả người dùng kết nối cần có vai trò
  userAddresses?: UserAddress[];

}